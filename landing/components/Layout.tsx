import Head from './Head'
import { Alert } from './Alert'
import { Navbar } from './Navbar'

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Head/>

    <main>
      <Alert type="warning" message="We’re still in development" />
      <Navbar />
      { children }
    </main>
  </div>
)

export { Layout }