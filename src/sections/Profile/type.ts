import type { Sale } from 'src/sections/Sales/List/type';
import type { WeeklyCommission } from 'src/sections/Commission/type';
import type {
  Session,
  Setting,
  EntityLog,
  AdminNotes,
  TeamReport,
  MemberState,
  MemberWallet,
  TeamStrategy,
  CommissionInfo,
  MemberStatistics,
  BasicGroupSetting,
  PlacementPosition,
  CommissionDefault,
} from 'src/__generated__/graphql';

export type MemberLog = {
  __typename?: 'MemberLog';
  action: string;
  after?: any | null;
  before?: any | null;
  entity: string;
  id: string;
  role: string;
  status: string;
  when: any;
  who: string;
};

export type Admin = {
  __typename?: 'Admin';
  adminNotes?: Array<AdminNotes> | null;
  avatar: string;
  createdAt?: any | null;
  deletedAt?: any | null;
  email: string;
  id: string;
  updatedAt?: any | null;
  username: string;
};

export type Member = {
  __typename?: 'Member';
  ID?: number | null;
  activated: boolean;
  avatar?: string | null;
  assetId?: string | null;
  allowState: MemberState;
  activationTx?: string | null;
  adminNotes?: Array<AdminNotes> | null;
  city?: string | null;
  createdAt?: any | null;
  country?: string | null;
  currentHashPower: number;
  cashCommissionPotential: number;
  commission?: CommissionInfo | null;
  commissionDefault: CommissionDefault;
  teamReport: Array<TeamReport>;
  deletedAt?: any | null;
  email: string;
  emailVerified: boolean;
  ethAssetId?: string | null;
  fullName: string;
  groupSetting?: BasicGroupSetting | null;
  id: string;
  isTexitRanger: boolean;
  introduceMembers?: Array<Member> | null;
  totalTXCNotReceived: bigint;
  lastAdminNote?: string | null;
  logs?: Array<EntityLog> | null;
  mobile: string;
  memberWallets?: Array<MemberWallet> | null;
  OTPEnabled: boolean;
  orderedAvailablePoint: number;
  point: number;
  primaryAddress: string;
  peerAcceptable: boolean;
  peerCode?: string | null;
  promoCode?: string | null;
  placementRequested: boolean;
  peerETHAddress?: string | null;
  placementParent?: {
    __typename?: 'MemberInfoWithPlacement';
    id: string;
    username: string;
    fullName: string;
  } | null;
  preferredContact?: string | null;
  placementParentId?: string | null;
  preferredContactDetail?: string | null;
  placementChildren?:
    | {
        __typename?: 'MemberInfoWithPlacement';
        id: string;
        username: string;
        fullName: string;
        placementPosition: PlacementPosition;
      }[]
    | null;
  placementPosition: PlacementPosition;
  reimbursementEnabled?: boolean | null;
  status: boolean;
  state?: string | null;
  sponsor?: {
    __typename?: 'MemberInfo';
    id: string;
    username: string;
    fullName: string;
  } | null;
  session?: Session | null;
  setting?: Setting | null;
  sponsorId?: string | null;
  sales?: Array<Sale> | null;
  shareIsTexitRanger: boolean;
  signupFormRequest?: any | null;
  secondaryAddress?: string | null;
  statistics?: Array<MemberStatistics> | null;
  totalTXCShared: bigint;
  totalIntroducers: number;
  teamStrategy: TeamStrategy;
  username: string;
  updatedAt?: any | null;
  weeklyCommissions?: WeeklyCommission | null;
  zipCode?: string | null;
};
