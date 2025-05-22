import { useState, useEffect } from "react";
import {
  About,
  Advantage,
  Header,
  BannerCatalog,
  TeaCard,
  Footer,
  TeaList
} from "../widgets";
import Button from "../shared/Button/Button";
import { Helmet } from "react-helmet";

interface TeaItem {
  name: string;
  description: string;
  price: string;
}

export const Home = () => {
  const [items, setItems] = useState<TeaItem[]>([]);
  const [isModalActive, setModalActive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/teas")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ошибка загрузки чаёв:", err));
  }, []);

  function AddItemToList(itemData: FormData) {
    const name = itemData.get("name") as string;
    const description = itemData.get("description") as string;
    const price = itemData.get("price") as string;

    fetch("http://localhost:3001/api/teas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, description, price })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при добавлении товара");
        return res.json();
      })
      .then((newTea) => {
        setItems((prev) => [newTea, ...prev]);
      })
      .catch((err) => {
        console.error("Ошибка POST-запроса:", err);
      });
  }

  return (
    <>
      <Helmet>
        <title>Главная | Tea Shop</title>
        <meta name="description" content="Добро пожаловать в интернет-магазин чая" />
        <meta name="keywords" content="чай, магазин, зелёный чай, улун, интернет-магазин" />
      </Helmet>

      {/* Модальное окно */}
      <div
        className={`w-[100svw] h-[100svh] fixed flex justify-center items-center z-[1000] ${
          isModalActive ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setModalActive(false)}
          className="bg-black bg-opacity-50 absolute w-full h-full"
        ></div>

        <div className="max-w-[400px] bg-[#F5FEF0] w-full rounded-[10px] p-[25px] z-[1000]">
          <form action={AddItemToList}>
            <label>
              Название:
              <input name="name" type="text" className="w-full border-2 px-2 bg-transparent border-[#232323] rounded-md" />
            </label>
            <label>
              Описание:
              <input name="description" type="text" className="w-full border-2 px-2 bg-transparent border-[#232323] rounded-md" />
            </label>
            <label>
              Цена:
              <input name="price" type="text" className="w-full border-2 px-2 bg-transparent border-[#232323] rounded-md" />
            </label>
            <Button type="submit" className="mt-[25px]" width="w-full" height="h-[35px]" text="Добавить предмет" />
          </form>
        </div>
      </div>

      {/* Страница */}
      <Header />
      <TeaList callback={setModalActive} data={items} />
      <BannerCatalog />
      <About />
      <Advantage />
      <TeaCard />
      <Footer />
    </>
  );
};
