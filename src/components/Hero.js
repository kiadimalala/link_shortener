import { useState } from 'react'
import InputUrl from '../components/InputUrl'
import UrlList from './UrlList'
function Hero() {
    const [shortUrl, setShortUrl] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="bg-gray-100 relative py-20 w-full  min-h-80  xl:w-full xl:px-auto flex justify-center">
            <InputUrl setShortUrl={setShortUrl} shortUrl={shortUrl} setIsLoading={setIsLoading} />
            <UrlList shortUrl={shortUrl} isLoading={isLoading} />
        </div>
    )
}

export default Hero
