interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div>
      <main className="max-w-5xl m-auto my-2 p-3">{children}</main>
    </div>
  )
}
