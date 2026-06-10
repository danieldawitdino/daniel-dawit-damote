
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets/assets";
import { useLanguage } from "../context/languageContext";


const Navbar = ({ isDarkMode, setIsDarkMode }: any) => {
  const [isScroll, setIsScroll] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const { t, language, changeLanguage } = useLanguage();

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background */}
    {/* <div className="fixed top-0 left-0 w-full -z-50 translate-y-[-80%] dark:hidden">
      
  <Image
    src={assets.headerbg}
    alt="bg"
    width={1920}
    height={1080}
    className="w-full"
    priority
  />
</div> */}

      <nav
        className={`fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-sm dark:bg-[#11001F]/80"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <Image src={assets.logo} alt="logo" width={80} height={80} className="w-20" />
          <span className="font-semibold">Daniel D.</span>
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            !isScroll ? "bg-white/70 backdrop-blur-lg shadow-sm dark:bg-[#11001F]/70" : ""
          } dark:border dark:border-white/20`}
        >
          <li><a href="#top">{t.nav.home}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#portifolio">{t.nav.work}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">

          {/* Dark Mode */}
          <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun2 : assets.moon}
              alt="theme"
              width={24}
              height={24}
              className="w-6"
            />
          </button>

          {/* Language */}
        {/* Language */}
<div className="relative">
  {/* Current selected language */}
  <button
    onClick={() => setShowLang(!showLang)}
    className="cursor-pointer flex items-center justify-center"
  >
    <Image
      src={language === "en" ? assets.us_flag : assets.et_flag}
      alt="Language"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </button>

  {showLang && (
    <div className="absolute right-0 top-10 bg-white dark:bg-[#11001F] rounded-lg shadow-lg border dark:border-white/20 overflow-hidden min-w-[150px] z-50">

      {/* English */}
      <button
        onClick={() => {
          changeLanguage("en");
          setShowLang(false);
        }}
        className={`flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-[#2a004a] ${
          language === "en"
            ? "bg-gray-100 dark:bg-[#2a004a]"
            : ""
        }`}
      >
        <Image
          src={assets.us_flag}
          alt="English"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span>English</span>
      </button>

      {/* Amharic */}
      <button
        onClick={() => {
          changeLanguage("am");
          setShowLang(false);
        }}
        className={`flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-[#2a004a] ${
          language === "am"
            ? "bg-gray-100 dark:bg-[#2a004a]"
            : ""
        }`}
      >
        <Image
          src={assets.et_flag}
          alt="Amharic"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span>አማርኛ</span>
      </button>

    </div>
  )}
</div>
          {/* Contact */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            {t.nav.contact}
          </a>

          {/* Mobile Menu */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu}
              alt="menu"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-white dark:bg-[#11001F] dark:text-white transition-transform duration-500 z-50"
        >
          <button className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.closewhite : assets.cancel}
              alt="close"
              width={24}
              height={24}
            />
          </button>

          <li><a onClick={closeMenu} href="#top">{t.nav.home}</a></li>
          <li><a onClick={closeMenu} href="#about">{t.nav.about}</a></li>
          <li><a onClick={closeMenu} href="#services">{t.nav.services}</a></li>
          <li><a onClick={closeMenu} href="#portifolio">{t.nav.work}</a></li>
          <li><a onClick={closeMenu} href="#contact">{t.nav.contact}</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;