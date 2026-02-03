import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

import { SectionText, SectionTitle } from './components';

export function RefundPolicyView() {
  const router = useRouter();

  return (
    <Container>
      <Box py={4}>
        <Button
          startIcon={<Iconify icon="eva:arrow-back-fill" />}
          onClick={() => router.back()}
          sx={{ mb: 3 }}
        >
          Go Back
        </Button>

        <Typography typography="h2" fontWeight={700} textAlign="center" mb={5}>
          Refund Policy
        </Typography>

        <Container>
          <Typography textAlign="center" lineHeight={1.8} color="text.secondary" mb={5}>
            At TEXIT coin, we value every member of our community and are committed to providing a
            transparent and fair experience. While we aim for long-term participation and success
            for all members, we understand that situations may arise where a refund is requested.
            Please review the following refund guidelines carefully.
          </Typography>

          <Box
            bgcolor="warning.lighter"
            borderLeft={(theme) => `4px solid ${theme.palette.warning.main}`}
            p={2}
            mb={1}
          >
            <Typography typography="h6" fontWeight={600} mb={1} color="warning.darker">
              ⚠️ Before Considering a Refund
            </Typography>
            <Typography lineHeight={1.7} color="text.secondary">
              We strongly recommend you speak with your sponsor or Texit Coin customer service to
              get any of your questions or concerns resolved before proceeding with a refund
              request.
            </Typography>
          </Box>

          <Divider sx={{ my: 5 }} />

          <Stack spacing={4}>
            <Box mb={2}>
              <SectionTitle>1. Full Refund Eligibility</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>
                  A full refund may be issued within the commission period - after that a 50% refund
                  may be given within a 15 day period as a miner, if you are not happy with our
                  project.
                </SectionText>
                <SectionText>After 15 days you are not eligible for ANY refund.</SectionText>
                <SectionText>
                  The full refunded amount will be deducted from the sponsor&apos;s (referrer) cash
                  potential who generated the sale.
                </SectionText>
              </Box>
            </Box>

            <Box mb={2}>
              <SectionTitle>2. Partial Refund Eligibility</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>
                  If you have already received a cold storage wallet, and activated it, or have
                  created a hot wallet that has mined coins, the current market value of any coins
                  mined or received will be deducted from your refund amount prior to processing.
                </SectionText>
              </Box>
            </Box>

            <Box mb={2}>
              <SectionTitle>3. Peer-to-Peer Payments</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>
                  If your payment was made directly to a peer (peer-to-peer) and their invoice has
                  not yet been paid, you must contact that peer directly to arrange your refund.
                </SectionText>
                <SectionText>
                  TEXITcoin cannot process or guarantee refunds for peer-to-peer transactions.
                  Responsibility for these transactions rests solely between the parties involved.
                </SectionText>
              </Box>
            </Box>

            <Box mb={2}>
              <SectionTitle>4. Referral Accountability and Sponsor Responsibility</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>
                  Please be aware that refund requests directly impact the sponsor (referrer) who
                  generated the sale.
                </SectionText>
                <SectionText>
                  Any approved refund, whether full or partial, will result in a full deduction from
                  the sponsor via their cash potential.
                </SectionText>
                <SectionText>
                  If a refund is granted to someone that you personally sponsor your commissions
                  will be frozen until the refunded amount is paid in full back to Texit Coin at
                  which time your commissions will resume.
                </SectionText>
                <SectionText>
                  Our compensation structure depends on committed participation, and early
                  withdrawals can create operational and financial challenges for those who
                  supported your entry into the program.
                </SectionText>
              </Box>
            </Box>

            <Box mb={2}>
              <SectionTitle>5. Before You Decide</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>
                  We encourage you to carefully consider your options before submitting a refund
                  request.
                </SectionText>
                <SectionText>
                  Many participants who initially felt uncertain found that allowing additional time
                  enabled them to sell their position at a profit or benefit from further
                  opportunities within the TEXITcoin ecosystem.
                </SectionText>
                <SectionText>
                  If you have questions or concerns, we recommend contacting your sponsor or
                  TEXITcoin support before proceeding. We are here to help you make the best
                  decision for your situation.
                </SectionText>
              </Box>
            </Box>

            <Box mb={2}>
              <SectionTitle>6. Refund Review and Final Approval</SectionTitle>
              <Box borderRadius={1} bgcolor="background.neutral" p={3}>
                <SectionText>All refund requests are reviewed on a case-by-case basis.</SectionText>
                <SectionText>
                  Refunds are not guaranteed, even if eligibility criteria are met.
                </SectionText>
                <SectionText>
                  Final approval is determined at the sole discretion of TEXITcoin, based on timing,
                  participation status, and overall circumstances.
                </SectionText>
              </Box>
            </Box>
          </Stack>

          <Divider sx={{ my: 5 }} />

          <Typography
            p={3}
            lineHeight={1.8}
            borderRadius={1}
            textAlign="center"
            color="text.secondary"
            bgcolor="background.neutral"
          >
            If you have any questions about our refund policy, please contact your sponsor or reach
            out to TEXITcoin customer support. We&apos;re here to help ensure you have the best
            possible experience with our platform.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
