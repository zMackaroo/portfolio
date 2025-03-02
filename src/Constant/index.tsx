import { lazy } from 'react';
import TripBuddy from '../Assets/Images/tripbuddy-branding.png';
import PokeDex from '../Assets/Images/PokeDex.png';
import SpeedUp from '../Assets/Images/speedup.png';
import Image1 from '../Assets/Images/avatar-1.svg';
import Image2 from '../Assets/Images/avatar-3.svg';

const Sidebar = lazy(() => import('../Components/Sidebar/Sidebar'));
const Home = lazy(() => import('../Components/Home/Home'));
const About = lazy(() => import('../Components/About/About'));
const Portfolio = lazy(() => import('../Components/Portfolio/Portfolio'));
const Resume = lazy(() => import('../Components/Resume/Resume'));
const Services = lazy(() => import('../Components/Services/Services'));
const Pricing = lazy(() => import('../Components/Pricing/Pricing'));
const Testimonials = lazy(
  () => import('../Components/Testimonials/Testimonials')
);

const resumeData = [
  {
    id: 1,
    category: 'education',
    icon: 'icon-graduation',
    year: '2017 - 2019',
    title: 'Bachelors of Science in Information Technology',
    desc: 'Divine Word College of Calapan',
  },
  {
    id: 2,
    category: 'education',
    icon: 'icon-graduation',
    year: '2016 - 2017',
    title: 'Bachelors of Science in Information Technology',
    desc: 'Our Lady of Fatima University Antipolo Campus',
  },
  {
    id: 4,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2023 - present',
    title: 'Software Engineer',
    desc: 'Samsung Research and Development of the Philippines',
  },
  {
    id: 5,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2022 - 2023',
    title: 'Front-End Developer',
    desc: 'Singlife Philippines',
  },
  {
    id: 6,
    category: 'experience',
    icon: 'icon-briefcase',
    year: '2021 - 2022',
    title: 'Full-Stack Developer',
    desc: 'Chenvel Services Inc.',
  },
];

const portfolioData = [
  {
    id: 1,
    image: TripBuddy,
    title: 'TripBuddyAI',
    category: 'ReactJS',
    link: 'https://tripbuddyai.vercel.app/',
  },
  {
    id: 2,
    image: PokeDex,
    title: 'PokeDex',
    category: 'ReactJS',
    link: 'https://vite-ts-pokedex.vercel.app/',
  },
  {
    id: 3,
    image: SpeedUp,
    title: 'SpeedUp Learning',
    category: 'ReactJS',
    link: 'https://www.figma.com/design/Eg340D0vFZH1woQ9p6FBdX/SpeedUpLearning?node-id=1-44&node-type=frame&t=fAfb2FNjKTKfN7QG-0',
  },
];

const testimonialsData = [
  {
    id: 1,
    image: Image1,
    title: 'John Doe',
    subtitle: 'Software Engineer',
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 2,
    image: Image2,
    title: 'John Doe',
    subtitle: 'Software Engineer',
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

export {
  Sidebar,
  Home,
  About,
  Portfolio,
  Resume,
  Services,
  Pricing,
  Testimonials,
  resumeData,
  portfolioData,
  testimonialsData,
};
