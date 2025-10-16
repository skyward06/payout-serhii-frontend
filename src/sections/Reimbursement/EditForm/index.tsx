import type { Reimbursement } from 'src/libs/Reimbursement/type';

import { useForm } from 'react-hook-form';
import { ApolloError } from '@apollo/client';
import { useMemo, useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { IconItem } from 'src/components/Common';
import { Form, Field } from 'src/components/Form';

import { FileRecentItem } from 'src/sections/BugReport/FileRecentItem';

import { useAuthContext } from 'src/auth/hooks';

import { Header } from './Header';
import { AttachHeader } from './AttachHeader';
import { Schema, type SchemaType } from '../schema';
import { FileManagerNewFolderDialog } from './Upload';
import { useCreteReimbursement, useUpdateReimbursement } from '../useApollo';

interface Props {
  current?: Reimbursement;
}

export function EditForm({ current }: Props) {
  const [files, setFiles] = useState<any[]>([]);

  const theme = useTheme();
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
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Card>
            <Header current={current} />

            <Stack spacing={3} sx={{ p: 3 }}>
              <Box>
                <IconItem
                  icon="solar:wallet-bold-duotone"
                  label="Payment Details"
                  color="success"
                />

                <Stack spacing={2.5}>
                  <Field.Text
                    type="text"
                    name="payToAddress"
                    label="ETH Address"
                    placeholder="0x..."
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                          <Iconify
                            icon="solar:link-circle-bold"
                            width={20}
                            sx={{ color: 'text.disabled' }}
                          />
                        </Box>
                      ),
                    }}
                  />

                  <Field.Text
                    type="number"
                    name="requestedAmountInCent"
                    label="Amount (USD)"
                    placeholder="0.00"
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                          <Iconify icon="solar:dollar-bold" width={20} color="text.disabled" />
                        </Box>
                      ),
                    }}
                  />
                </Stack>
              </Box>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Box>
                <IconItem
                  icon="solar:document-text-bold-duotone"
                  label="Description"
                  color="info"
                />

                <Field.Text
                  name="description"
                  label="Provide details about your reimbursement request"
                  placeholder="Explain the reason for this reimbursement..."
                  multiline
                  rows={4}
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Card>
            <AttachHeader />

            <Stack spacing={3} p={3}>
              <FileManagerNewFolderDialog handleUpdate={handleUpdate} />

              {files && files.length > 0 ? (
                <Stack spacing={1.5}>
                  {files.map((file: any) => (
                    <FileRecentItem key={file.id} file={file} onDelete={onDelete} />
                  ))}
                </Stack>
              ) : (
                <Box
                  sx={{
                    py: 6,
                    textAlign: 'center',
                    borderRadius: 1.5,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.grey[500], 0.04)} 0%, ${alpha(theme.palette.grey[500], 0.08)} 100%)`,
                    border: `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      display: 'flex',
                      borderRadius: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.grey[500], 0.08)} 0%, ${alpha(theme.palette.grey[500], 0.16)} 100%)`,
                    }}
                  >
                    <Iconify
                      icon="solar:file-smile-bold-duotone"
                      width={32}
                      sx={{ color: 'text.disabled' }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    No attachments yet
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    Upload files to support your request
                  </Typography>
                </Box>
              )}
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => router.push(paths.dashboard.reimbursement.root)}
              startIcon={<Iconify icon="solar:arrow-left-linear" />}
            >
              Cancel
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              loading={isSubmitting}
              disabled={!user?.isTexitRanger && !user?.reimbursementEnabled}
              startIcon={<Iconify icon="solar:check-circle-bold" />}
            >
              {current ? 'Update Request' : 'Submit Request'}
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
