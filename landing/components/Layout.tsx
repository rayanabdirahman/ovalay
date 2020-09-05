import Head from './Head'
import styles from '../styles/Home.module.css'

const Layout: React.FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <Head/>

    <main>
      { children }
    </main>
  </div>
)

export { Layout }