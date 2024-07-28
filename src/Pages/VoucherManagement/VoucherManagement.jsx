import React, { useState } from "react";
import "../VoucherManagement/VoucherManagement.css";
import VoucherDetail from "../../Components/VoucherManagement/VoucherDetail/VoucherDetail";
import VoucherAddNew from "../../Components/VoucherManagement/VoucherAddnew/VoucherAddnew";
import VoucherTable from "../../Components/VoucherManagement/VoucherTable";
import DeleteModal from "../../Components/VoucherManagement/DeleteModalVM";
import { plusSvg } from "../../Common/svg";

export default function VoucherManagement() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [idVoucher, setIdVoucher] = useState();
  const [isOpenModalAddNew, setIsOpenModalAddNew] = useState(false);
  const data = [
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
  ];

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

  const clickAddNew = () => {
    setIsOpenModalAddNew(true);
  };

  return (
    <div>
      {!showModalDetail ? (
        <div className="px-4 pt-4 pb-[69px] sm:ml-80 h-screen inner-bg">
          <div className="pt-4 px-[42px] pb-[99px] border-1 border-gray-200 rounded-lg dark:border-gray-700 bg-white h-auto">
            <div className="Logo-nhatuyendung flex justify-end gap-4 items-center mb-4">
              <p className="ten-ntd font-medium text-base">Thead</p>
              <picture className="w-10 h-10 object-contain rounded-[40px]">
                <img src="./Thead.png" alt="" className="w-full h-full" />
              </picture>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btnVoucher" onClick={clickAddNew}>
                {" "}
                {plusSvg}{" "}
                <span className="font-medium text-base text-[#5900D9]">
                  {" "}
                  Thêm mới{" "}
                </span>{" "}
              </button>{" "}
            </div>
            <VoucherTable
              data={data}
              visibleCount={visibleCount}
              handleDetail={handleDetail}
              onClose={() => setShowModalDetail(true)}
              handleDeleteClick={handleDeleteClick}
            />
            <div className="mt-4 flex justify-end">
              {visibleCount < data.length ? (
                <button
                  onClick={moreInfo}
                  className="text-[#6941C6] font-semibold cursor-pointer"
                >
                  Xem thêm
                </button>
              ) : (
                <button
                  onClick={lessInfo}
                  className="text-[#6941C6] font-semibold cursor-pointer"
                >
                  Thu gọn
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <VoucherDetail
          setShowModalDetail={setShowModalDetail}
          onClose={() => setShowModalDetail(false)}
        />
      )}
      {showModal && (
        <DeleteModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          idVoucher={idVoucher}
          handleDelete={handleDelete}
        />
      )}
      {isOpenModalAddNew && (
        <VoucherAddNew
          isOpenModalAddNew={isOpenModalAddNew}
          onClose={() => setIsOpenModalAddNew(false)}
        />
      )}
    </div>
  );
}
