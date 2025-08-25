import { useReimbursementContext } from 'src/libs/Reimbursement/Context/useReimbursementContext';

import { EditForm } from '../EditForm';

export function ReimbursementEdit() {
  const { reimbursement } = useReimbursementContext();

  return <EditForm current={reimbursement} />;
}
