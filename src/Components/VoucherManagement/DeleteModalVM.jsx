import React from "react";
import { deleteSvg1 } from "../../Common/svg";

export default function DeleteModal({
  showModal,
  setShowModal,
  idVoucher,
  handleDelete,
}) {
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white px-6 rounded-lg w-[640px]">
          <div className="flex items-center justify-between py-6">
            <h4 className="text-[#1E293B] text-2xl font-semibold">Xóa</h4>
            <button
              className="text-white px-4 py-2 rounded mr-2"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <div>{deleteSvg1}</div>
            </button>
          </div>
          <p className="text-[#1E293B] text-[20px] font-normal">
            Bạn chắc chắn muốn xóa voucher này?
          </p>
          <div className="flex justify-end mt-10 gap-x-3">
            <button
              className="border rounded-lg bg-[#D0D5DD] text-[#344054] py-2.5 px-4 text-sm font-semibold"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Hủy
            </button>
            <button
              className="border rounded-lg bg-[#F04438] text-white py-2.5 px-4 text-sm font-semibold"
              onClick={() => handleDelete(idVoucher)}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    )
  );
}
