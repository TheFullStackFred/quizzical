import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import useQuestions from '../hooks/useQuestions'
import QuizCard from './QuizCard'
import ClickedItem from '../interfaces/ClickedItem'
import PageNames from '../interfaces/PageNames'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
  const [isClicked, setIsClicked] = useState<ClickedItem[]>([])
  const [allAnswered, setAllAnswered] = useState(false)

  const { data, error, isLoading } = useQuestions()

  const shuffledQuestions = data?.map((question) => ({
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
    <Row>
      {shuffledQuestions?.map((question) => (
        <QuizCard
          question={question}
          isClicked={isClicked}
          onClickAnswer={(answer) => setIsClicked((prev) => [...prev, answer])}
        />
      ))}
      {allAnswered && (
        <Button
          onClick={() => setCurrentPage('result')}
          variant='secondary px-5 py-3 rounded-4 mt-4 mx-auto w-50 w-md-25'
        >
          Check Answers
        </Button>
      )}
    </Row>
  )
}

export default Quiz
