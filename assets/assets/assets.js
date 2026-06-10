import headerbg from './header-bg.png'
import code from './code.png'
import briefcase from './briefcase.png'
import education from './education.png'
import dino from './dino.jpg'
import logo from './logo.png'
import moon from './moon.png'
import moon2 from './moon (1).png'
import menu from './menu.png'
import cancel from './cancel.png'
import vscode from './programming.png'
import firebase from './fire.png'
import figma from './figma.png'
import git from './git.png'
import db from './db.png'
import mobile from './mobile.png'
import ux from './ux.png'
import graphics from './graphics.png'
import icon from './icon.png'
import right_arrow from './right_arrow.png'
import send from './send-message.png'
import work_1 from './work1.jpg'
import work_2 from './work2.jpg'
import work_3 from './work3.jpg'
import work_4 from './work4.jpg'
import email from './email.png'
import sun from './sun.png'
import sun2 from './contrast.png'
import menu_white from './menu_light.png'
import closewhite from './closewhite.png'
import code_dark from './code_dark.png'
import edu_dark from './edu_dark.png'
import uxdark from './uxdark.png'
import email_dark from './email_dark.png'
import us_flag from './united-states.png'
import et_flag from './eth-flag.png'
import ui from "./ux.png"

 export const assets = {
    graphics,
    us_flag,
    et_flag,
    menu_white,
    closewhite,
    email_dark,
    sun,
    sun2,
    code_dark,
    edu_dark,
    uxdark,
    work_1,
    email,
    work_2,
    work_3,
    work_4,
    send,
    right_arrow,
    mobile,
    ui,
    ux,
    icon,
    code,
     education,
     briefcase,
     logo,
     dino,
     headerbg,
     moon,
     moon2,
     menu,
     cancel,
     firebase,
     figma,
     vscode,
     db,
     git,
};

export const workData = [
  {
    titleKey: "frontKey",
    desc: "frontDesc",
    bgImage: "/work1.jpg",
  },
  {
    titleKey: "sysNetTitle",
    desc: "sysNetDesc",
    bgImage: "/work2.jpg",
  },
  {
    titleKey: "uiD",
    desc: "uiDTD",
    bgImage: "/work3.jpg",
  },
  {
    titleKey: "VDE",
    desc: "VDEdes",
    bgImage: "/work4.jpg",
  },
];

export const servicesData =[
    {icon: assets.icon, iconDark: assets.code_dark, titleKey: 'webDesign', descKey: 'webDesc', link: ''},
    {icon: assets.mobile, iconDark: assets.mobile,titleKey: 'mobApp', descKey: 'mobDesc', link: ''},
    {icon: assets.ui, iconDark: assets.uxdark, titleKey: 'uiDesign', descKey: 'uiDesc', link: ''},
    {icon: assets.graphics,  titleKey: 'gDesign', descKey: 'gDesc', link: '',},

];

export const infodata =[
    {icon:assets.code, iconDark: assets.code_dark, title: "langTitle", description: 'langDesc'},
    {icon:assets.education, iconDark: assets.edu_dark, title: "edTitle", description: 'edDesc'},
    {icon:assets.briefcase, iconDark: assets.uxdark, title: "uTitle", description: 'uDesc', link: ''},
];

export const toolsData =[
    assets.vscode, assets.firebase, assets.db, assets.figma,
    assets.git
];