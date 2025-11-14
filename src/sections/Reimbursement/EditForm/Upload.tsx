import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { uuid } from 'src/utils/uuid';
import { uploadService } from 'src/utils/axios/api-service';

import { FileType } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { CustomUpload } from 'src/components/Upload';

import { useCompleteUpload, usePublicUploadPresignedURLs } from 'src/sections/Upload/useApollo';

// ----------------------------------------------------------------------

type Props = {
  preview?: boolean;
  folderName?: string;
  handleUpdate: Function;
  onCreate?: () => void;
  onUpdate?: () => void;
  onChangeFolderName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FileManagerNewFolderDialog({
  preview = false,
  handleUpdate,
  onCreate,
  onUpdate,
  folderName,
  onChangeFolderName,
}: Props) {
  const [loading, setLoading] = useState<boolean>();
  const [files, setFiles] = useState<(File | string)[]>([]);

  const { completeUpload } = useCompleteUpload();
  const { publicUploadPresignedUrls } = usePublicUploadPresignedURLs();

  useEffect(() => {
    setFiles([]);
  }, []);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      setLoading(true);

      const formData = new FormData();

      // Append all accepted files to FormData
      acceptedFiles.forEach((file) => formData.append('reimbursements', file));

      try {
        const fileMap: Record<string, File> = {};
        acceptedFiles.forEach((file) => {
          fileMap[uuid()] = file;
        });

        const { data, error } = await publicUploadPresignedUrls({
          variables: {
            data: {
              fileType: FileType.Reimbursement,
              data: Object.entries(fileMap).map(([id, file]) => ({
                id,
                fileName: file.name,
                contentType: file.type,
              })),
            },
          },
        });

        if (data) {
          await Promise.all(
            data.publicUploadPresignedURLs
              .filter((url) => fileMap[url.id])
              .map(async (url) => {
                await uploadService.uploadFile(url.url, fileMap[url.id]);
              })
          );

          const { data: completedFile } = await completeUpload(
            data.publicUploadPresignedURLs.map((url) => ({
              id: url.id,
              fileType: FileType.Reimbursement,
            }))
          );

          const mergedFiles = data.publicUploadPresignedURLs.map((uploadUrl) => {
            const completedData = completedFile?.completeUpload?.find(
              (completed) => completed.id === uploadUrl.id
            );
            return completedData ? { ...uploadUrl, ...completedData } : uploadUrl;
          });

          handleUpdate(mergedFiles);
        } else {
          toast.error(error?.message || 'Error uploading avatar');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [files]
  );

  const handleRemoveFile = (inputFile: File | string) => {
    const filtered = files.filter((file) => file !== inputFile);
    setFiles(filtered);
  };

  return (
    <>
      {(onCreate || onUpdate) && (
        <TextField
          fullWidth
          label="Folder name"
          value={folderName}
          onChange={onChangeFolderName}
          sx={{ mb: 3 }}
        />
      )}

      <CustomUpload
        preview={preview}
        multiple
        value={files}
        onDrop={handleDrop}
        onRemove={handleRemoveFile}
        accept={{ images: ['.png', '.jpg', '.jpeg'], files: ['.pdf'] }}
      />

      <Stack direction="row" justifyContent="center">
        {loading && <Iconify icon="eos-icons:bubble-loading" mt={2} />}
      </Stack>
    </>
  );
}
