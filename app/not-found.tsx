import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="w-24 h-24 mb-8 relative">
        <Image
          src="/not-found.svg"
          alt="Page not found"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-[#333333] mb-2">
        Страница не найдена
      </h1>
      <p className="text-[#666666] text-center mb-8">
        Извините, страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link
        href="/"
        className="bg-[#2680EB] text-white px-6 py-2 rounded-md hover:bg-[#1a65c7] transition-colors"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
