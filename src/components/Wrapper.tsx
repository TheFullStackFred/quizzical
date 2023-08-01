import { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import blueDot from '../assets/blueDot.svg'
import yellowDot from '../assets/yellowDot.svg'

interface Props {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container className='d-flex d-column align-items-center justify-content-center min-vh-100 py-2'>
      <img
        className='position-fixed end-0 top-0'
        src={yellowDot}
        alt='yellow dot'
      />
      <img
        className='position-fixed start-0 bottom-0'
        src={blueDot}
        alt='blue dot'
      />
      <div className='position-relative'>{children}</div>
    </Container>
  )
}

export default Wrapper
