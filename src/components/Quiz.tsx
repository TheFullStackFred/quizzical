import Button from 'react-bootstrap/Button'

interface Props {
  nextPage: (page: string) => void
}

const Quiz = ({ nextPage }: Props) => {
  return (
    <Button onClick={() => nextPage('result')} variant='secondary'>
      Check Answers
    </Button>
  )
}

export default Quiz
