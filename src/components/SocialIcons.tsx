import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FontAwesomeIcon icon={faGithub} {...props} />
}

export function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FontAwesomeIcon icon={faLinkedin} {...props} />
}
