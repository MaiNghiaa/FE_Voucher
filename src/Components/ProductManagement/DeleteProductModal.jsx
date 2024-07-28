import React from "react";
import { deleteSvg1 } from "../../Common/svg";

export default function DeleteProductModal({
  isOpen,
  onClose,
  deleteProduct,
  onDelete,
}) {
  const handleDelete = (item) => {
    onDelete(item);
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white px-6 py-6 rounded-lg w-[640px]">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[#1E293B] text-2xl font-semibold">Xóa</h4>
          <button
            className="text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            {deleteSvg1}
          </button>
        </div>
        <p className="font-normal text-base text-[#1E293B] pb-6">
          Bạn có chắc chắn muốn xóa sản phẩm này không?
        </p>
        <div className="cta py-3 px-5 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
          >
            Trở lại
          </button>
          <button
            onClick={() => handleDelete(deleteProduct)}
            className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
