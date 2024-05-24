import React from 'react'
import { fogotPassword } from '../assest';

const ForgotPassword = () => {
  return (
    <div id='fogot-password'>
        <div className='container p-4 mx-auto'>
            <div className='max-w-md p-2 py-5 mx-auto bg-white'>
                <div className='w-20 h-20 mx-auto '>
                    <img src={fogotPassword} alt="fogot-password"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword;