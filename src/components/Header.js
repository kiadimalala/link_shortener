import React from 'react'
import illustration from '../assets/images/illustration-working.svg'
import logo from '../assets/images/logo.svg'

function Header() {
    return (
        <section className="w-full h-header max-w-6xl mx-auto mb-40">
            <nav className="h-20 flex items-end mb-5 px-5 xl:mb-20">
                <div className="w-full">
                    <img src={logo} alt="" />
                </div>
            </nav>
            <div className="w-full flex flex-col mb-20  xl:flex-row-reverse xl:h-5/6 xl:mb-20 relative">
                <div className="w-full pl-5 mb-10 xl:h-full">
                    <img className=" object-contain object-center w-full h-80 xl:h-full" src={illustration} alt="" />
                </div>
                <div className=" text-center mx-5 xl:h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-dark-violet">More than just shorter link.</h1>
                    <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus animi soluta velit amet ratione.</p>
                    <button className="bg-cyan h-14 w-44 rounded-full text-gray-50 capitalize font-bold text-xl">Get Started</button>
                </div>
            </div>


        </section>
    )
}

export default Header
