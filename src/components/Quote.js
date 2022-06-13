import React from 'react'

export default function Quote() {
    return (
        <>
            <div className="bg-[#2f2f2f] flex flex-col justify-between items-center">
                <p className="px-4 md:px-60 pt-32 text-white font-thin text-center tracking-wider text-xl" style={{ "fontFamily": "Montserrat" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum itaque voluptas ad voluptate quos, qui incidunt porro corporis quo placeat eum doloremque amet atque illum maiores laboriosam labore sapiente saepe repellendus ex minima nostrum. Magnam cumque vitae enim vel?
                </p>
                <p className="text-6xl text-white text-center m-10 py-8 md:pb-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                    HERBERT SIMON
                </p>
            </div>
        </>
    )
}
