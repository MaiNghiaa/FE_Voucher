import React, { useState } from "react";

export default function UpdateCampaignDetailForm() {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        <div
          className="relative bg-sky-200 px-8 Shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25);"
          style={boxShadow}
        >
          <h1 className="text-2xl font-bold text-center mb-4 py-5 ">
            Chi tiết chiến dịch
          </h1>
          <div className="absolute top-[35%] left-[32px]">
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
              src="path_to_image.jpg"
              alt="User avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Jasdi</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tên chiến dịch:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mô tả:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Ngày bắt đầu chiến dịch:
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Ngày kết thúc chiến dịch:
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
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
