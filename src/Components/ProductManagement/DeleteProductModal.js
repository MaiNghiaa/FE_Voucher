import React from "react";

const DeleteProductModal = ({
  show,
  onClose,
  handleDeleteProductSubmit,
  DeleteProduct,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white px-6 rounded-lg w-[640px]">
        <div className="flex items-center justify-between py-6">
          <h4 className="text-[#1E293B] text-2xl font-semibold">Xóa</h4>
          <button
            className="text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
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
        <div>
          <p className="font-normal text-base text-[#1E293B] pb-6">
            Bạn có chắc chắn muốn xóa sản phẩm này không ?
          </p>
          <div>
            <div className="cta py-3 px-5 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
              >
                <p className="">Trở lại</p>
              </button>
              <button
                onClick={() => handleDeleteProductSubmit(DeleteProduct)}
                className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
