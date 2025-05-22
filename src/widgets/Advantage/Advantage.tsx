import { Helmet } from "react-helmet";

export const Advantage = () => {
  return (
    <>
      <Helmet>
        <title>Наши преимущества | Tea Shop</title>
        <meta name="description" content="Узнайте о преимуществах чая от Tea Shop: удобство, витамины, спокойствие, уникальная рецептура." />
        <meta name="keywords" content="преимущества, чай, витамины, спокойствие, рецептура, удобство" />
      </Helmet>

      <div className='w-full flex justify-center mt-[171px] relative'>
        <div className='w-full max-w-[1240px] flex flex-col relative'>
          <div>
            <span className='font-normal text-[8px] uppercase'>наше преимущество</span>

            <h1 className='font-normal text-[64px] mb-[75px]'>
              Гармония вкуса
              <br />
              и свободы
            </h1>
          </div>

          <div className="relative w-full flex justify-center">
            <div className="absolute w-[400px] left-[25px] top-[125px] flex items-end gap-[10px]">
              <span className="mb-[90px]">Удобство</span>
              <img className="h-[100px] w-[100px] rounded-full" src="/src/app/images/tea1.jpeg" alt="tea" />
              <div className="z-[-1] absolute right-[120px] top-[50px] h-[250px] w-[2px] rotate-[125deg] bg-[#2B322B]"></div>
            </div>

            <div className="absolute w-[400px] right-[500px] top-[-100px] flex items-end gap-[10px]">
              <span className="mb-[90px]">Витамины</span>
              <img className="h-[100px] w-[100px] rounded-full" src="/src/app/images/tea2.jpeg" alt="tea" />
              <div className="z-[-1] absolute right-[120px] top-[50px] h-[250px] w-[2px] rotate-[125deg] bg-[#2B322B]"></div>
            </div>

            <div className="absolute w-[400px] right-[-30px] top-[-100px] flex items-end gap-[10px]">
              <span className="mb-[90px]">Спокойствие</span>
              <img className="h-[100px] w-[100px] rounded-full" src="/src/app/images/tea3.jpeg" alt="tea" />
              <div className="z-[-1] absolute left-[0px] top-[50px] h-[300px] w-[2px] rotate-[-128deg] bg-[#2B322B]"></div>
            </div>

            <div className="absolute w-[400px] right-[-70px] top-[200px] flex items-end gap-[10px]">
              <span className="mb-[90px]">Уникальная рецептура</span>
              <img className="h-[100px] w-[100px] rounded-full" src="/src/app/images/tea4.jpeg" alt="tea" />
              <div className="z-[-1] absolute left-[80px] top-[50px] h-[315px] w-[2px] rotate-[-128deg] bg-[#2B322B]"></div>
            </div>

            <img className="w-[684px] h-[684px]" src="/src/app/images/leaf_advantage.png" alt="лист чая" />
          </div>
        </div>
      </div>
    </>
  );
};
