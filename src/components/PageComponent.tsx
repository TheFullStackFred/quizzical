import React from 'react'

const PageComponent = ({ currentPage, nextPage }) => {
  const pageComponents = {
    welcome: Welcome,
    quiz: Quiz,
    result: Result
  }

  const Page = pageComponents[currentPage]
  return <Page nextPage={nextPage} />
}

export default PageComponent
