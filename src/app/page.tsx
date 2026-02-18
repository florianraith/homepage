import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  ContainerInner,
  ContainerOuter,
} from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import headerImage from '../../assets/header.jpg'

interface WorkExperience {
  title: string
  company: string
  summary: string
  details?: string[]
}

const workExperiences: WorkExperience[] = [
  {
    title: 'Software Developer',
    company: 'Pluto SecureLock',
    summary:
      'Currently developing a secure backup management system for Pluto, a cloudless hardware password manager.',
  },
  {
    title: 'Software Developer',
    company: 'Zewotherm',
    summary:
      'Contributing to internal tooling and business-critical systems for the organization.',
    details: [
      'Currently developing an internal B2B customer portal based on the TALL stack (Laravel, Livewire, Alpine.js, Tailwind CSS).',
      'Maintained a Laravel-based intranet application, integrating multiple Node.js microservices via REST APIs and supporting daily business processes for up to 150 employees.',
      'Implemented automated BI reports for internal data analysis and reporting workflows.',
    ],
  },
  {
    title: 'Game Developer',
    company: 'Cytooxien',
    summary:
      'Worked on online game platform systems and gameplay-related features.',
    details: [
      'Maintained a Java-based network system for real-time processing of up to 5,000 concurrent connections.',
      'Designed and implemented gameplay features, including gadgets, pets, particle effects, loot boxes, and in-game shop functionalities.',
    ],
  },
  {
    title: 'Programming Tutor',
    company: 'Rhein-Gymnasium Sinzig',
    summary:
      'Organized and led a weekly JavaScript course centered on creative programming with p5.js for around 20 students.',
  },
  {
    title: 'Software Developer · Internship',
    company: 'plista',
    summary:
      'Designed and developed a REST API for a legacy database using PHP and Symfony, while being introduced to software testing methodologies and containerized development with Docker.',
  },
]

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Section({
  title,
  children,
  contentClassName = '',
}: {
  title: string
  children: React.ReactNode
  contentClassName?: string
}) {
  return (
    <section className="rounded-2xl p-6">
      <h2 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className={contentClassName}>{children}</div>
    </section>
  )
}

function Contact() {
  return (
    <Section title="Contact me">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        I am currently not available for commissions, but feel free to message
        me if you want to ask something or are just interested. You can reach me
        at{' '}
        <a
          href="mailto:florianraith00@gmail.com"
          className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          florianraith00@gmail.com
        </a>
        .
      </p>
    </Section>
  )
}

function Intro() {
  return (
    <Section title="About me">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Devoted to exploring the depths of computer science with a special focus
        on the field of machine learning. Passionate about developing and
        building meaningful projects.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://github.com/florianraith/"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/florianraith00/"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </Section>
  )
}

function Work() {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-6">
        {workExperiences.map((experience) => (
          <section
            key={`${experience.company}-${experience.title}`}
            className="rounded-2xl"
          >
            <p className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              {experience.title}
            </p>
            <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {experience.company}
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>{experience.summary}</li>
              {experience.details?.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <ContainerOuter>
        <section className="relative overflow-hidden">
          <Image
            src={headerImage}
            alt=""
            priority
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2.5px]"
          />
          <div className="absolute inset-0 bg-zinc-900/45" />
          <ContainerInner className="relative py-16 sm:py-24">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Florian Raith
              </h1>
              <div className="mt-4 space-y-1 text-xl leading-tight text-zinc-100">
                <p className="flex items-center gap-3 leading-tight">
                  <FontAwesomeIcon icon={faCode} className="h-5 w-5" />
                  <span>Software developer</span>
                </p>
                <p className="flex items-center gap-3 leading-tight">
                  <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
                  <span>Computer science student</span>
                </p>
              </div>
            </div>
          </ContainerInner>
        </section>
      </ContainerOuter>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-6 lg:max-w-none lg:grid-cols-2">
          <Work />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Intro />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
