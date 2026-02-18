import { Container } from '@/components/Container'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { Work } from '@/components/Work'

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-6 lg:max-w-none lg:grid-cols-3 lg:gap-x-10">
          <div className="lg:col-span-2">
            <Work />
          </div>
          <div className="space-y-10 lg:col-span-1">
            <Intro />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
