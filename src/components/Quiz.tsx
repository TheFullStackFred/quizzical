import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PageNames } from '../App'
import useQuestions from '../hooks/useQuestions'
import { useState } from 'react'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

const Quiz = ({ setCurrentPage }: Props) => {
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
        <Col className='col-12 text-primary border-bottom' key={question.id}>
          <h3 className='mb-3'>{question.question}</h3>
          <div className='d-flex flex-column flex-md-row'>
            {question?.answers.map((answer) => (
              <Button
                variant='btn btn-outline-primary mb-3 rounded-4 me-md-5 border-2'
                key={answer}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Col>
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
