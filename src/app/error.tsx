'use client'

import { useEffect } from 'react'

import { Container } from '@/components/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
          Something went wrong
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          We could not load this page
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Please try again. If this continues, come back in a moment.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Try again
        </button>
      </div>
    </Container>
  )
}
