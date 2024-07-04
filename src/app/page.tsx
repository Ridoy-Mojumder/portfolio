'use client';
import BannerSection from '@/Components/BannarSection/BannerSection'
import AboutPage from '@/Components/AboutPage/AboutPage'
import Projects from '@/Components/Projects/Projects'
import Skills from '@/Components/Skills/Skills'
import Education from '@/Components/Education/Education'
import Contact from '@/Components/Contact/Contact'


export default function Home() {
  return (
    <main className="">
      <BannerSection/>
      <AboutPage/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </main>
  );
}
