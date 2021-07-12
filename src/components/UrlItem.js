import React from 'react'

import Clipboard from 'react-clipboard.js';

import { FiCopy } from 'react-icons/fi'


function UrlItem({ item, setIsCopied }) {
    const onSuccess = () => {
        setIsCopied(true)
        setInterval(() => {
            setIsCopied(false)
        }, 5000);
    }
    return (
        <div className=" relative flex flex-col  items-center justify-center w-full bg-gray-200 rounded shadow mb-3 xl:h-10 xl:flex-row xl:px-2 xl:justify-evenly transition-all duration-500 ease-in-out">
            <h2 className="w-full text-sm m-2 text-center  xl:text-left">{item.long}</h2>
            <h1 className="w-full text-cyan m-2 font-bold text-center  xl:text-left">
                {item.link}
            </h1>
            <Clipboard data-clipboard-text={item.link} onSuccess={onSuccess} className=" w-full h-10 flex justify-center items-center bg-dark-violet text-gray-50 rounded xl:h-full xl:w-10  xl:absolute xl:top-0 xl:right-0">
                <FiCopy />
            </Clipboard>
        </div>
    )
}

export default UrlItem
