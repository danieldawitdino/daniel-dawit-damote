import React from 'react'
import { servicesData, workData } from '@/assets/assets/assets'
import Image from 'next/image'
import { assets, infodata, toolsData } from '../../assets/assets/assets'
import { useLanguage } from "../context/languageContext";
import {motion} from "motion/react"

const Portifolio = ({ isDarkMode, setIsDarkMode}: any) => {
    const { t, language, changeLanguage } = useLanguage();
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ delay:0.3, duration:0.5 }}

    id='portifolio' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
      initial={{y:-20, opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ delay:0.3, duration:0.5 }}
      className='text-center mb-2 text-lg font-ovo'>{t.portifolio.intro}</motion.h4>
      <motion.h2
      initial ={{ y:-20, opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ duration:0.5, delay:0.5 }}
      className='text-center text-5xl font-ovo'>{t.portifolio.title}</motion.h2>
      <motion.p 
      initial={{ opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ delay:0.7, duration:0.5 }}
      className='text-center m-w-2xl mx-auto mt-5 mb-12 font-ovo'>{t.portifolio.description}</motion.p>
     
     <motion.div 
     initial={{ opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ delay:0.9, duration:0.6 }}
     className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                {workData.map((project, index) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.6 }}
    key={index}
    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
    style={{ backgroundImage: `url(${project.bgImage})` }}
  >
    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
      <div>
        <h2 className="font-semibold">
          {t.workItems[project.titleKey]}
        </h2>

        <p className="text-sm text-gray-700">
          {t.workItems[project.desc]}
        </p>
      </div>
    </div>
  </motion.div>
))}
    </motion.div>
    <motion.a 
    initial={{ opacity:0 }}
    whileInView={{ y:0, opacity:1 }}
    transition={{ delay:1., duration:0.5 }}
    href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:shadow-lg  duration-500 dark:text-white dark:border-white/80 dark:hover:bg-[#2a004F]'>{t.portifolio.more}</motion.a>
    </motion.div>
  )
}

export default Portifolio
