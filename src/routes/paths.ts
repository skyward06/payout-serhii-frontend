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
  INTRO: '/intro',
  CALCULATOR: '/calculator',
  STATISTICS: '/statistics',
  RAPID_REWARDS: '/rapid-rewards',
  CONTACT: '/contact',
  ORDER: '/order',
  MAINTENANCE: '/maintenance',

  // Dashboard
  OVERVIEW: '/overview',
  SALES: '/sales',
  REWARD: '/reward',
  SPONSOR: '/sponsorships',
  PLACEMENT: '/placement',
  COMMISSION: '/commission',
  RESOURCE: '/resource',
  PROFILE: '/my-account',
  TEAM: '/team',
  INVOICE: '/invoices',
  TXC_REQUEST: 'txc-request',
  COMMUNICATION: '/communication',
  REIMBURSEMENT: '/reimbursement',
  SILVER_GUARANTEE: '/silverbugs',
  NOTIFICATIONS: '/notifications',

  // Widget
  WIDGET: '/widget',
  PEER: '/peer',
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

    // ORDER
    order: { root: ROOTS.ORDER, detail: (id: string) => `${ROOTS.ORDER}/${id}` },
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
    },
    notifications: {
      root: ROOTS.NOTIFICATIONS,
    },
    communication: {
      root: ROOTS.COMMUNICATION,
    },
    team: {
      root: ROOTS.TEAM,
    },
    invoice: { root: ROOTS.INVOICE },
    calculator: { root: ROOTS.CALCULATOR },
    txcRequest: { root: ROOTS.TXC_REQUEST, new: `${ROOTS.TXC_REQUEST}/new` },
    reimbursement: {
      root: ROOTS.REIMBURSEMENT,
      new: `${ROOTS.REIMBURSEMENT}/new`,
      edit: (id: string) => `${ROOTS.REIMBURSEMENT}/${id}`,
    },
    peer: { confirmation: `${ROOTS.PEER}/confirmation` },
  },

  widget: {
    signUp: `${ROOTS.WIDGET}/sign-up`,
  },

  page403: '/403',
  notFound: '/404',
  maintenance: ROOTS.MAINTENANCE,
};
