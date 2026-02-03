// ----------------------------------------------------------------------

const ROOTS = {
  // Auth
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  UPDATE_PASSWORD: '/update-password',
  VERIFY_EMAIL: '/verify-email',
  VERIFY_RESULT: '/thanks',

  // Pages
  ACH: '/ach-form',
  INTRO: '/intro',
  CALCULATOR: '/calculator',
  STATISTICS: '/statistics',
  RAPID_REWARDS: '/rapid-rewards',
  CONTACT: '/contact',
  MAINTENANCE: '/maintenance',
  ABOUT_US: '/about-us',
  ORDER: '/order',
  POST: '/post',

  // Dashboard
  COMMISSION: '/commission',
  COMMUNICATION: '/communication',
  INVOICE: '/invoices',
  PROFILE: '/my-account',
  NOTIFICATIONS: '/notifications',
  OVERVIEW: '/overview',
  PLACEMENT: '/placement',
  REIMBURSEMENT: '/reimbursement',
  RESOURCE: '/resource',
  REWARD: '/reward',
  SALES: '/sales',
  SILVER_GUARANTEE: '/silverbugs',
  SPONSOR: '/sponsorships',
  TEAM: '/team',
  TXC_REQUEST: '/txc-request',
  EMAIL_REGION: '/email-region',
  REFUND_POLICY: '/refund-policy',

  // Widget
  WIDGET: '/widget',

  // Common
  PEER: '/peer',

  CONFIRM_ADDRESS: '/confirm-address',

  CONFIRM_UNSUBSCRIBE: '/unsubscribe',

  EVENT: '/event',

  COMING_SOON: '/coming-soon',

  NEW_HOMEPAGE: '/new-homepage',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signIn: ROOTS.SIGN_IN,
    signUp: ROOTS.SIGN_UP,

    // FORGOT PASSWORD
    forgotPassword: ROOTS.FORGOT_PASSWORD,

    // RESET PASSWORD
    resetPassword: ROOTS.RESET_PASSWORD,

    // RESET PASSWORD
    updatePassword: ROOTS.UPDATE_PASSWORD,

    // VERIFY EMAIL
    verifyEmail: ROOTS.VERIFY_EMAIL,

    // RESULT
    verifyResult: ROOTS.VERIFY_RESULT,
  },

  // PAGES
  pages: {
    // INTRO
    intro: { root: ROOTS.INTRO },

    // RAPID REWARDS
    rapidRewards: { root: ROOTS.RAPID_REWARDS },

    // SILVER GUARANTEE
    silverGuarantee: { root: ROOTS.SILVER_GUARANTEE },

    // CONTACT
    contact: { root: ROOTS.CONTACT },

    // STATISTICS
    statistics: { root: ROOTS.STATISTICS },

    // ABOUT US
    aboutUs: { root: ROOTS.ABOUT_US },

    // ORDER
    order: { root: ROOTS.ORDER, detail: (id: string) => `${ROOTS.ORDER}/${id}` },

    // ACH Form
    ach: { root: ROOTS.ACH },

    // POST
    post: { root: ROOTS.POST, view: (slug: string) => `${ROOTS.POST}/${slug}` },

    // Refund Policy
    refundPolicy: { root: ROOTS.REFUND_POLICY },
  },

  // DASHBOARD
  dashboard: {
    root: '/',
    overview: {
      root: ROOTS.OVERVIEW,
    },
    sales: {
      root: ROOTS.SALES,
      edit: (id: string) => `${ROOTS.SALES}/${id}`,
      new: `${ROOTS.SALES}/new`,
    },
    reward: {
      root: ROOTS.REWARD,
      new: `${ROOTS.REWARD}/new`,
      edit: (id: string) => `${ROOTS.REWARD}/new/${id}`,
      detail: (id: string) => `${ROOTS.REWARD}/${id}`,
      view: (id: string) => `${ROOTS.REWARD}/statistics/${id}`,
    },
    sponsor: { root: ROOTS.SPONSOR, tabMatch: `${ROOTS.SPONSOR}/:tab` },
    placement: { root: ROOTS.PLACEMENT },
    commission: {
      root: ROOTS.COMMISSION,
      action: `${ROOTS.COMMISSION}/action`,
      confirmation: `${ROOTS.COMMISSION}/confirmation`,
    },
    resource: { root: ROOTS.RESOURCE, view: (slug: string) => `${ROOTS.RESOURCE}/${slug}` },
    profile: {
      root: ROOTS.PROFILE,
      activation: `${ROOTS.PROFILE}/activation`,
    },
    notifications: { root: ROOTS.NOTIFICATIONS },
    communication: { root: ROOTS.COMMUNICATION },
    emailRegion: { root: ROOTS.EMAIL_REGION },
    team: { root: ROOTS.TEAM },
    invoice: { root: ROOTS.INVOICE },
    txcRequest: { root: ROOTS.TXC_REQUEST, new: `${ROOTS.TXC_REQUEST}/new` },
    reimbursement: {
      root: ROOTS.REIMBURSEMENT,
      new: `${ROOTS.REIMBURSEMENT}/new`,
      edit: (id: string) => `${ROOTS.REIMBURSEMENT}/${id}`,
    },
  },

  widget: {
    signUp: `${ROOTS.WIDGET}/sign-up`,
  },

  peer: { confirmation: `${ROOTS.PEER}/confirmation` },

  event: { root: ROOTS.EVENT },

  confirmAddress: ROOTS.CONFIRM_ADDRESS,

  confirmUnsubscribe: ROOTS.CONFIRM_UNSUBSCRIBE,

  comingSoon: ROOTS.COMING_SOON,

  NewHomepage: ROOTS.NEW_HOMEPAGE,

  page403: '/403',
  notFound: '/404',
  maintenance: ROOTS.MAINTENANCE,
};
