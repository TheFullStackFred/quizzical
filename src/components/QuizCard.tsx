import Col from 'react-bootstrap/Col'
import { decode } from 'html-entities'
import Question from '../interfaces/Question'
import ClickedItem from '../interfaces/ClickedItem'
import CustomButton from './CustomButton'
interface Props {
  question: Question
  isClicked: ClickedItem[]
  onClickAnswer: ({ answer, question }: ClickedItem) => void
}

const QuizCard = ({ question, isClicked, onClickAnswer }: Props) => {
  return (
    <Col className='col-10 offset-1 text-primary border-bottom mb-3 text-center text-md-start'>
      <h3 className='mb-3'>{decode(question.question)}</h3>
      <div className='d-flex flex-column flex-md-row'>
        {question?.answers.map((answer) => (
          <CustomButton
            title={decode(answer)}
            className={`${
              isClicked.some(
                (item) =>
                  item.answer === answer && item.question === question.question
              )
                ? 'btn-light border-0'
                : 'btn-outline-primary border-2'
            } `}
            variant='btn mb-3 rounded-4 me-md-5 '
            onClick={() =>
              onClickAnswer({ answer: answer, question: question.question })
            }
            key={answer}
          />
        ))}
      </div>
    </Col>
  )
}

export default QuizCard
