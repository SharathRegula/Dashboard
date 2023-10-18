import React from 'react'
import * as HiIcons from "react-icons/hi2";
import * as LuIcons from "react-icons/lu";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";




export const SideBarData = [
    {
        title: "Dashboard",
        path: '/',
        icons: <LuIcons.LuLayoutDashboard/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
    {
        title: "Products",
        path: '/products',
        icons: <MdIcons.MdProductionQuantityLimits/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
    {
        title: "Customers",
        path: '/customers',
        icons: <BsIcons.BsPersonCircle/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
    {
        title: "Income",
        path: '/income',
        icons: <RiIcons.RiMoneyPoundCircleLine/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
    {
        title: "Promote",
        path: '/promote',
        icons: <HiIcons.HiOutlineGiftTop/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
    {
        title: "Help",
        path: '/help',
        icons: <MdIcons.MdOutlineHelpCenter/>,
        sideIcon: <MdIcons.MdKeyboardArrowRight/>,
        cName:'nav-link'
    },
   
]