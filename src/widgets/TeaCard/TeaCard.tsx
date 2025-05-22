import { Helmet } from 'react-helmet';
import styles from './TeaCard.module.scss';

export const TeaCard = () => {
  return (
    <>
      <Helmet>
        <title>Чайная карта | Tea Shop</title>
        <meta name="description" content="Изучите нашу чайную карту — способы доставки, отзывы, подборки, культура чаепития." />
        <meta name="keywords" content="чайная карта, чай, отзывы, доставка, культура, подбор чая" />
      </Helmet>

      <div className='w-full flex justify-center mt-[171px] relative'>
        <div className='w-full max-w-[1240px] flex flex-col relative'>
          <div>
            <span className='font-normal text-[8px] uppercase'>Чайная карта</span>

            <h1 className='font-normal text-[64px] mb-[75px]'>
              Исследуйте новые
              <br />
              вкусы и ощущения
            </h1>
          </div>

          <ul className={styles.tea__card_list}>
            <li className={`${styles.tea__card_list_item} flex justify-end p-[20px] bg-cover bg-center bg-no-repeat bg-[url(/src/app/images/tea_card/tea_card_image.jpeg)]`}>
              <a className='flex bg-[#F5FEF0] p-[15px] h-[53px] items-center rounded-[10px] w-[248px] gap-[20px]'>
                <img className='w-[10px] h-[10px]' src='/src/app/images/tea_card/tea_card_link_point.svg' alt='точка' />
                <span className='font-semibold'>Способы доставки</span>
                <img className='w-[20px] h-[20px]' src='/src/app/images/tea_card/tea_card_link_arrow.svg' alt='стрелка' />
              </a>
            </li>

            <li className={`${styles.tea__card_list_item} flex justify-end p-[20px] items-end row-span-2 bg-[auto_800px] bg-[center_bottom_-200px] bg-no-repeat bg-[url(/src/app/images/tea_card/tea_card_image3.jpeg)]`}>
              <a className='flex bg-[#F5FEF0] p-[15px] h-[53px] items-center rounded-[10px] w-[248px] gap-[20px]'>
                <img className='w-[10px] h-[10px]' src='/src/app/images/tea_card/tea_card_link_point.svg' alt='точка' />
                <span className='font-semibold'>Выбрать чай</span>
                <img className='w-[20px] h-[20px]' src='/src/app/images/tea_card/tea_card_link_arrow.svg' alt='стрелка' />
              </a>
            </li>

            <li className={`${styles.tea__card_list_item} flex justify-end p-[20px] row-span-2 bg-[auto_550px] bg-center bg-no-repeat bg-[url(/src/app/images/tea_card/tea_card_image2.jpeg)]`}>
              <a className='flex bg-[#F5FEF0] p-[15px] h-[53px] items-center rounded-[10px] w-[248px] gap-[20px]'>
                <img className='w-[10px] h-[10px]' src='/src/app/images/tea_card/tea_card_link_point.svg' alt='точка' />
                <span className='font-semibold'>Отзывы клиентов</span>
                <img className='w-[20px] h-[20px]' src='/src/app/images/tea_card/tea_card_link_arrow.svg' alt='стрелка' />
              </a>
            </li>

            <li className={`${styles.tea__card_list_item} flex justify-end p-[20px] bg-center bg-no-repeat bg-[auto_350px] bg-[url(/src/app/images/tea_card/tea_card_image4.jpeg)]`}>
              <a className='flex bg-[#F5FEF0] p-[15px] h-[53px] items-center rounded-[10px] w-[248px] gap-[20px]'>
                <img className='w-[10px] h-[10px]' src='/src/app/images/tea_card/tea_card_link_point.svg' alt='точка' />
                <span className='font-semibold'>Чайная культура</span>
                <img className='w-[20px] h-[20px]' src='/src/app/images/tea_card/tea_card_link_arrow.svg' alt='стрелка' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
