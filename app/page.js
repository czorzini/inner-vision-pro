import DiscoverSection from '../components/DiscoverSection'
import HeaderSection from '../components/HeaderSection'
import HeroSection from '../components/HeroSection'
import IntroducingSection from '../components/IntroducingSection'
import ReDiscoverSection from '../components/ReDiscoverSection'
import TuneRealitySection from '../components/TuneRealitySection'
import FooterSection from '../components/FooterSection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeaderSection />
      <HeroSection />
      <TuneRealitySection />
      <DiscoverSection />
      <ReDiscoverSection />
      <IntroducingSection />
      <FooterSection/>
    </main>
  )
}
