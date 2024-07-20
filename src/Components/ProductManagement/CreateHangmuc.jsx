import React from "react";

export default function CreateHangmuc({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <div className="py-9 px-8">
          <p className="title text-2xl font-medium">Thêm hạng mục</p>
        </div>
      </div>
    </div>
  );
}
