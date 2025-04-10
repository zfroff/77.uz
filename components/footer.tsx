"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#FFF] pt-16 pb-6">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(to right, #E5E5E5 2px, transparent 2px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Logo section */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2">
          <Image
            src="/logo.svg"
            alt="77.uz"
            width={180}
            height={48}
            className="drop-shadow-[10px_10px_12px_rgba(38,128,235,0.2)]"
          />
        </div>

        {/* Description */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-base text-[#333333]">
            77.uz marketplace - это виртуальная платформа в Узбекистане, которая
            облегчает покупки и продажи, связывая продавцов с потенциальными
            клиентами.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center gap-12 mb-8">
          <Link
            href="#"
            className="text-[#333333] hover:text-[#2680EB] transition-colors duration-200 flex items-center gap-2 group"
          >
            <div className="w-5 h-5 text-[#2680EB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 5V10M10 10V15M10 10H15M10 10H5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Доска объявлений
          </Link>
          <Link
            href="../terms-of-use"
            className="text-[#333333] hover:text-[#2680EB] transition-colors duration-200 flex items-center gap-2 group"
          >
            <div className="w-5 h-5 text-[#2680EB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 6H10.01M9 10H10V14M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Условия пользования
          </Link>
          <Link
            href="tel:+998885005000"
            className="text-[#333333] hover:text-[#2680EB] transition-colors duration-200 flex items-center gap-2 group"
          >
            <div className="w-5 h-5 text-[#2680EB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L7.26772 9.27147C7.33449 9.67546 7.14066 10.0845 6.78483 10.3C6.78483 10.3 5.3 11.4 8 14C10.7 16.6 11.8 15.1152 11.8 15.1152C12.0155 14.7594 12.4245 14.5655 12.8285 14.6323L19.1644 15.7608C19.6466 15.8411 20 16.2583 20 16.7471V19C20 19.5523 19.5523 20 19 20H18C9.71573 20 3 13.2843 3 5V4C3 3.44772 2.55228 3 2 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            +998 88 500 50 00
          </Link>
        </div>

        {/* App download section */}
        <div className="text-center mb-8">
          <p className="text-[#333333] mb-4">
            Загрузите наше{" "}
            <Link href="#" className="text-[#2680EB]">
              приложение
            </Link>{" "}
            и пользуйтесь с платформой{" "}
            <Link href="#" className="text-[#2680EB]">
              ещё удобнее
            </Link>
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="transition-opacity hover:opacity-80">
              <div className="h-[40px] bg-black rounded-lg flex items-center px-4 gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.25.79 3.04.84 1.15-.17 2.23-.89 3.48-.84 1.96.08 3.45 1.14 4.35 2.84-3.39 2.11-2.87 6.61.77 7.85-.7 1.94-1.64 3.89-3.01 5.12zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.26 2.01-1.76 4.04-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-white opacity-80">
                    Download on the
                  </div>
                  <div className="text-white text-[16px] font-medium leading-snug">
                    App Store
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-80">
              <div className="h-[40px] bg-black rounded-lg flex items-center px-4 gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M3.609 3.523c.151.27.243.573.243.892v14.17c0 .319-.092.622-.243.892l7.88-7.977-7.88-7.977zm.577-.577l7.88 7.977 2.4-2.431c.499-.505.499-1.32 0-1.825l-2.4-2.431-7.88 7.977zm16.628 8.569l-2.412-1.374-2.747 2.782 2.747 2.782 2.412-1.374c.848-.483.848-1.718 0-2.201zm-5.159 1.408l-2.747-2.782-7.88 7.977c.151-.27.243-.573.243-.892V3.523c0-.319-.092-.622-.243-.892l7.88 7.977 2.747 2.782z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-white opacity-80">
                    GET IT ON
                  </div>
                  <div className="text-white text-[16px] font-medium leading-snug">
                    Google Play
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <p className="text-sm text-[#999999]">
            © 77.uz {new Date().getFullYear()}. Все права защищены
          </p>
          <Link
            href="https://uic.group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/uic-logo.svg"
              alt="UIC Group"
              width={100}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
