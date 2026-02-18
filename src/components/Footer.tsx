import { ContainerInner, ContainerOuter } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-6 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Florian Raith. All rights
                reserved.
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                Hero background photo by Jourdan Wee:{' '}
                <a
                  href="https://www.pexels.com/photo/black-and-silver-laptop-computer-3644098/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-zinc-300 underline-offset-2 hover:text-zinc-600 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  pexels.com
                </a>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
