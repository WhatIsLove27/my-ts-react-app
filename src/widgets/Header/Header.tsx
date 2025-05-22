export const Header = () => {
    return (
        <>
            <header className="w-full h-10 flex justify-center items-center">
                <div className="max-w-[1240px] w-full flex justify-between items-center mt-[50px]">
                    <div className="flex gap-28">
                        <img src="/src/app/images/logo.svg" alt="logo" />
                        
                        <nav>
                            <ul className="flex gap-[35px]">
                                <li>
                                    <a href="/menu">Меню</a>
                                </li>
                                <li>
                                    <a href="/booking">Бронь</a>
                                </li>
                                <li>
                                    <a href="/stocks">Акции</a>
                                </li>
                                <li>
                                    <a href="/delivery">Доставка</a>
                                </li>
                                <li>
                                    <a href="/contacts">Контакты</a> 
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <button>
                        <img src="/src/app/images/header-burger.svg" alt="" />
                    </button>
                </div>
            </header>
        </>
    );
};
