import type { RequestConfig } from 'src/utils/axios/axios';

import { useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

import { fDate, fTime } from 'src/utils/format-time';
import { exportService } from 'src/utils/axios/api-service';

import { Iconify } from 'src/components/Iconify';

interface Props {
  target: string;
  token: string;
}

export default function ExportButton({ target, token }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleExport = async () => {
    setLoading(true);

    const config: RequestConfig = {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'arraybuffer',
    };

    const { data } = await exportService.exportData(target, config);

    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${target}-${fDate(new Date(), 'YYYYMMDD')}${fTime(new Date(), 'hhmmss')}.xlsx`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setLoading(false);
  };

  return (
    <LoadingButton
      variant="text"
      startIcon={<Iconify icon="uil:export" />}
      loading={loading}
      onClick={handleExport}
    >
      Export
    </LoadingButton>
  );
}
