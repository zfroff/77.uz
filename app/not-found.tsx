import Link from "next/link";
import Image from "next/image";
import { HeaderTop } from "../components/header-top";

export default function NotFound() {
  return (
    <>
      <HeaderTop />
      <div
        className="flex flex-col items-center justify-center px-4 bg-[#F8F9FD]"
        style={{
          height: `calc(100vh - 81px)`,
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-[400px] h-[400px] relative">
            <Image
              src="/404image.png"
              alt="404 error"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-2xl font-medium text-[#333333] mb-2">
          Страница, которую вы ищете, не найдена
        </h1>
        <p className="text-[#666666] text-center mb-8">
          Нам жаль, но, похоже, мы потеряли эту страницу, но мы
          <br />
          не хотим терять вас.
        </p>
        <Link
          href="/"
          className="bg-[#2680EB] text-white px-8 py-3 rounded-md hover:bg-[#1a65c7] transition-colors text-sm"
        >
          Вернуться на главную
        </Link>
      </div>
    </>
  );
}
