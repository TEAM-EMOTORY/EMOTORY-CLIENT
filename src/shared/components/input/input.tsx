import * as styles from './input.css'

interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
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
