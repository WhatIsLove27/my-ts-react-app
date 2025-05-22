import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>О нас | Tea Shop</title>
        <meta name="description" content="Узнайте больше о нашей чайной компании Тапиола, вдохновлённой духом леса." />
        <meta name="keywords" content="о нас, чай, тапиола, карелия, чайный бренд, история компании" />
      </Helmet>

      <div className='w-full flex justify-center mt-[280px] relative'>
        <div className='w-full max-w-[1240px] flex items-center gap-[345px]'>
          <div>
            <span className='font-normal text-[8px] uppercase'>о нас</span>

            <h1 className='font-normal text-[64px] mb-[75px]'>
              Как идея превратилась
              <br />
              в любимый напиток
            </h1>

            <div className="flex gap-[200px] items-center">
              <div className="w-[326px]">
                <span className="block">
                  В самом сердце Карелии, среди бескрайних лесов, зеркальных озер и чистого воздуха, родилась идея, которая вдохнула жизнь в компанию “Тапиола”.
                </span>

                <span className="mt-[25px] mb-[80px] block">
                  Название бренда не случайно: Тапиола — это дух леса, хранитель природы в карело-финской мифологии. Именно он стал символом гармонии, чистоты и силы, которые воплотились в каждом листочке чая.
                </span>

                <button className="flex gap-5">
                  Подробнее
                  <img src="/src/app/images/about_arrow.svg" alt="about_arrow" />
                </button>
              </div>

              <div className="flex items-center gap-10">
                <img className="w-[653px] h-[413px] rounded-[10px]" src="/src/app/images/about_image.jpeg" alt="about_images" />
                <button>
                  <img src="/src/app/images/about_slider_btn.svg" alt="слайдер" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
