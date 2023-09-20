import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex justify-center gap-40'>
      <Link href="/about">Go to About page</Link>
      <Link href="/create-note">Go to Create-note page</Link>
    </div>
  )
}
