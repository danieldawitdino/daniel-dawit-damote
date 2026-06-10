import { servicesData, workData } from '@/assets/assets/assets'
import Image from 'next/image'
import { assets, infodata, toolsData } from '../../assets/assets/assets'
import { useLanguage } from "../context/languageContext";
import {motion} from 'motion/react'


const Services = ({ isDarkMode }: any) => {
    const { t } = useLanguage();
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
    initial ={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1 }}
    >
      <motion.h4 
      initial ={{ y:-20, opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ duration:0.5, delay:0.3 }}
      className='text-center mb-2 text-lg font-ovo dark:text-white'>{t.services.intro}</motion.h4>
      <motion.h2 
      initial ={{ y:-20, opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ duration:0.5, delay:0.5 }}
      className='text-center text-5xl font-ovo dark:text-white'>{t.services.title}</motion.h2>

      <motion.p 
      initial ={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:0.5, delay:0.7 }}
    className='text-center m-w-2xl mx-auto mt-5 mb-12 font-ovo dark:text-white'>{t.services.description}
    </motion.p>
      <motion.div 
      initial ={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:0.6, delay:0.9 }}

      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {servicesData.map(({icon, titleKey, descKey, link}, index)=>
            <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg shadow-black-500 p-6 bg-pink rounded
  Large shadow cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white hover:bg-[#2a004a/50]'
        whileHover={{ scale:1.05 }}
  >
                <Image src={icon} alt='img' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{t.serviceItems[titleKey]}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white'>
                    {t.serviceItems[descKey]}
                </p>
               
                <a href={link} className='flext items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className=' w-4'/>
                </a>
            </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Services
