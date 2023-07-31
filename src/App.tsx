import { useState } from 'react'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import Result from './components/Result'

export interface PageNames {
  welcome: 'welcome'
  quiz: 'quiz'
  result: 'result'
}

const pageComponents = {
  welcome: Welcome,
  quiz: Quiz,
  result: Result
}

const App = () => {
  const [currentPage, setCurrentPage] =
    useState<keyof typeof pageComponents>('welcome')

  const PageComponent = pageComponents[currentPage]

  return <PageComponent setCurrentPage={setCurrentPage} />
}

export default App
