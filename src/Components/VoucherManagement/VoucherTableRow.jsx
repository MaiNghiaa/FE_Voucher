import React from "react";

export default function VoucherTableRow({
  item,
  handleDetail,
  onClose,
  handleDeleteClick,
}) {
  return (
    <tr className="bg-white text-center text-base font-medium">
      <td className="py-2 px-[25px] border border-gray-300 text-center cursor-default">
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
      <td className="py-2 px-6 border border-gray-300 text-center cursor-default">
        <p>{item.category}</p>
      </td>
      <td className="py-2 px-6 border border-gray-300 text-center cursor-default">
        <p>{item.usageTarget}</p>
      </td>
      <td className="py-2 px-6 border border-gray-300 text-center cursor-default">
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
  );
}
