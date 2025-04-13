import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="shadow-md w-full z-50 bg-[#FF7600] text-[#EEEEEE] font-bold">
            <div className="container mx-auto items-center justify-between py-3">
                <nav className={'flex gap-5'}>
                    <NavLink className={'hover:opacity-80 transition duration-300 easy-linear'} to={'/'}>Главная</NavLink>
                    <NavLink className={'hover:opacity-80 transition duration-300 easy-linear'} to={'/quote'}>Цитаты</NavLink>
                </nav>
            </div>
        </header>
    )
        ;
}

export default Header;