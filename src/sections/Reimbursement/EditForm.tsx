import type { Reimbursement } from 'src/libs/Reimbursement/type';

import { useForm } from 'react-hook-form';
import { ApolloError } from '@apollo/client';
import { useMemo, useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { FileRecentItem } from 'src/sections/BugReport/FileRecentItem';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { FileManagerNewFolderDialog } from './Upload';
import { useCreteReimbursement, useUpdateReimbursement } from './useApollo';

interface Props {
  current?: Reimbursement;
}

export function EditForm({ current }: Props) {
  const [files, setFiles] = useState<any[]>([]);

  const router = useRouter();
  const { user } = useAuthContext();

  const { createReimbursement } = useCreteReimbursement();
  const { updateReimbursement } = useUpdateReimbursement();

  const defaultValues = useMemo<SchemaType>(
    () =>
      current
        ? Schema.safeParse({
            ...current,
            requestedAmountInCent: current.requestedAmountInCent / 100,
          })?.data ?? ({} as SchemaType)
        : {
            description: '',
            payToAddress: '',
            requestedAmountInCent: 0,
          },
    [current]
  );

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const formData = {
        ...newData,
        requestedAmountInCent: newData.requestedAmountInCent * 100,
        attachments: files.map((file) => file.id),
      };
      const { data } = current
        ? await updateReimbursement({ id: current.id, ...formData })
        : await createReimbursement(formData);

      if (data) {
        reset();
        toast.success('Reimbursement request created successfully');
        router.push(paths.dashboard.reimbursement.root);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('requestedAmountInCent')) {
          setError('requestedAmountInCent', { type: 'manual', message: error?.message || '' });
        }

        if (error.path?.includes('description')) {
          setError('description', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error?.message);
      }
    }
  });

  const handleUpdate = (data: any) => {
    setFiles((prev: any) => [...(prev ?? []), ...data.files]);
  };

  const onDelete = (fileId: string) => {
    setFiles(files?.filter((file) => file.id !== fileId));
  };

  useEffect(() => {
    if (current && current?.attachments) {
      setFiles(current.attachments?.map((file: any) => file));
    }
  }, [current]);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container columnSpacing={2}>
        <Grid xs={12} md={8}>
          <Box display="grid" gap={2}>
            <Field.Text
              type="text"
              name="payToAddress"
              label="Address to pay"
              placeholder="Input ETH address"
              required
            />

            <Field.Text type="number" name="requestedAmountInCent" label="Amount" required />

            <Field.Text name="description" label="Description" multiline rows={3} />
          </Box>

          <Stack direction="row" justifyContent="flex-end" mt={2}>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={isSubmitting}
              disabled={!user?.isTexitRanger && !user?.reimbursementEnabled}
            >
              {current ? 'Edit' : 'Submit'}
            </LoadingButton>
          </Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Box mb={2}>
            <FileManagerNewFolderDialog handleUpdate={handleUpdate} />
          </Box>
          <Box gap={1} display="flex" flexDirection="column">
            {files?.map((file: any) => (
              <FileRecentItem key={file.id} file={file} onDelete={onDelete} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Form>
  );
}
