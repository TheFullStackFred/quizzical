import Button from 'react-bootstrap/Button'
import PageNames from '../interfaces/PageNames'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Welcome = ({ setCurrentPage }: Props) => {
  return (
    <div className='text-center'>
      <h1>Quizzical</h1>
      <p className='mb-4'>Some description if needed</p>
      <Button
        onClick={() => setCurrentPage('quiz')}
        variant='secondary px-5 py-3 rounded-4 w-100'
        size='lg'
      >
        Start Quiz
      </Button>
    </div>
  )
}

export default Welcome
