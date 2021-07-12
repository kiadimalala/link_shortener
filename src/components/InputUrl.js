import React, { useState } from 'react'
import mobile from '../assets/images/bg-shorten-mobile.svg'
import desktop from '../assets/images/bg-shorten-desktop.svg'
import axios from 'axios'

function InputUrl({ shortUrl, setShortUrl, setIsLoading }) {
    const [url, setUrl] = useState('')
    const [isError, setIsError] = useState(false)

    const hangleShortening = (e) => {
        e.preventDefault()
        const link = {
            "domain": "bit.ly",
            "long_url": `${url}`
        }
        setIsLoading(true)
        axios.post(`${process.env.REACT_APP_BITLY_URL}`, JSON.stringify(link), {
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const { link, long_url } = response.data
            setShortUrl([{ link: link, long: long_url }, ...shortUrl])
            setIsLoading(false)
            setIsError(false)
            setUrl('')
        })
            .catch((error) => {
                if (error) {
                    setIsError(true)
                    setIsLoading(false)
                    setUrl('')
                }
            })
    }

    return (
        <div className="absolute  w-full -top-28 xl:mx-auto xl:max-w-6xl ">
            <div className="  mx-5 h-48 bg-dark-violet rounded-lg relative">
                <img className="h-28 w-full object-contain object-right rounded-tr-lg xl:hidden" src={mobile} alt="" />
                <img className="hidden h-full rounded-lg  w-full object-cover object-center  xl:block" src={desktop} alt="" />
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center p-5">
                    <div className="w-full flex flex-col xl:flex-row">
                        <input value={url} onChange={({ target }) => setUrl(target.value)} className={!isError ? "pl-2 h-12 w-full mb-5 xl:m-0 xl:h-14 xl:mx-2" : "border-2 border-red pl-2 h-12 w-full mb-5 xl:m-0 xl:h-14 xl:mx-2"} type="text" placeholder="Shorten a link here..." />
                        <button className="w-full  bg-cyan h-12 rounded text-gray-50 capitalize font-bold text-xl xl:h-14 xl:w-40" onClick={(e) => {
                            hangleShortening(e)
                        }}>Shorten it!</button>
                    </div>
                    {isError && <h1 className="text-sm mt-1 text-red xl:text-base text-left w-full ml-5">Please add a valid link!</h1>}
                </div>
            </div>
        </div>
    )
}

export default InputUrl
