/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateBugReport($data: CreateBugReportInput!) {\n    createBugReport(data: $data) {\n      message\n      result\n    }\n  }\n": types.CreateBugReportDocument,
    "\n  query CalculateProfitability($data: ProfitabilityCalculationInput!) {\n    calculateProfitability(data: $data) {\n      startDate\n      target\n      init\n      period\n      txc\n      txcCost\n      extraTXC\n      endDate\n      txcPrice\n    }\n  }\n": types.CalculateProfitabilityDocument,
    "\n  query WeeklyCommissions($sort: String, $page: String, $filter: JSONObject) {\n    weeklyCommissions(sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        hasUSDC\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        commissionType\n        weekStartDate\n        paymentMethod\n      }\n      total\n    }\n  }\n": types.WeeklyCommissionsDocument,
    "\n  query FetchCommissionStats(\n    $allFilter: JSONObject\n    $pendingFilter: JSONObject\n    $declineFilter: JSONObject\n    $sentFilter: JSONObject\n  ) {\n    all: weeklyCommissions(filter: $allFilter) {\n      total\n    }\n    pending: weeklyCommissions(filter: $pendingFilter) {\n      total\n    }\n    decline: weeklyCommissions(filter: $declineFilter) {\n      total\n    }\n    sent: weeklyCommissions(filter: $sentFilter) {\n      total\n    }\n  }\n": types.FetchCommissionStatsDocument,
    "\n  query EmailRecipients($sort: String, $page: String, $filter: JSONObject) {\n    emailRecipients(sort: $sort, page: $page, filter: $filter) {\n      emailRecipients {\n        id\n        body\n        email\n        sender\n        status\n        sentAt\n        subject\n        openedAt\n        senderName\n      }\n      total\n    }\n  }\n": types.EmailRecipientsDocument,
    "\n  query EmailRecipientById($emailRecipientByIdId: ID!) {\n    emailRecipientById(id: $emailRecipientByIdId) {\n      id\n      body\n      email\n      sender\n      status\n      sentAt\n      subject\n      openedAt\n      senderName\n    }\n  }\n": types.EmailRecipientByIdDocument,
    "\n  query Invoices($sort: String, $page: String, $filter: JSONObject) {\n    invoices(sort: $sort, page: $page, filter: $filter) {\n      invoices {\n        id\n        ID\n        name\n        status\n        dueDate\n        createdAt\n        description\n        amountInCents\n        invoiceFile {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n": types.InvoicesDocument,
    "\n  query Notifications($sort: String, $page: String, $filter: JSONObject) {\n    notifications(sort: $sort, page: $page, filter: $filter) {\n      notifications {\n        id\n        read\n        level\n        message\n        createdAt\n        updatedAt\n      }\n      total\n    }\n  }\n": types.NotificationsDocument,
    "\n  mutation SetReadNotification($data: IDInput!) {\n    setReadNotification(data: $data) {\n      message\n      result\n    }\n  }\n": types.SetReadNotificationDocument,
    "\n  mutation SetReadAllNotifications {\n    setReadAllNotifications {\n      count\n    }\n  }\n": types.SetReadAllNotificationsDocument,
    "\n  subscription NewNotification {\n    newNotification {\n      id\n      level\n      message\n      createdAt\n      updatedAt\n    }\n  }\n": types.NewNotificationDocument,
    "\n  query OrderById($data: IDInput!) {\n    orderById(data: $data) {\n      id\n      ID\n      status\n      expiredAt\n      paidBalance\n      paymentToken\n      paymentChain\n      acceptFirstTx\n      paymentAddress\n      requiredBalance\n      availablePaymentMethods {\n        isP2P\n        paymentChain\n        paymentToken\n      }\n    }\n  }\n": types.OrderByIdDocument,
    "\n  query CheckOrder($data: IDInput!) {\n    orderById(data: $data) {\n      status\n    }\n  }\n": types.CheckOrderDocument,
    "\n  mutation CreateAddHashOrder($data: CreateOrderInput!) {\n    createAddHashOrder(data: $data) {\n      id\n    }\n  }\n": types.CreateAddHashOrderDocument,
    "\n  mutation CreateSignUpOrder($data: CreateSignUpOrderInput!) {\n    createSignUpOrder(data: $data) {\n      id\n    }\n  }\n": types.CreateSignUpOrderDocument,
    "\n  mutation CancelOrder($data: IDInput!) {\n    cancelOrder(data: $data) {\n      id\n      status\n    }\n  }\n": types.CancelOrderDocument,
    "\n  mutation SetOrderPayment($data: OrderPaymentSetInput!) {\n    setOrderPayment(data: $data) {\n      id\n      status\n      paymentToken\n      paymentAddress\n      requiredBalance\n    }\n  }\n": types.SetOrderPaymentDocument,
    "\n  query PaymentMethods($sort: String, $page: String, $filter: JSONObject) {\n    paymentMethods(sort: $sort, page: $page, filter: $filter) {\n      paymentMethods {\n        id\n        name\n        adminVisible\n        enrollmentVisible\n        createdAt\n      }\n      total\n    }\n  }\n": types.PaymentMethodsDocument,
    "\n  query PlacementMembersWithLevel($data: PlacementWithLevelInput!) {\n    placementMembersWithLevel(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n": types.PlacementMembersWithLevelDocument,
    "\n  query PlacementChildrenById($data: IDInput!) {\n    placementChildrenById(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n": types.PlacementChildrenByIdDocument,
    "\n  query PlacementMembersToMember($data: IDInput!) {\n    placementMembersToMember(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n": types.PlacementMembersToMemberDocument,
    "\n  query PlacementMembersToBottom($data: PlacementToBottomInput!) {\n    placementMembersToBottom(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n": types.PlacementMembersToBottomDocument,
    "\n  query PlacementSearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    placementSearchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      username\n      fullName\n      createdAt\n      placementPosition\n      placementParentId\n      status\n      placementStatus\n    }\n  }\n": types.PlacementSearchMembersDocument,
    "\n  query fetchMe {\n    memberMe {\n      id\n      ID\n      city\n      email\n      point\n      state\n      avatar\n      mobile\n      status\n      assetId\n      country\n      zipCode\n      peerCode\n      username\n      fullName\n      sponsorId\n      allowState\n      ethAssetId\n      teamReport\n      OTPEnabled\n      teamStrategy\n      emailVerified\n      isTexitRanger\n      totalTXCShared\n      peerAcceptable\n      peerETHAddress\n      primaryAddress\n      currentHashPower\n      secondaryAddress\n      totalIntroducers\n      preferredContact\n      commissionDefault\n      placementParentId\n      placementPosition\n      placementRequested\n      shareIsTexitRanger\n      reimbursementEnabled\n      orderedAvailablePoint\n      preferredContactDetail\n      cashCommissionPotential\n      groupSetting {\n        id\n        name\n        commissionDefaults\n      }\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n      sponsor {\n        id\n        username\n        fullName\n      }\n      placementParent {\n        id\n        username\n        fullName\n      }\n      placementChildren {\n        id\n        username\n        fullName\n        placementPosition\n      }\n      memberWallets {\n        id\n        note\n        address\n        percent\n        memberId\n        payoutId\n        isDefault\n        payout {\n          id\n          method\n          status\n          name\n          display\n        }\n      }\n      setting {\n        id\n        memberId\n        communication\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.FetchMeDocument,
    "\n  query FetchMemberStats($inactiveFilter: JSONObject) {\n    all: members {\n      total\n    }\n    inactive: members(filter: $inactiveFilter) {\n      total\n    }\n  }\n": types.FetchMemberStatsDocument,
    "\n  query SearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    searchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      email\n      username\n      fullName\n    }\n  }\n": types.SearchMembersDocument,
    "\n  query FetchPlacementMembers {\n    sponsorMembers {\n      id\n      username\n      fullName\n      sponsorId\n      createdAt\n    }\n  }\n": types.FetchPlacementMembersDocument,
    "\n  mutation UpdateMember($data: UpdateMemberInput!) {\n    updateMember(data: $data) {\n      id\n      mobile\n      primaryAddress\n      secondaryAddress\n      memberWallets {\n        id\n        address\n        percent\n        memberId\n        payoutId\n        payout {\n          method\n          display\n        }\n      }\n      assetId\n    }\n  }\n": types.UpdateMemberDocument,
    "\n  query MemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        issuedAt\n        hashPower\n        txcShared\n      }\n      total\n    }\n  }\n": types.MemberStatisticsDocument,
    "\n  mutation UpdatePasswordMember($data: UpdateMemberPasswordInput!) {\n    updatePasswordMember(data: $data) {\n      message\n      result\n    }\n  }\n": types.UpdatePasswordMemberDocument,
    "\n  query generateQuery {\n    generate2FA\n  }\n": types.GenerateQueryDocument,
    "\n  mutation Verify2FAAndEnable($data: Verify2FAInput!) {\n    verify2FAAndEnable(data: $data) {\n      accessToken\n    }\n  }\n": types.Verify2FaAndEnableDocument,
    "\n  mutation Verify2FAToken($data: TokenInput!) {\n    verify2FAToken(data: $data) {\n      accessToken\n      status\n    }\n  }\n": types.Verify2FaTokenDocument,
    "\n  mutation Disable2FA {\n    disable2FA {\n      accessToken\n    }\n  }\n": types.Disable2FaDocument,
    "\n  mutation UpsertSettingByMemberId($data: UpsertSettingInput!) {\n    upsertSettingByMemberId(data: $data) {\n      id\n    }\n  }\n": types.UpsertSettingByMemberIdDocument,
    "\n  mutation MemberLogout {\n    memberLogout {\n      result\n      message\n    }\n  }\n": types.MemberLogoutDocument,
    "\n  mutation MemberExchangeLogin($data: MemberLoginInput!) {\n    memberExchangeLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n": types.MemberExchangeLoginDocument,
    "\n  mutation VerifyEmailCode($data: VerificationCodeInput!) {\n    verifyEmailCode(data: $data) {\n      accessToken\n    }\n  }\n": types.VerifyEmailCodeDocument,
    "\n  query Reimbursements($sort: String, $page: String, $filter: JSONObject) {\n    reimbursements(sort: $sort, page: $page, filter: $filter) {\n      reimbursements {\n        id\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        description\n        paidAmountInCent\n        requestedAmountInCent\n        attachments {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n": types.ReimbursementsDocument,
    "\n  query ReimbursementById($id: Int!) {\n    reimbursementById(ID: $id) {\n      id\n      status\n      memberId\n      description\n      payToAddress\n      paidAmountInCent\n      requestedAmountInCent\n      attachments {\n        id\n        url\n        size\n        mimeType\n        originalName\n      }\n    }\n  }\n": types.ReimbursementByIdDocument,
    "\n  mutation CreateReimbursement($data: CreateReimbursementInput!) {\n    createReimbursement(data: $data) {\n      id\n    }\n  }\n": types.CreateReimbursementDocument,
    "\n  mutation UpdateReimbursement($data: UpdateReimbursementInput!) {\n    updateReimbursement(data: $data) {\n      id\n    }\n  }\n": types.UpdateReimbursementDocument,
    "\n  mutation RequestResetPassword($data: EmailInput!) {\n    requestResetPassword(data: $data) {\n      result\n      message\n    }\n  }\n": types.RequestResetPasswordDocument,
    "\n  mutation ResetPasswordByToken($data: ResetPasswordTokenInput!) {\n    resetPasswordByToken(data: $data) {\n      message\n      result\n    }\n  }\n": types.ResetPasswordByTokenDocument,
    "\n  mutation VerifyResetPasswordToken($data: TokenInput!) {\n    verifyResetPasswordToken(data: $data) {\n      token\n    }\n  }\n": types.VerifyResetPasswordTokenDocument,
    "\n  query Reward($sort: String, $page: String, $filter: JSONObject) {\n    statistics(sort: $sort, page: $page, filter: $filter) {\n      statistics {\n        id\n        to\n        from\n        status\n        issuedAt\n        txcShared\n        newBlocks\n        totalBlocks\n        rewardedTXC\n        totalMembers\n        totalHashPower\n      }\n      total\n    }\n  }\n": types.RewardDocument,
    "\n  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        id\n        percent\n        issuedAt\n        memberId\n        txcShared\n        hashPower\n        createdAt\n        updatedAt\n        deletedAt\n        statisticsId\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n": types.FetchMemberStatisticsDocument,
    "\n  query Rewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    rewardsByWallets(from: $from, to: $to) {\n      rewards {\n        txc\n        wallet {\n          id\n          address\n          percent\n          payout {\n            name\n            method\n          }\n        }\n      }\n    }\n  }\n": types.RewardsDocument,
    "\n  query DailyRewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    dailyRewards(from: $from, to: $to) {\n      rewards {\n        day\n        rewardsByWallet {\n          txc\n          wallet {\n            address\n            payout {\n              method\n            }\n          }\n        }\n        totalTxc\n      }\n    }\n  }\n": types.DailyRewardsDocument,
    "\n  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {\n    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {\n      memberStatisticsWallets {\n        id\n        txc\n        issuedAt\n        memberWallet {\n          address\n        }\n        memberStatistic {\n          hashPower\n          percent\n          txcShared\n        }\n      }\n    }\n  }\n": types.MemberStatisticsWalletsDocument,
    "\n  query Sales($sort: String, $page: String, $filter: JSONObject) {\n    sales(sort: $sort, page: $page, filter: $filter) {\n      sales {\n        id\n        ID\n        email\n        token\n        point\n        amount\n        status\n        isMetal\n        toEmail\n        assetId\n        memberId\n        username\n        fullName\n        orderedAt\n        createdAt\n        sponsorCnt\n        toMemberId\n        toUsername\n        toFullName\n        productName\n        paymentMethod\n      }\n      total\n    }\n  }\n": types.SalesDocument,
    "\n  query FetchSaleStats($allFilter: JSONObject, $inactiveFilter: JSONObject) {\n    all: sales(filter: $allFilter) {\n      total\n    }\n    inactive: sales(filter: $inactiveFilter) {\n      total\n    }\n  }\n": types.FetchSaleStatsDocument,
    "\n  query Packages($sort: String, $page: String, $filter: JSONObject) {\n    packages(sort: $sort, page: $page, filter: $filter) {\n      packages {\n        id\n        date\n        token\n        point\n        amount\n        status\n        createdAt\n        updatedAt\n        deletedAt\n        productName\n        orderVisibility\n        enrollVisibility\n      }\n      total\n    }\n  }\n": types.PackagesDocument,
    "\n  query OrderAvailablePoint {\n    orderAvailablePoint\n  }\n": types.OrderAvailablePointDocument,
    "\n  mutation Login($data: MemberLoginInput!) {\n    memberLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n": types.LoginDocument,
    "\n  mutation SignUpMember($data: SignupFormInput!) {\n    signUpMember(data: $data) {\n      id\n      email\n      username\n    }\n  }\n": types.SignUpMemberDocument,
    "\n  mutation SendEmailVerificationCode {\n    sendEmailVerificationCode {\n      message\n      result\n    }\n  }\n": types.SendEmailVerificationCodeDocument,
    "\n  query Promos($sort: String, $page: String, $filter: JSONObject) {\n    promos(sort: $sort, page: $page, filter: $filter) {\n      promos {\n        id\n        code\n        status\n        endDate\n        startDate\n        createdAt\n        updatedAt\n        deletedAt\n        description\n      }\n      total\n    }\n  }\n": types.PromosDocument,
    "\n  query checkPeerCode($code: String!) {\n    checkIfPeerCodeExists(code: $code)\n  }\n": types.CheckPeerCodeDocument,
    "\n  mutation CreateAddMemberOrder($data: CreateAddMemberOrderInput!) {\n    createAddMemberOrder(data: $data) {\n      id\n    }\n  }\n": types.CreateAddMemberOrderDocument,
    "\n  query Query($data: LiveStatsArgs!) {\n    liveBlockStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveMiningStats {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveUserStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n  }\n": types.QueryDocument,
    "\n  query Statistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n": types.StatisticsDocument,
    "\n  query TXCMemberStatistics($page: String, $filter: JSONObject, $sort: String) {\n    memberStatistics(page: $page, filter: $filter, sort: $sort) {\n      memberStatistics {\n        id\n        hashPower\n        txcShared\n        issuedAt\n        percent\n        createdAt\n        updatedAt\n        deletedAt\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n": types.TxcMemberStatisticsDocument,
    "\n  query HistoryStatistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n": types.HistoryStatisticsDocument,
    "\n  query BlocksData($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      hashRate\n      difficulty\n      base\n      baseDate\n      soldHashPower\n    }\n  }\n": types.BlocksDataDocument,
    "\n  query NewMemberCounts($data: PeriodStatsArgs!) {\n    newMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n": types.NewMemberCountsDocument,
    "\n  query AverageMemberReward($data: PeriodStatsArgs!) {\n    averageMemberReward(data: $data) {\n      base\n      baseDate\n      reward\n    }\n  }\n": types.AverageMemberRewardDocument,
    "\n  query CommissionByPeriod($data: PeriodStatsArgs!) {\n    commissionByPeriod(data: $data) {\n      base\n      baseDate\n      commission\n      revenue\n    }\n  }\n": types.CommissionByPeriodDocument,
    "\n  query RevenueOverview {\n    revenueOverview {\n      type\n      total\n    }\n  }\n": types.RevenueOverviewDocument,
    "\n  query TotalMemberCounts($data: PeriodStatsArgs!) {\n    totalMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n": types.TotalMemberCountsDocument,
    "\n  query LatestStatistics {\n    latestStatistics {\n      id\n      newBlocks\n      totalMembers\n      txcShared\n      issuedAt\n    }\n  }\n": types.LatestStatisticsDocument,
    "\n  query TxcShares($data: PeriodStatsArgs!) {\n    txcShares(data: $data) {\n      base\n      baseDate\n      txc\n    }\n  }\n": types.TxcSharesDocument,
    "\n  query TopEarners {\n    topEarners {\n      avatar\n      earned\n      fullName\n    }\n  }\n": types.TopEarnersDocument,
    "\n  query TopRecruiters {\n    topRecruiters {\n      avatar\n      fullName\n      totalIntroducers\n    }\n  }\n": types.TopRecruitersDocument,
    "\n  query MembersByCountry {\n    membersByCountry {\n      country\n      memberCount\n    }\n  }\n": types.MembersByCountryDocument,
    "\n  query TxcRequests($sort: String, $page: String, $filter: JSONObject) {\n    txcRequests(sort: $sort, page: $page, filter: $filter) {\n      txcRequests {\n        id\n        ID\n        type\n        status\n        paidAt\n        sentAt\n        memberId\n        txcPrice\n        inputChain\n        inputToken\n        outputChain\n        outputToken\n        paidBalance\n        sentBalance\n        inputAddress\n        outputAddress\n        inputBalanceInCent\n        paidTransactionHash\n        sentTransactionHash\n      }\n      total\n    }\n  }\n": types.TxcRequestsDocument,
    "\n  mutation CreateBuyTXCOrder($data: CreateBuyTXCInput!) {\n    createBuyTXCOrder(data: $data) {\n      id\n    }\n  }\n": types.CreateBuyTxcOrderDocument,
    "\n  mutation CreateBuyWTXCOrder($data: CreateBuyWTXCInput!) {\n    createBuyWTXCOrder(data: $data) {\n      id\n    }\n  }\n": types.CreateBuyWtxcOrderDocument,
    "\n  query FetchTeamCommissionStats(\n    $leftFilter: TeamReportSection!\n    $rightFilter: TeamReportSection!\n    $referralFilter: TeamReportSection!\n  ) {\n    LEFT: teamCommissions(teamReport: $leftFilter) {\n      total\n    }\n    RIGHT: teamCommissions(teamReport: $rightFilter) {\n      total\n    }\n    REFERRAL: teamCommissions(teamReport: $referralFilter) {\n      total\n    }\n  }\n": types.FetchTeamCommissionStatsDocument,
    "\n  query TeamCommissions(\n    $teamReport: TeamReportSection!\n    $sort: String\n    $page: String\n    $filter: JSONObject\n  ) {\n    teamCommissions(teamReport: $teamReport, sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        weekStartDate\n        paymentMethod\n        commissionType\n      }\n      total\n    }\n  }\n": types.TeamCommissionsDocument,
    "\n  query Introducers($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        email\n        point\n        mobile\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n": types.IntroducersDocument,
    "\n  query Sponsors($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        point\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n": types.SponsorsDocument,
    "\n  query Blocksdata($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      base\n      difficulty\n      hashRate\n    }\n  }\n": types.BlocksdataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBugReport($data: CreateBugReportInput!) {\n    createBugReport(data: $data) {\n      message\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBugReport($data: CreateBugReportInput!) {\n    createBugReport(data: $data) {\n      message\n      result\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CalculateProfitability($data: ProfitabilityCalculationInput!) {\n    calculateProfitability(data: $data) {\n      startDate\n      target\n      init\n      period\n      txc\n      txcCost\n      extraTXC\n      endDate\n      txcPrice\n    }\n  }\n"): (typeof documents)["\n  query CalculateProfitability($data: ProfitabilityCalculationInput!) {\n    calculateProfitability(data: $data) {\n      startDate\n      target\n      init\n      period\n      txc\n      txcCost\n      extraTXC\n      endDate\n      txcPrice\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WeeklyCommissions($sort: String, $page: String, $filter: JSONObject) {\n    weeklyCommissions(sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        hasUSDC\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        commissionType\n        weekStartDate\n        paymentMethod\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query WeeklyCommissions($sort: String, $page: String, $filter: JSONObject) {\n    weeklyCommissions(sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        hasUSDC\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        commissionType\n        weekStartDate\n        paymentMethod\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchCommissionStats(\n    $allFilter: JSONObject\n    $pendingFilter: JSONObject\n    $declineFilter: JSONObject\n    $sentFilter: JSONObject\n  ) {\n    all: weeklyCommissions(filter: $allFilter) {\n      total\n    }\n    pending: weeklyCommissions(filter: $pendingFilter) {\n      total\n    }\n    decline: weeklyCommissions(filter: $declineFilter) {\n      total\n    }\n    sent: weeklyCommissions(filter: $sentFilter) {\n      total\n    }\n  }\n"): (typeof documents)["\n  query FetchCommissionStats(\n    $allFilter: JSONObject\n    $pendingFilter: JSONObject\n    $declineFilter: JSONObject\n    $sentFilter: JSONObject\n  ) {\n    all: weeklyCommissions(filter: $allFilter) {\n      total\n    }\n    pending: weeklyCommissions(filter: $pendingFilter) {\n      total\n    }\n    decline: weeklyCommissions(filter: $declineFilter) {\n      total\n    }\n    sent: weeklyCommissions(filter: $sentFilter) {\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query EmailRecipients($sort: String, $page: String, $filter: JSONObject) {\n    emailRecipients(sort: $sort, page: $page, filter: $filter) {\n      emailRecipients {\n        id\n        body\n        email\n        sender\n        status\n        sentAt\n        subject\n        openedAt\n        senderName\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query EmailRecipients($sort: String, $page: String, $filter: JSONObject) {\n    emailRecipients(sort: $sort, page: $page, filter: $filter) {\n      emailRecipients {\n        id\n        body\n        email\n        sender\n        status\n        sentAt\n        subject\n        openedAt\n        senderName\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query EmailRecipientById($emailRecipientByIdId: ID!) {\n    emailRecipientById(id: $emailRecipientByIdId) {\n      id\n      body\n      email\n      sender\n      status\n      sentAt\n      subject\n      openedAt\n      senderName\n    }\n  }\n"): (typeof documents)["\n  query EmailRecipientById($emailRecipientByIdId: ID!) {\n    emailRecipientById(id: $emailRecipientByIdId) {\n      id\n      body\n      email\n      sender\n      status\n      sentAt\n      subject\n      openedAt\n      senderName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Invoices($sort: String, $page: String, $filter: JSONObject) {\n    invoices(sort: $sort, page: $page, filter: $filter) {\n      invoices {\n        id\n        ID\n        name\n        status\n        dueDate\n        createdAt\n        description\n        amountInCents\n        invoiceFile {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Invoices($sort: String, $page: String, $filter: JSONObject) {\n    invoices(sort: $sort, page: $page, filter: $filter) {\n      invoices {\n        id\n        ID\n        name\n        status\n        dueDate\n        createdAt\n        description\n        amountInCents\n        invoiceFile {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Notifications($sort: String, $page: String, $filter: JSONObject) {\n    notifications(sort: $sort, page: $page, filter: $filter) {\n      notifications {\n        id\n        read\n        level\n        message\n        createdAt\n        updatedAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Notifications($sort: String, $page: String, $filter: JSONObject) {\n    notifications(sort: $sort, page: $page, filter: $filter) {\n      notifications {\n        id\n        read\n        level\n        message\n        createdAt\n        updatedAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetReadNotification($data: IDInput!) {\n    setReadNotification(data: $data) {\n      message\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation SetReadNotification($data: IDInput!) {\n    setReadNotification(data: $data) {\n      message\n      result\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetReadAllNotifications {\n    setReadAllNotifications {\n      count\n    }\n  }\n"): (typeof documents)["\n  mutation SetReadAllNotifications {\n    setReadAllNotifications {\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription NewNotification {\n    newNotification {\n      id\n      level\n      message\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  subscription NewNotification {\n    newNotification {\n      id\n      level\n      message\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query OrderById($data: IDInput!) {\n    orderById(data: $data) {\n      id\n      ID\n      status\n      expiredAt\n      paidBalance\n      paymentToken\n      paymentChain\n      acceptFirstTx\n      paymentAddress\n      requiredBalance\n      availablePaymentMethods {\n        isP2P\n        paymentChain\n        paymentToken\n      }\n    }\n  }\n"): (typeof documents)["\n  query OrderById($data: IDInput!) {\n    orderById(data: $data) {\n      id\n      ID\n      status\n      expiredAt\n      paidBalance\n      paymentToken\n      paymentChain\n      acceptFirstTx\n      paymentAddress\n      requiredBalance\n      availablePaymentMethods {\n        isP2P\n        paymentChain\n        paymentToken\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CheckOrder($data: IDInput!) {\n    orderById(data: $data) {\n      status\n    }\n  }\n"): (typeof documents)["\n  query CheckOrder($data: IDInput!) {\n    orderById(data: $data) {\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAddHashOrder($data: CreateOrderInput!) {\n    createAddHashOrder(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAddHashOrder($data: CreateOrderInput!) {\n    createAddHashOrder(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateSignUpOrder($data: CreateSignUpOrderInput!) {\n    createSignUpOrder(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSignUpOrder($data: CreateSignUpOrderInput!) {\n    createSignUpOrder(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CancelOrder($data: IDInput!) {\n    cancelOrder(data: $data) {\n      id\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation CancelOrder($data: IDInput!) {\n    cancelOrder(data: $data) {\n      id\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetOrderPayment($data: OrderPaymentSetInput!) {\n    setOrderPayment(data: $data) {\n      id\n      status\n      paymentToken\n      paymentAddress\n      requiredBalance\n    }\n  }\n"): (typeof documents)["\n  mutation SetOrderPayment($data: OrderPaymentSetInput!) {\n    setOrderPayment(data: $data) {\n      id\n      status\n      paymentToken\n      paymentAddress\n      requiredBalance\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PaymentMethods($sort: String, $page: String, $filter: JSONObject) {\n    paymentMethods(sort: $sort, page: $page, filter: $filter) {\n      paymentMethods {\n        id\n        name\n        adminVisible\n        enrollmentVisible\n        createdAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query PaymentMethods($sort: String, $page: String, $filter: JSONObject) {\n    paymentMethods(sort: $sort, page: $page, filter: $filter) {\n      paymentMethods {\n        id\n        name\n        adminVisible\n        enrollmentVisible\n        createdAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlacementMembersWithLevel($data: PlacementWithLevelInput!) {\n    placementMembersWithLevel(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"): (typeof documents)["\n  query PlacementMembersWithLevel($data: PlacementWithLevelInput!) {\n    placementMembersWithLevel(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlacementChildrenById($data: IDInput!) {\n    placementChildrenById(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"): (typeof documents)["\n  query PlacementChildrenById($data: IDInput!) {\n    placementChildrenById(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlacementMembersToMember($data: IDInput!) {\n    placementMembersToMember(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"): (typeof documents)["\n  query PlacementMembersToMember($data: IDInput!) {\n    placementMembersToMember(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlacementMembersToBottom($data: PlacementToBottomInput!) {\n    placementMembersToBottom(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"): (typeof documents)["\n  query PlacementMembersToBottom($data: PlacementToBottomInput!) {\n    placementMembersToBottom(data: $data) {\n      id\n      status\n      username\n      fullName\n      createdAt\n      teamStrategy\n      placementStatus\n      placementPosition\n      placementParentId\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlacementSearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    placementSearchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      username\n      fullName\n      createdAt\n      placementPosition\n      placementParentId\n      status\n      placementStatus\n    }\n  }\n"): (typeof documents)["\n  query PlacementSearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    placementSearchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      username\n      fullName\n      createdAt\n      placementPosition\n      placementParentId\n      status\n      placementStatus\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchMe {\n    memberMe {\n      id\n      ID\n      city\n      email\n      point\n      state\n      avatar\n      mobile\n      status\n      assetId\n      country\n      zipCode\n      peerCode\n      username\n      fullName\n      sponsorId\n      allowState\n      ethAssetId\n      teamReport\n      OTPEnabled\n      teamStrategy\n      emailVerified\n      isTexitRanger\n      totalTXCShared\n      peerAcceptable\n      peerETHAddress\n      primaryAddress\n      currentHashPower\n      secondaryAddress\n      totalIntroducers\n      preferredContact\n      commissionDefault\n      placementParentId\n      placementPosition\n      placementRequested\n      shareIsTexitRanger\n      reimbursementEnabled\n      orderedAvailablePoint\n      preferredContactDetail\n      cashCommissionPotential\n      groupSetting {\n        id\n        name\n        commissionDefaults\n      }\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n      sponsor {\n        id\n        username\n        fullName\n      }\n      placementParent {\n        id\n        username\n        fullName\n      }\n      placementChildren {\n        id\n        username\n        fullName\n        placementPosition\n      }\n      memberWallets {\n        id\n        note\n        address\n        percent\n        memberId\n        payoutId\n        isDefault\n        payout {\n          id\n          method\n          status\n          name\n          display\n        }\n      }\n      setting {\n        id\n        memberId\n        communication\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query fetchMe {\n    memberMe {\n      id\n      ID\n      city\n      email\n      point\n      state\n      avatar\n      mobile\n      status\n      assetId\n      country\n      zipCode\n      peerCode\n      username\n      fullName\n      sponsorId\n      allowState\n      ethAssetId\n      teamReport\n      OTPEnabled\n      teamStrategy\n      emailVerified\n      isTexitRanger\n      totalTXCShared\n      peerAcceptable\n      peerETHAddress\n      primaryAddress\n      currentHashPower\n      secondaryAddress\n      totalIntroducers\n      preferredContact\n      commissionDefault\n      placementParentId\n      placementPosition\n      placementRequested\n      shareIsTexitRanger\n      reimbursementEnabled\n      orderedAvailablePoint\n      preferredContactDetail\n      cashCommissionPotential\n      groupSetting {\n        id\n        name\n        commissionDefaults\n      }\n      commission {\n        begL\n        begR\n        newL\n        newR\n      }\n      sponsor {\n        id\n        username\n        fullName\n      }\n      placementParent {\n        id\n        username\n        fullName\n      }\n      placementChildren {\n        id\n        username\n        fullName\n        placementPosition\n      }\n      memberWallets {\n        id\n        note\n        address\n        percent\n        memberId\n        payoutId\n        isDefault\n        payout {\n          id\n          method\n          status\n          name\n          display\n        }\n      }\n      setting {\n        id\n        memberId\n        communication\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchMemberStats($inactiveFilter: JSONObject) {\n    all: members {\n      total\n    }\n    inactive: members(filter: $inactiveFilter) {\n      total\n    }\n  }\n"): (typeof documents)["\n  query FetchMemberStats($inactiveFilter: JSONObject) {\n    all: members {\n      total\n    }\n    inactive: members(filter: $inactiveFilter) {\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    searchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      email\n      username\n      fullName\n    }\n  }\n"): (typeof documents)["\n  query SearchMembers($sort: String, $page: String, $filter: JSONObject) {\n    searchMembers(sort: $sort, page: $page, filter: $filter) {\n      id\n      email\n      username\n      fullName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchPlacementMembers {\n    sponsorMembers {\n      id\n      username\n      fullName\n      sponsorId\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query FetchPlacementMembers {\n    sponsorMembers {\n      id\n      username\n      fullName\n      sponsorId\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateMember($data: UpdateMemberInput!) {\n    updateMember(data: $data) {\n      id\n      mobile\n      primaryAddress\n      secondaryAddress\n      memberWallets {\n        id\n        address\n        percent\n        memberId\n        payoutId\n        payout {\n          method\n          display\n        }\n      }\n      assetId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMember($data: UpdateMemberInput!) {\n    updateMember(data: $data) {\n      id\n      mobile\n      primaryAddress\n      secondaryAddress\n      memberWallets {\n        id\n        address\n        percent\n        memberId\n        payoutId\n        payout {\n          method\n          display\n        }\n      }\n      assetId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        issuedAt\n        hashPower\n        txcShared\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query MemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        issuedAt\n        hashPower\n        txcShared\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePasswordMember($data: UpdateMemberPasswordInput!) {\n    updatePasswordMember(data: $data) {\n      message\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePasswordMember($data: UpdateMemberPasswordInput!) {\n    updatePasswordMember(data: $data) {\n      message\n      result\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query generateQuery {\n    generate2FA\n  }\n"): (typeof documents)["\n  query generateQuery {\n    generate2FA\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Verify2FAAndEnable($data: Verify2FAInput!) {\n    verify2FAAndEnable(data: $data) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Verify2FAAndEnable($data: Verify2FAInput!) {\n    verify2FAAndEnable(data: $data) {\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Verify2FAToken($data: TokenInput!) {\n    verify2FAToken(data: $data) {\n      accessToken\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation Verify2FAToken($data: TokenInput!) {\n    verify2FAToken(data: $data) {\n      accessToken\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Disable2FA {\n    disable2FA {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Disable2FA {\n    disable2FA {\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpsertSettingByMemberId($data: UpsertSettingInput!) {\n    upsertSettingByMemberId(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpsertSettingByMemberId($data: UpsertSettingInput!) {\n    upsertSettingByMemberId(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MemberLogout {\n    memberLogout {\n      result\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation MemberLogout {\n    memberLogout {\n      result\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MemberExchangeLogin($data: MemberLoginInput!) {\n    memberExchangeLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n"): (typeof documents)["\n  mutation MemberExchangeLogin($data: MemberLoginInput!) {\n    memberExchangeLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyEmailCode($data: VerificationCodeInput!) {\n    verifyEmailCode(data: $data) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyEmailCode($data: VerificationCodeInput!) {\n    verifyEmailCode(data: $data) {\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Reimbursements($sort: String, $page: String, $filter: JSONObject) {\n    reimbursements(sort: $sort, page: $page, filter: $filter) {\n      reimbursements {\n        id\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        description\n        paidAmountInCent\n        requestedAmountInCent\n        attachments {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Reimbursements($sort: String, $page: String, $filter: JSONObject) {\n    reimbursements(sort: $sort, page: $page, filter: $filter) {\n      reimbursements {\n        id\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        description\n        paidAmountInCent\n        requestedAmountInCent\n        attachments {\n          id\n          url\n          size\n          mimeType\n          originalName\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ReimbursementById($id: Int!) {\n    reimbursementById(ID: $id) {\n      id\n      status\n      memberId\n      description\n      payToAddress\n      paidAmountInCent\n      requestedAmountInCent\n      attachments {\n        id\n        url\n        size\n        mimeType\n        originalName\n      }\n    }\n  }\n"): (typeof documents)["\n  query ReimbursementById($id: Int!) {\n    reimbursementById(ID: $id) {\n      id\n      status\n      memberId\n      description\n      payToAddress\n      paidAmountInCent\n      requestedAmountInCent\n      attachments {\n        id\n        url\n        size\n        mimeType\n        originalName\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateReimbursement($data: CreateReimbursementInput!) {\n    createReimbursement(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReimbursement($data: CreateReimbursementInput!) {\n    createReimbursement(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateReimbursement($data: UpdateReimbursementInput!) {\n    updateReimbursement(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateReimbursement($data: UpdateReimbursementInput!) {\n    updateReimbursement(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RequestResetPassword($data: EmailInput!) {\n    requestResetPassword(data: $data) {\n      result\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation RequestResetPassword($data: EmailInput!) {\n    requestResetPassword(data: $data) {\n      result\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResetPasswordByToken($data: ResetPasswordTokenInput!) {\n    resetPasswordByToken(data: $data) {\n      message\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation ResetPasswordByToken($data: ResetPasswordTokenInput!) {\n    resetPasswordByToken(data: $data) {\n      message\n      result\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyResetPasswordToken($data: TokenInput!) {\n    verifyResetPasswordToken(data: $data) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyResetPasswordToken($data: TokenInput!) {\n    verifyResetPasswordToken(data: $data) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Reward($sort: String, $page: String, $filter: JSONObject) {\n    statistics(sort: $sort, page: $page, filter: $filter) {\n      statistics {\n        id\n        to\n        from\n        status\n        issuedAt\n        txcShared\n        newBlocks\n        totalBlocks\n        rewardedTXC\n        totalMembers\n        totalHashPower\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Reward($sort: String, $page: String, $filter: JSONObject) {\n    statistics(sort: $sort, page: $page, filter: $filter) {\n      statistics {\n        id\n        to\n        from\n        status\n        issuedAt\n        txcShared\n        newBlocks\n        totalBlocks\n        rewardedTXC\n        totalMembers\n        totalHashPower\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        id\n        percent\n        issuedAt\n        memberId\n        txcShared\n        hashPower\n        createdAt\n        updatedAt\n        deletedAt\n        statisticsId\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {\n    memberStatistics(sort: $sort, page: $page, filter: $filter) {\n      memberStatistics {\n        id\n        percent\n        issuedAt\n        memberId\n        txcShared\n        hashPower\n        createdAt\n        updatedAt\n        deletedAt\n        statisticsId\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Rewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    rewardsByWallets(from: $from, to: $to) {\n      rewards {\n        txc\n        wallet {\n          id\n          address\n          percent\n          payout {\n            name\n            method\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Rewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    rewardsByWallets(from: $from, to: $to) {\n      rewards {\n        txc\n        wallet {\n          id\n          address\n          percent\n          payout {\n            name\n            method\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DailyRewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    dailyRewards(from: $from, to: $to) {\n      rewards {\n        day\n        rewardsByWallet {\n          txc\n          wallet {\n            address\n            payout {\n              method\n            }\n          }\n        }\n        totalTxc\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyRewards($from: DateTimeISO!, $to: DateTimeISO!) {\n    dailyRewards(from: $from, to: $to) {\n      rewards {\n        day\n        rewardsByWallet {\n          txc\n          wallet {\n            address\n            payout {\n              method\n            }\n          }\n        }\n        totalTxc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {\n    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {\n      memberStatisticsWallets {\n        id\n        txc\n        issuedAt\n        memberWallet {\n          address\n        }\n        memberStatistic {\n          hashPower\n          percent\n          txcShared\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {\n    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {\n      memberStatisticsWallets {\n        id\n        txc\n        issuedAt\n        memberWallet {\n          address\n        }\n        memberStatistic {\n          hashPower\n          percent\n          txcShared\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Sales($sort: String, $page: String, $filter: JSONObject) {\n    sales(sort: $sort, page: $page, filter: $filter) {\n      sales {\n        id\n        ID\n        email\n        token\n        point\n        amount\n        status\n        isMetal\n        toEmail\n        assetId\n        memberId\n        username\n        fullName\n        orderedAt\n        createdAt\n        sponsorCnt\n        toMemberId\n        toUsername\n        toFullName\n        productName\n        paymentMethod\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Sales($sort: String, $page: String, $filter: JSONObject) {\n    sales(sort: $sort, page: $page, filter: $filter) {\n      sales {\n        id\n        ID\n        email\n        token\n        point\n        amount\n        status\n        isMetal\n        toEmail\n        assetId\n        memberId\n        username\n        fullName\n        orderedAt\n        createdAt\n        sponsorCnt\n        toMemberId\n        toUsername\n        toFullName\n        productName\n        paymentMethod\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchSaleStats($allFilter: JSONObject, $inactiveFilter: JSONObject) {\n    all: sales(filter: $allFilter) {\n      total\n    }\n    inactive: sales(filter: $inactiveFilter) {\n      total\n    }\n  }\n"): (typeof documents)["\n  query FetchSaleStats($allFilter: JSONObject, $inactiveFilter: JSONObject) {\n    all: sales(filter: $allFilter) {\n      total\n    }\n    inactive: sales(filter: $inactiveFilter) {\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Packages($sort: String, $page: String, $filter: JSONObject) {\n    packages(sort: $sort, page: $page, filter: $filter) {\n      packages {\n        id\n        date\n        token\n        point\n        amount\n        status\n        createdAt\n        updatedAt\n        deletedAt\n        productName\n        orderVisibility\n        enrollVisibility\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Packages($sort: String, $page: String, $filter: JSONObject) {\n    packages(sort: $sort, page: $page, filter: $filter) {\n      packages {\n        id\n        date\n        token\n        point\n        amount\n        status\n        createdAt\n        updatedAt\n        deletedAt\n        productName\n        orderVisibility\n        enrollVisibility\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query OrderAvailablePoint {\n    orderAvailablePoint\n  }\n"): (typeof documents)["\n  query OrderAvailablePoint {\n    orderAvailablePoint\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($data: MemberLoginInput!) {\n    memberLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n"): (typeof documents)["\n  mutation Login($data: MemberLoginInput!) {\n    memberLogin(data: $data) {\n      status\n      accessToken\n      passwordExpired\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUpMember($data: SignupFormInput!) {\n    signUpMember(data: $data) {\n      id\n      email\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation SignUpMember($data: SignupFormInput!) {\n    signUpMember(data: $data) {\n      id\n      email\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SendEmailVerificationCode {\n    sendEmailVerificationCode {\n      message\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation SendEmailVerificationCode {\n    sendEmailVerificationCode {\n      message\n      result\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Promos($sort: String, $page: String, $filter: JSONObject) {\n    promos(sort: $sort, page: $page, filter: $filter) {\n      promos {\n        id\n        code\n        status\n        endDate\n        startDate\n        createdAt\n        updatedAt\n        deletedAt\n        description\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Promos($sort: String, $page: String, $filter: JSONObject) {\n    promos(sort: $sort, page: $page, filter: $filter) {\n      promos {\n        id\n        code\n        status\n        endDate\n        startDate\n        createdAt\n        updatedAt\n        deletedAt\n        description\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkPeerCode($code: String!) {\n    checkIfPeerCodeExists(code: $code)\n  }\n"): (typeof documents)["\n  query checkPeerCode($code: String!) {\n    checkIfPeerCodeExists(code: $code)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAddMemberOrder($data: CreateAddMemberOrderInput!) {\n    createAddMemberOrder(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAddMemberOrder($data: CreateAddMemberOrderInput!) {\n    createAddMemberOrder(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Query($data: LiveStatsArgs!) {\n    liveBlockStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveMiningStats {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveUserStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n  }\n"): (typeof documents)["\n  query Query($data: LiveStatsArgs!) {\n    liveBlockStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveMiningStats {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n    liveUserStats(data: $data) {\n      dailyData {\n        count\n        field\n      }\n      meta\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Statistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Statistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TXCMemberStatistics($page: String, $filter: JSONObject, $sort: String) {\n    memberStatistics(page: $page, filter: $filter, sort: $sort) {\n      memberStatistics {\n        id\n        hashPower\n        txcShared\n        issuedAt\n        percent\n        createdAt\n        updatedAt\n        deletedAt\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query TXCMemberStatistics($page: String, $filter: JSONObject, $sort: String) {\n    memberStatistics(page: $page, filter: $filter, sort: $sort) {\n      memberStatistics {\n        id\n        hashPower\n        txcShared\n        issuedAt\n        percent\n        createdAt\n        updatedAt\n        deletedAt\n        member {\n          id\n          username\n          fullName\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HistoryStatistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query HistoryStatistics($page: String, $filter: JSONObject, $sort: String) {\n    statistics(page: $page, filter: $filter, sort: $sort) {\n      statistics {\n        id\n        totalHashPower\n        newBlocks\n        totalBlocks\n        totalMembers\n        txcShared\n        issuedAt\n        from\n        to\n        status\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BlocksData($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      hashRate\n      difficulty\n      base\n      baseDate\n      soldHashPower\n    }\n  }\n"): (typeof documents)["\n  query BlocksData($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      hashRate\n      difficulty\n      base\n      baseDate\n      soldHashPower\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NewMemberCounts($data: PeriodStatsArgs!) {\n    newMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n"): (typeof documents)["\n  query NewMemberCounts($data: PeriodStatsArgs!) {\n    newMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AverageMemberReward($data: PeriodStatsArgs!) {\n    averageMemberReward(data: $data) {\n      base\n      baseDate\n      reward\n    }\n  }\n"): (typeof documents)["\n  query AverageMemberReward($data: PeriodStatsArgs!) {\n    averageMemberReward(data: $data) {\n      base\n      baseDate\n      reward\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CommissionByPeriod($data: PeriodStatsArgs!) {\n    commissionByPeriod(data: $data) {\n      base\n      baseDate\n      commission\n      revenue\n    }\n  }\n"): (typeof documents)["\n  query CommissionByPeriod($data: PeriodStatsArgs!) {\n    commissionByPeriod(data: $data) {\n      base\n      baseDate\n      commission\n      revenue\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RevenueOverview {\n    revenueOverview {\n      type\n      total\n    }\n  }\n"): (typeof documents)["\n  query RevenueOverview {\n    revenueOverview {\n      type\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TotalMemberCounts($data: PeriodStatsArgs!) {\n    totalMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n"): (typeof documents)["\n  query TotalMemberCounts($data: PeriodStatsArgs!) {\n    totalMemberCounts(data: $data) {\n      base\n      baseDate\n      minerCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LatestStatistics {\n    latestStatistics {\n      id\n      newBlocks\n      totalMembers\n      txcShared\n      issuedAt\n    }\n  }\n"): (typeof documents)["\n  query LatestStatistics {\n    latestStatistics {\n      id\n      newBlocks\n      totalMembers\n      txcShared\n      issuedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TxcShares($data: PeriodStatsArgs!) {\n    txcShares(data: $data) {\n      base\n      baseDate\n      txc\n    }\n  }\n"): (typeof documents)["\n  query TxcShares($data: PeriodStatsArgs!) {\n    txcShares(data: $data) {\n      base\n      baseDate\n      txc\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopEarners {\n    topEarners {\n      avatar\n      earned\n      fullName\n    }\n  }\n"): (typeof documents)["\n  query TopEarners {\n    topEarners {\n      avatar\n      earned\n      fullName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopRecruiters {\n    topRecruiters {\n      avatar\n      fullName\n      totalIntroducers\n    }\n  }\n"): (typeof documents)["\n  query TopRecruiters {\n    topRecruiters {\n      avatar\n      fullName\n      totalIntroducers\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MembersByCountry {\n    membersByCountry {\n      country\n      memberCount\n    }\n  }\n"): (typeof documents)["\n  query MembersByCountry {\n    membersByCountry {\n      country\n      memberCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TxcRequests($sort: String, $page: String, $filter: JSONObject) {\n    txcRequests(sort: $sort, page: $page, filter: $filter) {\n      txcRequests {\n        id\n        ID\n        type\n        status\n        paidAt\n        sentAt\n        memberId\n        txcPrice\n        inputChain\n        inputToken\n        outputChain\n        outputToken\n        paidBalance\n        sentBalance\n        inputAddress\n        outputAddress\n        inputBalanceInCent\n        paidTransactionHash\n        sentTransactionHash\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query TxcRequests($sort: String, $page: String, $filter: JSONObject) {\n    txcRequests(sort: $sort, page: $page, filter: $filter) {\n      txcRequests {\n        id\n        ID\n        type\n        status\n        paidAt\n        sentAt\n        memberId\n        txcPrice\n        inputChain\n        inputToken\n        outputChain\n        outputToken\n        paidBalance\n        sentBalance\n        inputAddress\n        outputAddress\n        inputBalanceInCent\n        paidTransactionHash\n        sentTransactionHash\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBuyTXCOrder($data: CreateBuyTXCInput!) {\n    createBuyTXCOrder(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBuyTXCOrder($data: CreateBuyTXCInput!) {\n    createBuyTXCOrder(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBuyWTXCOrder($data: CreateBuyWTXCInput!) {\n    createBuyWTXCOrder(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBuyWTXCOrder($data: CreateBuyWTXCInput!) {\n    createBuyWTXCOrder(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchTeamCommissionStats(\n    $leftFilter: TeamReportSection!\n    $rightFilter: TeamReportSection!\n    $referralFilter: TeamReportSection!\n  ) {\n    LEFT: teamCommissions(teamReport: $leftFilter) {\n      total\n    }\n    RIGHT: teamCommissions(teamReport: $rightFilter) {\n      total\n    }\n    REFERRAL: teamCommissions(teamReport: $referralFilter) {\n      total\n    }\n  }\n"): (typeof documents)["\n  query FetchTeamCommissionStats(\n    $leftFilter: TeamReportSection!\n    $rightFilter: TeamReportSection!\n    $referralFilter: TeamReportSection!\n  ) {\n    LEFT: teamCommissions(teamReport: $leftFilter) {\n      total\n    }\n    RIGHT: teamCommissions(teamReport: $rightFilter) {\n      total\n    }\n    REFERRAL: teamCommissions(teamReport: $referralFilter) {\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TeamCommissions(\n    $teamReport: TeamReportSection!\n    $sort: String\n    $page: String\n    $filter: JSONObject\n  ) {\n    teamCommissions(teamReport: $teamReport, sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        weekStartDate\n        paymentMethod\n        commissionType\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query TeamCommissions(\n    $teamReport: TeamReportSection!\n    $sort: String\n    $page: String\n    $filter: JSONObject\n  ) {\n    teamCommissions(teamReport: $teamReport, sort: $sort, page: $page, filter: $filter) {\n      weeklyCommissions {\n        id\n        ID\n        begL\n        begR\n        newL\n        newR\n        maxL\n        maxR\n        endL\n        endR\n        pkgL\n        pkgR\n        note\n        status\n        username\n        fullName\n        memberId\n        createdAt\n        shortNote\n        commission\n        weekStartDate\n        paymentMethod\n        commissionType\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Introducers($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        email\n        point\n        mobile\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Introducers($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        email\n        point\n        mobile\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Sponsors($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        point\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query Sponsors($sort: String, $page: String, $filter: JSONObject) {\n    introducers(sort: $sort, page: $page, filter: $filter) {\n      introducers {\n        id\n        ID\n        point\n        username\n        fullName\n        createdAt\n      }\n      total\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Blocksdata($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      base\n      difficulty\n      hashRate\n    }\n  }\n"): (typeof documents)["\n  query Blocksdata($data: PeriodStatsArgs!) {\n    blocksData(data: $data) {\n      base\n      difficulty\n      hashRate\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;