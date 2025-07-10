import type { IFileManager } from 'src/types/file';
import type { PaperProps } from '@mui/material/Paper';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/useBoolean';

import { fData } from 'src/utils/formatNumber';
import { fDateTime } from 'src/utils/format-time';
import { downloadFile } from 'src/utils/axios/axios';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { FileThumbnail } from 'src/components/FileThumbnail';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  file: IFileManager;
};

export function FileRecentItem({ file, sx, ...other }: Props) {
  const details = useBoolean();
  const [loading, setLoading] = useState<boolean>(false);

  const fileType = file.mimeType.split('/')[1];

  const renderText = (
    <ListItemText
      onClick={details.onTrue}
      primary={file.originalName}
      secondary={
        <>
          {fData(file.size)}
          <Box
            sx={{
              mx: 0.75,
              width: 2,
              height: 2,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          {fDateTime(file.updatedAt)}
        </>
      }
      primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: 'span',
        alignItems: 'center',
        typography: 'caption',
        color: 'text.disabled',
        display: 'inline-flex',
      }}
    />
  );

  const handleExport = async (fileData: any) => {
    setLoading(true);

    downloadFile(`${fileData.url}`, fileData.originalName, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(CONFIG.storageTokenKey)}`,
      },
      responseType: 'arraybuffer',
    });

    setLoading(false);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        gap: 2,
        borderRadius: 1,
        display: 'flex',
        cursor: 'pointer',
        position: 'relative',
        bgcolor: 'transparent',
        p: { xs: 2.2, sm: 1.8 },
        py: { xs: 1, sm: 0.7 },
        alignItems: { xs: 'unset', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z20,
        },
        opacity: loading ? 0.5 : 1,
        ...sx,
      }}
      onClick={() => handleExport(file)}
      {...other}
    >
      <FileThumbnail file={fileType} />

      {renderText}

      {loading && <Iconify icon="eos-icons:bubble-loading" />}
    </Paper>
  );
}
