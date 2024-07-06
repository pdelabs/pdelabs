import { FC } from "react";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <header className="fixed w-full" style={{ zIndex: 3000, height: 56, backgroundColor: 'transparent' }}>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <img src="/assets/logo-full.svg" width={200} alt="pdelabs logo" />
                </div>
            </div>
        </header>
    )
}
export default Header;