import React, { useState, useRef } from "react";
import { datacheckbox, dataVoucher } from "../../MookData/DataCheckboxCampaign";
import { Calendar } from "primereact/calendar";

export default function CreateCampaign({ onClose }) {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("2023-12-21");
  const [endDate, setEndDate] = useState("2023-12-21");
  const dateInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openmodalcuoicung, setopenmodalcuoicung] = useState(false);
  const [filtertypeVoucher, setfiltertypeVoucher] = useState();
  //checkbox cua voucher
  const handledataCheckboxItemClick = (index) => {
    const updatedItems = datacheckboxItem.map((item, idx) => {
      if (idx === index) {
        return { ...item, checked: !item.checked };
      }

      return item;
    });
    setDatacheckboxItem(updatedItems);
  };

  const [checkboxes, setCheckboxes] = useState(datacheckbox);
  const [datacheckboxItem, setDatacheckboxItem] = useState(dataVoucher);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => {
        if (id in checkbox) {
          return { ...checkbox, [id]: checked };
        }
        return checkbox;
      })
    );
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    dateInputRef.current.focus();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      campaignName,
      description,
      startDate,
      endDate,
    });
  };

  //endCreate
  const endCreate = () => {
    onClose();
    setopenmodalcuoicung(false);
    setIsOpen(false);
  };

  const checkedValues = checkboxes
    .filter((checkbox) => checkbox[`option${checkboxes.indexOf(checkbox) + 1}`])
    .map((checkbox) => checkbox.value);
  console.log(checkboxes);
  const handleButtonToggle = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: false } : checkbox
      )
    );
  };
  return (
    <>
      {!openmodalcuoicung ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
              <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                Tạo chiến dịch
              </h1>
              <div
                className="absolute top-[35%] left-[32px] cursor-pointer "
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>{" "}
            <div className="px-8 pb-10">
              <div className="flex items-center mb-4">
                <img
                  src="./hinhnen.png"
                  alt="User avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl font-bold track-[-1px]">Jasdi</p>
                </div>
              </div>

              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Tên chiến dịch:
                  </label>
                  <input
                    type="text"
                    className="outline-none w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base tracking-[-1px] placeholder:text-[#B0B0B0] placeholder:tracking-[0.5px] text-black font-medium"
                    value={campaignName}
                    placeholder="Voucher tháng 10"
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5 relative">
                <textarea
                  className="w-full p-4 border border-[#B0B0B0] rounded-lg mt-1 text-xl placeholder:text-xl placeholder:text-[#BABABA] placeholder:tracking-[-1px] font-normal text-black min-h-[194px] outline-none"
                  value={description}
                  placeholder={"Bạn muốn nói gì với khách hàng của mình ?"}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="absolute w-6 h-6 bottom-3 left-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.182 15.182C14.7641 15.5999 14.2681 15.9313 13.7221 16.1575C13.1761 16.3836 12.591 16.5 12 16.5C11.409 16.5 10.8239 16.3836 10.2779 16.1575C9.73194 15.9313 9.23586 15.5999 8.818 15.182M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM9.75 9.75C9.75 10.164 9.582 10.5 9.375 10.5C9.168 10.5 9 10.164 9 9.75C9 9.336 9.168 9 9.375 9C9.582 9 9.75 9.336 9.75 9.75ZM9.375 9.75H9.383V9.765H9.375V9.75ZM15 9.75C15 10.164 14.832 10.5 14.625 10.5C14.418 10.5 14.25 10.164 14.25 9.75C14.25 9.336 14.418 9 14.625 9C14.832 9 15 9.336 15 9.75ZM14.625 9.75H14.633V9.765H14.625V9.75Z"
                      stroke="#B78AF7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Khung giờ hiển thị:
                  </label>
                  <div className="flex flex-col gap-2.5">
                    {checkedValues.length > 0
                      ? checkedValues.map((value, index) => (
                          <div className="min-w-[100px] py-1 px-2.5 flex items-center gap-2 justify-between bg-[#C1F1E1] rounded-full outline-none">
                            <div
                              key={index}
                              className="text-base text-gray-700"
                            >
                              {value}
                            </div>
                            <button
                              onClick={() => handleButtonToggle(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.99967 1.33301C4.31778 1.33301 1.33301 4.31778 1.33301 7.99967C1.33301 11.6816 4.31778 14.6663 7.99967 14.6663C11.6816 14.6663 14.6663 11.6816 14.6663 7.99967C14.6663 4.31778 11.6816 1.33301 7.99967 1.33301ZM5.52827 5.52827C5.78862 5.26792 6.21073 5.26792 6.47108 5.52827L7.99967 7.05687L9.52827 5.52827C9.78862 5.26792 10.2107 5.26792 10.4711 5.52827C10.7314 5.78862 10.7314 6.21073 10.4711 6.47108L8.94248 7.99967L10.4711 9.52827C10.7314 9.78862 10.7314 10.2107 10.4711 10.4711C10.2107 10.7314 9.78862 10.7314 9.52827 10.4711L7.99967 8.94248L6.47108 10.4711C6.21073 10.7314 5.78862 10.7314 5.52827 10.4711C5.26792 10.2107 5.26792 9.78862 5.52827 9.52827L7.05687 7.99967L5.52827 6.47108C5.26792 6.21073 5.26792 5.78862 5.52827 5.52827Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>
                        ))
                      : " "}
                  </div>

                  <div className="py-[8px] px-[18.4px]  items-center justify-center">
                    <div className="relative">
                      <div className="z-50" onClick={toggleDropdown}>
                        <div>
                          <div className="rounded-lg bg-[#B78AF7] w-12 h-8  px-[5px] py-[5px] flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                            >
                              <path
                                d="M6 7.25C5.90164 7.25038 5.804 7.23116 5.713 7.19338C5.622 7.1556 5.53942 7.10003 5.47018 7.02992L0.47018 2.02992C0.370455 1.88402 0.325452 1.70759 0.34311 1.53175C0.360767 1.35592 0.43995 1.19196 0.566693 1.0688C0.693436 0.945647 0.859597 0.871203 1.03587 0.8586C1.21214 0.845997 1.38721 0.896045 1.53018 0.999916L6 5.43992L10.4702 0.999916C10.6111 0.908526 10.7787 0.867105 10.946 0.882292C11.1133 0.89748 11.2707 0.968396 11.3929 1.08368C11.5151 1.19896 11.595 1.35192 11.6199 1.51806C11.6448 1.68419 11.6132 1.85388 11.5302 1.99992L6.53018 6.99992C6.46351 7.07548 6.38212 7.13663 6.291 7.17961C6.19984 7.2226 6.10089 7.24653 6 7.24992Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {isOpen && (
                        <div className="absolute mt-2 py-5 px-[25px] bg-white border rounded-lg shadow-lg w-[207px] z-50">
                          <div className="flex flex-col gap-4">
                            {checkboxes.map((checkbox, index) => (
                              <div className="flex items-center " key={index}>
                                <input
                                  type="checkbox"
                                  id={`option${index + 1}`}
                                  name={`option${index + 1}`}
                                  checked={checkbox[`option${index + 1}`]}
                                  onChange={handleCheckboxChange}
                                  className="mr-2"
                                />
                                <label
                                  htmlFor={`option${index + 1}`}
                                  className="text-base text-black font-medium"
                                >
                                  {checkbox.value}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Chọn Voucher:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base tracking-[-1px] placeholder:text-[#B0B0B0] placeholder:tracking-[0.5px] text-black outline-none"
                    value={filtertypeVoucher}
                    placeholder="Chọn loại voucher"
                    onChange={(e) => setfiltertypeVoucher(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <div className="mt-3 rounded-lg flex flex-col gap-2 h-[240px] overflow-y-auto">
                    {datacheckboxItem &&
                      datacheckboxItem.map((item, index) => (
                        <div
                          className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3 rounded-lg"
                          key={index}
                        >
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="checkbox-custom"
                                onClick={() =>
                                  handledataCheckboxItemClick(index)
                                }
                              >
                                {item.checked ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.6931 16.3335C10.306 16.7058 9.694 16.7058 9.30689 16.3335L5.72744 12.8918C5.33038 12.51 5.33038 11.8746 5.72744 11.4928C6.10307 11.1317 6.69693 11.1317 7.07256 11.4928L9.30689 13.6412C9.694 14.0135 10.306 14.0135 10.6931 13.6412L16.9274 7.64669C17.3031 7.2855 17.8969 7.2855 18.2726 7.64669C18.6696 8.02848 18.6696 8.66383 18.2726 9.04562L10.6931 16.3335Z"
                                      fill="#9654F4"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                      fill="#9654F4"
                                    />
                                  </svg>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                name={item.name}
                                checked={item.checked}
                                onChange={() =>
                                  handledataCheckboxItemClick(index)
                                }
                                style={{ display: "none" }}
                              />
                              <picture className="w-[48px] h-[48px]">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </picture>

                              <p className="title text-base font-medium text-[#B0B0B0]">
                                {item.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="text-black text-base font-medium whitespace-nowrap">
                                số lượng:{" "}
                              </p>
                              <input
                                type="number"
                                defaultValue={120}
                                className="rounded-sm shadow-[0px_0px_0px_2px_#EFE6FD] w-[90px] py-[5px] pr-[31px] pl-[13px] outline-none"
                                style={{
                                  WebkitAppearance: "none",
                                  MozAppearance: "textfield",
                                  Appearance: "none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mb-12 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col gap-5">
                <div className="flex items-center gap-3 relative">
                  <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                    Ngày bắt đầu chiến dịch:
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    ref={dateInputRef}
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-[3px]"
                    onClick={handleClick}
                  >
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H0V0Z"
                        fill="#9654F4"
                      />
                      <path
                        d="M29 16.25H27.75V15C27.75 14.8011 27.671 14.6103 27.5303 14.4697C27.3897 14.329 27.1989 14.25 27 14.25C26.8011 14.25 26.6103 14.329 26.4697 14.4697C26.329 14.6103 26.25 14.8011 26.25 15V16.25H21.75V15C21.75 14.8011 21.671 14.6103 21.5303 14.4697C21.3897 14.329 21.1989 14.25 21 14.25C20.8011 14.25 20.6103 14.329 20.4697 14.4697C20.329 14.6103 20.25 14.8011 20.25 15V16.25H19C18.2707 16.25 17.5712 16.5397 17.0555 17.0555C16.5397 17.5712 16.25 18.2707 16.25 19V30C16.25 30.7293 16.5397 31.4288 17.0555 31.9445C17.5712 32.4603 18.2707 32.75 19 32.75H29C29.7293 32.75 30.4288 32.4603 30.9445 31.9445C31.4603 31.4288 31.75 30.7293 31.75 30V19C31.75 18.2707 31.4603 17.5712 30.9445 17.0555C30.4288 16.5397 29.7293 16.25 29 16.25ZM19 17.75H20.25V19C20.25 19.1989 20.329 19.3897 20.4697 19.5303C20.6103 19.671 20.8011 19.75 21 19.75C21.1989 19.75 21.3897 19.671 21.5303 19.5303C21.671 19.3897 21.75 19.1989 21.75 19V17.75H26.25V19C26.25 19.1989 26.329 19.3897 26.4697 19.5303C26.6103 19.671 26.8011 19.75 27 19.75C27.1989 19.75 27.3897 19.671 27.5303 19.5303C27.671 19.3897 27.75 19.1989 27.75 19V17.75H29C29.3315 17.75 29.6495 17.8817 29.8839 18.1161C30.1183 18.3505 30.25 18.6685 30.25 19V21.75H17.75V19C17.75 18.6685 17.8817 18.3505 18.1161 18.1161C18.3505 17.8817 18.6685 17.75 19 17.75ZM29 31.25H19C18.6685 31.25 18.3505 31.1183 18.1161 30.8839C17.8817 30.6495 17.75 30.3315 17.75 30V23.25H30.25V30C30.25 30.3315 30.1183 30.6495 29.8839 30.8839C29.6495 31.1183 29.3315 31.25 29 31.25Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-3 relative">
                  <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                    Ngày kết thúc chiến dịch:
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    ref={dateInputRef}
                  />
                  {/* <Calendar
                    value={endDate}
                    onChange={(e) => setStartDate(e.value)}
                    showIcon
                  /> */}

                  <button
                    type="button"
                    className="absolute right-0 top-[5px]"
                    onClick={handleClick}
                  >
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H0V0Z"
                        fill="#9654F4"
                      />
                      <path
                        d="M29 16.25H27.75V15C27.75 14.8011 27.671 14.6103 27.5303 14.4697C27.3897 14.329 27.1989 14.25 27 14.25C26.8011 14.25 26.6103 14.329 26.4697 14.4697C26.329 14.6103 26.25 14.8011 26.25 15V16.25H21.75V15C21.75 14.8011 21.671 14.6103 21.5303 14.4697C21.3897 14.329 21.1989 14.25 21 14.25C20.8011 14.25 20.6103 14.329 20.4697 14.4697C20.329 14.6103 20.25 14.8011 20.25 15V16.25H19C18.2707 16.25 17.5712 16.5397 17.0555 17.0555C16.5397 17.5712 16.25 18.2707 16.25 19V30C16.25 30.7293 16.5397 31.4288 17.0555 31.9445C17.5712 32.4603 18.2707 32.75 19 32.75H29C29.7293 32.75 30.4288 32.4603 30.9445 31.9445C31.4603 31.4288 31.75 30.7293 31.75 30V19C31.75 18.2707 31.4603 17.5712 30.9445 17.0555C30.4288 16.5397 29.7293 16.25 29 16.25ZM19 17.75H20.25V19C20.25 19.1989 20.329 19.3897 20.4697 19.5303C20.6103 19.671 20.8011 19.75 21 19.75C21.1989 19.75 21.3897 19.671 21.5303 19.5303C21.671 19.3897 21.75 19.1989 21.75 19V17.75H26.25V19C26.25 19.1989 26.329 19.3897 26.4697 19.5303C26.6103 19.671 26.8011 19.75 27 19.75C27.1989 19.75 27.3897 19.671 27.5303 19.5303C27.671 19.3897 27.75 19.1989 27.75 19V17.75H29C29.3315 17.75 29.6495 17.8817 29.8839 18.1161C30.1183 18.3505 30.25 18.6685 30.25 19V21.75H17.75V19C17.75 18.6685 17.8817 18.3505 18.1161 18.1161C18.3505 17.8817 18.6685 17.75 19 17.75ZM29 31.25H19C18.6685 31.25 18.3505 31.1183 18.1161 30.8839C17.8817 30.6495 17.75 30.3315 17.75 30V23.25H30.25V30C30.25 30.3315 30.1183 30.6495 29.8839 30.8839C29.6495 31.1183 29.3315 31.25 29 31.25Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                onClick={() => setopenmodalcuoicung(true)}
                className="w-full bg-purple-500 text-white p-2 rounded-full mt-4"
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <form onSubmit={handleSubmit} className="">
              <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
                <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                  Tạo chiến dịch
                </h1>
                <div
                  className="absolute top-[35%] left-[32px] cursor-pointer "
                  onClick={() => setopenmodalcuoicung(false)}
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>{" "}
              <div className="flex items-center mb-8 mt-5 ml-8">
                <img
                  src="./hinhnen.png"
                  alt="User avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl font-bold track-[-1px]">Jasdi</p>
                </div>
              </div>
              <div className="rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-2.5 px-[25px] mb-8 mt-5 mx-8">
                <p className="title text-xl font-bold tracking-[-1px] mb-6">
                  Ai có thể nhìn thấy chiến dịch của bạn ?{" "}
                </p>

                <div className="flex flex-col gap-4 mb-12">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="tat-ca"
                      name="type"
                      value="tat-ca"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="tat-ca"
                      className="ml-2 text-black text-base font-medium"
                    >
                      Tất cả
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="khach-hang-quay-lai"
                      name="type"
                      value="khach-hang-quay-lai"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="khach-hang-quay-lai"
                      className="ml-2 text-black text-base font-medium"
                    >
                      Khách hàng quay lại
                    </label>
                  </div>
                </div>
                <button
                  className="w-full bg-purple-500 text-white p-2 rounded-full mt-4"
                  type="submit"
                >
                  Đăng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

{
  /*  */
}
