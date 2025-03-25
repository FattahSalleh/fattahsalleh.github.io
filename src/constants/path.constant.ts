import { ButtonTimer } from '../components/Practice/ButtonTimer/ButtonTimer';
import { Carousel } from '../components/Practice/Carousel/Carousel';
import { LoadingBar } from '../components/Practice/LoadingBar/LoadingBar';
import { RatingStar } from '../components/Practice/RatingStar/RatingStar';
import { PracticeComponentMapProps } from '../types/types';

export const PATH: Record<string, string> = {
  MAIN: '/',
  LOGIN: '/login',
  HOME: '/home',
  PRACTICE: '/practice',
};

export const PRACTICE = [
  { name: 'Rating Star', component: RatingStar },
  { name: 'Carousel', component: Carousel },
  { name: 'Button Timer', component: ButtonTimer },
  { name: 'Loading Bar', component: LoadingBar },
] as const;
