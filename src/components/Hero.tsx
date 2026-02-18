import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import headerImage from '../../assets/header.jpg'

export function Hero() {
  return (
    <ContainerOuter>
      <section className="relative overflow-hidden">
        <Image
          src={headerImage}
          alt=""
          priority
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2.5px]"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />
        <ContainerInner className="relative">
          <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
            <DarkModeToggle />
          </div>
          <div className="px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl text-teal-600">
                Florian Raith
              </h1>
              <div className="mt-4 space-y-1 text-xl leading-tight text-zinc-100">
                <p className="flex items-center gap-3 leading-tight">
                  <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
                  <span>Computer science student</span>
                </p>
                <p className="flex items-center gap-3 leading-tight">
                  <FontAwesomeIcon icon={faCode} className="h-5 w-5" />
                  <span>Software developer</span>
                </p>
              </div>
            </div>
          </div>
        </ContainerInner>
      </section>
    </ContainerOuter>
  )
}
