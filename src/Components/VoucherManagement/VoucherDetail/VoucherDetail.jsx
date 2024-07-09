import React from "react";
import "../VoucherDetail/VoucherDetail.css";
export default function VoucherDetail({ onClose }) {
  const bgMain = {
    borderRadius: "8px",
    background:
      "radial-gradient(72.57% 49.33% at 70.82% 114.03%, rgba(195, 45, 180, 0.15) 16.65%, rgba(233, 120, 222, 0.00) 100%), radial-gradient(45.21% 68.82% at 48.05% -2.24%, rgba(101, 179, 234, 0.15) 0%, rgba(0, 163, 255, 0.00) 92.46%), linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), var(--Purple-Prymary---50, #EFE6FD)",
  };

  return (
    <div className="p-4 sm:ml-80 inner-bg">
      <div className="relative pt-4 pb-[100px] border-2 border-gray-200 rounded-lg dark:border-gray-700 bg-white">
        <div className="absolute left-[28px] top-[28px]" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M19 8H1M1 8L8 15M1 8L8 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] pb-4">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[28px] leading-9 text-black">
              Chi tiết voucher
            </h1>
          </div>
        </div>

        <div className="py-8 px-[24px] sm:px-[56px] flex flex-col">
          <div className="relative" style={bgMain}>
            <div className="absolute right-[8px] top-[8px]">
              <button onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle cx="16" cy="16" r="16" fill="#9654F4" />
                  <path
                    d="M11 11L21.5 21.5M21.5 11L11 21.5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="py-[42px] px-[16px] sm:px-[56px]">
              <h2 className="font-semibold text-xl tracking-[-1px]">
                Chi tiết voucher
              </h2>
              <div className="mt-[28px] flex justify-center items-center rounded-lg overflow-hidden">
                <img
                  src="./anhvoucher.png"
                  alt=""
                  className="w-full sm:w-[464px] object-cover"
                />
              </div>
              <div className="mt-[28px] py-[28px] px-[16px] sm:px-[25px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <span className="w-[80px] sm:w-[96px]">Giảm:</span>
                    <input
                      type="text"
                      defaultValue="10%"
                      className="outline-none p-3 rounded-lg border border-[#CACACA] bg-[] w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-[80px] sm:w-[96px]">Tối đa:</span>
                    <input
                      type="text"
                      defaultValue="10k"
                      className="outline-none p-3 rounded-lg border border-[#CACACA] bg-[] w-full"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <p className="p-6 text-xl font-medium tracking-[-1px]">
                {" "}
                Điều kiện áp dụng{" "}
              </p>
              <div className="py-[28px] px-[16px] sm:px-[25px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <span className="w-[168px] sm:w-[192px]">
                      Giá trị hóa đơn tối thiểu:
                    </span>
                    <input
                      type="text"
                      defaultValue="50k"
                      className="outline-none p-3 rounded-lg border border-[#CACACA] bg-[] w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-[168px] sm:w-[192px]">
                      Áp dụng cho các sản phẩm:
                    </span>
                    <input
                      type="text"
                      defaultValue="Trà sữa chân châu, trà sữa matcha"
                      className="outline-none p-3 rounded-lg border border-[#CACACA] bg-[] w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-[168px] sm:w-[192px]">
                      Áp dụng cho khung giờ:
                    </span>
                    <input
                      type="text"
                      defaultValue="18h - 21h"
                      className="outline-none p-3 rounded-lg border border-[#CACACA] bg-[] w-full"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="luu_y pt-6">
                <p className="heading text-xl font-medium tracking-[-1px] text-black">
                  Mức sử dụng
                </p>
                <p className="heading font-medium leading-[22px] text-base text-[#ED2B2A]">
                  Chỉ dùng được 1 lần
                </p>
              </div>
            </div>
          </div>

          <div className="cta flex justify-center items-center mt-[72px]">
            <button className="py-3 px-5 bg-[#9654F4] border border-[#9654F4] w-full sm:w-[548px] text-white rounded-full shadow-[0px_1px_2px_0px_rgba(198,228,246,0.05)]">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
