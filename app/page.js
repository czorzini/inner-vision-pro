import DiscoverSection from '@/components/DiscoverSection'
import FooterSection from '@/components/FooterSection'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'
import IntroducingSection from '@/components/IntroducingSection'
import ReDiscoverSection from '@/components/ReDiscoverSection'
import TuneRealitySection from '@/components/TuneRealitySection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeaderSection />
      <HeroSection />
      <TuneRealitySection />
      <DiscoverSection />
      <ReDiscoverSection />
      <IntroducingSection />
      <FooterSection />
    </main>
  )
}
