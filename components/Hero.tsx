import Button from '@mui/material/Button'
import { blue } from '@mui/material/colors'
import Image from 'next/image'
import React from 'react'

import heroCarImg from '../public/assets/hero.png'

const Hero = () => {
    return (
        <div className='hero sm:px-16 px-6'>

            <div className='pt-36 flex-1'>
                <h1 className='hero__title'>Find, book, or rent a car --quickly and easily!</h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process.
                </p>
                <Button variant='contained' sx={{ color: 'black', backgroundColor: blue }}>Explore Cars</Button>
            </div>

            <div className='hero__image-container '>
                <div className="hero__image">
                    <Image src={heroCarImg} alt='car hero' className='object-contain' />

                </div>
            </div>

        </div>
    )
}

export default Hero 