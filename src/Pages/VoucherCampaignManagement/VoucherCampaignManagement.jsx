import React, { useState } from "react";
import VoucherCampaignManagementDetail from "../../Components/VoucherCampaignManagement/VoucherCampaignManagementDetail";
import CreateCampaign from "../../Components/VoucherCampaignManagement/CreateCampaign";
// import Header from "./Header";
import FilterButtons from "./Sections/FilterButtons";
import CampaignList from "./Sections/CampaignList";
import { plusSvg } from "./../../Common/svg";

export default function VoucherCampaignManagement() {
  const [modalAddNew, setModalAddNew] = useState();
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [filter, setFilter] = useState("Còn hạn");
  const [items, setItems] = useState([
    {
      id: 1,
      nameChienDich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      targetAudience: "Tất cả",
      ngayBatDauSuDungVoucher: "01/07",
      ngayHetHanVoucher: "08/07",
      took: "134",
      totalTicket: "155",
    },
    {
      id: 2,
      nameChienDich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      targetAudience: "Tất cả",
      ngayBatDauSuDungVoucher: "01/06",
      ngayHetHanVoucher: "10/06",
      took: "134",
      totalTicket: "155",
    },
    {
      id: 3,
      nameChienDich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      targetAudience: "Tất cả",
      ngayBatDauSuDungVoucher: "01/08",
      ngayHetHanVoucher: "10/08",
      took: "134",
      totalTicket: "155",
    },
  ]);

  const openModalAddNew = () => {
    setModalAddNew(true);
  };

  const handleDetail = () => {
    setShowModalDetail(true);
  };

  const parseDate = (dateStr) => {
    const [day, month] = dateStr.split("/");
    return new Date(new Date().getFullYear(), month - 1, day);
  };

  const currentDate = new Date();

  return (
    <div>
      {!showModalDetail ? (
        <div className="px-4 pt-4 pb-[69px] sm:ml-80 h-screen inner-bg">
          <div className="pt-4 px-[42px] pb-[99px] border-1 border-gray-200 rounded-lg bg-white h-auto">
            <div className="logoNhaTuyenDung flex justify-end gap-4 items-center mb-4">
              {" "}
              <p className="tenNtd font-medium text-base">Thead</p>{" "}
              <picture className="w-10 h-10 object-contain rounded-[40px]">
                {" "}
                <img src="./Thead.png" alt="" className="w-full h-full" />{" "}
              </picture>{" "}
            </div>{" "}
            <div>
              <div>
                {" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <button className="btn btnVoucher" onClick={openModalAddNew}>
                    {" "}
                    {plusSvg}{" "}
                    <span className="font-medium text-base text-[#5900D9]">
                      {" "}
                      Tạo chiến dịch{" "}
                    </span>{" "}
                  </button>{" "}
                </div>
              </div>
              <FilterButtons filter={filter} setFilter={setFilter} />
              <CampaignList
                items={items}
                filter={filter}
                handleDetail={handleDetail}
                parseDate={parseDate}
                currentDate={currentDate}
              />
            </div>
          </div>
        </div>
      ) : (
        <VoucherCampaignManagementDetail
          onClose={() => {
            setShowModalDetail(false);
          }}
        />
      )}
      {modalAddNew && <CreateCampaign onClose={() => setModalAddNew(false)} />}
    </div>
  );
}
