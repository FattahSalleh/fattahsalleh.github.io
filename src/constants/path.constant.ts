import { Carousel } from '../components/Practice/Carousel/Carousel';
import { RatingStar } from '../components/Practice/RatingStar/RatingStar';
import { PracticeComponentMapProps } from '../types/types';

export const PATH: Record<string, string> = {
  MAIN: '/',
  LOGIN: '/login',
  HOME: '/home',
  PRACTICE: '/practice',
};

export const PRACTICE = {
  names: ['Rating Star', 'Carousel'] as const,
  components: {
    'Rating Star': RatingStar,
    Carousel: Carousel,
  } satisfies PracticeComponentMapProps,
};
