import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { PageNames } from '../App'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Welcome = ({ setCurrentPage }: Props) => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center text-primary h-100 gap-2 text-center'>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <Button
        onClick={() => setCurrentPage('quiz')}
        className='px-5 py-3 rounded-4'
        variant='secondary'
        size='lg'
      >
        Start Quiz
      </Button>
    </Container>
  )
}

export default Welcome
