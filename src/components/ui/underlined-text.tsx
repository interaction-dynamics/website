interface UnderlinedTextProps {
  children: React.ReactNode
}

export function UnderlinedText({ children }: UnderlinedTextProps) {
  return (
    <span className="relative group text-id-red">
      {children}
      <span className="absolute bottom-[-5px] bg-id-red left-0 w-0 transition-all h-1 group-hover:w-full" />
    </span>
  )
}
