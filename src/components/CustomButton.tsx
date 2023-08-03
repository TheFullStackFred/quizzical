import Button from 'react-bootstrap/Button'

interface Props {
  title: string
  onClick: () => void
  variant: string
}

const CustomButton = ({ title, onClick, variant }: Props) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {title}
    </Button>
  )
}

export default CustomButton
