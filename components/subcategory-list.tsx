"use client";

interface SubcategoryListProps {
  title: string;
  subcategories: string[] | null;
}

export function SubcategoryList({
  title,
  subcategories,
}: SubcategoryListProps) {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 mb-8">
      <div className="flex items-center mb-5">
        <svg
          className="h-5 w-5 mr-2 text-[#999999]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <h3 className="font-medium text-[#333333]">{title}</h3>
      </div>

      {subcategories ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subcategories.map((subcategory, index) => (
            <a
              key={index}
              href="#"
              className="text-[#666666] hover:text-[#2680EB] py-1 flex items-center text-sm"
            >
              {subcategory}
              <svg
                className="h-4 w-4 ml-1 text-[#CCCCCC]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="bg-[#F5F5F5] p-5 rounded-md mb-4">
            <svg
              className="h-12 w-12 text-[#CCCCCC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h4 className="font-medium mb-2 text-[#333333]">Подкатегорий нет</h4>
          <p className="text-[#999999] text-sm text-center">
            В этой категории нет подкатегорий.
          </p>
        </div>
      )}
    </div>
  );
}
