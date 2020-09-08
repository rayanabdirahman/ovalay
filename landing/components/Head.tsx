import { default as DefaultHead } from 'next/head'

const Head: React.FunctionComponent = () => (
  <DefaultHead>
    {/* Primary Meta Tags */}
    <title>Mainstreet | The online shopping mall</title>
    <meta name="title" content="Mainstreet | The online shopping mall" />
    <meta name="description" content="Shop the high street stores you love from one place." />
    <link rel="shortcut icon" href="/favicon.svg" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trymainstreet.com/" />
    <meta property="og:title" content="Mainstreet | The online shopping mall" />
    <meta property="og:description" content="Shop the high street stores you love from one place. " />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.trymainstreet.com/" />
    <meta property="twitter:title" content="Mainstreet | The online shopping mall" />
    <meta property="twitter:description" content="Shop the high street stores you love from one place. " />
    <meta property="twitter:image" content="" />

    {/* Global site tag (gtag.js) - Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177530827-1" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'UA-177530827-1');
        `
      }}
    />
  </DefaultHead>
)

export default Head
