import React from 'react'
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_header'>
        <div className='footer_header_first-col'>          
          <Image src="/logo.svg" alt='Car Logo Hub' width={100} height={18} style={{objectFit:"contain",marginBottom:"12px"}} />
          <span>CarHub 2024</span>
          <span>All right reserved ©</span>
        </div>
        {footerLinks.map((links,index) => {
          return (<div key={links.title} className='footer_header_list-col'>
            <span>{links.title}</span>
            <ul>
              {links.links.map((value,index)=>{
                return <li key={index}><Link style={{textDecoration:"none",color:"gray"}} href={value.url}>{value.title}</Link></li>
              })}
            </ul>
          </div>)
        })
        }        
      </div>
      <div className='footer_bottom'>
        <span className='footer_bottom-left'>©2024 CarHub. All right reserved.</span>
        <div className='footer_bottom-right'>
          <span>Privacy & Policy</span>
          <span>Term & Condition</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;