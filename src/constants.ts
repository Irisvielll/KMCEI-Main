import { Instagram, Linkedin, Twitter, Globe, Youtube, Music, BookOpen, Lock, ExternalLink, Mail, Github } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  links: SocialLink[];
  tier: 'primary' | 'secondary' | 'standard';
}

export interface GameInfo {
  platform: string;
  releaseDate: string;
  engine: string;
  genre: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  info: GameInfo;
}

export interface MediaLink {
  platform: 'YouTube' | 'Instagram' | 'X' | 'LinkedIn' | 'SoundCloud';
  url: string;
  icon: any;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
  storeUrl: string;
}

export interface Novel {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const GAMES: Game[] = [
  {
    id: 'game-1',
    title: 'Project Aether',
    description: 'A high-octane tactical shooter set in a collapsing digital reality.',
    image: 'https://picsum.photos/seed/game1/800/450',
    info: {
      platform: 'PC / Console',
      releaseDate: 'TBA 2026',
      engine: 'Unreal Engine 5',
      genre: 'Tactical FPS'
    }
  },
  {
    id: 'game-2',
    title: 'Void Runner',
    description: 'An atmospheric parkour game through the fragments of a lost civilization.',
    image: 'https://picsum.photos/seed/game2/800/450',
    info: {
      platform: 'PC',
      releaseDate: 'Q4 2025',
      engine: 'Unity',
      genre: 'Action / Platformer'
    }
  }
];

export const MEDIA_LINKS: MediaLink[] = [
  { platform: 'YouTube', url: 'https://youtube.com/@kmcei', icon: Youtube },
  { platform: 'Instagram', url: 'https://instagram.com/kmcei', icon: Instagram },
  { platform: 'X', url: 'https://x.com/kmcei', icon: Twitter },
];

export const NOVELS: Novel[] = [
  {
    id: 'novel-1',
    title: 'The Last Realm',
    description: 'The first volume in the KMCEI literary universe.',
    link: '#',
    image: 'https://picsum.photos/seed/novel-cover/400/600'
  }
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: 'merch-1',
    name: 'KMCEI Technical Hoodie',
    price: '$85.00',
    image: 'https://picsum.photos/seed/merch1/600/600',
    storeUrl: '#'
  },
  {
    id: 'merch-2',
    name: 'Aetheric Soundscape Vinyl',
    price: '$45.00',
    image: 'https://picsum.photos/seed/merch2/600/600',
    storeUrl: '#'
  }
];

export interface Song {
  id: string;
  title: string;
  featuredIn: string;
  composer: string;
  duration: string;
  license: string;
  image: string;
}

export const SONGS: Song[] = [
  {
    id: 'song-1',
    title: 'Aetheric Resonance',
    featuredIn: 'Project Aether',
    composer: 'KonneAqua',
    duration: '4:20',
    license: 'Original Soundtrack',
    image: 'https://picsum.photos/seed/song1/400/400'
  },
  {
    id: 'song-2',
    title: 'Void Echoes',
    featuredIn: 'Void Runner',
    composer: 'KonneAqua',
    duration: '3:45',
    license: 'Original Soundtrack',
    image: 'https://picsum.photos/seed/song2/400/400'
  }
];

export const SUPPORT_LINK = "https://www.buymeacoffee.com/kmcei";

export const ABOUT_TEXT = "KMCEI Productions is a creative studio dedicated to producing immersive experiences. Helping bridge the gap between imagination and intangible limitations.";

export const DESIGN_TOKENS = {
  colors: {
    primary: '#D4AF37',
    secondary: '#00F0FF',
    background: '#0A0A0A',
    surface: '#121212',
    text: '#FFFFFF',
    muted: '#888888'
  },
  spacing: {
    base: 8,
    scale: [4, 8, 16, 24, 32, 48, 64]
  },
  typography: {
    display: 'Cormorant Garamond',
    sans: 'Inter',
    mono: 'JetBrains Mono',
    scale: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px', '96px']
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'kevin-n',
    name: 'Kevin N.',
    role: 'Lead Designer & Developer',
    bio: 'Architecting digital ecosystems with a focus on high-end aesthetics and technical precision.',
    image: 'https://picsum.photos/seed/kevin/400/400',
    tier: 'primary',
    links: [
      { platform: 'Instagram', url: '#', icon: Instagram },
      { platform: 'LinkedIn', url: '#', icon: Linkedin },
      { platform: 'Portfolio', url: '#', icon: Globe },
    ]
  },
  {
    id: 'milo-g',
    name: 'Milo G.',
    role: 'Lead Visual Artist & Animation Director',
    bio: 'Defining the visual language of KMCEI through cinematic motion and evocative art.',
    image: 'https://picsum.photos/seed/milo/400/400',
    tier: 'secondary',
    links: [
      { platform: 'Instagram', url: '#', icon: Instagram },
      { platform: 'ArtStation', url: '#', icon: ExternalLink },
    ]
  },
  {
    id: 'luvelre-n',
    name: 'Luvelre N.',
    role: 'Narrative Designer & Lead Scriptwriter',
    bio: 'Crafting immersive worlds and complex narratives that drive our storytelling core.',
    image: 'https://picsum.photos/seed/luvelre/400/400',
    tier: 'standard',
    links: [
      { platform: 'X', url: '#', icon: Twitter },
      { platform: 'Portfolio', url: '#', icon: BookOpen },
    ]
  },
  {
    id: 'konne-aqua',
    name: 'KonneAqua',
    role: 'Audio Director & Lead Composer',
    bio: 'Sculpting the sonic identity of our projects with technical mastery and emotional depth.',
    image: 'https://picsum.photos/seed/aqua/400/400',
    tier: 'standard',
    links: [
      { platform: 'YouTube', url: '#', icon: Youtube },
      { platform: 'SoundCloud', url: '#', icon: Music },
    ]
  }
];
