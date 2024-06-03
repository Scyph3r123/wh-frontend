import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import { Routes, Route, useLocation } from 'react-router-dom'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Project from "./pages/Project"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { AnimatePresence } from 'framer-motion'
import apiPath from "./apiPath"

const client = new ApolloClient({
  uri: `${apiPath}/graphql`,
  cache: new InMemoryCache(),
})

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return null
}


function App() {
  

  return (
    <>
    <AnimatePresence mode="wait">
      <ApolloProvider client={client}>
        <ScrollToTop/>
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
    </AnimatePresence>
    </>
  )
}

export default App
