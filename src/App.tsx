import { useState } from 'react'
import PageNames from './interfaces/PageNames'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import Wrapper from './components/Wrapper'

const App = () => {
  const [currentPage, setCurrentPage] = useState<keyof PageNames>('welcome')

  const pageComponents = {
    welcome: Welcome,
    quiz: Quiz
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
