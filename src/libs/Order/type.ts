import type {
  OrderStatus,
  PaymentChain,
  PaymentToken,
  OrderPaymentMethod,
} from 'src/__generated__/graphql';

export type OrderContextValue = {
  order: {
    __typename?: 'Order';
    id: string;
    ID: number;
    expiredAt: any;
    status: OrderStatus;
    paidBalance: number;
    acceptFirstTx: boolean;
    paymentAddress?: string | null;
    requiredBalance?: number | null;
    paymentToken?: PaymentToken | null;
    paymentChain?: PaymentChain | null;
    availablePaymentMethods: Array<OrderPaymentMethod>;
  };
};
