import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '.';

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <Link href={'/'} className='logo'>
                <Image src="/logo.svg" alt='Car Logo Hub' width={118} height={18} style={{objectFit:"contain"}} />
            </Link>
            <CustomButton title='Sign In' btnType="button" containerStyle='log-btn'/>
        </nav>
    </header>
  )
}

export default Navbar;