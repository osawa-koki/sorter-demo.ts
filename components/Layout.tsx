import React, { ReactNode } from 'react'
import Head from 'next/head'
import Settings from '../Common/Settings'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={`${Settings.IMG_ROOT_PATH}/favicon.ico`} sizes="any" />
    </Head>
    <header>
      <nav>
      </nav>
    </header>
      {children}
    <footer>
    </footer>
  </div>
)

export default Layout
