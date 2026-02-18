import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SocialIconProps = Omit<
  React.ComponentPropsWithoutRef<typeof FontAwesomeIcon>,
  'icon'
>

export function GitHubIcon(props: SocialIconProps) {
  return <FontAwesomeIcon icon={faGithub} {...props} />
}

export function LinkedInIcon(props: SocialIconProps) {
  return <FontAwesomeIcon icon={faLinkedin} {...props} />
}
