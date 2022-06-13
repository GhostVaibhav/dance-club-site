import React from 'react'

export default function About() {
    return (
        <>
            <div className="bg-[#ff620e] flex justify-between items-center">
                <div className="shadow-xl m-10 p-8 md:m-20 md:p-0">
                    <p className="text-6xl text-white text-center md:m-10 font-bold md:pt-10 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        WHAT WE DO
                    </p>
                    <p className="md:px-60 md:pb-40 text-white font-thin tracking-wider text-xl" style={{ "fontFamily": "Montserrat" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum itaque voluptas ad voluptate quos, qui incidunt porro corporis quo placeat eum doloremque amet atque illum maiores laboriosam labore sapiente saepe repellendus ex minima nostrum. Magnam cumque vitae enim vel?
                    </p>
                </div>
            </div>
        </>
    )
}
