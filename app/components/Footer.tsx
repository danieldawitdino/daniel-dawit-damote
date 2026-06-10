import React from 'react'
import Image from 'next/image'
import { assets, infodata, toolsData } from '../../assets/assets/assets'
import { useLanguage } from "../context/languageContext";

const Footer = ({ isDarkMode, setIsDarkMode }: any) => {
       const { t } = useLanguage();

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image  alt="" src={assets.logo} className='w-20  mx-auto'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image alt='' src={isDarkMode?assets.email:assets.email_dark} className='w-6'/>
            <h5>tanatenedina@gmail.com</h5>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>{t.footer.copyright}</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        <li><a href="https://github.com/dandini" >{t.footer.github}</a></li>
        <li><a href="https://github.com/dandini" >{t.footer.linkedin}</a></li>
        <li><a href="https://github.com/dandini" >{t.footer.X}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
