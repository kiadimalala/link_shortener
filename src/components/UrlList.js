import React, { useState } from 'react'

import UseAnimations from "react-useanimations";

import loading2 from 'react-useanimations/lib/loading2'

import UrlItem from './UrlItem';
import SuccessCopy from './SuccessCopy';
function UrlList({ shortUrl, isLoading }) {
    const [isCopied, setIsCopied] = useState(false)
    return (
        <div className=" pt-5 w-full  min-h-40 mx-5 xl:px-auto xl:max-w-5xl flex flex-col items-center">
            {isLoading && <UseAnimations strokeColor='#2acfcf' animation={loading2} size={40} loop={true} />}
            {isCopied && <SuccessCopy isCopied={isCopied} />}
            {shortUrl.map((item, index) => <UrlItem key={index} item={item} setIsCopied={setIsCopied}></UrlItem>)}
        </div>
    )



}

export default UrlList
