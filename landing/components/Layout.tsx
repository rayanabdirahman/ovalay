import Head from './Head'
import { Alert } from './Alert'

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Head/>

    <main>
      <Alert type="warning" message="We’re still in development" />
      { children }
    </main>
  </div>
)

export { Layout }