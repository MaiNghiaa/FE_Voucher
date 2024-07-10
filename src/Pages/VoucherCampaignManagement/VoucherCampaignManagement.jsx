import React, { useState } from "react";
import VoucherCampaignManagementDetail from "../../Components/VoucherCampaignManagement/VoucherCampaignManagementDetail";
import CreateCampaign from "../../Components/VoucherCampaignManagement/CreateCampaign";

export default function VoucherCampaignManagement() {
  const [ModalAddnew, setModalAddnew] = useState();
  const openModalAddnew = () => {
    setModalAddnew(true);
  };

  const items = [
    {
      id: 1,
      namechiendich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      Target_audience: "Tất cả",
      ngaybatdausudungvoucher: "01/07",
      ngayhethanvoucher: "08/07",
      took: "134",
      totalticket: "155",
    },
    {
      id: 2,
      namechiendich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      Target_audience: "Tất cả",
      ngaybatdausudungvoucher: "01/06",
      ngayhethanvoucher: "10/06",
      took: "134",
      totalticket: "155",
    },
    {
      id: 3,
      namechiendich: "Voucher tháng 10",
      desc: "Cafe LeLe tung chiến dịch 15% áp dụng cho các sản phẩm mùa hè. Nhanh tay nào mn ơi....",
      Target_audience: "Tất cả",
      ngaybatdausudungvoucher: "01/08",
      ngayhethanvoucher: "10/08",
      took: "134",
      totalticket: "155",
    },
    // Add more items as needed
  ];
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [filter, setFilter] = useState("Còn hạn");
  const parseDate = (dateStr) => {
    const [day, month] = dateStr.split("/");
    return new Date(new Date().getFullYear(), month - 1, day);
  };

  const currentDate = new Date();

  const filteredItems = items.filter((item) => {
    const startDate = parseDate(item.ngaybatdausudungvoucher);
    const endDate = parseDate(item.ngayhethanvoucher);

    if (filter === "Còn hạn") {
      return endDate >= currentDate;
    } else {
      return endDate < currentDate;
    }
  });
  // const handleDeleteClick = (id) => {
  //   setShowModal(true);
  //   setIdVoucher(id);
  // };
  const handleDetail = () => {
    setShowModalDetail(true);
  };
  return (
    <div>
      {" "}
      {!showModalDetail ? (
        <div className="px-4 pt-4 pb-[69px] sm:ml-80 h-screen inner-bg">
          <div className="pt-4 px-[42px] pb-[99px] border-1 border-gray-200 rounded-lg dark:border-gray-700 bg-white h-auto">
            <div className="Logo-nhatuyendung flex justify-end gap-4 items-center mb-4">
              <p className="ten-ntd font-medium text-base">Thead</p>
              <picture className="w-10 h-10 object-contain rounded-[40px]">
                <img src="./Thead.png" alt="" className="w-full h-full " />
              </picture>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <button className="btn btnVoucher" onClick={openModalAddnew}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 9C0.5 8.44772 0.947715 8 1.5 8H17.5C18.0523 8 18.5 8.44772 18.5 9C18.5 9.55228 18.0523 10 17.5 10H1.5C0.947715 10 0.5 9.55228 0.5 9Z"
                      fill="#5900D9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.5 -4.37114e-08C10.0523 -1.95703e-08 10.5 0.447715 10.5 1L10.5 17C10.5 17.5523 10.0523 18 9.5 18C8.94771 18 8.5 17.5523 8.5 17L8.5 1C8.5 0.447715 8.94772 -6.78525e-08 9.5 -4.37114e-08Z"
                      fill="#5900D9"
                    />
                  </svg>
                  <span className="font-medium text-base text-[#5900D9]">
                    Tạo chiến dịch
                  </span>
                </button>
              </div>

              <div className="pb-4">
                <div className="flex justify-center mb-6 text-2xl text-[#333] gap-[370px]">
                  <button
                    onClick={() => setFilter("Còn hạn")}
                    className={`px-5 pb-1 relative ${
                      filter === "Còn hạn"
                        ? "font-medium border-b-[#9654F4] border-b-[3px]"
                        : "font-normal"
                    }`}
                  >
                    Còn hạn
                  </button>
                  <button
                    onClick={() => setFilter("Hết hạn")}
                    className={`px-5 pb-1 relative ${
                      filter === "Hết hạn"
                        ? "font-medium border-b-[#9654F4] border-b-[3px]"
                        : "font-normal"
                    }`}
                  >
                    Hết hạn
                  </button>
                </div>
                <ul>
                  {filteredItems.map((item) => (
                    <li
                      key={item.id}
                      className="mb-10 py-5 px-7 border rounded-lg bg-[#DBDBDB]"
                      onClick={() => handleDetail()}
                    >
                      <div className="mb-2.5">
                        <p className="text-xl font-bold tracking-[-1px] text-black">
                          {item.namechiendich}
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
                                {item.Target_audience}
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Hạn sử dụng: {item.ngaybatdausudungvoucher}
                              {" - "}
                              {item.ngayhethanvoucher}
                            </p>
                          </li>
                          <li>
                            <p>
                              Đã lấy:{" "}
                              <span className="text-[#31C090] font-bold">
                                {item.took}
                              </span>
                              /{item.totalticket}
                            </p>
                          </li>
                        </ol>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
      {ModalAddnew && <CreateCampaign onClose={() => setModalAddnew(false)} />}
    </div>
  );
}
