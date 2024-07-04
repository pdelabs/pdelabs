const Header = () => {
    return (
        <header style={{ zIndex: 3000 }}>
            <div className="bg-white">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <img src="/assets/logo-full.svg" width={200} alt="pdelabs logo" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;