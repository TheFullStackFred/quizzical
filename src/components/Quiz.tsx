import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import useQuestions from '../hooks/useQuestions'
import QuizCard from './QuizCard'
import CustomButton from './CustomButton'
import ClickedItem from '../interfaces/ClickedItem'
import PageNames from '../interfaces/PageNames'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
  const [isClicked, setIsClicked] = useState<ClickedItem[]>([])
  const [allAnswered, setAllAnswered] = useState(false)
  const [answersChecked, setAnswersChecked] = useState(false)
  const [showTotal, setShowTotal] = useState(false)
  const [total, setTotal] = useState(0)

  const { data, error, isLoading } = useQuestions()

  const shuffledQuestions = data?.map((question) => ({
    ...question,
    answers: [question.correct_answer, ...question.incorrect_answers]
  }))

  const onClickAnswer = ({ answer, question }: ClickedItem) => {
    const isAnswered = isClicked.some((item) => item.question === question)

    if (isAnswered) {
      setIsClicked((prev) =>
        prev.map((item) =>
          item.question === question ? { ...item, answer } : item
        )
      )
    } else {
      setIsClicked((prev) => [...prev, { answer, question }])
    }
  }

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
    setAnswersChecked(true)
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
          key={question.question}
          question={question}
          isClicked={isClicked}
          answersChecked={answersChecked}
          onClickAnswer={onClickAnswer}
        />
      ))}
      <div className='col-10 offset-1 d-flex flex-column flex-md-row justify-content-around align-items-center'>
        {showTotal && (
          <h5 className='text-primary fw-bold text-center'>
            You scored {total}/5 correct answers
          </h5>
        )}

        {allAnswered && !answersChecked && (
          <CustomButton title='Check Answers' onClick={checkAnswers} />
        )}

        {answersChecked && (
          <CustomButton
            title='Play Again'
            onClick={() => setCurrentPage('welcome')}
          />
        )}
      </div>
    </Row>
  )
}

export default Quiz
