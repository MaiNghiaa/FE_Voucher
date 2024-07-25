import React, { useState } from "react";
import VoucherDetail from "../VoucherManagement/VoucherDetail/VoucherDetail";
import UpdateCampaignDetailForm from "./UpdateCampaignDetailForm";
import {
  delete_svg_1,
  left_arrow_svg,
  more_toggleDropdown_svg,
  trash_svg_1,
  update_svg_1,
} from "../../Common/svg";

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
              {left_arrow_svg}
            </div>
            <div className="shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-t-lg py-4">
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-[28px] leading-9 text-black">
                  Chi tiết chiến dịch
                </h1>
              </div>
            </div>

            <div className="mt-8 mb-12 mx-[24px] py-4 px-[25px] sm:px-[56px] flex flex-col shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] relative">
              <div
                className="absolute top-[8px] right-[8px] cursor-pointer"
                onClick={() => {
                  openModalUpdate();
                }}
              >
                {update_svg_1}
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
                  className="absolute top-[10px] right-0 delete cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {more_toggleDropdown_svg}
                </div>
                {dropdownVisible && (
                  <div className="absolute top-[28px] right-0 bg-white border shadow-lg rounded-lg mt-1">
                    <ul>
                      <li
                        className="flex py-5 pl-5 pr-[68px] gap-2 cursor-pointer"
                        onClick={() => handleDeleteClick()}
                      >
                        <span>{trash_svg_1}</span>
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
                        <p className="text-[#36D39E] font-medium text-base leading-6 cursor-pointer">
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
                    <div>{delete_svg_1}</div>
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
