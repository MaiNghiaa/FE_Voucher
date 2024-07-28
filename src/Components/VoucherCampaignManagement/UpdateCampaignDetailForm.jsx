import React, { useState, useRef } from "react";
import {
  calendarSvg1,
  calendarSvg2,
  leftArrowSvg,
  smileSvg,
} from "../../Common/svg";

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
      <div className="w-[638px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
          <h1 className="text-2xl font-bold text-center mb-4 py-5">
            Chi tiết chiến dịch
          </h1>
          <div
            className="absolute top-[35%] left-[32px] cursor-pointer"
            onClick={onClose}
          >
            {leftArrowSvg}
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
                className="w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base font-medium tracking-[-1px] outline-none"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 relative">
            <textarea
              className="w-full p-4 border border-[#B0B0B0] rounded-lg mt-1 text-base font-medium text-black min-h-[194px] outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="absolute w-6 h-6 bottom-3 left-2">{smileSvg}</div>
          </div>

          <div className="mb-12 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col gap-5">
            <div className="flex items-center gap-3 relative">
              <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                Ngày bắt đầu chiến dịch:
              </label>
              <input
                type="text"
                className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 rounded-lg outline-none"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                ref={dateInputRef}
              />
              <button
                type="button"
                className="absolute right-0 top-[4px]"
                onClick={handleClick}
              >
                {calendarSvg1}
              </button>
            </div>

            <div className="flex items-center gap-3 relative">
              <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                Ngày kết thúc chiến dịch:
              </label>
              <input
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
                {calendarSvg2}
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
