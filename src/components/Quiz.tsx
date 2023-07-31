import Button from 'react-bootstrap/Button'
import { PageNames } from '../App'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
  return (
    <Button onClick={() => setCurrentPage('result')} variant='secondary'>
      Check Answers
    </Button>
  )
}

export default Quiz
