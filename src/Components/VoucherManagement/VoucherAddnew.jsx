import React, { useState } from "react";

export default function VoucherAddnew({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { option1: false, value: "0h - 6h" },
    { option2: false, value: "6h - 12h" },
    { option3: false, value: "12h - 18h" },
    { option4: false, value: "18h - 0h" },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => {
        if (id in checkbox) {
          return { ...checkbox, [id]: checked };
        }
        return checkbox;
      })
    );
  };
  const [datacheckboxItem, setDatacheckboxItem] = useState([
    {
      img: "./Voucher/vc1.png",
      name: "Sản phẩm 1",
      boxItem1: false,
    },
    {
      img: "./Voucher/vc2.png",
      name: "Sản phẩm 2",
      boxItem1: false,
    },
    {
      img: "./Voucher/vc3.png",
      name: "Sản phẩm 3",
      boxItem1: false,
    },
    {
      img: "./Voucher/vc4.png",
      name: "Sản phẩm 4",
      boxItem1: false,
    },
  ]);

  const ValidateCheck = () => {
    const checkedCount = datacheckboxItem.filter((item) => item.checked).length;
    return checkedCount < 3;
  };
  const handledataCheckboxItemClick = (index) => {
    const updatedItems = datacheckboxItem.map((item, idx) => {
      if (idx === index) {
        if (item.checked || ValidateCheck()) {
          return { ...item, checked: !item.checked };
        } else {
          alert("You can only select up to 2 items.");
        }
      }
      return item;
    });
    setDatacheckboxItem(updatedItems);
  };
  const [type, setType] = useState(false);
  const [typeSale, settypeSale] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkedValues = checkboxes
    .filter((checkbox) => checkbox[`option${checkboxes.indexOf(checkbox) + 1}`])
    .map((checkbox) => checkbox.value);
  console.log(checkboxes);
  const handleButtonToggle = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: false } : checkbox
      )
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto">
        <div
          className="absolute left-[28px] top-[28px] cursor-pointer "
          onClick={onClose}
        >
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
            <div
              className="absolute left-[28px] top-[28px] cursor-pointer"
              onClick={onClose}
            >
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
                  className={`flex-1 flex justify-center items-center p-2 rounded-[5px] cursor-pointer ${
                    type ? "bg-white" : ""
                  }`}
                  onClick={() => {
                    setType(true);
                    settypeSale(1);
                  }}
                >
                  <p
                    className={`text-base  text-black ${
                      type ? "font-bold" : "font-medium"
                    }`}
                  >
                    Voucher giảm giá
                  </p>
                </div>
                <div
                  className={`flex-1 flex justify-center items-center p-2 rounded-[5px] cursor-pointer ${
                    type ? "" : "bg-white"
                  }`}
                  onClick={() => {
                    setType(false);
                    settypeSale(null);
                  }}
                >
                  <p
                    className={`text-base  text-black ${
                      type ? "font-medium" : "font-bold"
                    }`}
                  >
                    Voucher quà tặng
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
                  <div
                    className="text-[#9654F4] flex gap-2 "
                    onClick={handleFileInputClick}
                  >
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
                  <input
                    id="fileInput"
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </div>
                {selectedImage && (
                  <div className="mt-4">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="max-w-[200px] max-h-[200px] rounded-lg"
                    />
                  </div>
                )}
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

                {type && (
                  <div className="mt-5">
                    <p className="text-black font-medium text-base mb-2">
                      Kiểu giảm giá
                    </p>
                    <div className="bg-[#E7E7E7] flex py-2 px-4 rounded-lg">
                      <div
                        className={`flex-1 flex justify-center items-center p-2 rounded-[5px] cursor-pointer ${
                          typeSale === 1 ? "bg-white" : ""
                        }`}
                        onClick={() => settypeSale(1)}
                      >
                        <p
                          className={`text-base  text-black ${
                            typeSale === 1 ? "font-bold" : "font-medium"
                          }`}
                        >
                          Phần trăm
                        </p>
                      </div>
                      <div
                        className={`flex-1 flex justify-center items-center p-2 rounded-[5px] cursor-pointer ${
                          typeSale === 2 ? "bg-white" : ""
                        }`}
                        onClick={() => settypeSale(2)}
                      >
                        <p
                          className={`text-base  text-black ${
                            typeSale === 2 ? "font-bold" : "font-medium"
                          }`}
                        >
                          Giá trị
                        </p>
                      </div>
                      <div
                        className={`flex-1 flex justify-center items-center p-2 rounded-[5px] cursor-pointer ${
                          typeSale === 3 ? "bg-white" : ""
                        }`}
                        onClick={() => settypeSale(3)}
                      >
                        <p
                          className={`text-base  text-black ${
                            typeSale === 3 ? "font-bold" : "font-medium"
                          }`}
                        >
                          Đồng giá
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {typeSale === 1 && (
                  <div className="mt-5">
                    <div className="flex flex-col gap-2">
                      <p className="flex-1 font-medium text-base text-black">
                        phần trăm giảm
                      </p>
                      <input
                        type="number"
                        name="phantramgiam"
                        className="flex-1 p-3 text-[#CACACA] border border-[#CACACA] outline-none rounded-lg"
                        placeholder="nhập mô tả vào đây"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <p className="flex-1 font-medium text-base text-black">
                        Tối đa
                      </p>
                      <input
                        type="text"
                        name="limit"
                        className="flex-1 p-3 text-[#CACACA] border border-[#CACACA] outline-none rounded-lg"
                        placeholder="nhập mô tả vào đây"
                      />
                    </div>
                  </div>
                )}
                {typeSale === 2 && (
                  <div className="mt-5">
                    <div className="flex flex-col gap-2">
                      <p className="flex-1 font-medium text-base text-black">
                        Giá trị giảm
                      </p>
                      <input
                        type="number"
                        name="giatrigiam"
                        className="flex-1 p-3 text-[#CACACA] border border-[#CACACA] outline-none rounded-lg"
                        placeholder="nhập mô tả vào đây"
                      />
                    </div>
                  </div>
                )}
                {typeSale === 3 && (
                  <div className="mt-5">
                    <div className="flex flex-col gap-2">
                      <p className="flex-1 font-medium text-base text-black">
                        Giá trị giảm
                      </p>
                      <input
                        type="number"
                        name="giatrigiam"
                        className="flex-1 p-3 text-[#CACACA] border border-[#CACACA] outline-none rounded-lg"
                        placeholder="nhập mô tả vào đây"
                      />
                    </div>
                  </div>
                )}
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

                {!type ? (
                  <div className="mt-3 rounded-lg flex flex-col gap-2">
                    <div className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3">
                      <picture className="w-[48px] h-[48px]">
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
                      <picture className="w-[48px] h-[48px]">
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
                ) : (
                  typeSale === 1 && (
                    <div className="mt-3 rounded-lg flex flex-col gap-2">
                      {datacheckboxItem &&
                        datacheckboxItem.map((item, index) => (
                          <div
                            className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3"
                            key={index}
                          >
                            <div
                              className="checkbox-custom"
                              onClick={() => handledataCheckboxItemClick(index)}
                            >
                              {item.checked ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.6931 16.3335C10.306 16.7058 9.694 16.7058 9.30689 16.3335L5.72744 12.8918C5.33038 12.51 5.33038 11.8746 5.72744 11.4928C6.10307 11.1317 6.69693 11.1317 7.07256 11.4928L9.30689 13.6412C9.694 14.0135 10.306 14.0135 10.6931 13.6412L16.9274 7.64669C17.3031 7.2855 17.8969 7.2855 18.2726 7.64669C18.6696 8.02848 18.6696 8.66383 18.2726 9.04562L10.6931 16.3335Z"
                                    fill="#9654F4"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                    fill="#9654F4"
                                  />
                                </svg>
                              )}
                            </div>
                            <input
                              type="checkbox"
                              name={item.name}
                              checked={item.checked}
                              onChange={() =>
                                handledataCheckboxItemClick(index)
                              }
                              style={{ display: "none" }}
                            />
                            <picture className="w-[48px] h-[48px]">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </picture>

                            <p className="title text-base font-medium text-[#B0B0B0]">
                              {item.name}
                            </p>
                          </div>
                        ))}
                    </div>
                  )
                )}

                <div className="mt-4">
                  <div className="flex flex-row flex-start gap-3">
                    <div className="flex flex-col justify-start">
                      <span className="font-medium text-base text-black">
                        Áp dụng cho khung giờ nào:{" "}
                      </span>
                      <span className="text-[#ED2B2A] text-medium text-base">
                        (bắt buộc)
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {checkedValues.length > 0
                        ? checkedValues.map((value, index) => (
                            <div className="min-w-[100px] py-1 px-2.5 flex items-center gap-2 justify-between bg-[#C1F1E1] rounded-full">
                              <div
                                key={index}
                                className="text-base text-gray-700"
                              >
                                {value}
                              </div>
                              <button
                                onClick={() => handleButtonToggle(value.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.99967 1.33301C4.31778 1.33301 1.33301 4.31778 1.33301 7.99967C1.33301 11.6816 4.31778 14.6663 7.99967 14.6663C11.6816 14.6663 14.6663 11.6816 14.6663 7.99967C14.6663 4.31778 11.6816 1.33301 7.99967 1.33301ZM5.52827 5.52827C5.78862 5.26792 6.21073 5.26792 6.47108 5.52827L7.99967 7.05687L9.52827 5.52827C9.78862 5.26792 10.2107 5.26792 10.4711 5.52827C10.7314 5.78862 10.7314 6.21073 10.4711 6.47108L8.94248 7.99967L10.4711 9.52827C10.7314 9.78862 10.7314 10.2107 10.4711 10.4711C10.2107 10.7314 9.78862 10.7314 9.52827 10.4711L7.99967 8.94248L6.47108 10.4711C6.21073 10.7314 5.78862 10.7314 5.52827 10.4711C5.26792 10.2107 5.26792 9.78862 5.52827 9.52827L7.05687 7.99967L5.52827 6.47108C5.26792 6.21073 5.26792 5.78862 5.52827 5.52827Z"
                                    fill="black"
                                  />
                                </svg>
                              </button>
                            </div>
                          ))
                        : " "}
                    </div>

                    <div className="py-[8px] px-[18.4px]  items-center justify-center">
                      <div className="relative">
                        <div className="" onClick={toggleDropdown}>
                          <div>
                            <div className="rounded-lg bg-[#B78AF7] w-12 h-8  px-[5px] py-[5px] flex justify-center items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                              >
                                <path
                                  d="M6 7.25C5.90164 7.25038 5.804 7.23116 5.713 7.19338C5.622 7.1556 5.53942 7.10003 5.47018 7.02992L0.47018 2.02992C0.370455 1.88402 0.325452 1.70759 0.34311 1.53175C0.360767 1.35592 0.43995 1.19196 0.566693 1.0688C0.693436 0.945647 0.859597 0.871203 1.03587 0.8586C1.21214 0.845997 1.38721 0.896045 1.53018 0.999916L6 5.43992L10.4702 0.999916C10.6111 0.908526 10.7787 0.867105 10.946 0.882292C11.1133 0.89748 11.2707 0.968396 11.3929 1.08368C11.5151 1.19896 11.595 1.35192 11.6199 1.51806C11.6448 1.68419 11.6132 1.85388 11.5302 1.99992L6.53018 6.99992C6.46351 7.07548 6.38212 7.13663 6.291 7.17961C6.19984 7.2226 6.10089 7.24653 6 7.24992Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {isOpen && (
                          <div className="absolute mt-2 py-5 px-[25px] bg-white border rounded-lg shadow-lg w-[207px]">
                            <div className="flex flex-col gap-4">
                              {checkboxes.map((checkbox, index) => (
                                <div className="flex items-center" key={index}>
                                  <input
                                    type="checkbox"
                                    id={`option${index + 1}`}
                                    name={`option${index + 1}`}
                                    checked={checkbox[`option${index + 1}`]}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                  />
                                  <label
                                    htmlFor={`option${index + 1}`}
                                    className="text-base text-black font-medium"
                                  >
                                    {checkbox.value}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
                  onClick={onClose}
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
