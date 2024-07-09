import React, { useState } from "react";
import VoucherDetail from "../VoucherManagement/VoucherDetail/VoucherDetail";
import UpdateCampaignDetailForm from "./UpdateCampaignDetailForm";

export default function VoucherCampaignManagementDetail({ onClose }) {
  const [data, setdata] = useState([
    {
      id: 1,
      tenVoucher: "Giảm 10%",
      dalay: "5",
      dasudung: "5",
      tong: "5",
      loaivoucher: "Giảm giá",
    },
    {
      id: 2,
      tenVoucher: "Giảm 20% áp dụng cho trà",
      dalay: "5",
      dasudung: "5",
      tong: "5",
      loaivoucher: "Giảm giá",
    },
    {
      id: 3,
      tenVoucher: "Quà tặng",
      dalay: "5",
      dasudung: "5",
      tong: "5",
      loaivoucher: "Giảm giá",
    },
    {
      id: 4,
      tenVoucher: "Giảm 10%",
      dalay: "5",
      dasudung: "5",
      tong: "5",
      loaivoucher: "Giảm giá",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalChiendichDetail, setModalChienDichDetail] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    console.log(`Deleting voucher with ID: `);

    setShowModal(false);
  };

  const showmodalDetailChiendich = () => {
    setModalChienDichDetail(true);
  };
  const openModalUpdate = () => {
    setmodalUpdate(true);
  };
  return (
    <div>
      {!modalChiendichDetail ? (
        <div className="p-4 sm:ml-80 inner-bg">
          <div className="relative pb-[100px] border-2 border-gray-200 rounded-lg dark:border-gray-700 bg-white">
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
            <div className="shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-lg py-4">
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-[28px] leading-9 text-black">
                  Chi tiết chiến dịch
                </h1>
              </div>
            </div>

            <div className="mt-8 mb-12 mx-[24px] py-4 px-[25px] sm:px-[56px] flex flex-col shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] relative">
              <div
                className="absolute top-[8px] right-[8px]"
                onClick={() => {
                  openModalUpdate();
                }}
              >
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
                    d="M7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11C20 10.4477 20.4477 10 21 10C21.5523 10 22 10.4477 22 11V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H7Z"
                    fill="#9654F4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.1974 4C18.9845 4 18.7803 4.08457 18.6298 4.23509L10.7528 12.1121L10.3744 13.6256L11.8879 13.2473L19.7649 5.37021C19.9155 5.21969 20 5.01553 20 4.80265C20 4.58978 19.9155 4.38562 19.7649 4.23509C19.6144 4.08457 19.4102 4 19.1974 4ZM17.2156 2.82088C17.7412 2.29528 18.4541 2 19.1974 2C19.9407 2 20.6535 2.29528 21.1791 2.82088C21.7047 3.34648 22 4.05934 22 4.80265C22 5.54596 21.7047 6.25883 21.1791 6.78443L13.1062 14.8573C12.9781 14.9855 12.8175 15.0764 12.6417 15.1204L9.24256 15.9701C8.90178 16.0553 8.54129 15.9555 8.29291 15.7071C8.04453 15.4587 7.94468 15.0982 8.02988 14.7575L8.87966 11.3583C8.92362 11.1825 9.01453 11.0219 9.14269 10.8938L17.2156 2.82088Z"
                    fill="#9654F4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289L18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711C18.3166 9.09763 17.6834 9.09763 17.2929 8.70711L15.2929 6.70711C14.9024 6.31658 14.9024 5.68342 15.2929 5.29289Z"
                    fill="#9654F4"
                  />
                </svg>
              </div>
              <div className="">
                <p className="text-[#9654F4] text-4xl font-bold text-center mb-8">
                  Ưu đãi tháng 10
                </p>
              </div>

              <div className="text-black text-base font-medium ">
                <p className="mb-4">Mỗi buổi sáng là một trang sách mới</p>
                <div>
                  <p className="mb-3">Ngày bắt đầu : 06 / 11 / 2023</p>
                  <p>Ngày kết thúc : 15 / 11 / 2023</p>
                </div>
              </div>
            </div>
            <div className="mx-[24px]">
              <div className="cta relative mb-[14px]">
                <button className="py-2.5 px-[18px] bg-[#9654F4] flex justify-center items-center rounded-lg text-white">
                  Danh sách voucher
                </button>
                <div
                  className="absolute top-[10px] right-0 delete"
                  onClick={toggleDropdown}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon_line/More-horizontal">
                      <path
                        id="Vector"
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                {dropdownVisible && (
                  <div className="absolute top-[28px] right-0 bg-white border shadow-lg rounded-lg mt-1">
                    <ul>
                      <li
                        className="flex py-5 pl-5 pr-[68px] gap-2"
                        onClick={() => handleDeleteClick()}
                      >
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5Z"
                              fill="black"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.77778 3.33333C8.77778 2.59695 9.37473 2 10.1111 2L13.8889 2C14.6253 2 15.2222 2.59695 15.2222 3.33333C15.2222 3.70152 15.5207 4 15.8889 4H16V6H15.8889C14.6463 6 13.6023 5.15015 13.3062 4L10.6938 4C10.3977 5.15015 9.35367 6 8.11111 6H8V4L8.11111 4C8.4793 4 8.77778 3.70152 8.77778 3.33333Z"
                              fill="black"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.91701 8.00351C6.46739 7.95765 6.95074 8.36663 6.9966 8.91701L7.76736 18.1661C7.85374 19.2027 8.72028 20.0001 9.76045 20.0001H14.2397C15.2798 20.0001 16.1464 19.2027 16.2327 18.1661L17.0035 8.91701C17.0494 8.36663 17.5327 7.95765 18.0831 8.00351C18.6335 8.04937 19.0425 8.53272 18.9966 9.0831L18.2258 18.3322C18.0531 20.4054 16.32 22.0001 14.2397 22.0001H9.76045C7.6801 22.0001 5.94704 20.4054 5.77427 18.3322L5.00351 9.0831C4.95765 8.53272 5.36663 8.04937 5.91701 8.00351Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <p>xóa</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center py-3 bg-[#EFE6FD] rounded-lg mb-3">
                <div className="flex items-center justify-center flex-1">
                  {" "}
                  <p className="text-black font-medium text-base leading-6 ">
                    Tên Voucher
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {" "}
                  <p className="text-black font-medium text-base leading-6 ">
                    Đã lấy
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {" "}
                  <p className="text-black font-medium text-base leading-6 ">
                    Đã sử dụng
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {" "}
                  <p className="text-black font-medium text-base leading-6 ">
                    Tổng
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                  {" "}
                  <p className="text-black font-medium text-base leading-6 ">
                    Loại Voucher
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {data &&
                  data.map((itemvoucher, index) => (
                    <li
                      className="flex justify-between items-center shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-lg py-[28px] sm:py-[28px] px-4 sm:px-6"
                      key={index}
                    >
                      <div
                        className="flex items-center justify-center flex-1"
                        onClick={() => showmodalDetailChiendich()}
                      >
                        <p className="text-[#36D39E] font-medium text-base leading-6">
                          {itemvoucher.tenVoucher}
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        <p className="text-black font-medium text-base leading-6">
                          {itemvoucher.dalay}
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        <p className="text-black font-medium text-base leading-6">
                          {itemvoucher.dasudung}
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        <p className="text-black font-medium text-base leading-6">
                          {itemvoucher.tong}
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        <p className="text-black font-medium text-base leading-6">
                          {itemvoucher.loaivoucher}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
              <div className="bg-white px-6 rounded-lg w-[640px]">
                <div className="flex items-center justify-between py-6 ">
                  <h4 className="text-[#1E293B] text-2xl font-semibold">Xóa</h4>
                  <button
                    className=" text-white px-4 py-2 rounded mr-2"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1 1L13 13"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 1L1 13"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="">
                  <p className="font-normal text-base text-[#1E293B] pb-[24px]">
                    Chiến dịch này đang diễn ra và đã có 1 số khách hàng lấy
                    voucher của bạn. Việc xóa đi chiến dịch này sẽ làm ảnh hưởng
                    đến trải nghiệm khách hàng của bạn. Bạn vẫn muốn xóa chứ
                  </p>
                  <div>
                    <div className="cta py-3 px-5 flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setShowModal(false);
                        }}
                        className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
                      >
                        <p className="">Trở lại</p>
                      </button>
                      <button
                        onClick={() => {
                          handleDelete();
                        }}
                        className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {modalUpdate && (
            <UpdateCampaignDetailForm
              onClose={() => {
                setmodalUpdate(false);
              }}
            />
          )}
        </div>
      ) : (
        <VoucherDetail
          onClose={() => {
            setModalChienDichDetail(false);
          }}
        />
      )}
    </div>
  );
}
