import Image from 'next/image'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <Image src="/evildoc.jpg" width={550} height={400} className='rounded-full' alt='test'/>
        </>

    );
}