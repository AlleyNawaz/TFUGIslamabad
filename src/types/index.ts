export interface Program {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
  color: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: string; // URL or path
  bio?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  isGDE?: boolean;
}

export interface VideoSession {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // or full URL
  youtubeUrl: string;
  speakerId: string; // link to Speaker
  programId: string; // link to Program
  date: string; // ISO date
  duration: string; // e.g., "45:00"
  views?: number;
  tags?: string[];
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  authorSocial?: string;
  publishDate: string;
  platform: 'Medium' | 'Dev.to' | 'Other';
  url: string;
  views?: number;
  image?: string;
  tags?: string[];
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: string;
}
