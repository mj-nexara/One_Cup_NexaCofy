import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { FaucetGrid } from "@/components/faucet-grid"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { NexaraSection } from "@/components/nexara-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <NexaraSection />
      <Suspense fallback={<div>Loading...</div>}>
        <StatsSection />
      </Suspense>
      <FaucetGrid />
      <FeaturesSection />
    </div>
  )
}
