import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className=' bg-slate-300 pb-6'>
            <div className='grid grid-cols-3 px-16 pt-8 '>
                <div className='col-span-2  px-16 pt-24 '>
                    <p className='text-2xl font-bold text-gray-800'>We all born with some unique “default” settings. <br /> These settings make us special among rest of the people.</p>
                    <br /> <p className='text-2xl font-bold text-gray-800'>Your inborn metabolic setting is your <span className='text-5xl text-yellow-800'>“Prakriti”</span>. Prakriti means Nature. <br /><br />  Your Prakruti is your first and foremost settings. <br /> This decides your first reaction when you interact with environment.</p>
                </div >
                <div className='col-span-1 pt-12'>
                    <Image src="/herosection.png"
                        width={500}
                        height={500}
                        alt="Picture" />
                </div>
            </div >
            <div className='flex justify-center' >
                <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 border rounded-full" >Know Your Prakriti</button>
            </div>
        </div >
    )
}

export default HeroSection