import React from 'react'

export default function Teams() {
    return (
        <>
            <div className="bg-[#2b2c2a] justify-between items-center">
                <p className="text-6xl text-white text-center m-auto font-bold pt-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>OUR TEAMS</p>
                <p className="text-center text-white pt-10 pl-60 pr-60 text-lg tracking-wider" style={{ "fontFamily": "Montserrat" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque incidunt ad maxime nostrum error corporis voluptate illo nisi optio. Quas eius architecto ipsa accusamus placeat cupiditate voluptates! Numquam quasi minus laborum possimus fugiat excepturi itaque exercitationem velit, modi dolorum.</p>
            </div>
            <div className="text-center grid grid-cols-3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </img>
                </div>
            </div>


        </>
    )
}
