import React from 'react'
import styles from './loading.module.css'

const loading = () => {
  return (
    <div className={`${styles.skeleton} flex flex-col md:gap-2`}>
        <div className="bg-zinc-300 w-60 h-10 mt-16 md:mb-5 mx-5"></div>
        <div className='flex flex-row gap-5 p-5'>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px] hidden md:block'></div>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px] hidden md:block'></div>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px] hidden md:block'></div>
            <div className='bg-zinc-300 md:w-[300px] md:h-[400px] w-[130px] h-[200px] hidden md:block'></div>
        </div>
    </div>
    
  )
}

export default loading