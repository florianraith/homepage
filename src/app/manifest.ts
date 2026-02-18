import { type MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Florian Raith - Software developer',
    short_name: 'Florian Raith',
    description:
      "Hey, I'm Florian - a software developer and student from Germany who loves diving deep into the world of computer science.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
