import React from 'react'
import styles from '../../loading.module.css'

const loading = () => {
  return (
    <div className={`${styles.skeleton} flex flex-col gap-2 md:px-64 px-10`}>
        <div className="bg-zinc-300 md:w-80 w-72 h-10 mt-10 mb-5"></div>
        <div className='grid md:grid-cols-5 grid-cols-2 gap-5'>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
            <div className='bg-zinc-300 md:w-[270px] md:h-[400px] w-[150px] h-[200px]'></div>
        </div>
    </div>
    
  )
}

export default loading