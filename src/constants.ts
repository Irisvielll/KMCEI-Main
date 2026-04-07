import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe, 
  Youtube, 
  Music, 
  BookOpen, 
  ExternalLink, 
  Mail, 
  Github 
} from 'lucide-react';
import { 
  TeamMember, 
  Game, 
  MediaLink, 
  MerchItem, 
  Novel, 
  Song 
} from './types';

export const GAMES: Game[] = [
  {
    id: 'game-1',
    title: 'Candle letters',
    description: 'Traversing between the plane of life and the depths of dreams alongside your childhood friends. finding a way to break a curse to save a life or use the curse for your depraved ideals',
    image: 'https://placehold.co/800x450/000000/FFFFFF?text=Candle+Letters',
    info: {
      platform: 'PC / Console',
      releaseDate: 'TBA',
      engine: 'TBA',
      genre: 'Adventure / Narrative'
    }
  },
  {
    id: 'game-2',
    title: 'Khatalein',
    description: 'Visual novel and turn based game. that focuses on the life of Chatarine',
    image: 'https://placehold.co/800x450/006400/FFFFFF?text=Khatalein',
    info: {
      platform: 'PC',
      releaseDate: 'TBA',
      engine: 'TBA',
      genre: 'Visual Novel / RPG'
    }
  },
  {
    id: 'game-3',
    title: 'TBA',
    description: 'TBA',
    image: 'https://placehold.co/800x450/333333/FFFFFF?text=TBA',
    info: {
      platform: 'TBA',
      releaseDate: 'TBA',
      engine: 'TBA',
      genre: 'TBA'
    }
  }
];

export const MEDIA_LINKS: MediaLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/kmcei_productions', icon: Instagram },
  { platform: 'X', url: 'https://x.com/kmcei_productions', icon: Twitter },
];

export const NOVELS: Novel[] = [
  {
    id: 'novel-1',
    title: "Auvelliene's Plea",
    description: 'Velle finds himself at an impasse when his vision of two worlds collide. Given the chance to fix one, will he save the world of his old friends, albeit forgotten. or his original world that he got sent back to.',
    link: '#',
    image: 'https://placehold.co/400x600/FF0000/FFFFFF?text=Auvelliene+Plea'
  },
  {
    id: 'novel-2',
    title: 'TBA',
    description: 'TBA',
    link: '#',
    image: 'https://placehold.co/400x600/0000FF/FFFFFF?text=TBA'
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

export const SUPPORT_LINK = "https://ko-fi.com/kmcei";

export const ABOUT_TEXT = "Architecting digital ecosystems with a focus on high-end aesthetics and technical precision. We bridge the gap between imagination and reality.";

export const DESIGN_TOKENS = {
  colors: {
    primary: '#D4AF37',
    secondary: '#00F0FF',
    background: '#0A0A0A',
    surface: '#121212',
    text: '#F5F5F4',
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
  },
  {
    id: 'cyuvielva',
    name: 'Cyuvielva',
    role: 'Streamer and Media Manager',
    bio: "Bringing KMCEI's vision to life through live streaming and strategic media management.",
    image: 'https://picsum.photos/seed/cyuviel/400/400',
    tier: 'standard',
    links: [
      { platform: 'YouTube', url: 'https://www.youtube.com/channel/UC81VTKtxzmzAz3dzsl420Yw', icon: Youtube },
      { platform: 'Instagram', url: 'https://www.instagram.com/cyuviel/?hl=en', icon: Instagram },
      { platform: 'TikTok', url: 'https://www.tiktok.com/@cyuvielva?lang=en', icon: Music },
      { platform: 'X', url: 'https://x.com/CyuVielVA', icon: Twitter },
    ]
  }
];
