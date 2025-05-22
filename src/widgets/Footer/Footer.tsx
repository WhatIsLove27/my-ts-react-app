export const Footer = () => {
    return (
        <>
            <div className="flex w-full justify-center overflow-hidden">
                <div className="flex justify-center max-w-[1440px] relative mt-[140px] mb-[25px] flex-col gap-[15px] items-center">
                    <img className="w-[64px] h-[19px]" src="/src/app/images/logo.svg" alt=""  />

                    <img src="/src/app/images/leaf.png" className="left-[500px] bottom-[-75px] absolute h-[270xp] w-[350px] rotate-[125deg]" alt="leaf" />
                    <span className="font-semibold flex gap-2">
                        <span>
                            @ TAPIOLA 
                        </span>
                        <span>
                            | 
                        </span>
                        <span>
                            Политика обработки персональных данных
                        </span>                    
                    </span>
                </div>

            </div>
        </>
    );
};