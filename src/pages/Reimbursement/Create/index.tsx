import { CONFIG } from 'src/config';

import { CreateForm } from 'src/sections/Reimbursement/Create';

export default function CreatePage() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / Reimbursement`}</title>

      <CreateForm />
    </>
  );
}
