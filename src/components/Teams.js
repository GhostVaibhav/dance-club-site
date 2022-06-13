import React from 'react';
import bbc from '../img/BBC.jpg';
import chargers from '../img/Chargers.jpg';
import jnj from '../img/JnJ.jpg';
import maya from '../img/Maya.png';
import mirage from '../img/Mirage.jpg';
import riwaayat from '../img/Riwaayat.jpg';
import unitrix from '../img/Unitrix.jpg';

export default function Teams() {
    function onMouseEnter(e) {
        document.querySelector('.card_' + e).style.backgroundColor = "#FF620E";
    }
    
    function onMouseLeave(e) {
        document.querySelector('.card_' + e).style.backgroundColor = "#494949";
    }
    return (
        <>
            <div className="bg-[#2b2c2a] justify-between items-center text-white">
                <p className="text-6xl text-white text-center m-auto font-bold pt-20 tracking-wider" style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                    OUR TEAMS
                </p>
                <p className="text-center text-white px-8 pt-10 md:px-60 text-lg tracking-wider" style={{ "fontFamily": "Montserrat" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora itaque incidunt ad maxime nostrum error corporis voluptate illo nisi optio. Quas eius architecto ipsa accusamus placeat cupiditate voluptates! Numquam quasi minus laborum possimus fugiat excepturi itaque exercitationem velit, modi dolorum.
                </p>
                <div className="text-center flex flex-col justify-items-center gap-0 md:gap-4 mt-20 pb-20" style={{ "fontFamily": "Montserrat" }}>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave(1)}>
                            <img className="w-auto" src={bbc} alt="dance club" />
                            <div className="card_1 px-6 py-4">
                                <p className="font-bold text-xl">BOLLYWOOD BADMASH COMPANY</p>
                            </div>
                        </a>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave(2)}>
                            <img className="w-auto" src={chargers} alt="dance club" />
                            <div className="card_2 px-6 py-4">
                                <p className="font-bold text-xl">CHARGERS</p>
                            </div>
                        </a>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave(3)}>
                            <img className="w-auto" src={jnj} alt="dance club" />
                            <div className="card_3 px-6 py-4">
                                <p className="font-bold text-xl">JnJ BHANGRA</p>
                            </div>
                        </a>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(4)} onMouseLeave={() => onMouseLeave(4)}>
                            <img className="w-auto" src={maya} alt="dance club" />
                            <div className="card_4 px-6 py-4">
                                <p className="font-bold text-xl">MAYA</p>
                            </div>
                        </a>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(5)} onMouseLeave={() => onMouseLeave(5)}>
                            <img className="w-auto" src={mirage} alt="dance club" />
                            <div className="card_5 px-6 py-4">
                                <p className="font-bold text-xl">MIRAGE</p>
                            </div>
                        </a>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(6)} onMouseLeave={() => onMouseLeave(6)}>
                            <img className="w-auto" src={riwaayat} alt="dance club" />
                            <div className="card_6 px-6 py-4">
                                <p className="font-bold text-xl">RIWAAYAT</p>
                            </div>
                        </a>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <a href="/" className="max-w-sm p-4 md:p-0 rounded shadow-lg" onMouseEnter={() => onMouseEnter(7)} onMouseLeave={() => onMouseLeave(7)}>
                            <img className="w-auto" src={unitrix} alt="dance club" />
                            <div className="card_7 px-6 py-4">
                                <p className="font-bold text-xl">UNITRIX</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}
