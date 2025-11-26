import { _mock } from './_mock';

export const _socials = [
  {
    value: 'telegram',
    name: 'Telegram',
    path: 'https://t.me/texitcoin_txc',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    path: 'https://www.instagram.com/texitcoin/',
  },
  {
    value: 'tiktok',
    name: 'TikTok',
    path: 'https://www.tiktok.com/@TEXITcoins',
  },
  {
    value: 'twitter',
    name: 'Twitter',
    path: 'https://x.com/TEXITcoin',
  },
];

export const _carouselsMembers = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.portrait(index),
}));

// ----------------------------------------------------------------------

export const _testimonials = [
  {
    name: 'James Martinez',
    postedDate: new Date('2025-10-15'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(1),
    content: `TEXITcoin brought me back to what crypto was supposed to be - honest money for honest people. The Cold Storage Coin is brilliant, the community is supportive, and I've already earned back my initial investment through commissions. This is the real deal!`,
  },
  {
    name: 'Sarah Thompson',
    postedDate: new Date('2025-09-22'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(2),
    content: `I was skeptical at first, but the transparency of the TXC blockchain and the weekly Zoom calls convinced me this mission is genuine. Built in Texas, by Texans - keeping mining local instead of foreign controlled. Finally, a cryptocurrency with real integrity and purpose.`,
  },
  {
    name: 'Michael Rodriguez',
    postedDate: new Date('2025-11-08'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(3),
    content: `The affiliate program is phenomenal! I've brought in 8 new miners and the cash commissions have been life-changing. Plus, my hash power keeps growing. TEXITcoin rewards advocates, not just early adopters. This is how crypto should work.`,
  },
  {
    name: 'Linda Chen',
    postedDate: new Date('2025-10-30'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(4),
    content: `As someone new to cryptocurrency, I appreciated the education and support from the TXC team. The Payout Dashboard makes everything transparent, and I love that we're building something for generations - not just a quick pump and dump scheme.`,
  },
  {
    name: 'Robert Jackson',
    postedDate: new Date('2025-11-12'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(5),
    content: `I've been in crypto since 2017, and TEXITcoin is different. Layer 1 blockchain, permissioned mining in Texas, zero pre-mine, and a community focused on actual utility. The weekly TXC payouts to my Cold Storage Coin prove this isn't vaporware. Excited for our future!`,
  },
  {
    name: 'Jennifer Walker',
    postedDate: new Date('2025-09-18'),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(6),
    content: `What sold me was the mission - taking back control from mega banks and foreign entities. The team's dedication to honest trade and decentralization is refreshing. I'm not just mining TXC, I'm part of a movement to restore cryptocurrency to its original purpose.`,
  },
];
