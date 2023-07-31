import { useState } from 'react'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import Result from './components/Result'

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome')

  const nextPage = (page: string) => {
    setCurrentPage(page)
  }

  const pageComponents = {
    welcome: Welcome,
    quiz: Quiz,
    result: Result
  }

  const PageComponent = pageComponents[currentPage]

  return <PageComponent nextPage={nextPage} />
}

export default App
