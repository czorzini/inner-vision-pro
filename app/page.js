import DiscoverSection from '../components/DiscoverSection'
import HeaderSection from '../components/HeaderSection'
import HeroSection from '../components/HeroSection'
import IntroducingSection from '../components/IntroducingSection'
import MusicPlayerSection from '../components/MusicPlayerSection'
import ReDiscoverSection from '../components/ReDiscoverSection'
import TuneRealitySection from '../components/TuneRealitySection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeaderSection />
      <HeroSection />
      <TuneRealitySection />
      <DiscoverSection />
      <ReDiscoverSection />
      <IntroducingSection />
      <MusicPlayerSection />
    </main>
  )
}
