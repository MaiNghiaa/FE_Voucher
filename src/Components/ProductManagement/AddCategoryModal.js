import React from "react";

const AddCategoryModal = ({
  show,
  onClose,
  hangmuc,
  sethangmuc,
  handleSubmit,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <div className="py-9 px-8 relative">
          <p className="title text-2xl font-medium mb-6 flex justify-center items-center">
            Thêm hạng mục
          </p>
          <div
            className="absolute top-[12.5%] cursor-pointer"
            onClick={onClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12H3M3 12L10 19M3 12L10 5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="Name" className="text-base font-medium">
              Tên
            </label>
            <input
              name="hangmuc"
              id="hangmuc"
              type="text"
              value={hangmuc}
              onChange={(e) => sethangmuc(e.target.value)}
              className="mt-2 w-full p-3 border border-[rgba(202,202,202,1)] rounded-lg outline-none"
            />
            <button
              type="submit"
              className="btn w-full py-3 text-base font-medium flex-justify-center items-center bg-[rgba(150,84,244,1)] mt-12 text-white rounded-full"
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
