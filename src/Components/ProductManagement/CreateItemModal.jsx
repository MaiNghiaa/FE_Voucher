import React, { useState, useRef } from "react";
import { leftArrowSvg } from "../../Common/svg";

const CreateItemModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    images: [],
    imageUrls: [],
    name: "",
    category: "",
    desc: "",
    price: "",
    status: "",
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setFormData((prevData) => ({
      ...prevData,
      imageUrls: [...prevData.imageUrls, ...urls],
    }));
  };
  const handleCreateSubmit = (e) => {
    onAdd(formData);
    setFormData({
      type: "",
      name: "",
      desc: "",
      price: "",
      status: "",
      imageUrls: [],
    });
    onClose();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
          <div className="relative px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
            <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
              Thêm sản phẩm cho trà
            </h1>
            <div
              className="absolute top-[35%] left-[32px] cursor-pointer"
              onClick={onClose}
            >
              {leftArrowSvg}
            </div>
          </div>
          <form
            onSubmit={handleCreateSubmit}
            className="px-8 bg-white rounded shadow-md pb-[96px]"
          >
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.desc}
                onChange={handleChange}
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
                value={formData.price}
                onChange={handleChange}
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
                value={formData.status}
                onChange={handleChange}
                className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                required
              >
                <option className="py-2 px-3" value="" disabled hidden>
                  Chọn trạng thái
                </option>
                <option className="py-2 px-3" value="Có sẵn">
                  Có sẵn
                </option>
                <option className="py-2 px-3" value="Không có sẵn">
                  Không có sẵn
                </option>
              </select>
            </div>
            <div className="mb-12">
              <label
                htmlFor="image"
                className="block text-base font-medium text-black mb-2"
              >
                Ảnh sản phẩm
              </label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
              <div className="flex flex-wrap justify-between mt-2">
                {formData.imageUrls.length > 0 ? (
                  formData.imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="w-[144px] h-[88px] object-cover border rounded-[5px] border-[rgba(176,176,176,1)] my-3 cursor-pointer"
                      style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={handleImageClick}
                    ></div>
                  ))
                ) : (
                  <div
                    className="w-[144px] h-[88px] border rounded-[5px] border-[rgba(176,176,176,1)] flex items-center justify-center text-gray-400 cursor-pointer"
                    onClick={handleImageClick}
                  >
                    Chọn ảnh
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 flex justify-center items-center text-base font-medium bg-[rgba(150,84,244,1)] border border-[rgba(150,84,244,1)] text-white rounded-lg hover:bg-[rgba(150,84,244,0.8)]"
            >
              Thêm mới
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateItemModal;
