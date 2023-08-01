import Button from 'react-bootstrap/Button'
import { PageNames } from '../App'
import useQuestions from '../hooks/useQuestions'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
  const { data, error, isLoading } = useQuestions()

  const shuffledQuestions = data.map((question) => ({
    ...question,
    answers: [question.correct_answer, ...question.incorrect_answers]
  }))

  if (isLoading)
    return (
      <>
        <div className='spinner-border' role='status'></div>
      </>
    )

  if (error) return <p className='text-danger'>{error}</p>

  return (
    <>
      {shuffledQuestions?.map((question) => (
        <div className='text-primary' key={question.id}>
          <h3>{question.question}</h3>
          {question.answers.map((answer) => (
            <Button variant='btn btn-outline-primary' key={answer}>
              {answer}
            </Button>
          ))}
        </div>
      ))}
      <Button onClick={() => setCurrentPage('result')} variant='secondary'>
        Check Answers
      </Button>
    </>
  )
}

export default Quiz
