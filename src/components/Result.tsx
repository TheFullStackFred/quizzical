import Button from 'react-bootstrap/Button'

interface Props {
  nextPage: (page: string) => void
}

const Result = ({ nextPage }: Props) => {
  return (
    <Button onClick={() => nextPage('welcome')} variant='secondary'>
      Play Again
    </Button>
  )
}

export default Result
