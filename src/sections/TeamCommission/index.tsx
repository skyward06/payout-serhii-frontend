import type { Member } from 'src/__generated__/graphql';

import Typography from '@mui/material/Typography';

import Table from './table';

interface Props {
  me: Member;
}

export default function TeamCommissionListView({ me }: Props) {
  return (
    <>
      {me.teamReport.length === 0 ? (
        <Typography variant="subtitle1" textAlign="center">
          Please contact the office to enable TEAM reporting!
        </Typography>
      ) : (
        <Table />
      )}
    </>
  );
}
