import { assets, infodata, toolsData } from '../../assets/assets/assets'
import Image from 'next/image'
import { useLanguage } from "../context/languageContext";
import {motion} from "motion/react"

const About = ({ isDarkMode, setIsDarkMode}: any) => {
   const { t } = useLanguage();
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial ={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-ovo'
      initial ={{ opacity:0, y:-20 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:0.5, delay:0.3 }}
      >{t.about.abintro}</motion.h4>
      <motion.h2 className='text-center text-5xl font-ovo'
      initial ={{ opacity:0, y:-20 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:0.5, delay:0.5}}
      >
        {t.about.abh3}
      </motion.h2>
     
      <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20' 
      initial ={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:0.8 }}>
      <motion.div className='w-64 sm:w-80 rounded:3xl max-w-none'
      initial ={{ opacity:0, scale:0.9}}
    whileInView={{ opacity:1, scale:1}}
    transition={{ duration:0.6 }}
      >
        <Image src={assets.dino} alt='user' className='w-full rounded-3xl'/>  
      </motion.div>
      <motion.div className='flex-1'
      initial ={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:0.6, delay:0.8 }}
      >
        <p className='mb-10 max-w-2xl font-ovo'>{t.about.abdesc}</p>
        <motion.ul 
        initial ={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:0.8, delay:1 }}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
             {infodata.map((item, index) => (
  <li
    key={index}
    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white"
  >
    <Image
      src={isDarkMode ? item.iconDark : item.icon}
      alt=""
      className="w-7 mt-3"
    />

    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
      {t.abtme[item.title]}
    </h3>

    <p className="text-gray-600 text-sm dark:text-white/80">
      {t.abtme[item.description]}
    </p>
  </li>
))}
            
        </motion.ul>
        <motion.h4 
        initial ={{ y:20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration:0.5, delay:1.3 }}className='my-6 text-gray-700 font-Ovo dark:text-white'>{t.about.ablang}</motion.h4>
         <motion.ul className='flex items-center gap-3 sm:gap-5'
         initial ={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:0.6, delay:1.5 }}
         >
             {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{ scale:1.1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-500 hover:-translate-y-1 duration-500   curson-pointer 'key ={index} >
                    <Image src ={tool} alt= 'Tool' className='w-5 sm:w-7 '/>
               </motion.li>    
                ))}
            
        </motion.ul>
      </motion.div>
     </motion.div>
 </motion.div>
  )
}

export default About
