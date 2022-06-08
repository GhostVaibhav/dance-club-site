import React, { Component } from 'react'

export class Query extends Component {
    render() {
        return (
            <div className='flex justify-center bg-[#FF620E]'>
                <div className='flex flex-col items-center p-6 max-w-xl'>
                    {/* Title */}
                    <div className='text-4xl pt-4 p-2 text-white' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        LET US KNOW
                    </div>
                    {/* Description */}
                    <div className='p-2 text-white' style={{ "fontFamily": "Montserrat" }}>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum itaque voluptas ad voluptate quos, qui incidunt porro corporis quo placeat eum doloremque amet atque illum maiores laboriosam labore sapiente saepe repellendus ex minima nostrum. Magnam cumque vitae enim vel?
                    </div>
                    {/* Input boxes */}
                    <div>
                        <input className='p-2 my-4 sm:m-4 w-full sm:w-auto' style={{ "fontFamily": "Montserrat" }} type="text" placeholder="Your Query" />
                        <input className='p-2 my-4 sm:m-4 w-full sm:w-auto' style={{ "fontFamily": "Montserrat" }} type="email" placeholder="Email" />
                    </div>
                    {/* Button */}
                    <div className='pt-2'>
                        <button className='text-white text-xl p-2 px-6 bg-[#2C2B2A]' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Query