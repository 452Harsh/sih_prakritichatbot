import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-cols-2 shadow-md p-5  md:px-10'>
            <div className="bg-relative flex items-centre  cursor-pointer my-auto text-4xl
            ">
                Prakriti
            </div>
            <div className="flex space-x-8  items-center justify-end text-gray-500">
                <div className='cursor-pointer'>
                    Home
                </div>
                <div className='cursor-pointer'>
                    Prakriti Assessment
                </div>
                <div className='cursor-pointer'>
                    About us
                </div>
            </div>
        </div>
    )
}

export default Header