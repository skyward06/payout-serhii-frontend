import { CONFIG } from 'src/config';

import { ReimbursementList } from 'src/sections/Reimbursement/List';

export default function ReimbursementPage() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / Reimbursement`}</title>

      <ReimbursementList />
    </>
  );
}
