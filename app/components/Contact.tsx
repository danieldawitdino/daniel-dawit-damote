import React, {useState} from "react";
import {motion} from "motion/react"
import { useLanguage } from "../context/languageContext";

type ContactProps = {
  isDarkMode: boolean;
};
const Contact = ({ isDarkMode }: ContactProps) =>
    
    {

    const [result, setResult]= useState("");
const onSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;

  setResult("Sending...");

  const formData = new FormData(form);

  formData.append(
    "access_key",
    "dad32306-d52e-4c95-87e1-09a11ff6d4b9"
  );

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    form.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};

 const { t } = useLanguage();

   return (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="contact"
    className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
  >
    <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo"
    >
     {t.contact.contact}
    </motion.h4>

    <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center text-5xl font-Ovo"
    >
       {t.contact.title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
    >
     {t.contact.description}
     
    </motion.p>

    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.input
          type="text"
          placeholder={t.contact.name}
          required
          name="name"
          className="p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
        />

        <motion.input
          type="email"
          placeholder={t.contact.email}
          required
          name="email"
          className="p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
        />
      </div>

      <motion.textarea
        rows={6}
        placeholder={t.contact.message}
        required
        name="message"
        className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        type="submit"
        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:hover:bg-darkHover"
      >
          {t.contact.send}
      </motion.button>

      <p className="pt-4 text-center">{result}</p>
    </motion.form>
  </motion.div>
)
}
export default Contact