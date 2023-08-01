import Button from 'react-bootstrap/Button'
import { PageNames } from '../App'
import useQuestions from '../hooks/useQuestions'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
  const { data, error, isLoading } = useQuestions()

  if (isLoading)
    return (
      <>
        <div className='spinner-border' role='status'></div>
      </>
    )

  if (error) return <p className='text-danger'>{error}</p>

  return (
    <Button onClick={() => setCurrentPage('result')} variant='secondary'>
      Check Answers
    </Button>
  )
}

export default Quiz
