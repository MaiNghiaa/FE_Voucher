import React from "react";
import VoucherTableRow from "./VoucherTableRow";

export default function VoucherTable({
  data,
  visibleCount,
  handleDetail,
  handleDeleteClick,
}) {
  return (
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
              <p className="w-[40px] whitespace-normal mx-auto">Phân loại</p>
            </th>
            <th className="py-3 px-6 border border-gray-300 text-center">
              <p className="w-[102px] whitespace-normal mx-auto">
                Đối tượng sử dụng
              </p>
            </th>
            <th className="py-3 px-6 border border-gray-300 text-center">
              <p className="w-[80px] whitespace-normal mx-auto">Trạng thái</p>
            </th>
            <th className="py-3 px-6 border border-gray-300 text-center">
              <p className="w-[69px] whitespace-normal mx-auto">Thao tác</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleCount).map((item, index) => (
            <VoucherTableRow
              key={index}
              item={item}
              handleDetail={handleDetail}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
