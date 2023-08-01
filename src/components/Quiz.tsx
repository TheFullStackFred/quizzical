import axios, { AxiosError, CanceledError } from 'axios'
import Button from 'react-bootstrap/Button'
import { PageNames } from '../App'
import { useEffect, useState } from 'react'

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<keyof PageNames>>
}

interface FetchResponse {
  id: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const Quiz = ({ setCurrentPage }: Props) => {
  const [data, setData] = useState<FetchResponse[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)

    axios
      .get<FetchResponse[]>('https://opentdb.com/api.php?amount=5', {
        signal: controller.signal
      })
      .then((res) => setData(res.data))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return (
    <Button onClick={() => setCurrentPage('result')} variant='secondary'>
      Check Answers
    </Button>
  )
}

export default Quiz
