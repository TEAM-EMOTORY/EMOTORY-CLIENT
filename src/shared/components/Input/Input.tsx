import * as styles from './Input.css'

interface InputProps {
  label?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  helperText?: string
  type?: string
}

const Input = ({ placeholder, value, onChange, type = 'text' }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
