interface MarkedTextProps {
  children: React.ReactNode
  markedClassName?: string
  markedTextClassName?: string
  marked: boolean
}

export function MarkedText({
  children,
  marked,
  markedClassName,
  markedTextClassName,
}: MarkedTextProps) {
  return (
    <span
      className={`relative px-0.5 z-20 ${marked ? markedTextClassName : ''}`}
    >
      {children}
      <span
        className={`block absolute transition-all z-[-10] top-0 left-0 h-full not-sr-only ${marked ? markedClassName : ''} ${marked ? 'w-full' : 'w-0'}`}
      />
    </span>
  )
}
