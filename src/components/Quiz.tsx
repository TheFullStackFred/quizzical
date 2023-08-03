import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import useQuestions from '../hooks/useQuestions'
import QuizCard from './QuizCard'
import ClickedItem from '../interfaces/ClickedItem'

const Quiz = () => {
  const [isClicked, setIsClicked] = useState<ClickedItem[]>([])
  const [allAnswered, setAllAnswered] = useState(false)
  const [showTotal, setShowTotal] = useState(false)
  const [total, setTotal] = useState(0)
  console.log(showTotal)
  const { data, error, isLoading } = useQuestions()

  const shuffledQuestions = data?.map((question) => ({
    ...question,
    answers: [question.correct_answer, ...question.incorrect_answers]
  }))

  const checkAnswers = () => {
    isClicked.filter((answer) => {
      const question = shuffledQuestions.find(
        (question) => question.question === answer.question
      )
      if (question?.correct_answer === answer.answer) {
        setTotal((prev) => prev + 1)
      }
    })
    setShowTotal(true)
  }

  useEffect(() => {
    setAllAnswered(
      shuffledQuestions.length === isClicked.length &&
        shuffledQuestions.length !== 0
    )
  }, [shuffledQuestions, isClicked])

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
      <div className='col-10 offset-1 d-flex justify-content-around align-items-center'>
        {showTotal && (
          <h5 className='text-primary fw-bold'>
            You scored {total}/5 correct answers
          </h5>
        )}

        {allAnswered && (
          <Button
            onClick={checkAnswers}
            variant='secondary px-5 py-3 rounded-4'
          >
            Check Answers
          </Button>
        )}
      </div>
    </Row>
  )
}

export default Quiz
