import React from 'react'

export default function Awards() {
    return (
        <>
            <div className="bg-white justify-between items-center">
                <p className="text-6xl text-center m-auto font-bold pt-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                    AWARDS
                </p>
                <p className="text-center px-8 pt-10 md:px-60 text-lg tracking-wider" style={{ "fontFamily": "Montserrat" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque incidunt ad maxime nostrum error corporis voluptate illo nisi optio. Quas eius architecto ipsa accusamus placeat cupiditate voluptates! Numquam quasi minus laborum possimus fugiat excepturi itaque exercitationem velit, modi dolorum.
                </p>
                <div className="text-center flex flex-col md:flex-row justify-around justify-items-center gap-4 mt-20 pb-20" style={{ "fontFamily": "Montserrat" }}>
                    <div class="my-6 max-w-sm rounded shadow-xl">
                        <p className="text-center pt-10 px-24 font-bold text-4xl">
                            1240+
                        </p>
                        <div class="px-6 py-4">
                            <p class="font-bold text-xl">Club</p>
                        </div>
                    </div>
                    <div class="my-6 max-w-sm rounded shadow-xl">
                        <p className="text-center pt-10 px-40 font-bold text-4xl">
                            2000+
                        </p>
                        <div class="px-6 py-4">
                            <p class="font-bold text-xl">Active Members</p>
                        </div>
                    </div>
                    <div class="my-6 max-w-sm rounded shadow-xl">
                        <p className="text-center pt-10 px-24 font-bold text-4xl">
                            1,000+
                        </p>
                        <div class="px-6 py-4">
                            <p class="font-bold text-xl">Community</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center px-8 md:px-0">
                    <p className="text-6xl text-center m-auto font-bold pt-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        JOIN US
                    </p>
                    <p className="text-center pt-10 md:px-60 text-lg tracking-wider" style={{ "fontFamily": "Montserrat" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque incidunt ad maxime nostrum error corporis voluptate illo nisi optio. Quas eius architecto ipsa accusamus placeat cupiditate voluptates! Numquam quasi minus laborum possimus fugiat excepturi itaque exercitationem velit, modi dolorum.
                    </p>
                    <div className='pt-8 pb-16'>
                        <button className='text-white text-xl p-2 px-6 bg-[#2C2B2A]' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
