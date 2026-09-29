import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Rising Dreams Wearable Arts | Create It. Wear It. Dream Bigger.',
      },
      {
        name: 'description',
        content: 'A welcoming wearable arts program helping children and teens ages 6–17 build creativity, confidence, leadership, and community.',
      },
      {
        name: 'theme-color',
        content: '#5b2bea',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/images/rising-dreams-logo.jpg',
        type: 'image/jpeg',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
