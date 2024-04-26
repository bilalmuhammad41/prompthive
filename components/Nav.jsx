"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signOut, signIn, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null)

  useEffect(()=>{
    
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
          <></>
        }
      </div>
    </nav>
  )
}

export default Nav