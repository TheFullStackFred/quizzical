import { useEffect, useState } from 'react'
import axios, { AxiosError, CanceledError } from 'axios'

interface FetchResponse {
  results: FetchQuestion[]
}

interface FetchQuestion {
  id: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const useQuestions = () => {
  const [data, setData] = useState<FetchQuestion[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)

    axios
      .get<FetchResponse>('https://opentdb.com/api.php?amount=5', {
        signal: controller.signal
      })
      .then((res) => setData(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { data, error, isLoading }
}

export default useQuestions
