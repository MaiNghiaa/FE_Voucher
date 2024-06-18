import React, { useState } from "react";

export default function VoucherAddnew({ onClose }) {
  const [type, setType] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto">
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

        <div className="">
          <div className="relative flex justify-center item-center w-[840px] max-w-[840px] py-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
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
            <h1 className="font-bold text-[24px] leading-[32px] text-black">
              Thêm voucher
            </h1>
          </div>
          <div className="mt-8 px-[48px]">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="bg-[#E7E7E7] flex py-2 px-4 rounded-lg">
                <div
                  className={`flex-1 flex justify-center items-center p-2 rounded-[5px] ${
                    type ? "bg-white" : ""
                  }`}
                  onClick={() => setType(true)}
                >
                  <p
                    className={`text-base  text-black ${
                      type ? "font-bold" : "font-medium"
                    }`}
                  >
                    Voucher quà tặng
                  </p>
                </div>
                <div
                  className={`flex-1 flex justify-center items-center p-2 rounded-[5px] ${
                    type ? "" : "bg-white"
                  }`}
                  onClick={() => setType(false)}
                >
                  <p
                    className={`text-base  text-black ${
                      type ? "font-medium" : "font-bold"
                    }`}
                  >
                    Voucher giảm giá
                  </p>
                </div>
              </div>
              <div className="mt-6 py-5 px-[25px] rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]">
                <div className="">
                  <p className="text-black text-base font-bold">
                    Thông tin Voucher
                  </p>

                  <p className="mt-2.5 mb-2 text-black text-base font-medium">
                    Ảnh hoặc video
                  </p>
                </div>
                <div className="py-[113px] px-[193px] bg-[#EFE6FD] cursor-pointer ">
                  <div className="text-[#9654F4] flex gap-2">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                          fill="#9654F4"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z"
                          fill="#9654F4"
                        />
                      </svg>
                    </div>
                    <p className="font-bold text-base">
                      Thêm ảnh / video cho voucher{" "}
                    </p>
                  </div>
                  <input type="file" hidden />
                </div>
                <p className="mt-5 mb-2 text-black text-base font-medium">
                  Mô tả
                </p>
                <div className="flex flex-col gap-4 w-full">
                  <input
                    type="text"
                    className="flex w-full p-3 items-start rounded-lg border border-[#CACACA] outline-none font-medium text-[14px] leading-[22px] text-[#CACACA]"
                    placeholder="nhập mô tả ở đây"
                  />
                </div>
              </div>

              <div className="mt-6 py-5 px-[25px] rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]">
                <p className="tracking-[-1px] text-lg font-bold text-black">
                  Điều kiện sử dụng
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex-1 flex items-center justify-start p-4 border rounded-lg">
                    <div className="flex flex-col flex-1 justify-start">
                      <span className="font-medium text-base text-black">
                        Giá trị hóa đơn tối thiểu từ:{" "}
                      </span>
                      <span className="text-[#36D39E] text-medium text-base">
                        (không bắt buộc)
                      </span>
                    </div>
                    <input
                      type="text"
                      defaultValue="50.000đ"
                      className="w-[410px] p-3 mt-2 rounded-lg border border-[#CACACA] flex-1"
                    />
                  </div>
                  <div className="flex-1 flex justify-start p-4 border rounded-lg">
                    <div className="flex flex-1 flex-col justify-start">
                      <span className="font-medium text-base text-black">
                        Áp dụng khi mua sản phẩm nào:{" "}
                      </span>
                      <span className="text-[#36D39E] text-medium text-base">
                        (không bắt buộc)
                      </span>
                    </div>
                    <input
                      type="text"
                      defaultValue="50.000đ"
                      className="w-[410px] p-3 mt-2 rounded-lg border border-[#CACACA] flex-1"
                    />
                  </div>
                </div>

                <div className="mt-3  rounded-lg flex flex-col gap-2">
                  <div className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3">
                    <picture className="w-[48px] h-[48px] ">
                      <img
                        src="./Voucher/vc1.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </picture>

                    <p className="title text-base font-medium text-black">
                      Sản phẩm 1
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3">
                    <picture className="w-[48px] h-[48px] ">
                      <img
                        src="./Voucher/vc1.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </picture>

                    <p className="title text-base font-medium text-black">
                      Sản phẩm 2
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-row flex-start gap-3">
                    <div className="flex flex-col justify-start">
                      <span className="font-medium text-base text-black">
                        Giá trị hóa đơn tối thiểu từ:{" "}
                      </span>
                      <span className="text-[#ED2B2A] text-medium text-base">
                        (bắt buộc)
                      </span>
                    </div>
                    <div className="py-[8px] px-[18.4px] rounded-lg bg-[#B78AF7] flex items-center justify-center">
                      <div className="p-[0px_6.372px_0px_6.339px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M6.00018 7.24992C5.90164 7.25038 5.804 7.23116 5.71299 7.19338C5.62197 7.1556 5.53942 7.10003 5.47018 7.02992L0.47018 2.02992C0.370455 1.88402 0.325452 1.70759 0.34311 1.53175C0.360767 1.35592 0.43995 1.19196 0.566693 1.0688C0.693436 0.945647 0.859597 0.871203 1.03587 0.8586C1.21214 0.845997 1.38721 0.896045 1.53018 0.999916L6.00018 5.43992L10.4702 0.999916C10.6111 0.908526 10.7787 0.867105 10.946 0.882292C11.1133 0.89748 11.2707 0.968396 11.3929 1.08368C11.5151 1.19896 11.595 1.35192 11.6199 1.51806C11.6448 1.68419 11.6132 1.85388 11.5302 1.99992L6.53018 6.99992C6.46351 7.07548 6.38212 7.13663 6.29098 7.17961C6.19984 7.2226 6.10089 7.24653 6.00018 7.24992Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex gap-3 flex-row items-end justify-start">
                  <span className="font-medium text-xl text-black">
                    Mức sử dụng:{" "}
                  </span>
                  <span className="font-medium leading-[22px] text-sm text-[#ED2B2A] ">
                    Chỉ được sử dụng 1 lần
                  </span>
                </div>
              </div>

              <div className="cta flex items-center justify-center mt-[48px] mb-[78px]">
                <button
                  type="submit"
                  className="w-[574px] bg-[#9654F4] rounded-full border border-[#9654F4] shadow-[0px_1px_2px_0px_rgba(198,228,246,0.05) py-3 px-5 text-white"
                >
                  Xác nhận tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
