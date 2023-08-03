import Button from 'react-bootstrap/Button'

interface Props {
  key?: string
  title: string
  onClick?: () => void
  className?: string
  variant?: string
}

const CustomButton = ({
  key,
  title,
  className,
  variant = 'secondary px-5 py-3 rounded-4',
  onClick
}: Props) => {
  return (
    <Button key={key} className={className} variant={variant} onClick={onClick}>
      {title}
    </Button>
  )
}

export default CustomButton
