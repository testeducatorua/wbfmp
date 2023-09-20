import Image from 'next/image'

export default function About() {
    return (
        <div className='text-center'>
            <h1>About</h1>
            <Image src="/evildoc.jpg" width={550} height={400} className='rounded-full mx-auto' alt='test' />
        </div>

    );
}