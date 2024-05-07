"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signOut, signIn, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null)
  const [toggle, setToggle] = useState(false)
  useEffect(()=>{
    const fetchProviders = async ()=>{
      try {
        const response = await getProviders()
        setProviders(response)
      } catch (error) {
        console.log(error)        
      }
    }

    fetchProviders()

  }, [])


  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2 flex-center'>
        <Image 
          src={'/assets/images/logo.svg'}
          width={30}
          height={30}
          alt='prompthive'
          className='object-contain'/>
          <p className='logo_text'>PromptHive</p>
      </Link>

      <div>
        {
          isUserLoggedIn 
          ? 
          <div className='sm:flex hidden'>
            <div className='flex gap-3 md:gap-5'>
              <Link href={'/create-prompt'} className='black_btn'>
                Create Post
              </Link>

              <button 
                className='outline_btn'
                type="button" 
                onClick={signOut}>
                  Sign Out
              </button>

              <Link href={'/profile'}>
                <Image 
                  src={"/assets/images/logo.svg"}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                  />
              </Link>
            </div>
          </div>
          :
          <>
            {providers&&
            Object.values(providers).map((provider)=>(
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'>
                SignIn

              </button>
            ))}
          </>
        }
      </div>

      {/* Mobile Nav */}

      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div>
            <Image
              src = "/assets/images/logo.svg"
              width={37}
              height={37}
              className='rounded-full relative'
              alt='profile'
              onClick={() => setToggle(prev => !prev)}
            />
            {/* Dropdown */}
             <div className={`w-[200px] py-3 px-2 gap-3 bg-white rounded-lg items-end sm:hidden ${!toggle?'scale-y-0 delay-[100ms]': 'scale-y-100'}  origin-top overflow-hidden flex flex-col  absolute mt-5 translate-x-[-80%] transition-all duration-200 border-[1.5px] border-slate-200`}>
              <Link 
                className={`dropdown_link transition-all duration-100  ${toggle&& "opacity-100"} opacity-0`} 
                href={'/my-profile'}
                onClick={() => setToggle(false)}>
                  My Profile
              </Link>
              <Link 
                className={`dropdown_link transition-all duration-100 ${toggle&& "opacity-100"} opacity-0`}  
                href={'/create-prompt'}
                onClick={() => setToggle(false)}>
                  Create Prompt
              </Link>
              <button
              className={`black_btn w-full mt-3 transition-all duration-100 px-3 py-2 ${toggle&& "opacity-100"} opacity-0`} 
                type='button'
                onClick={()=>{
                  setToggle(false);
                  signOut()
                }}>
                Sign Out
              </button>
             </div>
          </div>
        )
        :
        <>
         {providers&&
            Object.values(providers).map((provider)=>(
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'>
                SignIn

              </button>
            ))}
        </>
        }

       
      </div>
    </nav>
  )
}

export default Nav