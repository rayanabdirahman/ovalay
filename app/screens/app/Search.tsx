import React from 'react'
import { Layout } from '../../components/Layout'
import { SearchBar } from '../../components/Input'

export default function Search() {
  return (
    <Layout fullwidth>
      <SearchBar
        placeholder="Search"
      />
    </Layout>
  )
}
