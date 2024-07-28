import React from "react";

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-center mb-6 text-2xl text-[#333] gap-[370px]">
      <button
        onClick={() => setFilter("Còn hạn")}
        className={`px-5 pb-1 relative ${
          filter === "Còn hạn"
            ? "font-medium border-b-[#9654F4] border-b-[3px]"
            : "font-normal"
        }`}
      >
        Còn hạn
      </button>
      <button
        onClick={() => setFilter("Hết hạn")}
        className={`px-5 pb-1 relative ${
          filter === "Hết hạn"
            ? "font-medium border-b-[#9654F4] border-b-[3px]"
            : "font-normal"
        }`}
      >
        Hết hạn
      </button>
    </div>
  );
}
