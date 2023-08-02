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

const App = () => {
  const [currentPage, setCurrentPage] = useState<keyof PageNames>('welcome')

  const pageComponents = {
    welcome: Welcome,
    quiz: Quiz,
    result: Result
  }

  const PageComponent = pageComponents[currentPage]

  return (
    <Wrapper>
      <PageComponent
        setCurrentPage={
          setCurrentPage as React.Dispatch<
            React.SetStateAction<keyof PageNames>
          >
        }
      />
    </Wrapper>
  )
}

export default App
