export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'lamp',
  repo: 'https://github.com/luisangelmaciel',
  editUrl: 'https://github.com/luisangelmaciel/adebayosegun.com/edit/main/data/',
  website: 'https://adebayosegun.com',
  title:
    'Software Developer and Product Designer',
  description:
    'UI Engineer passionate about design systems, state machines, accessibility, DX and Rust.',
  image: 'https://adebayosegun.com/static/images/banner.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - lamp',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/luisangelmaciel',
    twitter: 'https://twitter.com/theluisangelmaciel',
    linkedin: 'https://linkedin.com/in/luisangelmaciel',
    email: 'mailto:sage@adebayosegun.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@theluisangelmaciel',
    site: '@theluisangelmaciel',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://adebayosegun.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer',
      },
    ],
  },
};

export default siteConfig;
