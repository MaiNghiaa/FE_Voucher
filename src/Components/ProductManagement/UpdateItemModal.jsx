// src/Components/UpdateItemModal.jsx
import React from "react";
import { leftArrowSvg } from "../../Common/svg";

const UpdateItemModal = ({
  isOpen,
  onClose,
  handleUpdateItemSubmit,
  updatedDataItem,
  handleChangeUpdate,
  categories,
}) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
          <div className="relative px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
            <h1 className="text-2xl font-bold text-center mb-5 py-5 cursor-default">
              Cập nhật sản phẩm
            </h1>
            <div
              className="absolute top-[35%] left-[32px] cursor-pointer "
              onClick={onClose}
            >
              {leftArrowSvg}
            </div>
          </div>
          <form
            onSubmit={handleUpdateItemSubmit}
            className=" px-8 bg-white rounded shadow-md pb-[96px]"
          >
            <div className="mb-5 hidden">
              <label
                htmlFor="type"
                className="block text-base font-medium text-black mb-2"
              >
                Loại
              </label>
              <select
                name="type"
                id="type"
                value={updatedDataItem.category}
                onChange={handleChangeUpdate}
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              >
                <option value="" disabled hidden>
                  Chọn loại sản phẩm
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-base font-medium text-black mb-2"
              >
                Tên
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={updatedDataItem.name}
                onChange={handleChangeUpdate}
                placeholder="Đây là nước uống bestsaler"
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="desc"
                className="block text-base font-medium text-black mb-2"
              >
                Mô tả
              </label>
              <textarea
                name="desc"
                id="desc"
                value={updatedDataItem.desc}
                onChange={handleChangeUpdate}
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="block text-base font-medium text-black mb-2"
              >
                Giá
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={updatedDataItem.price}
                onChange={handleChangeUpdate}
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="status"
                className="block text-base font-medium text-black mb-2"
              >
                Trạng thái
              </label>
              <select
                name="status"
                id="status"
                value={updatedDataItem.status}
                onChange={handleChangeUpdate}
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              >
                <option className="py-2 px-3" value="" disabled hidden>
                  Select status
                </option>
                <option className="py-2 px-3" value="Có sẵn">
                  Có sẵn
                </option>
                <option className="py-2 px-3" value="Không có sẵn">
                  Không có sẵn
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 flex justify-center items-center text-base font-medium bg-[rgba(150,84,244,1)] border border-[rgba(150,84,244,1)] text-white rounded-full"
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default UpdateItemModal;
