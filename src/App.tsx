import { useState } from 'react'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Wrapper from './components/Wrapper'

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

  return (
    <Wrapper>
      <PageComponent setCurrentPage={setCurrentPage} />
    </Wrapper>
  )
}

export default App
