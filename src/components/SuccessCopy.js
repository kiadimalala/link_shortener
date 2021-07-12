import React from 'react'
import '../styles/success.css'
function SuccessCopy({isCopied}) {
    return (
        <div className={isCopied?'enter text-green-500 border border-green-500 w-full p-1 rounded text-center my-4':'leave'}>
            <h1>Copied successfully!</h1>
        </div>
    )
}

export default SuccessCopy
