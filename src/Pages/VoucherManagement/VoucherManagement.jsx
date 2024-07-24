import React, { useState } from "react";
import "../VoucherManagement/VoucherManagement.css";
import VoucherDetail from "../../Components/VoucherManagement/VoucherDetail/VoucherDetail";
import VoucherAddnew from "../../Components/VoucherManagement/VoucherAddnew/VoucherAddnew";
// import Sidebar from "../../Layouts/Sections/Sidebar";

export default function VoucherManagement() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [idVoucher, setIdVoucher] = useState();
  const [isOpenModalAddnew, SetisOpenModallAddnew] = useState(false);
  const [data, setdata] = useState([
    {
      id: 1,
      image: "./Voucher/vc1.png",
      voucherName: "Giảm 10% tối đa 10k",
      category: "Giảm Giá",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 2,
      image: "./Voucher/vc2.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 3,
      image: "./Voucher/vc3.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 4,
      image: "./Voucher/vc4.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 5,
      image: "./Voucher/vc5.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 6,
      image: "./Voucher/vc6.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Không hoạt động",
    },
    {
      id: 7,
      image: "./Voucher/vc1.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Không hoạt động",
    },
  ]);
  //
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  //
  const moreInfo = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + 3);
  };
  const lessInfo = () => {
    setVisibleCount(3);
  };

  const handleDeleteClick = (id) => {
    setShowModal(true);
    setIdVoucher(id);
  };

  const handleDelete = (id) => {
    console.log(`Deleting voucher with ID: ${id}`);

    setShowModal(false);
  };

  const handleDetail = () => {
    setShowModalDetail(true);
  };

  const ClickAddnew = () => {
    SetisOpenModallAddnew(true);
  };
  return (
    <div>
      {!showModalDetail ? (
        <div className="px-4 pt-4 pb-[69px] sm:ml-80 h-screen inner-bg">
          <div className="pt-4 px-[42px] pb-[99px] border-1 border-gray-200  rounded-lg dark:border-gray-700 bg-white h-auto">
            <div className="Logo-nhatuyendung flex justify-end gap-4 items-center mb-4">
              <p className="ten-ntd font-medium text-base">Thead</p>
              <picture className="w-10 h-10 object-contain rounded-[40px]">
                <img src="./Thead.png" alt="" className="w-full h-full " />
              </picture>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btnVoucher" onClick={ClickAddnew}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 9C0.5 8.44772 0.947715 8 1.5 8H17.5C18.0523 8 18.5 8.44772 18.5 9C18.5 9.55228 18.0523 10 17.5 10H1.5C0.947715 10 0.5 9.55228 0.5 9Z"
                    fill="#5900D9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.5 -4.37114e-08C10.0523 -1.95703e-08 10.5 0.447715 10.5 1L10.5 17C10.5 17.5523 10.0523 18 9.5 18C8.94771 18 8.5 17.5523 8.5 17L8.5 1C8.5 0.447715 8.94772 -6.78525e-08 9.5 -4.37114e-08Z"
                    fill="#5900D9"
                  />
                </svg>

                <span className="font-medium text-base text-[#5900D9]">
                  Tạo voucher
                </span>
              </button>
            </div>
            <div className="mt-6 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden overflow-x-auto">
              <table className="min-w-full text-left border-collapse border box-border">
                <thead className="bg-[#EFE6FD] text-black text-base leading-normal table-header-height font-bold">
                  <tr className="bg-[#EFE6FD] text-black text-base leading-bold h-12">
                    <th className="py-3 px-[25px] border border-gray-300 text-center">
                      <p className="w-[44px] whitespace-normal mx-auto">
                        Ảnh/
                        <br />
                        video
                      </p>
                    </th>
                    <th className="py-3 px-[69px] text-center border border-gray-300">
                      <div className="py-3 px-[111.5px]">
                        <p>Tên Voucher</p>
                      </div>
                    </th>
                    <th className="py-3 px-6 border border-gray-300 text-center">
                      <p className="w-[40px] whitespace-normal mx-auto">
                        Phân loại
                      </p>
                    </th>
                    <th className="py-3 px-6 border border-gray-300 text-center">
                      <p className="w-[102px] whitespace-normal mx-auto">
                        Đối tượng sử dụng
                      </p>
                    </th>
                    <th className="py-3 px-6 border border-gray-300 text-center">
                      <p className="w-[80px] whitespace-normal mx-auto">
                        Trạng thái
                      </p>
                    </th>
                    <th className="py-3 px-6 border border-gray-300 text-center">
                      <p className="w-[69px] whitespace-normal mx-auto">
                        Thao tác
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, visibleCount).map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white text-center text-base font-medium"
                    >
                      <td className="py-2 px-[25px] border border-gray-300 text-center">
                        <img
                          src={item.image}
                          alt="Voucher"
                          className="w-[76px] h-[80px] object-cover mx-auto"
                        />
                      </td>
                      <td className="py-2 px-[69px] border border-gray-300 text-center">
                        <p
                          className="flex items-center justify-center cursor-pointer"
                          onClick={() => handleDetail()}
                        >
                          {item.voucherName}
                        </p>
                      </td>
                      <td className="py-2 px-6 border border-gray-300 text-center">
                        <p>{item.category}</p>
                      </td>
                      <td className="py-2 px-6 border border-gray-300 text-center">
                        <p>{item.usageTarget}</p>
                      </td>
                      <td className="py-2 px-6 border border-gray-300 text-center">
                        <p
                          className={` ${
                            item.status === "Hoạt động"
                              ? "text-green-500 text-base font-medium"
                              : "text-red-500 text-base font-medium"
                          }`}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className="py-2 px-6 border border-gray-300 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <button
                            className="text-blue-500 cursor-pointer mb-1"
                            onClick={() => handleDetail()}
                          >
                            Chi tiết
                          </button>
                          <button
                            className="text-red-500 cursor-pointer"
                            onClick={() => {
                              handleDeleteClick(item.id);
                            }}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white px-6 rounded-lg w-[640px]">
                  <div className="flex items-center justify-between py-6 ">
                    <h4 className="text-[#1E293B] text-2xl font-semibold">
                      Xóa
                    </h4>
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
                      Bạn có chắc chắn xóa voucher này không ? {idVoucher}
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
                            handleDelete(idVoucher);
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
            {visibleCount < data.length && (
              <div
                className="mt-[22px] flex items-center justify-center"
                onClick={moreInfo}
              >
                <p className="text-base font-normal text-black text-more">
                  Xem thêm
                </p>
              </div>
            )}

            {visibleCount >= data.length && (
              <div
                className="mt-[22px] flex items-center justify-center"
                onClick={lessInfo}
              >
                <p className="text-base font-normal text-black text-more">
                  Thu gọn
                </p>
              </div>
            )}

            {isOpenModalAddnew && (
              <VoucherAddnew onClose={() => SetisOpenModallAddnew(false)} />
            )}
          </div>
        </div>
      ) : (
        <VoucherDetail
          onClose={() => {
            setShowModalDetail(false);
          }}
        />
      )}
    </div>
  );
}
