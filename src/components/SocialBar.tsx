import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialButton({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group rounded-full p-2 transition hover:bg-white/15"
    >
      <Icon className="h-5 w-5 text-white transition-colors group-hover:text-teal-100" />
    </Link>
  )
}

export function SocialBar() {
  return (
    <ContainerOuter className="bg-teal-600 lg:hidden dark:bg-teal-700">
      <ContainerInner className="flex h-12 items-center justify-end gap-4">
        <SocialButton
          href="https://github.com/florianraith/"
          label="GitHub"
          icon={GitHubIcon}
        />
        <SocialButton
          href="https://www.linkedin.com/in/florianraith00/"
          label="LinkedIn"
          icon={LinkedInIcon}
        />
        <SocialButton
          href="mailto:florianraith00@gmail.com"
          label="Email"
          icon={(props) => <FontAwesomeIcon icon={faEnvelope} {...props} />}
        />
      </ContainerInner>
    </ContainerOuter>
  )
}
