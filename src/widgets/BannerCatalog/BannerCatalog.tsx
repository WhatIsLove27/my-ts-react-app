import React from 'react';
import Button from '../../shared/Button/Button';
import { Helmet } from 'react-helmet';

export const BannerCatalog = () => {
  return (
    <>
      <Helmet>
        <title>Каталог | Tea Shop</title>
        <meta name="description" content="Познакомьтесь с чаями из Карелии. Уникальные вкусы и натуральные ингредиенты в каждой кружке." />
        <meta name="keywords" content="каталог, чай, карелия, чайная экспедиция, натуральный чай" />
      </Helmet>

      <div className='w-full overflow-hidden'>
        <div className='absolute w-full -z-10 h-[463px] flex justify-end'>
          <img className='absolute h-[463px] float-right -mt-[125px] -mr-[250px]' src='/src/app/images/leaf.png' alt='leaf' />
        </div>

        <div className='w-full flex justify-center mt-[171px] relative'>
          <div className='w-full max-w-[1240px] flex items-center gap-[345px]'>
            <div>
              <span className='font-normal text-[8px] uppercase'>наслаждайтесь природой севера</span>

              <h1 className='font-normal text-[64px] mb-[75px]'>
                Вкус <span className='text-[#4C6444]'>Карелии</span>
                <br />
                в одной кружке
              </h1>

              <Button width="w-[initial]" className={'p-[20px]'} height={'h-[54px]'} text={'Посмотреть каталог'} />
            </div>

            <div className='w-[288px] h-[402px] flex flex-col items-center py-[15px] px-[15px] bg-[#F5FEF0] border-[#232323] border-[1px]'>
              <div className='overflow-hidden w-full h-[183px] rounded-[10px] border-[1px] border-[#2B322B]'>
                <img className='h-full' src='/src/app/images/tea_banner.jpeg' alt='tea' />
              </div>

              <h2 className='font-normal text-[32px] leading-[120%] mt-[20px] mb-[30px]'>
                Чайная экспедиция
              </h2>

              <Button
                className={'justify-between'}
                imageEnd={"/src/app/images/arrow_up.svg"}
                width="w-full"
                height={'h-[54px]'}
                imageStart={'/src/app/images/point.svg'}
                text={'Смотреть'}
              />
            </div>
          </div>
        </div>

        <div className='absolute w-full -z-10 h-[463px] flex justify-start'>
          <img className='absolute h-[463px] float-right -mt-[125px] -ml-[225px] rotate-[-154deg]' src='/src/app/images/leaf.png' alt='leaf' />
        </div>
      </div>
    </>
  );
};
