import Button from 'react-bootstrap/Button'

import { PageNames } from '../App'

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
        className='px-5 py-3 rounded-4 w-100'
        variant='secondary'
        size='lg'
      >
        Start Quiz
      </Button>
    </div>
  )
}

export default Welcome
