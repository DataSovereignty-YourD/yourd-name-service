import Logo from '../assets/img/yourd-logo.png';

export default function TopBar() {
    return (
        <div className="fixed h-14 bg-white top-0">
            <img src={Logo} className="h-full object-contain "/>
        </div>
    )
}