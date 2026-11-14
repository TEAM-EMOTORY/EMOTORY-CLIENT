interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  type?: string
}

const Input = ({ placeholder, value, onChange, type = 'text' }: InputProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <input
        type={type}
        className='w-full rounded-sm border-2 border-border bg-white px-20 py-16 text-body text-ink outline-none placeholder:text-ink-3 focus:border-border-strong'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
