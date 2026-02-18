import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

interface WorkExperience {
  title: string
  company: string
  companyUrl?: string
  details: string[]
}

const workExperiences: WorkExperience[] = [
  {
    title: 'Software Developer',
    company: 'Pluto SecureLock',
    companyUrl: 'https://www.pluto-secure.com/',
    details: [
      'Currently developing a secure backup management system for Pluto, a cloudless hardware password manager.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Zewotherm',
    companyUrl: 'https://zewotherm.com/',
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
    details: [
      'Maintained a Java-based network system for real-time processing of up to 5,000 concurrent connections.',
      'Designed and implemented gameplay features, including gadgets, pets, particle effects, loot boxes, and in-game shop functionalities.',
    ],
  },
  {
    title: 'Programming Tutor',
    company: 'Rhein-Gymnasium Sinzig',
    companyUrl: 'https://www.rhein-gymnasium-sinzig.de/',
    details: [
      'Organized and led a weekly JavaScript course centered on creative programming with p5.js for around 20 students.',
    ],
  },
  {
    title: 'Software Developer · Internship',
    company: 'plista',
    details: [
      'Designed and developed a REST API for a legacy database using PHP and Symfony, while being introduced to software testing methodologies and containerized development with Docker.',
    ],
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
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-teal-700 dark:decoration-zinc-600 dark:hover:text-teal-500"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <p className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              {experience.title}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {experience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
