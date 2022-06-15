import React from 'react'

export default function Events() {
    return (
        <>
            <div className="bg-[#FF620E] pb-20">
                <p className="text-6xl text-center m-auto text-white font-bold pt-20 pb-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                    UPCOMING EVENTS
                </p>

                <div className="grid grid-cols-6">
                    <div></div>
                    <div className="col-span-4 ">
                        <div className="grid grid-cols-4 grid-rows-3">

                            {/* Row 1 */}

                            <div className="bg-black text-white p-6">
                                <p className="text-6xl pb-1">6</p>
                                <p className="font-['Montserrat'] text-4xl tracking-wider pb-6">APRIL</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">Saturday</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">21:00</p>
                            </div>

                            <div className="bg-white text-black p-6">
                                <p className="font-['Montserrat'] tracking-wider leading-tight font-extrabold text-4xl">
                                    World Dance Day
                                </p>
                            </div>
                            <div className="bg-black text-white p-6">
                                {/* Image */}
                            </div>
                            <div className="bg-white text-black p-6">
                                <p className="font-['Montserrat'] text-base tracking-normal">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum minus alias tempora dicta consequuntur non exercitationem
                                </p>
                            </div>

                            {/* Row 2 */}

                            <div className="bg-white text-black p-6">
                                <p className="text-6xl pb-1">17</p>
                                <p className="font-['Montserrat'] text-4xl tracking-wider pb-6">APRIL</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">Wednesday</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">18:00</p>
                            </div>

                            <div className="bg-black text-white p-6">
                                <p className="font-['Montserrat'] tracking-wider leading-tight font-extrabold text-4xl">
                                    Riviera
                                </p>
                            </div>
                            <div className="bg-white text-black p-6">
                                <p className="font-['Montserrat'] text-base tracking-normal">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum minus alias tempora dicta consequuntur non exercitationem
                                </p>
                            </div>
                            <div className="bg-black text-white  p-6">
                                {/* Image */}
                            </div>


                            {/* Row 3 */}

                            <div className="bg-black text-white p-6">
                                <p className="text-6xl pb-1">2</p>
                                <p className="font-['Montserrat'] text-4xl tracking-wider pb-6">MAY</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">Sunday</p>
                                <p className="font-['Montserrat'] text-xl tracking-wide">19:00</p>
                            </div>

                            <div className="bg-white text-black p-6">
                                <p className="font-['Montserrat'] tracking-wider leading-tight font-extrabold text-4xl">
                                    Vibe Verse
                                </p>
                            </div>
                            <div className="bg-black text-white p-6">
                                {/* Image */}
                            </div>
                            <div className="bg-white text-black p-6">
                                <p className="font-['Montserrat'] text-base tracking-normal">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum minus alias tempora dicta consequuntur non exercitationem
                                </p>
                            </div>


                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
