import React, { useState, useRef } from "react";

export default function UpdateCampaignDetailForm({ onClose }) {
  const [campaignName, setCampaignName] = useState("Voucher tháng 10");
  const [description, setDescription] = useState(
    "Mỗi buổi sáng là một trang sách mới"
  );
  const [startDate, setStartDate] = useState("21-12-2023");
  const [endDate, setEndDate] = useState("21-12-2023");
  const dateInputRef = useRef(null);
  const handleClick = () => {
    dateInputRef.current.focus();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      campaignName,
      description,
      startDate,
      endDate,
    });
  };
  const boxShadow = {
    boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25);",
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[638px]  bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
          <h1 className="text-2xl font-bold text-center mb-4 py-5 ">
            Chi tiết chiến dịch
          </h1>
          <div
            className="absolute top-[35%] left-[32px] cursor-pointer"
            onClick={onClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12H3M3 12L10 19M3 12L10 5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-8 pb-10">
          <div className="flex items-center mb-4">
            <img
              src="./hinhnen.png"
              alt="User avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-xl font-bold track-[-1px]">Jasdi</p>
            </div>
          </div>

          <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <label className="block text-black whitespace-nowrap font-medium text-xl tracking-[-1px]">
                Tên chiến dịch:
              </label>
              <input
                type="text"
                readOnly
                className="w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base font-medium tracking-[-1px] outline-none"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 relative">
            <textarea
              readOnly
              className="w-full p-4 border border-[#B0B0B0] rounded-lg mt-1 text-base font-medium text-black min-h-[194px] outline-none "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="absolute w-6 h-6 bottom-3 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.182 15.182C14.7641 15.5999 14.2681 15.9313 13.7221 16.1575C13.1761 16.3836 12.591 16.5 12 16.5C11.409 16.5 10.8239 16.3836 10.2779 16.1575C9.73194 15.9313 9.23586 15.5999 8.818 15.182M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM9.75 9.75C9.75 10.164 9.582 10.5 9.375 10.5C9.168 10.5 9 10.164 9 9.75C9 9.336 9.168 9 9.375 9C9.582 9 9.75 9.336 9.75 9.75ZM9.375 9.75H9.383V9.765H9.375V9.75ZM15 9.75C15 10.164 14.832 10.5 14.625 10.5C14.418 10.5 14.25 10.164 14.25 9.75C14.25 9.336 14.418 9 14.625 9C14.832 9 15 9.336 15 9.75ZM14.625 9.75H14.633V9.765H14.625V9.75Z"
                  stroke="#B78AF7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="mb-12 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col gap-5">
            <div className="flex items-center gap-3 relative">
              <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                Ngày bắt đầu chiến dịch:
              </label>
              <input
                readOnly
                type="text"
                className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg outline-none"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                ref={dateInputRef}
              />
              <button
                type="button"
                className="absolute right-0 top-[4px]"
                onClick={handleClick}
              >
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H0V0Z"
                    fill="#C0C0C0"
                  />
                  <path
                    d="M29 16.25H27.75V15C27.75 14.8011 27.671 14.6103 27.5303 14.4697C27.3897 14.329 27.1989 14.25 27 14.25C26.8011 14.25 26.6103 14.329 26.4697 14.4697C26.329 14.6103 26.25 14.8011 26.25 15V16.25H21.75V15C21.75 14.8011 21.671 14.6103 21.5303 14.4697C21.3897 14.329 21.1989 14.25 21 14.25C20.8011 14.25 20.6103 14.329 20.4697 14.4697C20.329 14.6103 20.25 14.8011 20.25 15V16.25H19C18.2707 16.25 17.5712 16.5397 17.0555 17.0555C16.5397 17.5712 16.25 18.2707 16.25 19V30C16.25 30.7293 16.5397 31.4288 17.0555 31.9445C17.5712 32.4603 18.2707 32.75 19 32.75H29C29.7293 32.75 30.4288 32.4603 30.9445 31.9445C31.4603 31.4288 31.75 30.7293 31.75 30V19C31.75 18.2707 31.4603 17.5712 30.9445 17.0555C30.4288 16.5397 29.7293 16.25 29 16.25ZM19 17.75H20.25V19C20.25 19.1989 20.329 19.3897 20.4697 19.5303C20.6103 19.671 20.8011 19.75 21 19.75C21.1989 19.75 21.3897 19.671 21.5303 19.5303C21.671 19.3897 21.75 19.1989 21.75 19V17.75H26.25V19C26.25 19.1989 26.329 19.3897 26.4697 19.5303C26.6103 19.671 26.8011 19.75 27 19.75C27.1989 19.75 27.3897 19.671 27.5303 19.5303C27.671 19.3897 27.75 19.1989 27.75 19V17.75H29C29.3315 17.75 29.6495 17.8817 29.8839 18.1161C30.1183 18.3505 30.25 18.6685 30.25 19V21.75H17.75V19C17.75 18.6685 17.8817 18.3505 18.1161 18.1161C18.3505 17.8817 18.6685 17.75 19 17.75ZM29 31.25H19C18.6685 31.25 18.3505 31.1183 18.1161 30.8839C17.8817 30.6495 17.75 30.3315 17.75 30V23.25H30.25V30C30.25 30.3315 30.1183 30.6495 29.8839 30.8839C29.6495 31.1183 29.3315 31.25 29 31.25Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 relative">
              <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                Ngày kết thúc chiến dịch:
              </label>
              <input
                readOnly
                type="text"
                className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 rounded-lg outline-none"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                ref={dateInputRef}
              />
              <button
                type="button"
                className="absolute right-0 top-[4px]"
                onClick={handleClick}
              >
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H0V0Z"
                    fill="#C0C0C0"
                  />
                  <path
                    d="M29 16.25H27.75V15C27.75 14.8011 27.671 14.6103 27.5303 14.4697C27.3897 14.329 27.1989 14.25 27 14.25C26.8011 14.25 26.6103 14.329 26.4697 14.4697C26.329 14.6103 26.25 14.8011 26.25 15V16.25H21.75V15C21.75 14.8011 21.671 14.6103 21.5303 14.4697C21.3897 14.329 21.1989 14.25 21 14.25C20.8011 14.25 20.6103 14.329 20.4697 14.4697C20.329 14.6103 20.25 14.8011 20.25 15V16.25H19C18.2707 16.25 17.5712 16.5397 17.0555 17.0555C16.5397 17.5712 16.25 18.2707 16.25 19V30C16.25 30.7293 16.5397 31.4288 17.0555 31.9445C17.5712 32.4603 18.2707 32.75 19 32.75H29C29.7293 32.75 30.4288 32.4603 30.9445 31.9445C31.4603 31.4288 31.75 30.7293 31.75 30V19C31.75 18.2707 31.4603 17.5712 30.9445 17.0555C30.4288 16.5397 29.7293 16.25 29 16.25ZM19 17.75H20.25V19C20.25 19.1989 20.329 19.3897 20.4697 19.5303C20.6103 19.671 20.8011 19.75 21 19.75C21.1989 19.75 21.3897 19.671 21.5303 19.5303C21.671 19.3897 21.75 19.1989 21.75 19V17.75H26.25V19C26.25 19.1989 26.329 19.3897 26.4697 19.5303C26.6103 19.671 26.8011 19.75 27 19.75C27.1989 19.75 27.3897 19.671 27.5303 19.5303C27.671 19.3897 27.75 19.1989 27.75 19V17.75H29C29.3315 17.75 29.6495 17.8817 29.8839 18.1161C30.1183 18.3505 30.25 18.6685 30.25 19V21.75H17.75V19C17.75 18.6685 17.8817 18.3505 18.1161 18.1161C18.3505 17.8817 18.6685 17.75 19 17.75ZM29 31.25H19C18.6685 31.25 18.3505 31.1183 18.1161 30.8839C17.8817 30.6495 17.75 30.3315 17.75 30V23.25H30.25V30C30.25 30.3315 30.1183 30.6495 29.8839 30.8839C29.6495 31.1183 29.3315 31.25 29 31.25Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-2 rounded mt-4"
          >
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
}
