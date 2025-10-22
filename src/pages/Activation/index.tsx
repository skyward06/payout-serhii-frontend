import { paths } from 'src/routes/paths';

import { CustomDialog } from 'src/components/custom-dialog/CustomDialog';

import { ActivationView } from 'src/sections/Activation';

export default function ActivationPage() {
  return (
    <CustomDialog open title="Activate your account" route={paths.dashboard.profile.root}>
      <ActivationView />
    </CustomDialog>
  );
}
