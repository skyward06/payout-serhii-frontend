import type {
  OrderStatus,
  PaymentType,
  PaymentChain,
  PaymentToken,
  OrderPaymentMethod,
} from 'src/__generated__/graphql';

export type BasicOrder = {
  __typename?: 'Order';
  id: string;
  ID: number;
  expiredAt: any;
  status: OrderStatus;
  paidBalance: number;
  acceptFirstTx: boolean;
  paymentAddress?: string | null;
  requiredBalance?: number | null;
  paymentType?: PaymentType | null;
  paymentToken?: PaymentToken | null;
  paymentChain?: PaymentChain | null;
  availablePaymentMethods: Array<OrderPaymentMethod>;
};

export type OrderContextValue = {
  order: BasicOrder;
};
