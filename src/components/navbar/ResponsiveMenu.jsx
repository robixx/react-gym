import React from 'react'
import {FaUserCircle} from "react-icons/fa"
import { Navlinks } from './Navbar'

const ResponsiveMenu = ({showMenu}) => {
    
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      <div className=''>
        <div className='flex items-center justify-start gap-3'>
            <FaUserCircle size={50} />
            <div>
              <h1>Hello Robi</h1>
              <h1 className='text-sm text-slate-500'>Premium User</h1>
            </div>
        </div>
        <nav className='mt-12'>
            <ul className='space-y-4 text-base'>
                {Navlinks.map((data, index)=>{
                   return <li key={index}>
                     <a href={data.link} className='mb-5 inline-block'>{data.name}</a>
                   </li>
                })}
            </ul>
        </nav>
      </div>
      <div className=''>
        <h1>
            Made with ❤️ by <a href="#">Robi</a>
        </h1>
      </div>
    </div>
  )
}

export default ResponsiveMenu
