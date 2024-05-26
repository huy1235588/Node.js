import Link from 'next/link';

const Header = () => {
  return (
    <ul className='flex'>
      <li className='mx-[10px] my-[20px]'>
        <Link href="/">Langding page</Link>
      </li>
      <li className='mx-[10px] my-[20px]'>
        <Link href="/about">About page</Link>
      </li>
      <li className='mx-[10px] my-[20px]'>
        <Link href="/introduce">Introduce page</Link>
      </li>
  </ul>
  )
}

export default Header;