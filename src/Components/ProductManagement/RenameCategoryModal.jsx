import React, { useState, useEffect } from "react";
import { leftArrowSvg } from "../../Common/svg";

export default function RenameCategoryModal({
  isOpen,
  onClose,
  onRename,
  currentCategory,
}) {
  const [renameValue, setRenameValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setRenameValue(currentCategory);
    }
  }, [isOpen, currentCategory]);

  const handleRenameSubmit = (e) => {
    e.preventDefault();
    onRename(renameValue);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <div className="py-9 px-8 relative">
          <p className="title text-2xl font-medium mb-6 flex justify-center items-center">
            Đổi tên hạng mục
          </p>
          <div
            className="absolute top-[12.5%] cursor-pointer"
            onClick={onClose}
          >
            {leftArrowSvg}
          </div>
          <form onSubmit={handleRenameSubmit}>
            <label htmlFor="rename" className="text-base font-medium">
              Tên mới
            </label>
            <input
              name="rename"
              id="rename"
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
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
}
