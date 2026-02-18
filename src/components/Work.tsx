import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

interface WorkExperience {
  title: string
  company: string
  companyUrl?: string
  summary: string
  details?: string[]
}

const workExperiences: WorkExperience[] = [
  // {
  //   title: 'Software Developer',
  //   company: 'Pluto SecureLock',
  //   summary:
  //     'Currently developing a secure backup management system for Pluto, a cloudless hardware password manager.',
  // },
  {
    title: 'Software Developer',
    company: 'Zewotherm',
    companyUrl: 'https://zewotherm.com/',
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
    companyUrl: 'https://cytooxien.net/',
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
    companyUrl: 'https://www.rhein-gymnasium-sinzig.de/',
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

export function Work() {
  return (
    <section className="rounded-2xl p-6">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400"
        />
        Experience
      </h2>
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
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-zinc-300 underline-offset-2 transition hover:text-zinc-700 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
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
    </section>
  )
}
