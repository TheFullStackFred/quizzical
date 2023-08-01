import { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import blueDot from '../assets/blueDot.svg'
import yellowDot from '../assets/yellowDot.svg'

interface Props {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <Container className='d-flex d-column align-items-center justify-content-center py-3 min-vh-100'>
      <img
        className='position-absolute end-0 top-0'
        src={yellowDot}
        alt='yellow dot'
      />
      <img
        className='position-absolute start-0 bottom-0'
        src={blueDot}
        alt='blue dot'
      />
      <div className='position-relative'>{children}</div>
    </Container>
  )
}

export default Wrapper
