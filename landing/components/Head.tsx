import { default as DefaultHead } from 'next/head'

const Head: React.FunctionComponent = () => (
  <DefaultHead>
    {/* Primary Meta Tags */}
    <title>Mainstreet — The social commerce marketplace for sneakers</title>
    <meta name="title" content="Mainstreet — The social commerce marketplace for sneakers" />
    <meta name="description" content="An online marketplace designed to connect shoppers with their favourite physical sneaker stores" />
    <link rel="shortcut icon" href="/favicon.svg" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trymainstreet.com/" />
    <meta property="og:title" content="Mainstreet — The social commerce marketplace for sneakers" />
    <meta property="og:description" content="An online marketplace designed to connect shoppers with their favourite physical sneaker stores" />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.trymainstreet.com/" />
    <meta property="twitter:title" content="Mainstreet — The social commerce marketplace for sneakers" />
    <meta property="twitter:description" content="An online marketplace designed to connect shoppers with their favourite physical sneaker stores" />
    <meta property="twitter:image" content=""></meta>
  </DefaultHead>
)

export default Head
