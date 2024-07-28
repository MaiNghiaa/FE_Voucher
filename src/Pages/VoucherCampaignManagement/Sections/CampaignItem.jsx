import React from "react";
import {
  bigticketSvg,
  morePresent3Svg,
  morePresent4Svg,
  present2Svg,
  presentSvg,
  smallticketSvg,
  ticket2Svg,
  ticketPresent1Svg,
} from "../../../Common/svg";

export default function CampaignItem({
  item,
  filter,
  handleDetail,
  parseDate,
  currentDate,
}) {
  return (
    <li
      className={`mb-10 py-5 px-7 border rounded-lg ${
        filter === "Còn hạn" && parseDate(item.ngayHetHanVoucher) >= currentDate
          ? "bg-[#EFE6FD]"
          : "bg-[#DBDBDB]"
      } relative`}
      onClick={handleDetail}
    >
      <div className="relative">
        <div className="absolute top-[-44px] right-[-55px]">
          {morePresent4Svg}
        </div>
        <div className="box absolute top-[35px] right-[152px]">
          {morePresent3Svg}
        </div>
        <div className="box absolute top-[55px] left-[0px]">{present2Svg}</div>
        <div className="box absolute top-[60px] left-[400px]">{ticket2Svg}</div>
        <div className="box absolute top-[75px] left-[330px]">
          {ticketPresent1Svg}
        </div>
        <div className="box absolute top-[30px] left-[50%]">{bigticketSvg}</div>
        <div className="box absolute top-[30px] right-[30%]">{presentSvg}</div>
        <div className="box absolute top-[30px] right-[35%]">
          {smallticketSvg}
        </div>
      </div>
      <div className="mb-2.5">
        <p className="text-xl font-bold tracking-[-1px] text-black">
          {item.nameChienDich}
        </p>
      </div>
      <div className="text-[#333] text-base font-medium">
        <div className="mb-1">
          <p>{item.desc}</p>
        </div>
        <ol className="list-disc pl-6">
          <li>
            <p>
              Đối tượng sử dụng:{" "}
              <span className="text-[#ED2B2A] font-bold">
                {item.targetAudience}
              </span>
            </p>
          </li>
          <li>
            <p>
              Hạn sử dụng: {item.ngayBatDauSuDungVoucher} -{" "}
              {item.ngayHetHanVoucher}
            </p>
          </li>
          <li>
            <p>
              Đã lấy:{" "}
              <span className="text-[#31C090] font-bold">{item.took}</span>/
              {item.totalTicket}
            </p>
          </li>
        </ol>
      </div>
    </li>
  );
}
