import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Project from "./pages/Project"
import Footer from "./components/Footer"

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projects/:id' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </ApolloProvider>
    </>
  )
}

export default App
