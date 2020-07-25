import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta 
        key="description"
        name="description"
        content="Mainstreet is an online marketplace designed to connect shoppers with their favourite retail brands"
      />
    </Head>
    <main className="container">
    <Navbar />
      {children}
      <Footer />
    </main>
  </div>
)

export default Layout
