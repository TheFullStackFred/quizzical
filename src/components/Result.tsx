import Button from 'react-bootstrap/Button'
import { PageNames } from '../App'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Result = ({ setCurrentPage }: Props) => {
  return (
    <Button onClick={() => setCurrentPage('welcome')} variant='secondary'>
      Play Again
    </Button>
  )
}

export default Result
