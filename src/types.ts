import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
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
  platform: string;
  url: string;
  icon: LucideIcon;
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

export interface Song {
  id: string;
  title: string;
  featuredIn: string;
  composer: string;
  duration: string;
  license: string;
  image: string;
}
