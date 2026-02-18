import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-teal-700 dark:text-zinc-400 dark:group-hover:text-teal-200" />
    </Link>
  )
}

export function Intro() {
  return (
    <section className="rounded-2xl p-6">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon
          icon={faUser}
          className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400"
        />
        About me
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {/*Devoted to exploring the depths of computer science with a special focus*/}
        {/*on the field of machine learning. Passionate about developing and*/}
        {/*building meaningful projects.*/}
        Hey, I'm Florian — a computer science student from Germany who loves
        diving deep into the world of computer science. I enjoy exploring
        complex ideas, turning them into practical knowledge, and building
        meaningful projects.
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
    </section>
  )
}
