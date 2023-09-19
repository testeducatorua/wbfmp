import Image from 'next/image'

export default function About() {
    return (
    // <div>About</div>
    <Image src="/evildoc.jpg" width={550} height={400} className='rounded-full'/>
    );
}