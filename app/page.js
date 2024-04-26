import Feed from '@components/Feed'
import React from 'react'

const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share 
        <br className='md:hidden block'/>
         <span className='orange_gradient'> AI-Powered Prompts</span>
      </h1>

      <p className='desc text-center'>PromptHive is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>

      <Feed/>
    </section>
  )
}

export default page