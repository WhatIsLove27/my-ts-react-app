import React from "react";
import Button from "../../shared/Button/Button";
import { Helmet } from "react-helmet";

interface TeaItem {
  name: string;
  description: string;
  price: string;
}

interface TeaListProps {
  data: TeaItem[];
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TeaList: React.FC<TeaListProps> = ({ data, callback }) => {
  return (
    <>
      <Helmet>
        <title>Список чаёв | Tea Shop</title>
        <meta name="description" content="Посмотрите список всех доступных чаёв: названия, описания и цены." />
        <meta name="keywords" content="чай, список, цена, описание, чайный каталог" />
      </Helmet>

      <div className="w-full flex justify-center mt-[50px] relative">
        <div className="w-full max-w-[1240px] flex flex-col">
          <ul className="w-full flex flex-col gap-[25px]">
            {data.map((item, i) => (
              <li key={i} className="bg-[#F5FEF0] border-[#232323] border-[1px] p-[20px]">
                <p className="font-semibold text-[20px]">
                  Название:
                  <br />
                  <span className="font-medium text-[16px]">{item.name}</span>
                </p>
                <hr className="border-[#232323] my-[5px]" />
                <p className="font-semibold text-[20px]">
                  Описание:
                  <br />
                  <span className="font-medium text-[16px]">{item.description}</span>
                </p>
                <hr className="border-[#232323] my-[5px]" />
                <p className="font-semibold text-[20px]">
                  Цена:
                  <br />
                  <span className="font-medium text-[16px]">{item.price}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-center mt-[50px] relative">
            <div className="w-full max-w-[1240px] flex items-center">
              <Button
                className="justify-center p-[10px]"
                onClick={() => callback((prev) => !prev)}
                width="w-[180px]"
                height="h-[64px]"
                text="Добавить предмет"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
