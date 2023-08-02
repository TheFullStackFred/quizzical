import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { decode } from 'html-entities'

interface Question {
  question: string
  answers: string[]
}

interface Props {
  question: Question
  isClicked: string[]
  onClickAnswer: (answer: string) => void
}

const QuizCard = ({ question, isClicked, onClickAnswer }: Props) => {
  return (
    <Col
      className='col-10 offset-1 text-primary border-bottom mb-3 text-center text-md-start'
      key={question.question}
    >
      <h3 className='mb-3'>{decode(question.question)}</h3>
      <div className='d-flex flex-column flex-md-row'>
        {question?.answers.map((answer) => (
          <Button
            onClick={() => onClickAnswer(answer)}
            className={`${
              isClicked.includes(answer)
                ? 'btn-light border-0'
                : 'btn-outline-primary border-2'
            } `}
            variant='btn mb-3 rounded-4 me-md-5 '
            key={answer}
          >
            {answer}
          </Button>
        ))}
      </div>
    </Col>
  )
}

export default QuizCard
