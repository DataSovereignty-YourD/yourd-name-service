
import { Link } from 'react-router-dom';
import Logo from '../assets/img/yourd-logo.png';
import {AiOutlineMore} from 'react-icons/ai';
import {useState} from 'react';
export default function TopBar() {
    return (
        <div className="fixed flex h-16 w-full bg-white top-0 items-center justify-between px-8 z-50 sm:px-20 drop-shadow-md">
            <Link to={"/"} className="flex w-fit h-full items-center">
                <img src={Logo} className="h-12 sm:h-full object-contain "/>
            </Link>

            {/**데스크탑 메뉴 */}
            <div className='hidden sm:flex gap-2 sm:gap-6 items-center text-sm'>
                <Link to={'/domains'} className="">Domain</Link>
                <Link to={'/mypage'}>My Page</Link>
                <button className='px-4 py-2 sm:py-2  bg-white drop-shadow-lg rounded-xl active:drop-shadow-none hover:bg-blue-50'>Connect</button>
            </div>
            
            {/**모바일 더보기 버튼 */}
            <div className='sm:hidden'>
                <AiOutlineMore size={22}/>
            </div>
        </div>
    )
}