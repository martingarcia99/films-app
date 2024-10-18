import React from 'react'
import styles from '../../loading.module.css'

const loading = () => {
  return (
    <div className={`${styles.skeleton} w-screen md:h-[800px] h-auto bg-gray-300`}>
        <div className="gap-10 flex md:flex-row flex-col w-full h-full justify-center items-center md:p-0 p-5">
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden bg-gray-400"></div>
            <div className='text-white gap-5 flex flex-col md:max-w-5xl max-w-none w-5/6'>
                <h1 className="text-3xl font-bold w-[200px] bg-gray-400 h-10"></h1>
                <h3 className="bg-gray-400 w-[100px] h-10"></h3>
                <ul className="h-28 gap-2 flex flex-col">
                    <li className="bg-gray-400 h-10 w-[150px]"></li>
                    <li className="bg-gray-400 h-10 w-[150px]"></li>
                    <li className="bg-gray-400 h-10 w-[150px]"></li>
                </ul>
                <h2 className="bg-gray-400 h-10 md:w-[80px] w-auto"></h2>
                <div className=' bg-gray-400 h-[200px] md:w-[1000px] w-auto'>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default loading