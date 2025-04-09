"use client";

import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-[#F5F5F5] py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-1 text-sm text-[#999999]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-1.5">/</span>}
              <Link
                href={item.href}
                className={`hover:text-[#2680EB] ${
                  index === items.length - 1 ? "text-[#666666]" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
