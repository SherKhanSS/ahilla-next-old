import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = () => {
  const getData = async () => {
    const data = await fetch(`/api/hello`);
    const mess = await data.json()
    
    console.log(mess);
  }
  getData()
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default HomePage;
