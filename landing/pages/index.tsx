import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { SellingPoints } from '../components/SellingPoints'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <SellingPoints />
  </Layout>
)

export default IndexPage
