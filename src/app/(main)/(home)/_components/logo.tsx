import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      className="font-extrabold text-xl flex flex-row items-center gap-4"
    >
      <Image src="/logo.png" width={30} height={30} alt="Logo" />
      Interaction Dynamics
    </Link>
  )
}
