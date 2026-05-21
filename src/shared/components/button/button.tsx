import type { ReactNode } from 'react'
import * as styles from './button.css'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  color: 'yellow' | 'cream' | 'white'
  onClick: () => void
}

const Button = ({ children, disabled = false, color = 'yellow', onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      className={styles.buttonVariants({ color })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
