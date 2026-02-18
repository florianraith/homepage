import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Contact() {
  return (
    <section className="rounded-2xl p-6">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400"
        />
        Contact me
      </h2>
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
      </p>
    </section>
  )
}
