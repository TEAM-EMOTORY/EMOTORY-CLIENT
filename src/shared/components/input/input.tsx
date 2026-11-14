interface InputProps {
  id?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  type?: string
}

const Input = ({ id, placeholder, value, onChange, type = 'text' }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      className='h-60 w-full rounded-sm border border-border bg-surface-card px-24 text-caption text-ink outline-none placeholder:text-ink-3 focus:border-border-strong'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
