import React from "react";
import CampaignItem from "./CampaignItem";

export default function CampaignList({
  items,
  filter,
  handleDetail,
  parseDate,
  currentDate,
}) {
  const filteredItems = items.filter((item) => {
    const endDate = parseDate(item.ngayHetHanVoucher);
    return filter === "Còn hạn"
      ? endDate >= currentDate
      : endDate < currentDate;
  });

  return (
    <ul>
      {filteredItems.map((item) => (
        <CampaignItem
          key={item.id}
          item={item}
          filter={filter}
          handleDetail={handleDetail}
          parseDate={parseDate}
          currentDate={currentDate}
        />
      ))}
    </ul>
  );
}
