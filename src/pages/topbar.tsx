import { Link } from 'react-router-dom';
import Logo from '../assets/img/yourd-logo.png';

export default function TopBar() {
    return (
        <div className="fixed flex h-14 w-full bg-white top-0 justify-between px-10">
            <img src={Logo} className="h-full object-contain "/>

            <div className='flex gap-6 items-center '>
                <Link to={'/domains'}>Domain</Link>
                <Link to={'/mypage'}>My Page</Link>
                <button className='py-2 px-4 bg-white drop-shadow-md rounded-sm'>Connet Wallet</button>
            </div>
        </div>
    )
}