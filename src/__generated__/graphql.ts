/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Ach = {
  __typename?: 'ACH';
  accountNumber: Scalars['String']['output'];
  achBatch?: Maybe<AchBatch>;
  achHistories: Array<AchHistory>;
  amountInCent: Scalars['Int']['output'];
  bankName: Scalars['String']['output'];
  batchId?: Maybe<Scalars['Int']['output']>;
  checkNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  member: MemberInfo;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  routingNumber: Scalars['String']['output'];
  sign: Scalars['String']['output'];
  status: AchStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AchBatch = {
  __typename?: 'ACHBatch';
  aches: Array<Ach>;
  batchDate: Scalars['DateTimeISO']['output'];
  batchName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  file: PFile;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['Int']['output'];
  totalAmountInCent: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AchBatchResponse = {
  __typename?: 'ACHBatchResponse';
  achBatches: Array<AchBatch>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AchBatchStatusChangeInput = {
  id: Scalars['Int']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  status: AchStatus;
};

export type AchConfigInput = {
  companyId: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  immediateDest: Scalars['String']['input'];
  immediateDestName: Scalars['String']['input'];
  immediateOrigin: Scalars['String']['input'];
  immediateOriginName: Scalars['String']['input'];
  organizationDFI: Scalars['String']['input'];
};

export type AchConfigResponse = {
  __typename?: 'ACHConfigResponse';
  companyId: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  immediateDest: Scalars['String']['output'];
  immediateDestName: Scalars['String']['output'];
  immediateOrigin: Scalars['String']['output'];
  immediateOriginName: Scalars['String']['output'];
  organizationDFI: Scalars['String']['output'];
};

export type AchHistory = {
  __typename?: 'ACHHistory';
  achId: Scalars['String']['output'];
  changerId: Scalars['String']['output'];
  changerInfo: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fromStatus?: Maybe<AchStatus>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  toStatus: AchStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AchOverview = {
  __typename?: 'ACHOverview';
  status: AchStatus;
  totalAmountInCent: Scalars['BigInt']['output'];
  totalCount: Scalars['Int']['output'];
};

export enum AchStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Queued = 'QUEUED'
}

export type AchStatusChangeInput = {
  id: Scalars['String']['input'];
  newStatus: AchStatus;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type AccessTokenResponse = {
  __typename?: 'AccessTokenResponse';
  accessToken: Scalars['String']['output'];
};

export type ActivateMemberInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
};

export type ActivateMemberResponse = {
  __typename?: 'ActivateMemberResponse';
  activationTx?: Maybe<Scalars['String']['output']>;
};

export type AddPlacementMemberInput = {
  childId: Scalars['ID']['input'];
  insert: Scalars['Boolean']['input'];
  parentId: Scalars['ID']['input'];
  position: PlacementPosition;
};

export type AddPlacementPointInput = {
  ancestor: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  point: Scalars['Int']['input'];
  position?: InputMaybe<PlacementPosition>;
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['ID']['output'];
  balance: Scalars['BigInt']['output'];
  balances?: Maybe<Array<Balance>>;
  chain: PaymentChain;
  isUsed: Scalars['Boolean']['output'];
};

export type AddressInput = {
  address: Scalars['ID']['input'];
  chain: PaymentChain;
};

export type AddressResponse = {
  __typename?: 'AddressResponse';
  addresses?: Maybe<Array<Address>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Admin = {
  __typename?: 'Admin';
  OTPEnabled: Scalars['Boolean']['output'];
  avatar: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  status: AdminStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminNotes = {
  __typename?: 'AdminNotes';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AdminNotesResponse = {
  __typename?: 'AdminNotesResponse';
  adminNotes?: Maybe<Array<AdminNotes>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum AdminStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export type AdminsResponse = {
  __typename?: 'AdminsResponse';
  admins?: Maybe<Array<Admin>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ApproveCommissionWithTxId = {
  ids: Array<Scalars['ID']['input']>;
  txID: Scalars['ID']['input'];
  type: CommissionPaymentType;
};

export type ApproveCommissionWithTxIdInput = {
  txData: Array<ApproveCommissionWithTxId>;
};

export type AssetCountInput = {
  count: Scalars['Int']['input'];
};

export type AssetInput = {
  assetId: Scalars['String']['input'];
};

export type AverageMinerRewardStatsResponse = {
  __typename?: 'AverageMinerRewardStatsResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  reward: Scalars['Float']['output'];
};

export type Balance = {
  __typename?: 'Balance';
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  chain: PaymentChain;
  token: PaymentToken;
};

export type BasicAch = {
  __typename?: 'BasicACH';
  accountNumber: Scalars['String']['output'];
  amountInCent: Scalars['Int']['output'];
  bankName: Scalars['String']['output'];
  checkNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  routingNumber: Scalars['String']['output'];
  sign: Scalars['String']['output'];
  status: AchStatus;
  username: Scalars['String']['output'];
};

export type BasicAchResponse = {
  __typename?: 'BasicACHResponse';
  ach: Array<BasicAch>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BasicCartonAddress = {
  __typename?: 'BasicCartonAddress';
  address: Scalars['String']['output'];
  assetId: Scalars['String']['output'];
};

export type BasicGroupSetting = {
  __typename?: 'BasicGroupSetting';
  commissionDefaults: Array<CommissionDefault>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  potentialType: GroupSettingPotentialType;
};

export type BasicMember = {
  __typename?: 'BasicMember';
  ID?: Maybe<Scalars['Int']['output']>;
  ach?: Maybe<Ach>;
  activated: Scalars['Boolean']['output'];
  adminFullname?: Maybe<Scalars['String']['output']>;
  adminUsername?: Maybe<Scalars['String']['output']>;
  allowState: MemberState;
  assetId?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  fullName: Scalars['String']['output'];
  groupSettingId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastAdminNote?: Maybe<Scalars['String']['output']>;
  mobile: Scalars['String']['output'];
  paymentMade: Scalars['Boolean']['output'];
  peerETHAddress?: Maybe<Scalars['String']['output']>;
  peerPaymentConfirm?: Maybe<Scalars['Boolean']['output']>;
  placementRequested: Scalars['Boolean']['output'];
  point: Scalars['Int']['output'];
  potential: Scalars['Int']['output'];
  primaryAddress: Scalars['String']['output'];
  secondaryAddress?: Maybe<Scalars['String']['output']>;
  signUpPaymentType?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  teamStrategy: TeamStrategy;
  totalIntroducers: Scalars['Int']['output'];
  username: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type BasicMemberInfo = {
  __typename?: 'BasicMemberInfo';
  ID: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type BasicMemberResponse = {
  __typename?: 'BasicMemberResponse';
  members?: Maybe<Array<BasicMember>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BasicOrder = {
  __typename?: 'BasicOrder';
  ID: Scalars['Int']['output'];
  completedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expiredAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isP2P: Scalars['Boolean']['output'];
  memberId: Scalars['String']['output'];
  paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  paidBalance: Scalars['BigInt']['output'];
  paymentAddress?: Maybe<Scalars['String']['output']>;
  paymentChain?: Maybe<PaymentChain>;
  paymentToken?: Maybe<PaymentToken>;
  requestType: OrderRequestType;
  requiredBalance?: Maybe<Scalars['BigInt']['output']>;
  status: OrderStatus;
  usdBalance: Scalars['Float']['output'];
};

export type BasicOrderResponse = {
  __typename?: 'BasicOrderResponse';
  orders?: Maybe<Array<BasicOrder>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BasicReimbursement = {
  __typename?: 'BasicReimbursement';
  attachments: Array<PFile>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isTexitRanger: Scalars['Boolean']['output'];
  memberId: Scalars['String']['output'];
  paidAmountInCent?: Maybe<Scalars['Int']['output']>;
  requestedAmountInCent: Scalars['Int']['output'];
  status: ReimbursementStatus;
  username: Scalars['String']['output'];
};

export type BasicSale = {
  __typename?: 'BasicSale';
  ID: Scalars['Int']['output'];
  amount: Scalars['Float']['output'];
  assetId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isMetal: Scalars['Boolean']['output'];
  memberId: Scalars['String']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  paymentMethod: Scalars['String']['output'];
  point: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  sponsorCnt: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  toEmail?: Maybe<Scalars['String']['output']>;
  toFullName?: Maybe<Scalars['String']['output']>;
  toMemberId?: Maybe<Scalars['String']['output']>;
  toUsername?: Maybe<Scalars['String']['output']>;
  token: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type BasicSalesResponse = {
  __typename?: 'BasicSalesResponse';
  sales?: Maybe<Array<BasicSale>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BasicWeeklyCommission = {
  __typename?: 'BasicWeeklyCommission';
  ID: Scalars['Int']['output'];
  begL: Scalars['Int']['output'];
  begR: Scalars['Int']['output'];
  commission: Scalars['Int']['output'];
  commissionType: CommissionType;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  endL: Scalars['Int']['output'];
  endR: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  hasUSDC: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  isTexitRanger: Scalars['Boolean']['output'];
  maxL: Scalars['Int']['output'];
  maxR: Scalars['Int']['output'];
  memberId: Scalars['ID']['output'];
  newL: Scalars['Int']['output'];
  newR: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  paidAs: WeeklyCommissionPaymentMade;
  paymentMethod: CommissionDefault;
  pkgL: Scalars['Int']['output'];
  pkgR: Scalars['Int']['output'];
  qualified: Scalars['Boolean']['output'];
  shortNote?: Maybe<Scalars['String']['output']>;
  status: CommissionStatus;
  username: Scalars['String']['output'];
  weekStartDate: Scalars['Date']['output'];
};

export type BasicWeeklyCommissionResponse = {
  __typename?: 'BasicWeeklyCommissionResponse';
  total?: Maybe<Scalars['Int']['output']>;
  weeklyCommissions: Array<BasicWeeklyCommission>;
};

export type Block = {
  __typename?: 'Block';
  blockNo: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  difficulty: Scalars['Float']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  hashRate: Scalars['Float']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type BlockStatsResponse = {
  __typename?: 'BlockStatsResponse';
  base: Scalars['String']['output'];
  baseDate?: Maybe<Scalars['DateTimeISO']['output']>;
  difficulty: Scalars['Float']['output'];
  hashRate: Scalars['Float']['output'];
  purchasedHashPower?: Maybe<Scalars['Float']['output']>;
  soldHashPower: Scalars['Float']['output'];
};

export type BlocksResponse = {
  __typename?: 'BlocksResponse';
  blocks: Array<Block>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  listInfo?: Maybe<Scalars['String']['output']>;
  overview: EmailOverview;
  sender: Scalars['String']['output'];
  senderName: Scalars['String']['output'];
  status: CampaignStatus;
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CampaignResponse = {
  __typename?: 'CampaignResponse';
  campaigns: Array<Campaign>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CampaignStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Sending = 'SENDING'
}

export type Carton = {
  __typename?: 'Carton';
  addresses: Array<CartonAddress>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CartonAddress = {
  __typename?: 'CartonAddress';
  address: Scalars['String']['output'];
  assetId: Scalars['String']['output'];
  cartonId: Scalars['String']['output'];
  isUsed: Scalars['Boolean']['output'];
};

export type CartonCreateInput = {
  carton: Scalars['String']['input'];
};

export type CartonInput = {
  carton: Scalars['String']['input'];
};

export type CartonResponse = {
  __typename?: 'CartonResponse';
  cartons: Array<Carton>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ChainPlatform {
  Evm = 'EVM',
  Txc = 'TXC'
}

export type CollectAddress = {
  __typename?: 'CollectAddress';
  address: Scalars['String']['output'];
  chain: ChainPlatform;
  id: Scalars['ID']['output'];
  weekStartDate: Scalars['Date']['output'];
};

export type CollectAddressInput = {
  address: Scalars['String']['input'];
  chain: ChainPlatform;
  weekStartDate: Scalars['Date']['input'];
};

export type CollectAddressResponse = {
  __typename?: 'CollectAddressResponse';
  collectAddresses: Array<CollectAddress>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CommissionDefault {
  Hash = 'HASH',
  Txc = 'TXC',
  Usdc = 'USDC'
}

export type CommissionInfo = {
  __typename?: 'CommissionInfo';
  begL: Scalars['Int']['output'];
  begR: Scalars['Int']['output'];
  newL: Scalars['Int']['output'];
  newR: Scalars['Int']['output'];
};

export type CommissionOverview = {
  __typename?: 'CommissionOverview';
  totalAmount: Scalars['Int']['output'];
  totalMember: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  totalSale: Scalars['Int']['output'];
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export type CommissionOverviewResponse = {
  __typename?: 'CommissionOverviewResponse';
  commissions?: Maybe<Array<CommissionOverview>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CommissionPaymentType {
  Txc = 'TXC',
  Usdc = 'USDC'
}

export type CommissionPeriodResponse = {
  __typename?: 'CommissionPeriodResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  commission: Scalars['Int']['output'];
  revenue: Scalars['Int']['output'];
};

export type CommissionSendmany = {
  __typename?: 'CommissionSendmany';
  command: Scalars['String']['output'];
  ids: Array<Scalars['ID']['output']>;
};

export enum CommissionStatus {
  Approved = 'APPROVED',
  None = 'NONE',
  Pending = 'PENDING',
  Preview = 'PREVIEW',
  Suspended = 'SUSPENDED'
}

export enum CommissionType {
  Normal = 'NORMAL',
  Supernova = 'SUPERNOVA'
}

export type CompleteSwapInput = {
  id: Scalars['ID']['input'];
  swappedBalance: Scalars['BigInt']['input'];
  /** Transaction hash separated by comma */
  swappedTransactionHash: Scalars['String']['input'];
};

export type CompleteTxcRequestInput = {
  id: Scalars['ID']['input'];
  sentBalance: Scalars['BigInt']['input'];
  transactionHash: Scalars['String']['input'];
};

export type CompleteUploadInput = {
  fileType: UploadFileType;
  id: Scalars['ID']['input'];
};

export type CreateAchInput = {
  accountNumber: Scalars['String']['input'];
  amountInCent: Scalars['Float']['input'];
  bankName: Scalars['String']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  recaptcha: Scalars['String']['input'];
  routingNumber: Scalars['String']['input'];
  sign: Scalars['String']['input'];
};

export type CreateAddMemberOrderInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault: CommissionDefault;
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  packageId: Scalars['String']['input'];
  placementParentId?: InputMaybe<Scalars['String']['input']>;
  placementPosition?: InputMaybe<PlacementPosition>;
  primaryAddress: Scalars['String']['input'];
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  txcAddress?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId?: InputMaybe<Scalars['String']['input']>;
  status: AdminStatus;
  username: Scalars['String']['input'];
};

export type CreateAdminNotesInput = {
  description: Scalars['String']['input'];
  memberId: Scalars['ID']['input'];
};

export type CreateBuyTxcInput = {
  address: Scalars['String']['input'];
};

export type CreateBuyWtxcInput = {
  address: Scalars['String']['input'];
};

export type CreateCampaignInput = {
  emailTemplateId: Scalars['Int']['input'];
  listId: Scalars['ID']['input'];
};

export type CreateEmailTemplateInput = {
  body: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  sender: Scalars['String']['input'];
  senderName: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateEventInput = {
  allDay: Scalars['Boolean']['input'];
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  end: Scalars['DateTimeISO']['input'];
  region: Scalars['String']['input'];
  start: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
};

export type CreateGroupSettingCommissionBonusInput = {
  commission: Scalars['Int']['input'];
  lPoint: Scalars['Int']['input'];
  qPackageId: Scalars['ID']['input'];
  rPoint: Scalars['Int']['input'];
  uPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateGroupSettingInput = {
  groupSettingCommissionBonuses: Array<CreateGroupSettingCommissionBonusInput>;
  limitDate: Scalars['DateTimeISO']['input'];
  name: Scalars['String']['input'];
  potentialType: GroupSettingPotentialType;
  rollSponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
  sponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateMemberInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault: CommissionDefault;
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  ethAssetId?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  isTexitRanger: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  peerAcceptable: Scalars['Boolean']['input'];
  peerCode?: InputMaybe<Scalars['String']['input']>;
  peerETHAddress?: InputMaybe<Scalars['String']['input']>;
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress: Scalars['String']['input'];
  promoCode?: InputMaybe<Scalars['String']['input']>;
  reimbursementEnabled: Scalars['Boolean']['input'];
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  teamReport: Array<TeamReport>;
  teamStrategy: TeamStrategy;
  username: Scalars['String']['input'];
  wallets?: InputMaybe<Array<MemberWalletDataInput>>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMemberListInput = {
  dynamic: Scalars['Boolean']['input'];
  emails: Array<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateOrderInput = {
  packageId: Scalars['String']['input'];
};

export type CreatePackageInput = {
  amount: Scalars['Float']['input'];
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  enrollVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  orderVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  point?: InputMaybe<Scalars['Float']['input']>;
  productName: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  token: Scalars['Float']['input'];
};

export type CreatePaymentMethodInput = {
  adminVisible?: InputMaybe<Scalars['Boolean']['input']>;
  enrollmentVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePromoInput = {
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProofInput = {
  amount: Scalars['Float']['input'];
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  hashPower?: InputMaybe<Scalars['Int']['input']>;
  mineLocation?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  requestedAmount?: InputMaybe<Scalars['Float']['input']>;
  type: ProofType;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReimbursementInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  payToAddress: Scalars['String']['input'];
  requestedAmountInCent: Scalars['Int']['input'];
};

export type CreateRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<PermissionType>;
};

export type CreateSaleInput = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isMetal?: InputMaybe<Scalars['Boolean']['input']>;
  memberId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt: Scalars['DateTimeISO']['input'];
  packageId: Scalars['ID']['input'];
  paymentMethod: Scalars['String']['input'];
  refLinks?: InputMaybe<Array<LinkInput>>;
  sponsorCnt?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['Boolean']['input'];
  toMemberId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateScheduleCampaignInput = {
  listId: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  templateId: Scalars['Float']['input'];
  when: Scalars['String']['input'];
};

export type CreateShareAccountInput = {
  memberIds: Array<Scalars['ID']['input']>;
  note: Scalars['String']['input'];
};

export type CreateShippingInput = {
  SKU: Scalars['String']['input'];
  city: Scalars['String']['input'];
  company: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  itemCurrency: Scalars['String']['input'];
  itemPrice: Scalars['Float']['input'];
  itemTitle: Scalars['String']['input'];
  itemWeight: Scalars['Float']['input'];
  itemWeightUnit: Scalars['String']['input'];
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  orderAmount: Scalars['Float']['input'];
  orderCurrency: Scalars['String']['input'];
  orderWeight: Scalars['Float']['input'];
  orderWeightUnit: Scalars['String']['input'];
  orderedAt: Scalars['DateTimeISO']['input'];
  phone: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  recipientName: Scalars['String']['input'];
  state: Scalars['String']['input'];
  streetLine1: Scalars['String']['input'];
  streetLine2: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type CreateSignUpOrderInput = {
  memberId: Scalars['String']['input'];
};

export type DailyStats = {
  __typename?: 'DailyStats';
  count: Scalars['Int']['output'];
  field: Scalars['String']['output'];
};

export type EmailInput = {
  email: Scalars['String']['input'];
};

export type EmailOverview = {
  __typename?: 'EmailOverview';
  failed: Scalars['Int']['output'];
  /** Opened */
  opened: Scalars['Int']['output'];
  pending?: Maybe<Scalars['Int']['output']>;
  /** Sent but not opened */
  sent: Scalars['Int']['output'];
};

export type EmailRecipient = {
  __typename?: 'EmailRecipient';
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isVisible: Scalars['Boolean']['output'];
  openedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  sender: Scalars['String']['output'];
  senderName: Scalars['String']['output'];
  sentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: EmailStatus;
  subject: Scalars['String']['output'];
};

export type EmailRecipientResponse = {
  __typename?: 'EmailRecipientResponse';
  emailRecipients: Array<EmailRecipient>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum EmailStatus {
  Failed = 'FAILED',
  Opened = 'OPENED',
  Pending = 'PENDING',
  Sent = 'SENT',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['Int']['output'];
  sender: Scalars['String']['output'];
  senderName: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type EmailTemplateResponse = {
  __typename?: 'EmailTemplateResponse';
  templates: Array<EmailTemplate>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type EntityLog = {
  __typename?: 'EntityLog';
  action: Scalars['String']['output'];
  after?: Maybe<Scalars['JSON']['output']>;
  before?: Maybe<Scalars['JSON']['output']>;
  entity: Scalars['String']['output'];
  fingerprint?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  when: Scalars['DateTime']['output'];
  who: Scalars['String']['output'];
};

export type EntityStats = {
  __typename?: 'EntityStats';
  dailyData: Array<DailyStats>;
  meta?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type Event = {
  __typename?: 'Event';
  allDay: Scalars['Boolean']['output'];
  color: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  end: Scalars['DateTimeISO']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  region: Scalars['String']['output'];
  start: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type EventPeriod = {
  end: Scalars['Date']['input'];
  start: Scalars['Date']['input'];
};

export type FileMetaDataInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type FrontAction = {
  __typename?: 'FrontAction';
  action: FrontActionEnum;
  extra?: Maybe<FrontActionExtra>;
  message: Scalars['String']['output'];
};

export type FrontActionCreate12FreeBonusSale = {
  __typename?: 'FrontActionCreate12FreeBonusSale';
  fullName: Scalars['String']['output'];
  isWithinSponsorRollDuration: Scalars['Boolean']['output'];
  memberId: Scalars['ID']['output'];
  packageId: Scalars['ID']['output'];
  packageName: Scalars['String']['output'];
  paymentMethod: Scalars['String']['output'];
  sponsorCnt: Scalars['Int']['output'];
  type: FrontActionEnum;
  username: Scalars['String']['output'];
};

export enum FrontActionEnum {
  Create_1_2FreeBonusSale = 'CREATE_1_2_FREE_BONUS_SALE',
  Remove_1_2FreeBonusSale = 'REMOVE_1_2_FREE_BONUS_SALE',
  Update_1_2FreeBonusSale = 'UPDATE_1_2_FREE_BONUS_SALE'
}

export type FrontActionExtra = FrontActionCreate12FreeBonusSale | FrontActionRemove12FreeBonusSale | FrontActionUpdate12FreeBonusSale;

export type FrontActionRemove12FreeBonusSale = {
  __typename?: 'FrontActionRemove12FreeBonusSale';
  ID: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  type: FrontActionEnum;
};

export type FrontActionUpdate12FreeBonusSale = {
  __typename?: 'FrontActionUpdate12FreeBonusSale';
  ID: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  newPackageId: Scalars['ID']['output'];
  newPackageName: Scalars['String']['output'];
  oldPackageId: Scalars['ID']['output'];
  oldPackageName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  type: FrontActionEnum;
};

export type GenerateWeeklyReportInput = {
  all: Scalars['Boolean']['input'];
};

export type GroupSetting = {
  __typename?: 'GroupSetting';
  commissionDefaults: Array<CommissionDefault>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  groupSettingCommissionBonuses: Array<GroupSettingCommissionBonus>;
  id: Scalars['ID']['output'];
  limitDate: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  potentialType: GroupSettingPotentialType;
  rollSponsorBonusPackage?: Maybe<Package>;
  rollSponsorBonusPackageId?: Maybe<Scalars['String']['output']>;
  sponsorBonusPackage?: Maybe<Package>;
  sponsorBonusPackageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type GroupSettingCommissionBonus = {
  __typename?: 'GroupSettingCommissionBonus';
  commission: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  lPoint: Scalars['Int']['output'];
  qPackageId: Scalars['ID']['output'];
  rPoint: Scalars['Int']['output'];
  uPackageId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum GroupSettingPotentialType {
  Cash = 'CASH',
  Commission = 'COMMISSION'
}

export type GroupSettingResponse = {
  __typename?: 'GroupSettingResponse';
  groupSettings?: Maybe<Array<GroupSetting>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type IdInput = {
  id: Scalars['ID']['input'];
};

export type IdnInput = {
  ID: Scalars['Int']['input'];
};

export type IndividualMember = {
  __typename?: 'IndividualMember';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sponsorFullname?: Maybe<Scalars['String']['output']>;
  sponsorId?: Maybe<Scalars['String']['output']>;
  sponsorUsername?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type Introducer = {
  __typename?: 'Introducer';
  ID?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  point: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type IntroducersResponse = {
  __typename?: 'IntroducersResponse';
  introducers?: Maybe<Array<Introducer>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  ID: Scalars['Int']['output'];
  amountInCents: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  dueDate: Scalars['Date']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  invoiceFile?: Maybe<PFile>;
  member?: Maybe<MemberInfo>;
  name: Scalars['String']['output'];
  proof?: Maybe<Proof>;
  status: InvoiceStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type InvoiceResponse = {
  __typename?: 'InvoiceResponse';
  invoices: Array<Invoice>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum InvoiceStatus {
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type InvoiceWeekInput = {
  weekStartDate: Scalars['Date']['input'];
};

export type LatestStatistics = {
  __typename?: 'LatestStatistics';
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  newBlocks: Scalars['Float']['output'];
  totalMembers: Scalars['Float']['output'];
  txcShared: Scalars['Float']['output'];
};

export type LinkInput = {
  link: Scalars['String']['input'];
  linkType: Scalars['String']['input'];
};

export type LiveStatsArgs = {
  pastDays: Scalars['Float']['input'];
};

export type LogResponse = {
  __typename?: 'LogResponse';
  logs?: Maybe<Array<EntityLog>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  passwordExpired: Scalars['Boolean']['output'];
  status: LoginResult;
};

export enum LoginResult {
  Otp = 'otp',
  Success = 'success'
}

export type ManySuccessResponse = {
  __typename?: 'ManySuccessResponse';
  count: Scalars['Float']['output'];
};

export type Member = {
  __typename?: 'Member';
  ID?: Maybe<Scalars['Int']['output']>;
  OTPEnabled: Scalars['Boolean']['output'];
  achInfo?: Maybe<Ach>;
  activated: Scalars['Boolean']['output'];
  activationTx?: Maybe<Scalars['String']['output']>;
  adminNotes: Array<AdminNotes>;
  allowState: MemberState;
  assetId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  commission?: Maybe<CommissionInfo>;
  commissionDefault: CommissionDefault;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currentHashPower: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  ethAssetId?: Maybe<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  fullName: Scalars['String']['output'];
  gotAdmin?: Maybe<Admin>;
  groupSetting?: Maybe<BasicGroupSetting>;
  id: Scalars['ID']['output'];
  isTexitRanger: Scalars['Boolean']['output'];
  memberWallets?: Maybe<Array<MemberWallet>>;
  mobile: Scalars['String']['output'];
  orderedAvailablePoint: Scalars['Int']['output'];
  peerAcceptable: Scalars['Boolean']['output'];
  peerCode?: Maybe<Scalars['String']['output']>;
  peerETHAddress?: Maybe<Scalars['String']['output']>;
  placementChildren?: Maybe<Array<MemberInfoWithPlacement>>;
  placementParent?: Maybe<MemberInfoWithPlacement>;
  placementParentId?: Maybe<Scalars['ID']['output']>;
  placementPosition: PlacementPosition;
  placementRequested: Scalars['Boolean']['output'];
  point: Scalars['Float']['output'];
  potential: Scalars['Int']['output'];
  preferredContact?: Maybe<Scalars['String']['output']>;
  preferredContactDetail?: Maybe<Scalars['String']['output']>;
  primaryAddress: Scalars['String']['output'];
  promoCode?: Maybe<Scalars['String']['output']>;
  reimbursementEnabled: Scalars['Boolean']['output'];
  secondaryAddress?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Session>;
  setting?: Maybe<Setting>;
  shareIsTexitRanger: Scalars['Boolean']['output'];
  signupFormRequest?: Maybe<Scalars['JSONObject']['output']>;
  sponsor?: Maybe<MemberInfo>;
  sponsorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  teamReport: Array<TeamReport>;
  teamStrategy: TeamStrategy;
  totalIntroducers: Scalars['Float']['output'];
  totalTXCNotReceived: Scalars['BigInt']['output'];
  totalTXCShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MemberInOutRevenue = {
  __typename?: 'MemberInOutRevenue';
  amount: Scalars['Int']['output'];
  commission: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  percent?: Maybe<Scalars['Float']['output']>;
  potential: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type MemberInOutRevenueResponse = {
  __typename?: 'MemberInOutRevenueResponse';
  inOuts: Array<MemberInOutRevenue>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberInfo = {
  __typename?: 'MemberInfo';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  peerETHAddress?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type MemberInfoWithPlacement = {
  __typename?: 'MemberInfoWithPlacement';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  peerETHAddress?: Maybe<Scalars['String']['output']>;
  placementParentId?: Maybe<Scalars['String']['output']>;
  placementPosition: PlacementPosition;
  username: Scalars['String']['output'];
};

export type MemberList = {
  __typename?: 'MemberList';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dynamic: Scalars['Boolean']['output'];
  emails: Array<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberListResponse = {
  __typename?: 'MemberListResponse';
  memberLists?: Maybe<Array<MemberList>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  recaptcha: Scalars['String']['input'];
};

export enum MemberState {
  Added = 'ADDED',
  Approved = 'APPROVED',
  Ban = 'BAN',
  Blocked = 'BLOCKED',
  Graveyard = 'GRAVEYARD',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type MemberStatistics = {
  __typename?: 'MemberStatistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  hashPower: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  member: MemberInfo;
  memberId: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  sent: Scalars['Boolean']['output'];
  statistic: Statistics;
  statisticsId: Scalars['String']['output'];
  txcShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberStatisticsResponse = {
  __typename?: 'MemberStatisticsResponse';
  memberStatistics: Array<MemberStatistics>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberStatisticsWallet = {
  __typename?: 'MemberStatisticsWallet';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  memberStatistic: MemberStatistics;
  memberStatisticId: Scalars['String']['output'];
  memberWallet: MemberWallet;
  memberWalletId: Scalars['String']['output'];
  txc: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberStatisticsWalletResponse = {
  __typename?: 'MemberStatisticsWalletResponse';
  memberStatisticsWallets?: Maybe<Array<MemberStatisticsWallet>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberWallet = {
  __typename?: 'MemberWallet';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  memberId: Scalars['String']['output'];
  memberStatisticsWallets?: Maybe<Array<MemberStatisticsWallet>>;
  note?: Maybe<Scalars['String']['output']>;
  payout?: Maybe<Payout>;
  payoutId: Scalars['ID']['output'];
  percent: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberWalletDataInput = {
  address: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  payoutId: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
};

export type MembersByCountryItem = {
  __typename?: 'MembersByCountryItem';
  country: Scalars['String']['output'];
  memberCount: Scalars['Int']['output'];
};

export type MembersResponse = {
  __typename?: 'MembersResponse';
  members: Array<Member>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MergeInvoiceResponse = {
  __typename?: 'MergeInvoiceResponse';
  url: Scalars['String']['output'];
};

export type MinerCountStatsResponse = {
  __typename?: 'MinerCountStatsResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  minerCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateMember: ActivateMemberResponse;
  addPlacementChild: SuccessResponse;
  addPlacementPoint: SuccessResponse;
  adminGotIt: SuccessResponse;
  adminLogin: LoginResponse;
  approveCommissionWithTransactionIds: Array<WeeklyCommission>;
  approveMember: SuccessResponse;
  calculateCommissions: SuccessResponse;
  calculatePreviewCommissions: SuccessResponse;
  cancelOrder: Order;
  changeACHStatus: Ach;
  changeBatchStatus: Array<Ach>;
  checkSaleRefDuplication: RefLinkDuplicationResponse;
  completeOrder: Order;
  completeSwap: WtxcSwap;
  completeTXCRequest: TxcRequest;
  completeUpload: Array<PFile>;
  confirmEmail5071: SuccessResponse;
  confirmPeerPayment: SuccessResponse;
  createACH: Ach;
  createAddHashOrder: Order;
  createAddMemberOrder: Order;
  createAdmin: Admin;
  createAdminNote: AdminNotes;
  createAndSendCampaign: Campaign;
  createBuyTXCOrder: Order;
  createBuyWTXCOrder: Order;
  createCampaignSchedule: ScheduleCampaign;
  createCarton: Carton;
  createEmailTemplate: EmailTemplate;
  createEvent: Event;
  createGroupSetting: GroupSetting;
  createMember: Member;
  createMemberList: MemberList;
  createPackage: Package;
  createPaymentMethod: PaymentMethod;
  createPromo: Promo;
  createProof: Proof;
  createReimbursement: Reimbursement;
  createRole: Role;
  createSale: Sale;
  createShareAccount: ShareAccount;
  createShipping: Shipping;
  createSignUpOrder: Order;
  deleteShipping: Shipping;
  disable2FA: AccessTokenResponse;
  duplicateMember: Member;
  duplicateMember2: Array<Member>;
  forceMemberLogout: SuccessResponse;
  generateNACHAFiles: Array<AchBatch>;
  generateWeekP2PInvoice: SuccessResponse;
  generateWeeklyReport: SuccessResponse;
  linkMembers: SuccessResponse;
  memberExchangeLogin: LoginResponse;
  memberLogin: LoginResponse;
  memberLogout: SuccessResponse;
  moveInvoicePaid: SuccessResponse;
  movePlacementChild: SuccessResponse;
  moveToBan: Member;
  moveToBlocked: SuccessResponse;
  moveToGraveyard: SuccessResponse;
  moveToPaid: SuccessResponse;
  moveToPending: SuccessResponse;
  moveToSuspend: Array<WeeklyCommission>;
  payReimbursementsWithTxId: Array<Reimbursement>;
  refreshBalance: SuccessResponse;
  regenerateInvoiceById: SuccessResponse;
  regenerateNACHAFile: AchBatch;
  removeAdmin: SuccessResponse;
  removeAdminNote: SuccessResponse;
  removeCampaignSchedule: ScheduleCampaign;
  removeEvent: Event;
  removeGroupSetting: GroupSetting;
  removeMember: Member;
  removeMemberFromPlacementTree: SuccessResponse;
  removeMemberList: MemberList;
  removePackage: Package;
  removePaymentMethod: PaymentMethod;
  removePromo: SuccessResponse;
  removeProof: Proof;
  removeRole: Role;
  removeSale: Sale;
  removeShareAccount: ShareAccount;
  removeSubtreeFromPlacementTree: SuccessResponse;
  reopenOrder: Order;
  reopenSwap: WtxcSwap;
  requestResetPassword: SuccessResponse;
  rerunDailyReward: SuccessResponse;
  resetAdminPasswordByToken: SuccessResponse;
  resetAdminPasswordRequest: SuccessResponse;
  resetBonusClock: SuccessResponse;
  resetPasswordByToken: SuccessResponse;
  scheduleCampaignById: ScheduleCampaign;
  sendEmailVerificationCode: SuccessResponse;
  sendWelcomeEmail: SuccessResponse;
  setCollectAddress: CollectAddress;
  setOrderPayment: Order;
  setReadAllNotifications: ManySuccessResponse;
  setReadNotification: SuccessResponse;
  setTransactionalEmail: TransactionalEmail;
  signUpMember: SignupMemberResponse;
  submitACH: Ach;
  suspendCommission: SuspendedCommissions;
  updateACH: Ach;
  updateACHConfig: AchConfigResponse;
  updateAdmin: Admin;
  updateAdminNote: AdminNotes;
  updateAssetUsedStatuses: SuccessResponse;
  updateCampaignSchedule: ScheduleCampaign;
  updateCommission: WeeklyCommission;
  updateCommissionsStatus: Array<WeeklyCommission>;
  updateEmailTemplate: EmailTemplate;
  updateEvent: Event;
  updateGroupSetting: GroupSetting;
  updateInvoice: Invoice;
  updateMember: Member;
  updateMemberList: MemberList;
  updatePackage: Package;
  updatePasswordAdmin: SuccessResponse;
  updatePasswordAdminById: Admin;
  updatePasswordMember: SuccessResponse;
  updatePasswordMemberById: Member;
  updatePaymentMethod: PaymentMethod;
  updatePromo: Promo;
  updateProof: Proof;
  updateReimbursement: Reimbursement;
  updateReimbursementsStatus: Array<Reimbursement>;
  updateRole: Role;
  updateSale: Sale;
  updateShareAccount: ShareAccount;
  updateShipping: Shipping;
  upsertSettingByMemberId: Setting;
  verify2FAAndEnable: AccessTokenResponse;
  verify2FAToken: LoginResponse;
  verifyAdminResetPasswordToken: VerifyTokenResponse;
  verifyEmailCode: AccessTokenResponse;
  verifyMemberEmail: SuccessResponse;
  verifyResetPasswordToken: VerifyTokenResponse;
};


export type MutationActivateMemberArgs = {
  data: ActivateMemberInput;
};


export type MutationAddPlacementChildArgs = {
  data: AddPlacementMemberInput;
};


export type MutationAddPlacementPointArgs = {
  data: AddPlacementPointInput;
};


export type MutationAdminGotItArgs = {
  data: IdInput;
};


export type MutationAdminLoginArgs = {
  data: AdminLoginInput;
};


export type MutationApproveCommissionWithTransactionIdsArgs = {
  data: ApproveCommissionWithTxIdInput;
};


export type MutationApproveMemberArgs = {
  data: IdInput;
};


export type MutationCancelOrderArgs = {
  data: IdInput;
};


export type MutationChangeAchStatusArgs = {
  data: AchStatusChangeInput;
};


export type MutationChangeBatchStatusArgs = {
  data: AchBatchStatusChangeInput;
};


export type MutationCheckSaleRefDuplicationArgs = {
  data: SaleRefDuplicationInput;
};


export type MutationCompleteOrderArgs = {
  data: IdInput;
};


export type MutationCompleteSwapArgs = {
  data: CompleteSwapInput;
};


export type MutationCompleteTxcRequestArgs = {
  data: CompleteTxcRequestInput;
};


export type MutationCompleteUploadArgs = {
  data: Array<CompleteUploadInput>;
};


export type MutationConfirmEmail5071Args = {
  data: SuspendedCommissionConfirmInput;
};


export type MutationConfirmPeerPaymentArgs = {
  data: PeerConfirmationInput;
};


export type MutationCreateAchArgs = {
  data: CreateAchInput;
};


export type MutationCreateAddHashOrderArgs = {
  data: CreateOrderInput;
};


export type MutationCreateAddMemberOrderArgs = {
  data: CreateAddMemberOrderInput;
};


export type MutationCreateAdminArgs = {
  data: CreateAdminInput;
};


export type MutationCreateAdminNoteArgs = {
  data: CreateAdminNotesInput;
};


export type MutationCreateAndSendCampaignArgs = {
  data: CreateCampaignInput;
};


export type MutationCreateBuyTxcOrderArgs = {
  data: CreateBuyTxcInput;
};


export type MutationCreateBuyWtxcOrderArgs = {
  data: CreateBuyWtxcInput;
};


export type MutationCreateCampaignScheduleArgs = {
  data: CreateScheduleCampaignInput;
};


export type MutationCreateCartonArgs = {
  data: CartonCreateInput;
};


export type MutationCreateEmailTemplateArgs = {
  data: CreateEmailTemplateInput;
};


export type MutationCreateEventArgs = {
  data: CreateEventInput;
};


export type MutationCreateGroupSettingArgs = {
  data: CreateGroupSettingInput;
};


export type MutationCreateMemberArgs = {
  data: CreateMemberInput;
};


export type MutationCreateMemberListArgs = {
  data: CreateMemberListInput;
};


export type MutationCreatePackageArgs = {
  data: CreatePackageInput;
};


export type MutationCreatePaymentMethodArgs = {
  data: CreatePaymentMethodInput;
};


export type MutationCreatePromoArgs = {
  data: CreatePromoInput;
};


export type MutationCreateProofArgs = {
  data: CreateProofInput;
};


export type MutationCreateReimbursementArgs = {
  data: CreateReimbursementInput;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleInput;
};


export type MutationCreateSaleArgs = {
  data: CreateSaleInput;
};


export type MutationCreateShareAccountArgs = {
  data: CreateShareAccountInput;
};


export type MutationCreateShippingArgs = {
  data: CreateShippingInput;
};


export type MutationCreateSignUpOrderArgs = {
  data: CreateSignUpOrderInput;
};


export type MutationDeleteShippingArgs = {
  ID: Scalars['Int']['input'];
};


export type MutationDuplicateMemberArgs = {
  data: IdInput;
};


export type MutationDuplicateMember2Args = {
  data: IdInput;
};


export type MutationForceMemberLogoutArgs = {
  data: IdInput;
};


export type MutationGenerateNachaFilesArgs = {
  data: NachaGenerateInput;
};


export type MutationGenerateWeekP2PInvoiceArgs = {
  data: InvoiceWeekInput;
};


export type MutationGenerateWeeklyReportArgs = {
  data: GenerateWeeklyReportInput;
};


export type MutationLinkMembersArgs = {
  data: ShareMemberInput;
};


export type MutationMemberExchangeLoginArgs = {
  data: MemberLoginInput;
};


export type MutationMemberLoginArgs = {
  data: MemberLoginInput;
};


export type MutationMoveInvoicePaidArgs = {
  data: IdInput;
};


export type MutationMovePlacementChildArgs = {
  data: PlacementMemberInput;
};


export type MutationMoveToBanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMoveToBlockedArgs = {
  data: IdInput;
};


export type MutationMoveToGraveyardArgs = {
  data: IdInput;
};


export type MutationMoveToPaidArgs = {
  data: IdInput;
};


export type MutationMoveToPendingArgs = {
  data: IdInput;
};


export type MutationMoveToSuspendArgs = {
  data: UsernameInput;
};


export type MutationPayReimbursementsWithTxIdArgs = {
  data: PayReimbursementWithTxIdInput;
};


export type MutationRefreshBalanceArgs = {
  data: AddressInput;
};


export type MutationRegenerateInvoiceByIdArgs = {
  data: IdInput;
};


export type MutationRegenerateNachaFileArgs = {
  data: IdnInput;
};


export type MutationRemoveAdminArgs = {
  data: IdInput;
};


export type MutationRemoveAdminNoteArgs = {
  data: IdInput;
};


export type MutationRemoveCampaignScheduleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveEventArgs = {
  data: IdInput;
};


export type MutationRemoveGroupSettingArgs = {
  data: IdInput;
};


export type MutationRemoveMemberArgs = {
  data: IdInput;
};


export type MutationRemoveMemberFromPlacementTreeArgs = {
  data: IdInput;
};


export type MutationRemoveMemberListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePackageArgs = {
  data: IdInput;
};


export type MutationRemovePaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePromoArgs = {
  data: IdInput;
};


export type MutationRemoveProofArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSaleArgs = {
  data: IdInput;
};


export type MutationRemoveShareAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSubtreeFromPlacementTreeArgs = {
  data: IdInput;
};


export type MutationReopenOrderArgs = {
  data: IdInput;
};


export type MutationReopenSwapArgs = {
  data: IdInput;
};


export type MutationRequestResetPasswordArgs = {
  data: EmailInput;
};


export type MutationResetAdminPasswordByTokenArgs = {
  data: ResetPasswordTokenInput;
};


export type MutationResetAdminPasswordRequestArgs = {
  data: EmailInput;
};


export type MutationResetBonusClockArgs = {
  data: IdInput;
};


export type MutationResetPasswordByTokenArgs = {
  data: ResetPasswordTokenInput;
};


export type MutationScheduleCampaignByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendWelcomeEmailArgs = {
  data: EmailInput;
};


export type MutationSetCollectAddressArgs = {
  data: CollectAddressInput;
};


export type MutationSetOrderPaymentArgs = {
  data: OrderPaymentSetInput;
};


export type MutationSetReadNotificationArgs = {
  data: IdInput;
};


export type MutationSetTransactionalEmailArgs = {
  data: SetTransactionalEmailInput;
};


export type MutationSignUpMemberArgs = {
  data: SignupFormInput;
};


export type MutationSubmitAchArgs = {
  data: SubmitAchInput;
};


export type MutationUpdateAchArgs = {
  data: UpdateAchInput;
};


export type MutationUpdateAchConfigArgs = {
  data: AchConfigInput;
};


export type MutationUpdateAdminArgs = {
  data: UpdateAdminInput;
};


export type MutationUpdateAdminNoteArgs = {
  data: UpdateAdminNotesInput;
};


export type MutationUpdateCampaignScheduleArgs = {
  data: UpdateScheduleCampaignInput;
};


export type MutationUpdateCommissionArgs = {
  data: WeeklyCommissionUpdateInput;
};


export type MutationUpdateCommissionsStatusArgs = {
  data: WeeklyCommissionsStatusUpdateInput;
};


export type MutationUpdateEmailTemplateArgs = {
  ID: Scalars['Int']['input'];
  data: UpdateEmailTemplateInput;
};


export type MutationUpdateEventArgs = {
  data: UpdateEventInput;
};


export type MutationUpdateGroupSettingArgs = {
  data: UpdateGroupSettingInput;
};


export type MutationUpdateInvoiceArgs = {
  data: UpdateInvoiceInput;
};


export type MutationUpdateMemberArgs = {
  data: UpdateMemberInput;
};


export type MutationUpdateMemberListArgs = {
  data: UpdateMemberListInput;
};


export type MutationUpdatePackageArgs = {
  data: UpdatePackageInput;
};


export type MutationUpdatePasswordAdminArgs = {
  data: UpdateAdminPasswordInput;
};


export type MutationUpdatePasswordAdminByIdArgs = {
  data: UpdateAdminPasswordByIdInput;
};


export type MutationUpdatePasswordMemberArgs = {
  data: UpdateMemberPasswordInput;
};


export type MutationUpdatePasswordMemberByIdArgs = {
  data: UpdateMemberPasswordInputById;
};


export type MutationUpdatePaymentMethodArgs = {
  data: UpdatePaymentMethodInput;
};


export type MutationUpdatePromoArgs = {
  data: UpdatePromoInput;
};


export type MutationUpdateProofArgs = {
  data: UpdateProofByIdInput;
};


export type MutationUpdateReimbursementArgs = {
  data: UpdateReimbursementInput;
};


export type MutationUpdateReimbursementsStatusArgs = {
  data: ReimbursementsStatusInput;
};


export type MutationUpdateRoleArgs = {
  data: UpdateRoleInput;
};


export type MutationUpdateSaleArgs = {
  data: UpdateSaleInput;
};


export type MutationUpdateShareAccountArgs = {
  data: UpdateShareAccountInput;
};


export type MutationUpdateShippingArgs = {
  ID: Scalars['Int']['input'];
  data: UpdateShippingInput;
};


export type MutationUpsertSettingByMemberIdArgs = {
  data: UpsertSettingInput;
};


export type MutationVerify2FaAndEnableArgs = {
  data: Verify2FaInput;
};


export type MutationVerify2FaTokenArgs = {
  data: TokenInput;
};


export type MutationVerifyAdminResetPasswordTokenArgs = {
  data: TokenInput;
};


export type MutationVerifyEmailCodeArgs = {
  data: VerificationCodeInput;
};


export type MutationVerifyMemberEmailArgs = {
  data: IdInput;
};


export type MutationVerifyResetPasswordTokenArgs = {
  data: TokenInput;
};

export type NachaGenerateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate: Scalars['Date']['input'];
};

export type NotificationClient = {
  __typename?: 'NotificationClient';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  level: NotificationLevel;
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum NotificationLevel {
  Admin = 'ADMIN',
  All = 'ALL',
  Individual = 'INDIVIDUAL',
  TeamLeader = 'TEAM_LEADER'
}

export type NotificationResponse = {
  __typename?: 'NotificationResponse';
  notifications?: Maybe<Array<NotificationClient>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Order = {
  __typename?: 'Order';
  ID: Scalars['Int']['output'];
  acceptFirstTx: Scalars['Boolean']['output'];
  availablePaymentMethods: Array<OrderPaymentMethod>;
  completedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiredAt: Scalars['DateTimeISO']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isP2P: Scalars['Boolean']['output'];
  member: Member;
  orderRequest: OrderRequest;
  paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  paidBalance: Scalars['BigInt']['output'];
  paymentAddress?: Maybe<Scalars['String']['output']>;
  paymentChain?: Maybe<PaymentChain>;
  paymentToken?: Maybe<PaymentToken>;
  requiredBalance?: Maybe<Scalars['BigInt']['output']>;
  status: OrderStatus;
  transactions?: Maybe<Array<Transaction>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  usdBalance: Scalars['Float']['output'];
};

export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  isP2P: Scalars['Boolean']['output'];
  paymentChain?: Maybe<PaymentChain>;
  paymentToken?: Maybe<PaymentToken>;
};

export type OrderPaymentSetInput = {
  id: Scalars['ID']['input'];
  isP2P?: InputMaybe<Scalars['Boolean']['input']>;
  paymentChain?: InputMaybe<PaymentChain>;
  paymentToken?: InputMaybe<PaymentToken>;
};

export type OrderRequest = {
  __typename?: 'OrderRequest';
  orderType: OrderRequestType;
  payload?: Maybe<Scalars['JSONObject']['output']>;
};

export enum OrderRequestType {
  AddHash = 'ADD_HASH',
  AddMember = 'ADD_MEMBER',
  BuyTxc = 'BUY_TXC',
  BuyWtxc = 'BUY_WTXC',
  Signup = 'SIGNUP'
}

export enum OrderStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  New = 'NEW',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type PFile = {
  __typename?: 'PFile';
  id: Scalars['ID']['output'];
  isPublic: Scalars['Boolean']['output'];
  mimeType: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  ID: Scalars['Int']['output'];
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  date: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  editable: Scalars['Boolean']['output'];
  enrollVisibility: Scalars['Boolean']['output'];
  freeShare: Scalars['Boolean']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  orderVisibility: Scalars['Boolean']['output'];
  point: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  token: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PackageResponse = {
  __typename?: 'PackageResponse';
  packages?: Maybe<Array<Package>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PayReimbursementWithTxId = {
  ids: Array<Scalars['Int']['input']>;
  txID: Scalars['ID']['input'];
};

export type PayReimbursementWithTxIdInput = {
  txData: Array<PayReimbursementWithTxId>;
};

export enum PaymentChain {
  Base = 'BASE',
  Bnb = 'BNB',
  Eth = 'ETH',
  Polygon = 'POLYGON',
  Txc = 'TXC'
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  adminVisible: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  enrollmentVisible: Scalars['Boolean']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PaymentMethodResponse = {
  __typename?: 'PaymentMethodResponse';
  paymentMethods: Array<PaymentMethod>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PaymentToken {
  Pyusd = 'PYUSD',
  Txc = 'TXC',
  Usdc = 'USDC',
  Usdt = 'USDT',
  Wtxc = 'WTXC'
}

export type Payout = {
  __typename?: 'Payout';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  display: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PeerConfirmationInput = {
  confirm: Scalars['Boolean']['input'];
  memberId: Scalars['String']['input'];
  peerCode: Scalars['String']['input'];
  verifier: Scalars['String']['input'];
};

export type PeriodEmailOverview = {
  __typename?: 'PeriodEmailOverview';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  failed: Scalars['Int']['output'];
  /** Opened */
  opened: Scalars['Int']['output'];
  pending?: Maybe<Scalars['Int']['output']>;
  /** Sent but not opened */
  sent: Scalars['Int']['output'];
};

export enum PeriodStateType {
  Block = 'block',
  Day = 'day',
  Month = 'month',
  Quarter = 'quarter',
  Week = 'week'
}

export type PeriodStatsArgs = {
  type: PeriodStateType;
};

export enum PermissionType {
  AchConfigChange = 'ACH_CONFIG_CHANGE',
  AchEdit = 'ACH_EDIT',
  AchStatusChange = 'ACH_STATUS_CHANGE',
  AchSubmit = 'ACH_SUBMIT',
  AchView = 'ACH_VIEW',
  AddressView = 'ADDRESS_VIEW',
  AdminEdit = 'ADMIN_EDIT',
  AdminView = 'ADMIN_VIEW',
  CampaignCreate = 'CAMPAIGN_CREATE',
  CampaignView = 'CAMPAIGN_VIEW',
  CartonEdit = 'CARTON_EDIT',
  CartonView = 'CARTON_VIEW',
  CommissionApprove = 'COMMISSION_APPROVE',
  CommissionCalculation = 'COMMISSION_CALCULATION',
  CommissionEdit = 'COMMISSION_EDIT',
  CommissionSuspend = 'COMMISSION_SUSPEND',
  CommissionView = 'COMMISSION_VIEW',
  CommunicationView = 'COMMUNICATION_VIEW',
  EmailsView = 'EMAILS_VIEW',
  EmailTemplateEdit = 'EMAIL_TEMPLATE_EDIT',
  EmailTemplateView = 'EMAIL_TEMPLATE_VIEW',
  EventEdit = 'EVENT_EDIT',
  GroupSettingEdit = 'GROUP_SETTING_EDIT',
  GroupSettingView = 'GROUP_SETTING_VIEW',
  InvoiceEdit = 'INVOICE_EDIT',
  InvoiceRegenerate = 'INVOICE_REGENERATE',
  InvoiceView = 'INVOICE_VIEW',
  LogView = 'LOG_VIEW',
  MemberAssetEdit = 'MEMBER_ASSET_EDIT',
  MemberEdit = 'MEMBER_EDIT',
  MemberListEdit = 'MEMBER_LIST_EDIT',
  MemberListView = 'MEMBER_LIST_VIEW',
  MemberPasswordChange = 'MEMBER_PASSWORD_CHANGE',
  MemberPeerEdit = 'MEMBER_PEER_EDIT',
  MemberTexitrangerEdit = 'MEMBER_TEXITRANGER_EDIT',
  MemberView = 'MEMBER_VIEW',
  OrderView = 'ORDER_VIEW',
  PackageEdit = 'PACKAGE_EDIT',
  PaymentMethodEdit = 'PAYMENT_METHOD_EDIT',
  PlacementEdit = 'PLACEMENT_EDIT',
  PlacementPastEdit = 'PLACEMENT_PAST_EDIT',
  PlacementPointChange = 'PLACEMENT_POINT_CHANGE',
  PlacementPointPreview = 'PLACEMENT_POINT_PREVIEW',
  PlacementView = 'PLACEMENT_VIEW',
  PromoEdit = 'PROMO_EDIT',
  PromoView = 'PROMO_VIEW',
  ProofEdit = 'PROOF_EDIT',
  ProofView = 'PROOF_VIEW',
  ReimbursementEdit = 'REIMBURSEMENT_EDIT',
  ReimbursementPay = 'REIMBURSEMENT_PAY',
  ReimbursementView = 'REIMBURSEMENT_VIEW',
  ReportView = 'REPORT_VIEW',
  RewardDetailView = 'REWARD_DETAIL_VIEW',
  RewardRun = 'REWARD_RUN',
  RoleEdit = 'ROLE_EDIT',
  RoleView = 'ROLE_VIEW',
  SaleEdit = 'SALE_EDIT',
  SalePastEdit = 'SALE_PAST_EDIT',
  SaleView = 'SALE_VIEW',
  ScheduleEdit = 'SCHEDULE_EDIT',
  ScheduleView = 'SCHEDULE_VIEW',
  SharedEdit = 'SHARED_EDIT',
  SharedView = 'SHARED_VIEW',
  ShippingEdit = 'SHIPPING_EDIT',
  ShippingView = 'SHIPPING_VIEW',
  SponsorTreeView = 'SPONSOR_TREE_VIEW',
  SwapView = 'SWAP_VIEW',
  TransactionEmailEdit = 'TRANSACTION_EMAIL_EDIT',
  TransactionEmailView = 'TRANSACTION_EMAIL_VIEW',
  TxcPurchaseManualApprove = 'TXC_PURCHASE_MANUAL_APPROVE',
  TxcPurchaseView = 'TXC_PURCHASE_VIEW',
  WalletEdit = 'WALLET_EDIT',
  WalletView = 'WALLET_VIEW'
}

export type PlacementMember = {
  __typename?: 'PlacementMember';
  commission: CommissionInfo;
  createdAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  placementAt?: Maybe<Scalars['DateTimeISO']['output']>;
  placementParentId: Scalars['ID']['output'];
  placementPosition: PlacementPosition;
  placementStatus: PlacementStatus;
  status: Scalars['Boolean']['output'];
  teamStrategy: TeamStrategy;
  username: Scalars['String']['output'];
};

export type PlacementMemberInput = {
  childId: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
  position: PlacementPosition;
};

export enum PlacementPosition {
  Left = 'LEFT',
  None = 'NONE',
  Right = 'RIGHT'
}

export type PlacementSearchMember = {
  __typename?: 'PlacementSearchMember';
  createdAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  placementAt?: Maybe<Scalars['DateTimeISO']['output']>;
  placementParentId: Scalars['ID']['output'];
  placementPosition: PlacementPosition;
  placementStatus: PlacementStatus;
  status: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export enum PlacementStatus {
  Hidden = 'HIDDEN',
  Temp = 'TEMP',
  Visible = 'VISIBLE'
}

export type PlacementTempMember = {
  __typename?: 'PlacementTempMember';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  placementParentFullname: Scalars['String']['output'];
  placementParentId: Scalars['String']['output'];
  placementParentUsername: Scalars['String']['output'];
  placementPosition: PlacementPosition;
  username: Scalars['String']['output'];
};

export type PlacementToBottomInput = {
  direction?: InputMaybe<PlacementPosition>;
  id: Scalars['ID']['input'];
};

export type PlacementWithLevelInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  level: Scalars['Int']['input'];
};

export type PresignedUploadUrlRequests = {
  data: Array<FileMetaDataInput>;
  fileType: UploadFileType;
};

export type ProfitabilityCalculationInput = {
  init: Scalars['Int']['input'];
  joinDate: Scalars['DateTimeISO']['input'];
  target: Scalars['Int']['input'];
};

export type ProfitabilityCalculationResponse = {
  __typename?: 'ProfitabilityCalculationResponse';
  endDate: Scalars['DateTimeISO']['output'];
  extraTXC: Scalars['Float']['output'];
  init: Scalars['Int']['output'];
  period: Scalars['Int']['output'];
  startDate: Scalars['DateTimeISO']['output'];
  target: Scalars['Int']['output'];
  txc: Scalars['Float']['output'];
  txcCost: Scalars['Float']['output'];
  txcPrice: Scalars['Float']['output'];
};

export type Promo = {
  __typename?: 'Promo';
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  endDate: Scalars['Date']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  startDate: Scalars['Date']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PromoResponse = {
  __typename?: 'PromoResponse';
  promos?: Maybe<Array<Promo>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Proof = {
  __typename?: 'Proof';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  files?: Maybe<Array<PFile>>;
  frontActions?: Maybe<Array<FrontAction>>;
  hashPower?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mineLocation?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  orderedAt: Scalars['DateTimeISO']['output'];
  refId?: Maybe<Scalars['ID']['output']>;
  refLinks?: Maybe<Array<RefLink>>;
  requestedAmount?: Maybe<Scalars['Float']['output']>;
  type: ProofType;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type ProofResponse = {
  __typename?: 'ProofResponse';
  proofs: Array<Proof>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ProofType {
  AdminSalary = 'ADMIN_SALARY',
  Apps = 'APPS',
  Asics = 'ASICS',
  Bonus = 'BONUS',
  Commission = 'COMMISSION',
  Development = 'DEVELOPMENT',
  Doge = 'DOGE',
  Electricity = 'ELECTRICITY',
  Equipment = 'EQUIPMENT',
  ExchangeFee = 'EXCHANGE_FEE',
  FacilityExpense = 'FACILITY_EXPENSE',
  FreedomFieldTrip = 'FREEDOM_FIELD_TRIP',
  FreightAndImportCosts = 'FREIGHT_AND_IMPORT_COSTS',
  HashUpgrade = 'HASH_UPGRADE',
  Invoice = 'INVOICE',
  LandAndLeases = 'LAND_AND_LEASES',
  Liquidity = 'LIQUIDITY',
  Ltc = 'LTC',
  MtxcMarketing = 'MTXC_MARKETING',
  Overhead = 'OVERHEAD',
  Payout = 'PAYOUT',
  Profit = 'PROFIT',
  Promotion = 'PROMOTION',
  Protocol = 'PROTOCOL',
  Reimbursements = 'REIMBURSEMENTS',
  RentOffice = 'RENT_OFFICE',
  Seats = 'SEATS',
  Trading = 'TRADING',
  TransactionProcessing = 'TRANSACTION_PROCESSING',
  TxcMarketing = 'TXC_MARKETING',
  Web = 'WEB'
}

export type Query = {
  __typename?: 'Query';
  ach: BasicAchResponse;
  achBatchById: AchBatch;
  achBatches: AchBatchResponse;
  achById: Ach;
  achByMemberId: Ach;
  achConfig: AchConfigResponse;
  achOverview: Array<AchOverview>;
  addressByAddress: Address;
  addresses: AddressResponse;
  adminMe: Admin;
  adminNotes: AdminNotesResponse;
  admins: AdminsResponse;
  assetInfo: Scalars['String']['output'];
  averageMemberReward: Array<AverageMinerRewardStatsResponse>;
  blocks: BlocksResponse;
  blocksData: Array<BlockStatsResponse>;
  calculateProfitability: ProfitabilityCalculationResponse;
  campaignById: Campaign;
  campaigns: CampaignResponse;
  cartonAddresses: Array<BasicCartonAddress>;
  cartons: CartonResponse;
  checkIfPeerCodeExists: Scalars['Boolean']['output'];
  collectAddresses: CollectAddressResponse;
  commissionByPeriod: Array<CommissionPeriodResponse>;
  commissionsByWeek: CommissionOverviewResponse;
  currentNetworkHashRate: Scalars['Float']['output'];
  emailOverviewByPeriod: Array<PeriodEmailOverview>;
  emailRecipientById: EmailRecipient;
  emailRecipients: EmailRecipientResponse;
  emailSystemOverview: EmailOverview;
  emailTemplateById: EmailTemplate;
  emailTemplates: EmailTemplateResponse;
  events: Array<Event>;
  generate2FA: Scalars['String']['output'];
  generateCommissionTXCSendmany: Array<CommissionSendmany>;
  generateCommissionUSDCSendmany: Array<CommissionSendmany>;
  generateReimbursementSendmany: Array<ReimbursementSendmany>;
  generateThailandAdventureReport: SuccessResponse;
  generateWDMSVegasReport: SuccessResponse;
  generateWhenLamboGameOverReport: SuccessResponse;
  generateWhenLamboGameOverReport2: SuccessResponse;
  getProtectedFileDownloadURL: Scalars['String']['output'];
  groupSettings: GroupSettingResponse;
  individualMembers: Array<IndividualMember>;
  introducers: IntroducersResponse;
  invoiceById: Invoice;
  invoices: InvoiceResponse;
  latestStatistics: Array<LatestStatistics>;
  liveBlockStats: EntityStats;
  liveMiningStats: EntityStats;
  liveUserStats: EntityStats;
  logs: LogResponse;
  memberById: Member;
  memberInOutRevenues: MemberInOutRevenueResponse;
  memberListById: MemberList;
  memberLists: MemberListResponse;
  memberMe: Member;
  memberStatistics: MemberStatisticsResponse;
  memberStatisticsWallets: MemberStatisticsWalletResponse;
  members: MembersResponse;
  membersByCountry: Array<MembersByCountryItem>;
  membersForList: BasicMemberResponse;
  membersInMemberList: MembersResponse;
  mergeInvoice: MergeInvoiceResponse;
  newMemberCounts: Array<MinerCountStatsResponse>;
  notifications: NotificationResponse;
  onePointAwayMembers: ReportMemberResponse;
  orderAvailablePoint: Scalars['Int']['output'];
  orderById: Order;
  orders: BasicOrderResponse;
  packageById: Package;
  packageBySId: Package;
  packages: PackageResponse;
  paymentMethodById: PaymentMethod;
  paymentMethods: PaymentMethodResponse;
  placementChildrenById: Array<PlacementMember>;
  placementMembersToBottom: Array<PlacementMember>;
  placementMembersToMember: Array<PlacementMember>;
  placementMembersWithLevel: Array<PlacementMember>;
  placementSearchMembers: Array<PlacementSearchMember>;
  placementTempMembers: Array<PlacementTempMember>;
  promos: PromoResponse;
  proofById: Proof;
  proofs: ProofResponse;
  protectedUploadPresignedURLs: Array<PFile>;
  publicUploadPresignedURLs: Array<PFile>;
  reimbursementById: Reimbursement;
  reimbursements: ReimbursementResponse;
  revenueOverview: Array<RevenueSpentItem>;
  rewardsByWallets: RewardsByWallets;
  roleById: Role;
  roles: RoleResponse;
  saleById: Sale;
  saleBySID: Sale;
  sales: BasicSalesResponse;
  scheduleCampaigns: ScheduleCampaignResponse;
  searchMembers: Array<BasicMemberInfo>;
  seatFilled: Scalars['Float']['output'];
  settingByMemberId: Setting;
  shareAccountById: ShareAccount;
  shareAccounts: ShareAccountResponse;
  shippingById: Shipping;
  shippingMemberInfos: Array<ShippingMemberInfo>;
  shippings: ShippingResponse;
  sponsorMembers: Array<SponsorMember>;
  statisticById: Statistics;
  statistics: StatisticsResponse;
  teamCommissions: BasicWeeklyCommissionResponse;
  texasMembers: TexasMemberResponse;
  topEarners: Array<TopEarnersResponse>;
  topRecruiters: Array<TopRecruitersResponse>;
  totalMemberCounts: Array<MinerCountStatsResponse>;
  transactionByHash: Transaction;
  transactionalEmailById: TransactionalEmail;
  transactionalEmails: TransactionalEmailResponse;
  transactions: TransactionResponse;
  txcRequestById: TxcRequest;
  txcRequests: TxcRequestResponse;
  txcShares: Array<TxcSharedResponse>;
  txcSupplyWalletBalance: WalletBalance;
  unusedAssets: Array<BasicCartonAddress>;
  weekIntroducers: ReportMemberResponse;
  weeklyCommissionById: WeeklyCommission;
  weeklyCommissions: BasicWeeklyCommissionResponse;
  weeklyReports: WeeklyReportResponse;
  wtxcSwapBackBalance: WtxcSwapBackBalance;
  wtxcSwapById: WtxcSwap;
  wtxcSwaps: WtxcSwapResponse;
};


export type QueryAchArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAchBatchByIdArgs = {
  ID: Scalars['Int']['input'];
};


export type QueryAchBatchesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAchByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAchByMemberIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressByAddressArgs = {
  data: AddressInput;
};


export type QueryAddressesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminNotesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssetInfoArgs = {
  data: AssetInput;
};


export type QueryAverageMemberRewardArgs = {
  data: PeriodStatsArgs;
};


export type QueryBlocksArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlocksDataArgs = {
  data: PeriodStatsArgs;
};


export type QueryCalculateProfitabilityArgs = {
  data: ProfitabilityCalculationInput;
};


export type QueryCampaignByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCampaignsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartonAddressesArgs = {
  data: CartonInput;
};


export type QueryCartonsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckIfPeerCodeExistsArgs = {
  code: Scalars['String']['input'];
};


export type QueryCollectAddressesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommissionByPeriodArgs = {
  data: PeriodStatsArgs;
};


export type QueryCommissionsByWeekArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  weekStartDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
};


export type QueryEmailOverviewByPeriodArgs = {
  data: PeriodStatsArgs;
};


export type QueryEmailRecipientByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmailRecipientsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEmailTemplateByIdArgs = {
  ID: Scalars['Int']['input'];
};


export type QueryEmailTemplatesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  period: EventPeriod;
};


export type QueryGenerateCommissionTxcSendmanyArgs = {
  data: TxcPriceInput;
};


export type QueryGenerateReimbursementSendmanyArgs = {
  IDs: Array<Scalars['Int']['input']>;
};


export type QueryGetProtectedFileDownloadUrlArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupSettingsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntroducersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInvoiceByIdArgs = {
  data: IdInput;
};


export type QueryInvoicesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLiveBlockStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryLiveUserStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryLogsArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  afterWhen?: InputMaybe<Scalars['DateTime']['input']>;
  beforeWhen?: InputMaybe<Scalars['DateTime']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  who?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMemberInOutRevenuesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberListByIdArgs = {
  data: IdInput;
};


export type QueryMemberListsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberStatisticsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberStatisticsWalletsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersForListArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersInMemberListArgs = {
  id: Scalars['String']['input'];
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMergeInvoiceArgs = {
  data: InvoiceWeekInput;
};


export type QueryNewMemberCountsArgs = {
  data: PeriodStatsArgs;
};


export type QueryNotificationsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOnePointAwayMembersArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderByIdArgs = {
  data: IdInput;
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPackageByIdArgs = {
  data: IdInput;
};


export type QueryPackageBySIdArgs = {
  data: IdnInput;
};


export type QueryPackagesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentMethodByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentMethodsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlacementChildrenByIdArgs = {
  data: IdInput;
};


export type QueryPlacementMembersToBottomArgs = {
  data: PlacementToBottomInput;
};


export type QueryPlacementMembersToMemberArgs = {
  data: IdInput;
};


export type QueryPlacementMembersWithLevelArgs = {
  data: PlacementWithLevelInput;
};


export type QueryPlacementSearchMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPromosArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProofByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProofsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProtectedUploadPresignedUrLsArgs = {
  data: PresignedUploadUrlRequests;
};


export type QueryPublicUploadPresignedUrLsArgs = {
  data: PresignedUploadUrlRequests;
};


export type QueryReimbursementByIdArgs = {
  ID: Scalars['Int']['input'];
};


export type QueryReimbursementsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRewardsByWalletsArgs = {
  from: Scalars['DateTimeISO']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['DateTimeISO']['input'];
};


export type QueryRoleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySaleByIdArgs = {
  data: IdInput;
};


export type QuerySaleBySidArgs = {
  data: IdnInput;
};


export type QuerySalesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryScheduleCampaignsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySettingByMemberIdArgs = {
  data: IdInput;
};


export type QueryShareAccountByIdArgs = {
  data: IdInput;
};


export type QueryShareAccountsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingByIdArgs = {
  ID: Scalars['Int']['input'];
};


export type QueryShippingMemberInfosArgs = {
  assetId: Scalars['String']['input'];
};


export type QueryShippingsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStatisticByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStatisticsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamCommissionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  teamReport: TeamReportSection;
};


export type QueryTexasMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalMemberCountsArgs = {
  data: PeriodStatsArgs;
};


export type QueryTransactionByHashArgs = {
  data: TransactionInput;
};


export type QueryTransactionalEmailByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionalEmailsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTxcRequestByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTxcRequestsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTxcSharesArgs = {
  data: PeriodStatsArgs;
};


export type QueryUnusedAssetsArgs = {
  data: AssetCountInput;
};


export type QueryWeekIntroducersArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  week: Scalars['Date']['input'];
};


export type QueryWeeklyCommissionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWeeklyCommissionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWeeklyReportsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWtxcSwapByIdArgs = {
  data: IdInput;
};


export type QueryWtxcSwapsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type RefLink = {
  __typename?: 'RefLink';
  link: Scalars['String']['output'];
  linkType: Scalars['String']['output'];
};

export type RefLinkDuplicationResponse = {
  __typename?: 'RefLinkDuplicationResponse';
  duplicated: Array<Scalars['String']['output']>;
};

export type Reimbursement = {
  __typename?: 'Reimbursement';
  attachments: Array<PFile>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  member: MemberInfo;
  memberId: Scalars['String']['output'];
  paidAmountInCent?: Maybe<Scalars['Int']['output']>;
  payToAddress: Scalars['String']['output'];
  proof?: Maybe<Proof>;
  requestedAmountInCent: Scalars['Int']['output'];
  status: ReimbursementStatus;
};

export type ReimbursementResponse = {
  __typename?: 'ReimbursementResponse';
  reimbursements: Array<BasicReimbursement>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ReimbursementSendmany = {
  __typename?: 'ReimbursementSendmany';
  command: Scalars['String']['output'];
  ids: Array<Scalars['Int']['output']>;
};

export enum ReimbursementStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type ReimbursementsStatusInput = {
  ids: Array<Scalars['Int']['input']>;
  status: ReimbursementStatus;
};

export type ReportMember = {
  __typename?: 'ReportMember';
  ID: Scalars['Int']['output'];
  assetId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  totalIntroducers: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type ReportMemberResponse = {
  __typename?: 'ReportMemberResponse';
  members?: Maybe<Array<ReportMember>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ResetPasswordTokenInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RevenueSpentItem = {
  __typename?: 'RevenueSpentItem';
  total: Scalars['Float']['output'];
  type: SummaryType;
};

export type RewardByWallet = {
  __typename?: 'RewardByWallet';
  txc: Scalars['BigInt']['output'];
  wallet: MemberWallet;
};

export type RewardsByWallets = {
  __typename?: 'RewardsByWallets';
  rewards: Array<RewardByWallet>;
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<PermissionType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  roles: Array<Role>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Sale = {
  __typename?: 'Sale';
  ID: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isMetal: Scalars['Boolean']['output'];
  member?: Maybe<MemberInfo>;
  memberId: Scalars['ID']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  package?: Maybe<Package>;
  packageId: Scalars['ID']['output'];
  paymentMethod: Scalars['String']['output'];
  proof?: Maybe<Proof>;
  sponsorCnt: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  toMember?: Maybe<MemberInfo>;
  toMemberId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type SaleRefDuplicationInput = {
  ID?: InputMaybe<Scalars['Int']['input']>;
  links: Array<LinkInput>;
};

export type ScheduleCampaign = {
  __typename?: 'ScheduleCampaign';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  lastRun?: Maybe<Scalars['DateTime']['output']>;
  listId: Scalars['String']['output'];
  memberList: MemberList;
  nextRun: Scalars['DateTime']['output'];
  scheduleType: ScheduleCampaignType;
  status: Scalars['Boolean']['output'];
  template: EmailTemplate;
  templateId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  when: Scalars['String']['output'];
};

export type ScheduleCampaignResponse = {
  __typename?: 'ScheduleCampaignResponse';
  scheduleCampaigns?: Maybe<Array<ScheduleCampaign>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ScheduleCampaignType {
  CommissionMethod = 'COMMISSION_METHOD',
  Normal = 'NORMAL'
}

export type Session = {
  __typename?: 'Session';
  accessToken?: Maybe<Scalars['String']['output']>;
  browser: Scalars['String']['output'];
  browserVersion: Scalars['String']['output'];
  device: Scalars['String']['output'];
  ipAddress: Scalars['String']['output'];
  os: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  userAgent: Scalars['String']['output'];
};

export type SetTransactionalEmailInput = {
  eventType: TransactionalEmailType;
  recipient?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['Int']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  communication: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  memberId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ShareAccount = {
  __typename?: 'ShareAccount';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isTexitRanger?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<BasicMemberInfo>>;
  note?: Maybe<Scalars['String']['output']>;
  potential?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ShareAccountResponse = {
  __typename?: 'ShareAccountResponse';
  shareAccounts?: Maybe<Array<ShareAccount>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ShareMemberInput = {
  memberIds: Array<Scalars['ID']['input']>;
};

export type Shipping = {
  __typename?: 'Shipping';
  SKU: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  itemCurrency: Scalars['String']['output'];
  itemPrice: Scalars['Int']['output'];
  itemTitle: Scalars['String']['output'];
  itemWeight: Scalars['Int']['output'];
  itemWeightUnit: Scalars['String']['output'];
  members: Array<MemberInfo>;
  orderAmount: Scalars['Int']['output'];
  orderCurrency: Scalars['String']['output'];
  orderWeight: Scalars['Int']['output'];
  orderWeightUnit: Scalars['String']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  phone: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  recipientName: Scalars['String']['output'];
  state: Scalars['String']['output'];
  streetLine1: Scalars['String']['output'];
  streetLine2: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  zipCode: Scalars['String']['output'];
};

export type ShippingMemberInfo = {
  __typename?: 'ShippingMemberInfo';
  assetId?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  primaryAddress: Scalars['String']['output'];
  relatedAssets: Array<Scalars['String']['output']>;
  secondaryAddress?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ShippingResponse = {
  __typename?: 'ShippingResponse';
  shippings: Array<Shipping>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SignupFormInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault: CommissionDefault;
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  packageId: Scalars['ID']['input'];
  paymentMethod: Scalars['String']['input'];
  paymentPeerCode?: InputMaybe<Scalars['String']['input']>;
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress: Scalars['String']['input'];
  recaptcha: Scalars['String']['input'];
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorUsername?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  txcAddress?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type SignupMemberResponse = {
  __typename?: 'SignupMemberResponse';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type SponsorMember = {
  __typename?: 'SponsorMember';
  createdAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sponsorId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type Statistics = {
  __typename?: 'Statistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  from: Scalars['DateTimeISO']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  newBlocks: Scalars['Float']['output'];
  notSentTXC: Scalars['BigInt']['output'];
  status: Scalars['Boolean']['output'];
  to: Scalars['DateTimeISO']['output'];
  totalBlocks: Scalars['Float']['output'];
  totalHashPower: Scalars['Float']['output'];
  totalMembers: Scalars['Float']['output'];
  transactionId?: Maybe<Scalars['ID']['output']>;
  txcShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type StatisticsResponse = {
  __typename?: 'StatisticsResponse';
  statistics: Array<Statistics>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SubmitAchInput = {
  accountNumber: Scalars['String']['input'];
  amountInCent: Scalars['Float']['input'];
  bankName: Scalars['String']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  routingNumber: Scalars['String']['input'];
  sign: Scalars['String']['input'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  frontActions?: Maybe<Array<FrontAction>>;
  message?: Maybe<Scalars['String']['output']>;
  result: SuccessResult;
};

export enum SuccessResult {
  Failed = 'failed',
  Success = 'success'
}

export enum SummaryType {
  Commission = 'COMMISSION',
  Income = 'INCOME',
  Liquidity = 'LIQUIDITY',
  Mine = 'MINE',
  Overhead = 'OVERHEAD',
  Profit = 'PROFIT',
  Promotion = 'PROMOTION'
}

export type SuspendedCommission = {
  __typename?: 'SuspendedCommission';
  commissionID: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type SuspendedCommissionConfirmInput = {
  correct: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type SuspendedCommissions = {
  __typename?: 'SuspendedCommissions';
  noAddress: Array<SuspendedCommission>;
  unexpectedChange: Array<SuspendedCommission>;
};

export type TxcPriceInput = {
  txcPrice: Scalars['Float']['input'];
};

export type TxcRequest = {
  __typename?: 'TXCRequest';
  ID: Scalars['Int']['output'];
  dexTradeOrderId?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  inputAddress: Scalars['String']['output'];
  inputBalanceInCent: Scalars['Int']['output'];
  inputChain: PaymentChain;
  inputToken: PaymentToken;
  member: MemberInfo;
  memberId: Scalars['String']['output'];
  outputAddress: Scalars['String']['output'];
  outputChain: PaymentChain;
  outputToken: PaymentToken;
  paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  paidBalance: Scalars['BigInt']['output'];
  paidTransactionHash?: Maybe<Scalars['String']['output']>;
  sentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  sentBalance: Scalars['BigInt']['output'];
  sentTransactionHash?: Maybe<Scalars['String']['output']>;
  status: TxcRequestStatus;
  txcPrice: Scalars['Float']['output'];
  type: TxcRequestType;
};

export type TxcRequestResponse = {
  __typename?: 'TXCRequestResponse';
  total?: Maybe<Scalars['Int']['output']>;
  txcRequests: Array<TxcRequest>;
};

export enum TxcRequestStatus {
  Confirming = 'CONFIRMING',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Sent = 'SENT'
}

export type TxcSharedResponse = {
  __typename?: 'TXCSharedResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  txc: Scalars['Float']['output'];
};

export enum TeamReport {
  Credentials = 'CREDENTIALS',
  Left = 'LEFT',
  Referral = 'REFERRAL',
  Right = 'RIGHT'
}

export enum TeamReportSection {
  Left = 'LEFT',
  Referral = 'REFERRAL',
  Right = 'RIGHT'
}

export enum TeamStrategy {
  Left = 'LEFT',
  Manual = 'MANUAL',
  Right = 'RIGHT'
}

export type TexasMember = {
  __typename?: 'TexasMember';
  ID?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  hash: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type TexasMemberResponse = {
  __typename?: 'TexasMemberResponse';
  members?: Maybe<Array<TexasMember>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TokenInput = {
  token: Scalars['String']['input'];
};

export type TopEarnersResponse = {
  __typename?: 'TopEarnersResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  earned: Scalars['Float']['output'];
  fullName: Scalars['String']['output'];
};

export type TopRecruitersResponse = {
  __typename?: 'TopRecruitersResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  totalIntroducers: Scalars['Float']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  chain: PaymentChain;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  hash: Scalars['ID']['output'];
  order?: Maybe<Order>;
  tokenType: PaymentToken;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type TransactionInput = {
  chain: PaymentChain;
  hash: Scalars['String']['input'];
};

export type TransactionResponse = {
  __typename?: 'TransactionResponse';
  total?: Maybe<Scalars['Int']['output']>;
  transactions?: Maybe<Array<Transaction>>;
};

export type TransactionalEmail = {
  __typename?: 'TransactionalEmail';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  eventType: TransactionalEmailType;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  recipient?: Maybe<Scalars['String']['output']>;
  template: EmailTemplate;
  templateId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type TransactionalEmailResponse = {
  __typename?: 'TransactionalEmailResponse';
  total?: Maybe<Scalars['Int']['output']>;
  transactionalEmails?: Maybe<Array<TransactionalEmail>>;
};

export enum TransactionalEmailType {
  CommissionApproved = 'COMMISSION_APPROVED',
  CommissionCalculated = 'COMMISSION_CALCULATED',
  EmailVerificationRequested = 'EMAIL_VERIFICATION_REQUESTED',
  GotEnrollmentForm = 'GOT_ENROLLMENT_FORM',
  InvoiceCreated = 'INVOICE_CREATED',
  MemberApproved = 'MEMBER_APPROVED',
  PasswordChanged = 'PASSWORD_CHANGED',
  PeerConfirm = 'PEER_CONFIRM',
  PeerConfirmationInProgress = 'PEER_CONFIRMATION_IN_PROGRESS',
  ProfileUpdated = 'PROFILE_UPDATED',
  ReachedThirdIntroducer = 'REACHED_THIRD_INTRODUCER',
  ResetPasswordRequested = 'RESET_PASSWORD_REQUESTED',
  SignInEventTriggered = 'SIGN_IN_EVENT_TRIGGERED',
  TwoFaDisabled = 'TWO_FA_DISABLED',
  TwoFaEnabled = 'TWO_FA_ENABLED'
}

export enum TxcRequestType {
  Txc = 'TXC',
  Wtxc = 'WTXC'
}

export type UpdateAchInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  amountInCent?: InputMaybe<Scalars['Float']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  routingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  roleId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AdminStatus>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdminNotesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateAdminPasswordByIdInput = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateAdminPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateEmailTemplateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  allDay?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end: Scalars['DateTimeISO']['input'];
  id: Scalars['ID']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  start: Scalars['DateTimeISO']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroupSettingInput = {
  groupSettingCommissionBonuses?: InputMaybe<Array<CreateGroupSettingCommissionBonusInput>>;
  id: Scalars['ID']['input'];
  limitDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potentialType?: InputMaybe<GroupSettingPotentialType>;
  rollSponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
  sponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateInvoiceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  amountInCents?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Date']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  status?: InputMaybe<InvoiceStatus>;
};

export type UpdateMemberInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault?: InputMaybe<CommissionDefault>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethAssetId?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  groupSettingId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isTexitRanger?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  peerAcceptable?: InputMaybe<Scalars['Boolean']['input']>;
  peerCode?: InputMaybe<Scalars['String']['input']>;
  peerETHAddress?: InputMaybe<Scalars['String']['input']>;
  placementRequested?: InputMaybe<Scalars['Boolean']['input']>;
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress?: InputMaybe<Scalars['String']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  reimbursementEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  teamReport?: InputMaybe<Array<TeamReport>>;
  teamStrategy?: InputMaybe<TeamStrategy>;
  username?: InputMaybe<Scalars['String']['input']>;
  wallets?: InputMaybe<Array<MemberWalletDataInput>>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberListInput = {
  dynamic: Scalars['Boolean']['input'];
  emails: Array<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateMemberPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateMemberPasswordInputById = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdatePackageInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  enrollVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  orderVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  point?: InputMaybe<Scalars['Float']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePaymentMethodInput = {
  adminVisible?: InputMaybe<Scalars['Boolean']['input']>;
  enrollmentVisible?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromoInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProofByIdInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  hashPower?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  mineLocation?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  requestedAmount?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<ProofType>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReimbursementInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['Int']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  paidAmountInCent?: InputMaybe<Scalars['Int']['input']>;
  payToAddress?: InputMaybe<Scalars['String']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  requestedAmountInCent?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ReimbursementStatus>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<PermissionType>>;
};

export type UpdateSaleInput = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  isMetal?: InputMaybe<Scalars['Boolean']['input']>;
  memberId?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  sponsorCnt?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  toMemberId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateScheduleCampaignInput = {
  id: Scalars['ID']['input'];
  listId: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  templateId: Scalars['Float']['input'];
  when: Scalars['String']['input'];
};

export type UpdateShareAccountInput = {
  id: Scalars['ID']['input'];
  memberIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShippingInput = {
  SKU?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemCurrency?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Int']['input']>;
  itemTitle?: InputMaybe<Scalars['String']['input']>;
  itemWeight?: InputMaybe<Scalars['Int']['input']>;
  itemWeightUnit?: InputMaybe<Scalars['String']['input']>;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  orderAmount?: InputMaybe<Scalars['Int']['input']>;
  orderCurrency?: InputMaybe<Scalars['String']['input']>;
  orderWeight?: InputMaybe<Scalars['Int']['input']>;
  orderWeightUnit?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipientName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export enum UploadFileType {
  Avatar = 'AVATAR',
  Payment = 'PAYMENT',
  Reimbursement = 'REIMBURSEMENT'
}

export type UpsertSettingInput = {
  communication?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsernameInput = {
  usernames: Array<Scalars['String']['input']>;
};

export type VerificationCodeInput = {
  verificationCode: Scalars['String']['input'];
};

export type Verify2FaInput = {
  token: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  token: Scalars['String']['output'];
};

export type WtxcSwap = {
  __typename?: 'WTXCSwap';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  currentBalance: Scalars['BigInt']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  expiredAt: Scalars['DateTimeISO']['output'];
  from: WtxcSwapType;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  inputAddress: Scalars['String']['output'];
  outputAddress: Scalars['String']['output'];
  paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  paidBalance: Scalars['BigInt']['output'];
  paidTransactionHash?: Maybe<Scalars['String']['output']>;
  status: WtxcSwapStatus;
  swappedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  swappedBalance: Scalars['BigInt']['output'];
  swappedTransactionHash?: Maybe<Scalars['String']['output']>;
  to: WtxcSwapType;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type WtxcSwapBackBalance = {
  __typename?: 'WTXCSwapBackBalance';
  txcAddress: Scalars['String']['output'];
  txcBalance: Scalars['BigInt']['output'];
  wtxcAddress: Scalars['String']['output'];
  wtxcBalance: Scalars['BigInt']['output'];
};

export type WtxcSwapResponse = {
  __typename?: 'WTXCSwapResponse';
  total?: Maybe<Scalars['Int']['output']>;
  wtxcSwaps?: Maybe<Array<WtxcSwap>>;
};

export enum WtxcSwapStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Waiting = 'WAITING'
}

export enum WtxcSwapType {
  Txc = 'TXC',
  Wtxc = 'WTXC'
}

export type WalletBalance = {
  __typename?: 'WalletBalance';
  balance: Scalars['Float']['output'];
  walletAddress: Scalars['String']['output'];
};

export type WeeklyCommission = {
  __typename?: 'WeeklyCommission';
  ID: Scalars['Int']['output'];
  begL: Scalars['Float']['output'];
  begR: Scalars['Float']['output'];
  cash: Scalars['Int']['output'];
  commission: Scalars['Float']['output'];
  commissionType: CommissionType;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endL: Scalars['Float']['output'];
  endR: Scalars['Float']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  maxL: Scalars['Float']['output'];
  maxR: Scalars['Float']['output'];
  member: MemberInfo;
  memberId: Scalars['ID']['output'];
  newL: Scalars['Float']['output'];
  newR: Scalars['Float']['output'];
  paidAs: WeeklyCommissionPaymentMade;
  paymentMethod: CommissionDefault;
  pkgL: Scalars['Float']['output'];
  pkgR: Scalars['Float']['output'];
  proof?: Maybe<Proof>;
  qualified: Scalars['Boolean']['output'];
  shortNote?: Maybe<Scalars['String']['output']>;
  status: CommissionStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export enum WeeklyCommissionPaymentMade {
  Both = 'BOTH',
  Cash = 'CASH',
  Hash = 'HASH',
  None = 'NONE'
}

export type WeeklyCommissionUpdateInput = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  refLinks?: InputMaybe<Array<LinkInput>>;
  shortNote?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyCommissionsStatusUpdateInput = {
  ids: Array<Scalars['ID']['input']>;
  status: CommissionStatus;
};

export type WeeklyReport = {
  __typename?: 'WeeklyReport';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  file: PFile;
  fileId: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export type WeeklyReportResponse = {
  __typename?: 'WeeklyReportResponse';
  total?: Maybe<Scalars['Int']['output']>;
  weeklyReports?: Maybe<Array<WeeklyReport>>;
};

export type CreateAchMutationVariables = Exact<{
  data: CreateAchInput;
}>;


export type CreateAchMutation = { __typename?: 'Mutation', createACH: { __typename?: 'ACH', id: string } };

export type CalculateProfitabilityQueryVariables = Exact<{
  data: ProfitabilityCalculationInput;
}>;


export type CalculateProfitabilityQuery = { __typename?: 'Query', calculateProfitability: { __typename?: 'ProfitabilityCalculationResponse', startDate: any, target: number, init: number, period: number, txc: number, txcCost: number, extraTXC: number, endDate: any, txcPrice: number } };

export type WeeklyCommissionsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type WeeklyCommissionsQuery = { __typename?: 'Query', weeklyCommissions: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null, weeklyCommissions: Array<{ __typename?: 'BasicWeeklyCommission', id: string, ID: number, begL: number, begR: number, newL: number, newR: number, maxL: number, maxR: number, endL: number, endR: number, pkgL: number, pkgR: number, note?: string | null, paidAs: WeeklyCommissionPaymentMade, status: CommissionStatus, hasUSDC: boolean, username: string, fullName: string, memberId: string, createdAt: any, shortNote?: string | null, commission: number, commissionType: CommissionType, weekStartDate: any, paymentMethod: CommissionDefault }> } };

export type FetchCommissionStatsQueryVariables = Exact<{
  allFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  pendingFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  declineFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  sentFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchCommissionStatsQuery = { __typename?: 'Query', all: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, pending: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, decline: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, sent: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null } };

export type EmailRecipientsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type EmailRecipientsQuery = { __typename?: 'Query', emailRecipients: { __typename?: 'EmailRecipientResponse', total?: number | null, emailRecipients: Array<{ __typename?: 'EmailRecipient', id: string, body?: string | null, email: string, sender: string, status: EmailStatus, sentAt?: any | null, subject: string, openedAt?: any | null, isVisible: boolean, senderName: string }> } };

export type EmailRecipientByIdQueryVariables = Exact<{
  emailRecipientByIdId: Scalars['ID']['input'];
}>;


export type EmailRecipientByIdQuery = { __typename?: 'Query', emailRecipientById: { __typename?: 'EmailRecipient', id: string, body?: string | null, email: string, sender: string, status: EmailStatus, sentAt?: any | null, subject: string, openedAt?: any | null, isVisible: boolean, senderName: string } };

export type ConfirmEmail5071MutationVariables = Exact<{
  data: SuspendedCommissionConfirmInput;
}>;


export type ConfirmEmail5071Mutation = { __typename?: 'Mutation', confirmEmail5071: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type EventsQueryVariables = Exact<{
  period: EventPeriod;
}>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, end: any, color: string, start: any, allDay: boolean, region: string, title: string, createdAt?: any | null, updatedAt?: any | null, description: string }> };

export type InvoicesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type InvoicesQuery = { __typename?: 'Query', invoices: { __typename?: 'InvoiceResponse', total?: number | null, invoices: Array<{ __typename?: 'Invoice', id: string, ID: number, name: string, status: InvoiceStatus, dueDate: any, createdAt?: any | null, description: string, amountInCents: number, invoiceFile?: { __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, isPublic: boolean, originalName: string } | null }> } };

export type SeatFilledQueryVariables = Exact<{ [key: string]: never; }>;


export type SeatFilledQuery = { __typename?: 'Query', seatFilled: number };

export type CurrentNetworkHashRateQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentNetworkHashRateQuery = { __typename?: 'Query', currentNetworkHashRate: number };

export type NotificationsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type NotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'NotificationResponse', total?: number | null, notifications?: Array<{ __typename?: 'NotificationClient', id: string, read: boolean, level: NotificationLevel, message: string, createdAt?: any | null, updatedAt?: any | null }> | null } };

export type SetReadNotificationMutationVariables = Exact<{
  data: IdInput;
}>;


export type SetReadNotificationMutation = { __typename?: 'Mutation', setReadNotification: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type SetReadAllNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetReadAllNotificationsMutation = { __typename?: 'Mutation', setReadAllNotifications: { __typename?: 'ManySuccessResponse', count: number } };

export type OrderByIdQueryVariables = Exact<{
  data: IdInput;
}>;


export type OrderByIdQuery = { __typename?: 'Query', orderById: { __typename?: 'Order', id: string, ID: number, status: OrderStatus, expiredAt: any, paidBalance: any, paymentToken?: PaymentToken | null, paymentChain?: PaymentChain | null, acceptFirstTx: boolean, paymentAddress?: string | null, requiredBalance?: any | null, availablePaymentMethods: Array<{ __typename?: 'OrderPaymentMethod', isP2P: boolean, paymentChain?: PaymentChain | null, paymentToken?: PaymentToken | null }> } };

export type CheckOrderQueryVariables = Exact<{
  data: IdInput;
}>;


export type CheckOrderQuery = { __typename?: 'Query', orderById: { __typename?: 'Order', status: OrderStatus } };

export type CreateAddHashOrderMutationVariables = Exact<{
  data: CreateOrderInput;
}>;


export type CreateAddHashOrderMutation = { __typename?: 'Mutation', createAddHashOrder: { __typename?: 'Order', id: string } };

export type CreateSignUpOrderMutationVariables = Exact<{
  data: CreateSignUpOrderInput;
}>;


export type CreateSignUpOrderMutation = { __typename?: 'Mutation', createSignUpOrder: { __typename?: 'Order', id: string } };

export type CancelOrderMutationVariables = Exact<{
  data: IdInput;
}>;


export type CancelOrderMutation = { __typename?: 'Mutation', cancelOrder: { __typename?: 'Order', id: string, status: OrderStatus } };

export type SetOrderPaymentMutationVariables = Exact<{
  data: OrderPaymentSetInput;
}>;


export type SetOrderPaymentMutation = { __typename?: 'Mutation', setOrderPayment: { __typename?: 'Order', id: string, status: OrderStatus, paymentToken?: PaymentToken | null, paymentAddress?: string | null, requiredBalance?: any | null } };

export type PaymentMethodsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PaymentMethodsQuery = { __typename?: 'Query', paymentMethods: { __typename?: 'PaymentMethodResponse', total?: number | null, paymentMethods: Array<{ __typename?: 'PaymentMethod', id: string, name: string, adminVisible: boolean, enrollmentVisible: boolean, createdAt?: any | null }> } };

export type ConfirmPeerPaymentMutationVariables = Exact<{
  data: PeerConfirmationInput;
}>;


export type ConfirmPeerPaymentMutation = { __typename?: 'Mutation', confirmPeerPayment: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type PlacementMembersWithLevelQueryVariables = Exact<{
  data: PlacementWithLevelInput;
}>;


export type PlacementMembersWithLevelQuery = { __typename?: 'Query', placementMembersWithLevel: Array<{ __typename?: 'PlacementMember', id: string, status: boolean, username: string, fullName: string, createdAt: any, teamStrategy: TeamStrategy, placementStatus: PlacementStatus, placementPosition: PlacementPosition, placementParentId: string, commission: { __typename?: 'CommissionInfo', begL: number, begR: number, newL: number, newR: number } }> };

export type PlacementChildrenByIdQueryVariables = Exact<{
  data: IdInput;
}>;


export type PlacementChildrenByIdQuery = { __typename?: 'Query', placementChildrenById: Array<{ __typename?: 'PlacementMember', id: string, status: boolean, username: string, fullName: string, createdAt: any, teamStrategy: TeamStrategy, placementStatus: PlacementStatus, placementPosition: PlacementPosition, placementParentId: string, commission: { __typename?: 'CommissionInfo', begL: number, begR: number, newL: number, newR: number } }> };

export type PlacementMembersToMemberQueryVariables = Exact<{
  data: IdInput;
}>;


export type PlacementMembersToMemberQuery = { __typename?: 'Query', placementMembersToMember: Array<{ __typename?: 'PlacementMember', id: string, status: boolean, username: string, fullName: string, createdAt: any, teamStrategy: TeamStrategy, placementStatus: PlacementStatus, placementPosition: PlacementPosition, placementParentId: string, commission: { __typename?: 'CommissionInfo', begL: number, begR: number, newL: number, newR: number } }> };

export type PlacementMembersToBottomQueryVariables = Exact<{
  data: PlacementToBottomInput;
}>;


export type PlacementMembersToBottomQuery = { __typename?: 'Query', placementMembersToBottom: Array<{ __typename?: 'PlacementMember', id: string, status: boolean, username: string, fullName: string, createdAt: any, teamStrategy: TeamStrategy, placementStatus: PlacementStatus, placementPosition: PlacementPosition, placementParentId: string, commission: { __typename?: 'CommissionInfo', begL: number, begR: number, newL: number, newR: number } }> };

export type PlacementSearchMembersQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PlacementSearchMembersQuery = { __typename?: 'Query', placementSearchMembers: Array<{ __typename?: 'PlacementSearchMember', id: string, username: string, fullName: string, createdAt: any, placementPosition: PlacementPosition, placementParentId: string, status: boolean, placementStatus: PlacementStatus }> };

export type FetchMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMeQuery = { __typename?: 'Query', memberMe: { __typename?: 'Member', id: string, ID?: number | null, city?: string | null, email: string, point: number, state?: string | null, avatar?: string | null, mobile: string, status: boolean, assetId?: string | null, country?: string | null, zipCode?: string | null, peerCode?: string | null, username: string, fullName: string, activated: boolean, potential: number, sponsorId?: string | null, allowState: MemberState, ethAssetId?: string | null, teamReport: Array<TeamReport>, OTPEnabled: boolean, activationTx?: string | null, teamStrategy: TeamStrategy, emailVerified: boolean, isTexitRanger: boolean, totalTXCShared: any, peerAcceptable: boolean, peerETHAddress?: string | null, primaryAddress: string, currentHashPower: number, secondaryAddress?: string | null, totalIntroducers: number, preferredContact?: string | null, commissionDefault: CommissionDefault, placementParentId?: string | null, placementPosition: PlacementPosition, placementRequested: boolean, shareIsTexitRanger: boolean, totalTXCNotReceived: any, reimbursementEnabled: boolean, orderedAvailablePoint: number, preferredContactDetail?: string | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, groupSetting?: { __typename?: 'BasicGroupSetting', id: string, name: string, potentialType: GroupSettingPotentialType, commissionDefaults: Array<CommissionDefault> } | null, commission?: { __typename?: 'CommissionInfo', begL: number, begR: number, newL: number, newR: number } | null, sponsor?: { __typename?: 'MemberInfo', id: string, username: string, fullName: string } | null, placementParent?: { __typename?: 'MemberInfoWithPlacement', id: string, username: string, fullName: string } | null, placementChildren?: Array<{ __typename?: 'MemberInfoWithPlacement', id: string, username: string, fullName: string, placementPosition: PlacementPosition }> | null, memberWallets?: Array<{ __typename?: 'MemberWallet', id: string, note?: string | null, address: string, percent: number, memberId: string, payoutId: string, isDefault: boolean, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string } | null }> | null, setting?: { __typename?: 'Setting', id: string, memberId: string, communication: boolean } | null } };

export type FetchMemberStatsQueryVariables = Exact<{
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatsQuery = { __typename?: 'Query', all: { __typename?: 'MembersResponse', total?: number | null }, inactive: { __typename?: 'MembersResponse', total?: number | null } };

export type SearchMembersQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type SearchMembersQuery = { __typename?: 'Query', searchMembers: Array<{ __typename?: 'BasicMemberInfo', id: string, email: string, username: string, fullName: string }> };

export type FetchPlacementMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPlacementMembersQuery = { __typename?: 'Query', sponsorMembers: Array<{ __typename?: 'SponsorMember', id: string, username: string, fullName: string, sponsorId: string, createdAt: any }> };

export type UpdateMemberMutationVariables = Exact<{
  data: UpdateMemberInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember: { __typename?: 'Member', id: string, mobile: string, primaryAddress: string, secondaryAddress?: string | null, assetId?: string | null, memberWallets?: Array<{ __typename?: 'MemberWallet', id: string, address: string, percent: number, memberId: string, payoutId: string, payout?: { __typename?: 'Payout', method: string, display: string } | null }> | null } };

export type MemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type MemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics: Array<{ __typename?: 'MemberStatistics', issuedAt: any, hashPower: number, txcShared: any }> } };

export type UpdatePasswordMemberMutationVariables = Exact<{
  data: UpdateMemberPasswordInput;
}>;


export type UpdatePasswordMemberMutation = { __typename?: 'Mutation', updatePasswordMember: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type GenerateQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateQueryQuery = { __typename?: 'Query', generate2FA: string };

export type Verify2FaAndEnableMutationVariables = Exact<{
  data: Verify2FaInput;
}>;


export type Verify2FaAndEnableMutation = { __typename?: 'Mutation', verify2FAAndEnable: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type Verify2FaTokenMutationVariables = Exact<{
  data: TokenInput;
}>;


export type Verify2FaTokenMutation = { __typename?: 'Mutation', verify2FAToken: { __typename?: 'LoginResponse', accessToken: string, status: LoginResult } };

export type Disable2FaMutationVariables = Exact<{ [key: string]: never; }>;


export type Disable2FaMutation = { __typename?: 'Mutation', disable2FA: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type UpsertSettingByMemberIdMutationVariables = Exact<{
  data: UpsertSettingInput;
}>;


export type UpsertSettingByMemberIdMutation = { __typename?: 'Mutation', upsertSettingByMemberId: { __typename?: 'Setting', id: string } };

export type MemberLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type MemberLogoutMutation = { __typename?: 'Mutation', memberLogout: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type MemberExchangeLoginMutationVariables = Exact<{
  data: MemberLoginInput;
}>;


export type MemberExchangeLoginMutation = { __typename?: 'Mutation', memberExchangeLogin: { __typename?: 'LoginResponse', status: LoginResult, accessToken: string, passwordExpired: boolean } };

export type VerifyEmailCodeMutationVariables = Exact<{
  data: VerificationCodeInput;
}>;


export type VerifyEmailCodeMutation = { __typename?: 'Mutation', verifyEmailCode: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type ActivateMemberMutationVariables = Exact<{
  data: ActivateMemberInput;
}>;


export type ActivateMemberMutation = { __typename?: 'Mutation', activateMember: { __typename?: 'ActivateMemberResponse', activationTx?: string | null } };

export type ReimbursementsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type ReimbursementsQuery = { __typename?: 'Query', reimbursements: { __typename?: 'ReimbursementResponse', total?: number | null, reimbursements: Array<{ __typename?: 'BasicReimbursement', id: number, status: ReimbursementStatus, username: string, fullName: string, memberId: string, createdAt: any, description?: string | null, paidAmountInCent?: number | null, requestedAmountInCent: number, attachments: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, isPublic: boolean, originalName: string }> }> } };

export type ReimbursementByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ReimbursementByIdQuery = { __typename?: 'Query', reimbursementById: { __typename?: 'Reimbursement', id: number, status: ReimbursementStatus, memberId: string, description?: string | null, payToAddress: string, paidAmountInCent?: number | null, requestedAmountInCent: number, attachments: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, isPublic: boolean, originalName: string }> } };

export type CreateReimbursementMutationVariables = Exact<{
  data: CreateReimbursementInput;
}>;


export type CreateReimbursementMutation = { __typename?: 'Mutation', createReimbursement: { __typename?: 'Reimbursement', id: number } };

export type UpdateReimbursementMutationVariables = Exact<{
  data: UpdateReimbursementInput;
}>;


export type UpdateReimbursementMutation = { __typename?: 'Mutation', updateReimbursement: { __typename?: 'Reimbursement', id: number } };

export type RequestResetPasswordMutationVariables = Exact<{
  data: EmailInput;
}>;


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type ResetPasswordByTokenMutationVariables = Exact<{
  data: ResetPasswordTokenInput;
}>;


export type ResetPasswordByTokenMutation = { __typename?: 'Mutation', resetPasswordByToken: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type VerifyResetPasswordTokenMutationVariables = Exact<{
  data: TokenInput;
}>;


export type VerifyResetPasswordTokenMutation = { __typename?: 'Mutation', verifyResetPasswordToken: { __typename?: 'VerifyTokenResponse', token: string } };

export type RewardQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type RewardQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics: Array<{ __typename?: 'Statistics', id: string, to: any, from: any, status: boolean, issuedAt: any, txcShared: any, newBlocks: number, totalBlocks: number, totalMembers: number, totalHashPower: number }> } };

export type FetchMemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics: Array<{ __typename?: 'MemberStatistics', id: string, sent: boolean, percent: number, issuedAt: any, memberId: string, txcShared: any, hashPower: number, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, statisticsId: string, statistic: { __typename?: 'Statistics', status: boolean, newBlocks: number, txcShared: any, totalBlocks: number, totalMembers: number, totalHashPower: number } }> } };

export type RewardsQueryVariables = Exact<{
  from: Scalars['DateTimeISO']['input'];
  to: Scalars['DateTimeISO']['input'];
}>;


export type RewardsQuery = { __typename?: 'Query', rewardsByWallets: { __typename?: 'RewardsByWallets', rewards: Array<{ __typename?: 'RewardByWallet', txc: any, wallet: { __typename?: 'MemberWallet', id: string, address: string, percent: number, payout?: { __typename?: 'Payout', name: string, method: string } | null } }> } };

export type MemberStatisticsWalletsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type MemberStatisticsWalletsQuery = { __typename?: 'Query', memberStatisticsWallets: { __typename?: 'MemberStatisticsWalletResponse', memberStatisticsWallets?: Array<{ __typename?: 'MemberStatisticsWallet', id: string, txc: any, issuedAt: any, memberWallet: { __typename?: 'MemberWallet', address: string }, memberStatistic: { __typename?: 'MemberStatistics', hashPower: number, percent: number, txcShared: any } }> | null } };

export type SalesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type SalesQuery = { __typename?: 'Query', sales: { __typename?: 'BasicSalesResponse', total?: number | null, sales?: Array<{ __typename?: 'BasicSale', id: string, ID: number, email: string, token: number, point: number, amount: number, status: boolean, isMetal: boolean, toEmail?: string | null, assetId?: string | null, memberId: string, username: string, fullName: string, orderedAt: any, createdAt: any, sponsorCnt: number, toMemberId?: string | null, toUsername?: string | null, toFullName?: string | null, productName: string, paymentMethod: string }> | null } };

export type FetchSaleStatsQueryVariables = Exact<{
  allFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchSaleStatsQuery = { __typename?: 'Query', all: { __typename?: 'BasicSalesResponse', total?: number | null }, inactive: { __typename?: 'BasicSalesResponse', total?: number | null } };

export type PackagesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PackagesQuery = { __typename?: 'Query', packages: { __typename?: 'PackageResponse', total?: number | null, packages?: Array<{ __typename?: 'Package', id: string, date: any, token: number, point: number, amount: number, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, productName: string, orderVisibility: boolean, enrollVisibility: boolean }> | null } };

export type OrderAvailablePointQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderAvailablePointQuery = { __typename?: 'Query', orderAvailablePoint: number };

export type LoginMutationVariables = Exact<{
  data: MemberLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', memberLogin: { __typename?: 'LoginResponse', status: LoginResult, accessToken: string, passwordExpired: boolean } };

export type SignUpMemberMutationVariables = Exact<{
  data: SignupFormInput;
}>;


export type SignUpMemberMutation = { __typename?: 'Mutation', signUpMember: { __typename?: 'SignupMemberResponse', id: string, email: string, username: string } };

export type SendEmailVerificationCodeMutationVariables = Exact<{ [key: string]: never; }>;


export type SendEmailVerificationCodeMutation = { __typename?: 'Mutation', sendEmailVerificationCode: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type PromosQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PromosQuery = { __typename?: 'Query', promos: { __typename?: 'PromoResponse', total?: number | null, promos?: Array<{ __typename?: 'Promo', id: string, code: string, status: boolean, endDate: any, startDate: any, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, description: string }> | null } };

export type CheckPeerCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type CheckPeerCodeQuery = { __typename?: 'Query', checkIfPeerCodeExists: boolean };

export type CreateAddMemberOrderMutationVariables = Exact<{
  data: CreateAddMemberOrderInput;
}>;


export type CreateAddMemberOrderMutation = { __typename?: 'Mutation', createAddMemberOrder: { __typename?: 'Order', id: string } };

export type QueryQueryVariables = Exact<{
  data: LiveStatsArgs;
}>;


export type QueryQuery = { __typename?: 'Query', liveBlockStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveMiningStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveUserStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> } };

export type StatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type StatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> } };

export type TxcMemberStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type TxcMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics: Array<{ __typename?: 'MemberStatistics', id: string, hashPower: number, txcShared: any, issuedAt: any, percent: number, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, member: { __typename?: 'MemberInfo', id: string, username: string, fullName: string } }> } };

export type HistoryStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type HistoryStatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> } };

export type BlocksDataQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type BlocksDataQuery = { __typename?: 'Query', blocksData: Array<{ __typename?: 'BlockStatsResponse', hashRate: number, difficulty: number, base: string, baseDate?: any | null, soldHashPower: number, purchasedHashPower?: number | null }> };

export type NewMemberCountsQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type NewMemberCountsQuery = { __typename?: 'Query', newMemberCounts: Array<{ __typename?: 'MinerCountStatsResponse', base: string, baseDate: any, minerCount: number }> };

export type AverageMemberRewardQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type AverageMemberRewardQuery = { __typename?: 'Query', averageMemberReward: Array<{ __typename?: 'AverageMinerRewardStatsResponse', base: string, baseDate: any, reward: number }> };

export type CommissionByPeriodQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type CommissionByPeriodQuery = { __typename?: 'Query', commissionByPeriod: Array<{ __typename?: 'CommissionPeriodResponse', base: string, baseDate: any, commission: number, revenue: number }> };

export type RevenueOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type RevenueOverviewQuery = { __typename?: 'Query', revenueOverview: Array<{ __typename?: 'RevenueSpentItem', type: SummaryType, total: number }> };

export type TotalMemberCountsQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type TotalMemberCountsQuery = { __typename?: 'Query', totalMemberCounts: Array<{ __typename?: 'MinerCountStatsResponse', base: string, baseDate: any, minerCount: number }> };

export type LatestStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestStatisticsQuery = { __typename?: 'Query', latestStatistics: Array<{ __typename?: 'LatestStatistics', id: string, newBlocks: number, totalMembers: number, txcShared: number, issuedAt: any }> };

export type TxcSharesQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type TxcSharesQuery = { __typename?: 'Query', txcShares: Array<{ __typename?: 'TXCSharedResponse', base: string, baseDate: any, txc: number }> };

export type TopEarnersQueryVariables = Exact<{ [key: string]: never; }>;


export type TopEarnersQuery = { __typename?: 'Query', topEarners: Array<{ __typename?: 'TopEarnersResponse', avatar?: string | null, earned: number, fullName: string }> };

export type TopRecruitersQueryVariables = Exact<{ [key: string]: never; }>;


export type TopRecruitersQuery = { __typename?: 'Query', topRecruiters: Array<{ __typename?: 'TopRecruitersResponse', avatar?: string | null, fullName: string, totalIntroducers: number }> };

export type MembersByCountryQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersByCountryQuery = { __typename?: 'Query', membersByCountry: Array<{ __typename?: 'MembersByCountryItem', country: string, memberCount: number }> };

export type TxcRequestsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type TxcRequestsQuery = { __typename?: 'Query', txcRequests: { __typename?: 'TXCRequestResponse', total?: number | null, txcRequests: Array<{ __typename?: 'TXCRequest', id: string, ID: number, type: TxcRequestType, status: TxcRequestStatus, paidAt?: any | null, sentAt?: any | null, memberId: string, txcPrice: number, inputChain: PaymentChain, inputToken: PaymentToken, outputChain: PaymentChain, outputToken: PaymentToken, paidBalance: any, sentBalance: any, inputAddress: string, outputAddress: string, inputBalanceInCent: number, paidTransactionHash?: string | null, sentTransactionHash?: string | null }> } };

export type CreateBuyTxcOrderMutationVariables = Exact<{
  data: CreateBuyTxcInput;
}>;


export type CreateBuyTxcOrderMutation = { __typename?: 'Mutation', createBuyTXCOrder: { __typename?: 'Order', id: string } };

export type CreateBuyWtxcOrderMutationVariables = Exact<{
  data: CreateBuyWtxcInput;
}>;


export type CreateBuyWtxcOrderMutation = { __typename?: 'Mutation', createBuyWTXCOrder: { __typename?: 'Order', id: string } };

export type FetchTeamCommissionStatsQueryVariables = Exact<{
  leftFilter: TeamReportSection;
  rightFilter: TeamReportSection;
  referralFilter: TeamReportSection;
}>;


export type FetchTeamCommissionStatsQuery = { __typename?: 'Query', LEFT: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, RIGHT: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, REFERRAL: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null } };

export type TeamCommissionsQueryVariables = Exact<{
  teamReport: TeamReportSection;
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type TeamCommissionsQuery = { __typename?: 'Query', teamCommissions: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null, weeklyCommissions: Array<{ __typename?: 'BasicWeeklyCommission', id: string, ID: number, begL: number, begR: number, newL: number, newR: number, maxL: number, maxR: number, endL: number, endR: number, pkgL: number, pkgR: number, note?: string | null, status: CommissionStatus, username: string, fullName: string, memberId: string, createdAt: any, shortNote?: string | null, commission: number, weekStartDate: any, paymentMethod: CommissionDefault, commissionType: CommissionType }> } };

export type IntroducersQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type IntroducersQuery = { __typename?: 'Query', introducers: { __typename?: 'IntroducersResponse', total?: number | null, introducers?: Array<{ __typename?: 'Introducer', id: string, ID?: number | null, email: string, point: number, mobile: string, username: string, fullName: string, createdAt: any }> | null } };

export type SponsorsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type SponsorsQuery = { __typename?: 'Query', introducers: { __typename?: 'IntroducersResponse', total?: number | null, introducers?: Array<{ __typename?: 'Introducer', id: string, ID?: number | null, point: number, username: string, fullName: string, createdAt: any }> | null } };

export type PublicUploadPresignedUrLsQueryVariables = Exact<{
  data: PresignedUploadUrlRequests;
}>;


export type PublicUploadPresignedUrLsQuery = { __typename?: 'Query', publicUploadPresignedURLs: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, isPublic: boolean, originalName: string }> };

export type CompleteUploadMutationVariables = Exact<{
  data: Array<CompleteUploadInput> | CompleteUploadInput;
}>;


export type CompleteUploadMutation = { __typename?: 'Mutation', completeUpload: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, isPublic: boolean, originalName: string }> };

export type BlocksdataQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type BlocksdataQuery = { __typename?: 'Query', blocksData: Array<{ __typename?: 'BlockStatsResponse', base: string, difficulty: number, hashRate: number }> };


export const CreateAchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateACH"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateACHInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createACH"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAchMutation, CreateAchMutationVariables>;
export const CalculateProfitabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CalculateProfitability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfitabilityCalculationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calculateProfitability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"init"}},{"kind":"Field","name":{"kind":"Name","value":"period"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"txcCost"}},{"kind":"Field","name":{"kind":"Name","value":"extraTXC"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"txcPrice"}}]}}]}}]} as unknown as DocumentNode<CalculateProfitabilityQuery, CalculateProfitabilityQueryVariables>;
export const WeeklyCommissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WeeklyCommissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}},{"kind":"Field","name":{"kind":"Name","value":"maxL"}},{"kind":"Field","name":{"kind":"Name","value":"maxR"}},{"kind":"Field","name":{"kind":"Name","value":"endL"}},{"kind":"Field","name":{"kind":"Name","value":"endR"}},{"kind":"Field","name":{"kind":"Name","value":"pkgL"}},{"kind":"Field","name":{"kind":"Name","value":"pkgR"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"paidAs"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"hasUSDC"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shortNote"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"commissionType"}},{"kind":"Field","name":{"kind":"Name","value":"weekStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<WeeklyCommissionsQuery, WeeklyCommissionsQueryVariables>;
export const FetchCommissionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCommissionStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pendingFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"declineFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pending"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pendingFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"decline"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"declineFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sent"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchCommissionStatsQuery, FetchCommissionStatsQueryVariables>;
export const EmailRecipientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmailRecipients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailRecipients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"openedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<EmailRecipientsQuery, EmailRecipientsQueryVariables>;
export const EmailRecipientByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmailRecipientById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailRecipientByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailRecipientById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailRecipientByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"openedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}}]}}]}}]} as unknown as DocumentNode<EmailRecipientByIdQuery, EmailRecipientByIdQueryVariables>;
export const ConfirmEmail5071Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmEmail5071"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuspendedCommissionConfirmInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmEmail5071"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ConfirmEmail5071Mutation, ConfirmEmail5071MutationVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPeriod"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"allDay"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const InvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Invoices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amountInCents"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<InvoicesQuery, InvoicesQueryVariables>;
export const SeatFilledDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeatFilled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seatFilled"}}]}}]} as unknown as DocumentNode<SeatFilledQuery, SeatFilledQueryVariables>;
export const CurrentNetworkHashRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentNetworkHashRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentNetworkHashRate"}}]}}]} as unknown as DocumentNode<CurrentNetworkHashRateQuery, CurrentNetworkHashRateQueryVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;
export const SetReadNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetReadNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setReadNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<SetReadNotificationMutation, SetReadNotificationMutationVariables>;
export const SetReadAllNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetReadAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setReadAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<SetReadAllNotificationsMutation, SetReadAllNotificationsMutationVariables>;
export const OrderByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"paidBalance"}},{"kind":"Field","name":{"kind":"Name","value":"paymentToken"}},{"kind":"Field","name":{"kind":"Name","value":"paymentChain"}},{"kind":"Field","name":{"kind":"Name","value":"acceptFirstTx"}},{"kind":"Field","name":{"kind":"Name","value":"paymentAddress"}},{"kind":"Field","name":{"kind":"Name","value":"requiredBalance"}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isP2P"}},{"kind":"Field","name":{"kind":"Name","value":"paymentChain"}},{"kind":"Field","name":{"kind":"Name","value":"paymentToken"}}]}}]}}]}}]} as unknown as DocumentNode<OrderByIdQuery, OrderByIdQueryVariables>;
export const CheckOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CheckOrderQuery, CheckOrderQueryVariables>;
export const CreateAddHashOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAddHashOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAddHashOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAddHashOrderMutation, CreateAddHashOrderMutationVariables>;
export const CreateSignUpOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSignUpOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSignUpOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSignUpOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateSignUpOrderMutation, CreateSignUpOrderMutationVariables>;
export const CancelOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CancelOrderMutation, CancelOrderMutationVariables>;
export const SetOrderPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetOrderPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderPaymentSetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setOrderPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentToken"}},{"kind":"Field","name":{"kind":"Name","value":"paymentAddress"}},{"kind":"Field","name":{"kind":"Name","value":"requiredBalance"}}]}}]}}]} as unknown as DocumentNode<SetOrderPaymentMutation, SetOrderPaymentMutationVariables>;
export const PaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaymentMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"adminVisible"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentVisible"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PaymentMethodsQuery, PaymentMethodsQueryVariables>;
export const ConfirmPeerPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmPeerPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeerConfirmationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmPeerPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ConfirmPeerPaymentMutation, ConfirmPeerPaymentMutationVariables>;
export const PlacementMembersWithLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementMembersWithLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlacementWithLevelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementMembersWithLevel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"placementStatus"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}}]}}]}}]} as unknown as DocumentNode<PlacementMembersWithLevelQuery, PlacementMembersWithLevelQueryVariables>;
export const PlacementChildrenByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementChildrenById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementChildrenById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"placementStatus"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}}]}}]}}]} as unknown as DocumentNode<PlacementChildrenByIdQuery, PlacementChildrenByIdQueryVariables>;
export const PlacementMembersToMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementMembersToMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementMembersToMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"placementStatus"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}}]}}]}}]} as unknown as DocumentNode<PlacementMembersToMemberQuery, PlacementMembersToMemberQueryVariables>;
export const PlacementMembersToBottomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementMembersToBottom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlacementToBottomInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementMembersToBottom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"placementStatus"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}}]}}]}}]} as unknown as DocumentNode<PlacementMembersToBottomQuery, PlacementMembersToBottomQueryVariables>;
export const PlacementSearchMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementSearchMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementSearchMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"placementStatus"}}]}}]}}]} as unknown as DocumentNode<PlacementSearchMembersQuery, PlacementSearchMembersQueryVariables>;
export const FetchMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"peerCode"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"activated"}},{"kind":"Field","name":{"kind":"Name","value":"potential"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorId"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"ethAssetId"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"activationTx"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"totalTXCShared"}},{"kind":"Field","name":{"kind":"Name","value":"peerAcceptable"}},{"kind":"Field","name":{"kind":"Name","value":"peerETHAddress"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"currentHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"shareIsTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"totalTXCNotReceived"}},{"kind":"Field","name":{"kind":"Name","value":"reimbursementEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAvailablePoint"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}},{"kind":"Field","name":{"kind":"Name","value":"groupSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"potentialType"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefaults"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placementParent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placementChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"communication"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<FetchMeQuery, FetchMeQueryVariables>;
export const FetchMemberStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatsQuery, FetchMemberStatsQueryVariables>;
export const SearchMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<SearchMembersQuery, SearchMembersQueryVariables>;
export const FetchPlacementMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchPlacementMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sponsorMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchPlacementMembersQuery, FetchPlacementMembersQueryVariables>;
export const UpdateMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]} as unknown as DocumentNode<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const MemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsQuery, MemberStatisticsQueryVariables>;
export const UpdatePasswordMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePasswordMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePasswordMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMemberMutation, UpdatePasswordMemberMutationVariables>;
export const GenerateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"generateQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generate2FA"}}]}}]} as unknown as DocumentNode<GenerateQueryQuery, GenerateQueryQueryVariables>;
export const Verify2FaAndEnableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify2FAAndEnable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Verify2FAInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify2FAAndEnable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Verify2FaAndEnableMutation, Verify2FaAndEnableMutationVariables>;
export const Verify2FaTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify2FAToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify2FAToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Verify2FaTokenMutation, Verify2FaTokenMutationVariables>;
export const Disable2FaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Disable2FA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disable2FA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Disable2FaMutation, Disable2FaMutationVariables>;
export const UpsertSettingByMemberIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertSettingByMemberId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertSettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertSettingByMemberId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertSettingByMemberIdMutation, UpsertSettingByMemberIdMutationVariables>;
export const MemberLogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MemberLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MemberLogoutMutation, MemberLogoutMutationVariables>;
export const MemberExchangeLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MemberExchangeLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberExchangeLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"passwordExpired"}}]}}]}}]} as unknown as DocumentNode<MemberExchangeLoginMutation, MemberExchangeLoginMutationVariables>;
export const VerifyEmailCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmailCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerificationCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmailCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailCodeMutation, VerifyEmailCodeMutationVariables>;
export const ActivateMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activationTx"}}]}}]}}]} as unknown as DocumentNode<ActivateMemberMutation, ActivateMemberMutationVariables>;
export const ReimbursementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Reimbursements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reimbursements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reimbursements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"paidAmountInCent"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAmountInCent"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<ReimbursementsQuery, ReimbursementsQueryVariables>;
export const ReimbursementByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReimbursementById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reimbursementById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payToAddress"}},{"kind":"Field","name":{"kind":"Name","value":"paidAmountInCent"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAmountInCent"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}}]}}]} as unknown as DocumentNode<ReimbursementByIdQuery, ReimbursementByIdQueryVariables>;
export const CreateReimbursementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReimbursement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateReimbursementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReimbursement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateReimbursementMutation, CreateReimbursementMutationVariables>;
export const UpdateReimbursementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateReimbursement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateReimbursementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReimbursement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateReimbursementMutation, UpdateReimbursementMutationVariables>;
export const RequestResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByTokenMutation, ResetPasswordByTokenMutationVariables>;
export const VerifyResetPasswordTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyResetPasswordToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyResetPasswordToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>;
export const RewardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Reward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<RewardQuery, RewardQueryVariables>;
export const FetchMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsId"}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatisticsQuery, FetchMemberStatisticsQueryVariables>;
export const RewardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Rewards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsByWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RewardsQuery, RewardsQueryVariables>;
export const MemberStatisticsWalletsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatisticsWallets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberStatistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsWalletsQuery, MemberStatisticsWalletsQueryVariables>;
export const SalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isMetal"}},{"kind":"Field","name":{"kind":"Name","value":"toEmail"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorCnt"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"toUsername"}},{"kind":"Field","name":{"kind":"Name","value":"toFullName"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<SalesQuery, SalesQueryVariables>;
export const FetchSaleStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSaleStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchSaleStatsQuery, FetchSaleStatsQueryVariables>;
export const PackagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Packages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"orderVisibility"}},{"kind":"Field","name":{"kind":"Name","value":"enrollVisibility"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PackagesQuery, PackagesQueryVariables>;
export const OrderAvailablePointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderAvailablePoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderAvailablePoint"}}]}}]} as unknown as DocumentNode<OrderAvailablePointQuery, OrderAvailablePointQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"passwordExpired"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignUpMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupFormInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<SignUpMemberMutation, SignUpMemberMutationVariables>;
export const SendEmailVerificationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendEmailVerificationCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendEmailVerificationCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<SendEmailVerificationCodeMutation, SendEmailVerificationCodeMutationVariables>;
export const PromosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Promos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PromosQuery, PromosQueryVariables>;
export const CheckPeerCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkPeerCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkIfPeerCodeExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<CheckPeerCodeQuery, CheckPeerCodeQueryVariables>;
export const CreateAddMemberOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAddMemberOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddMemberOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAddMemberOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAddMemberOrderMutation, CreateAddMemberOrderMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LiveStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liveBlockStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveMiningStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveUserStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const StatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Statistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<StatisticsQuery, StatisticsQueryVariables>;
export const TxcMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TXCMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TxcMemberStatisticsQuery, TxcMemberStatisticsQueryVariables>;
export const HistoryStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HistoryStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<HistoryStatisticsQuery, HistoryStatisticsQueryVariables>;
export const BlocksDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlocksData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocksData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashRate"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"soldHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"purchasedHashPower"}}]}}]}}]} as unknown as DocumentNode<BlocksDataQuery, BlocksDataQueryVariables>;
export const NewMemberCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewMemberCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMemberCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"minerCount"}}]}}]}}]} as unknown as DocumentNode<NewMemberCountsQuery, NewMemberCountsQueryVariables>;
export const AverageMemberRewardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AverageMemberReward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageMemberReward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}}]}}]}}]} as unknown as DocumentNode<AverageMemberRewardQuery, AverageMemberRewardQueryVariables>;
export const CommissionByPeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommissionByPeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commissionByPeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}}]}}]}}]} as unknown as DocumentNode<CommissionByPeriodQuery, CommissionByPeriodQueryVariables>;
export const RevenueOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RevenueOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenueOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<RevenueOverviewQuery, RevenueOverviewQueryVariables>;
export const TotalMemberCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TotalMemberCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMemberCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"minerCount"}}]}}]}}]} as unknown as DocumentNode<TotalMemberCountsQuery, TotalMemberCountsQueryVariables>;
export const LatestStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LatestStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}}]}}]}}]} as unknown as DocumentNode<LatestStatisticsQuery, LatestStatisticsQueryVariables>;
export const TxcSharesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TxcShares"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcShares"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}}]}}]}}]} as unknown as DocumentNode<TxcSharesQuery, TxcSharesQueryVariables>;
export const TopEarnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopEarners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topEarners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"earned"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<TopEarnersQuery, TopEarnersQueryVariables>;
export const TopRecruitersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopRecruiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topRecruiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}}]}}]}}]} as unknown as DocumentNode<TopRecruitersQuery, TopRecruitersQueryVariables>;
export const MembersByCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MembersByCountry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByCountry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}}]}}]}}]} as unknown as DocumentNode<MembersByCountryQuery, MembersByCountryQueryVariables>;
export const TxcRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TxcRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"txcPrice"}},{"kind":"Field","name":{"kind":"Name","value":"inputChain"}},{"kind":"Field","name":{"kind":"Name","value":"inputToken"}},{"kind":"Field","name":{"kind":"Name","value":"outputChain"}},{"kind":"Field","name":{"kind":"Name","value":"outputToken"}},{"kind":"Field","name":{"kind":"Name","value":"paidBalance"}},{"kind":"Field","name":{"kind":"Name","value":"sentBalance"}},{"kind":"Field","name":{"kind":"Name","value":"inputAddress"}},{"kind":"Field","name":{"kind":"Name","value":"outputAddress"}},{"kind":"Field","name":{"kind":"Name","value":"inputBalanceInCent"}},{"kind":"Field","name":{"kind":"Name","value":"paidTransactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"sentTransactionHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TxcRequestsQuery, TxcRequestsQueryVariables>;
export const CreateBuyTxcOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBuyTXCOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBuyTXCInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBuyTXCOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateBuyTxcOrderMutation, CreateBuyTxcOrderMutationVariables>;
export const CreateBuyWtxcOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBuyWTXCOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBuyWTXCInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBuyWTXCOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateBuyWtxcOrderMutation, CreateBuyWtxcOrderMutationVariables>;
export const FetchTeamCommissionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTeamCommissionStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leftFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rightFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referralFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"LEFT"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leftFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"RIGHT"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rightFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"REFERRAL"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referralFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchTeamCommissionStatsQuery, FetchTeamCommissionStatsQueryVariables>;
export const TeamCommissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamCommissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamReport"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamReport"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}},{"kind":"Field","name":{"kind":"Name","value":"maxL"}},{"kind":"Field","name":{"kind":"Name","value":"maxR"}},{"kind":"Field","name":{"kind":"Name","value":"endL"}},{"kind":"Field","name":{"kind":"Name","value":"endR"}},{"kind":"Field","name":{"kind":"Name","value":"pkgL"}},{"kind":"Field","name":{"kind":"Name","value":"pkgR"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shortNote"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"weekStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"commissionType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TeamCommissionsQuery, TeamCommissionsQueryVariables>;
export const IntroducersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Introducers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<IntroducersQuery, IntroducersQueryVariables>;
export const SponsorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sponsors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<SponsorsQuery, SponsorsQueryVariables>;
export const PublicUploadPresignedUrLsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicUploadPresignedURLs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUploadURLRequests"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUploadPresignedURLs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}}]} as unknown as DocumentNode<PublicUploadPresignedUrLsQuery, PublicUploadPresignedUrLsQueryVariables>;
export const CompleteUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompleteUploadInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}}]} as unknown as DocumentNode<CompleteUploadMutation, CompleteUploadMutationVariables>;
export const BlocksdataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blocksdata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocksData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"hashRate"}}]}}]}}]} as unknown as DocumentNode<BlocksdataQuery, BlocksdataQueryVariables>;