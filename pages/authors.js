import Layout from '../components/layout'
import authors from './authors-mocks'

const a = [...new Set(authors.map(author => author.slice(0, 1)))];

const Authors = () => {
  return (
    <Layout>
      <ul>Авторы
        {a.map(it => <li>{it}</li>)}
      </ul>
    </Layout>
  )
}

export default Authors;