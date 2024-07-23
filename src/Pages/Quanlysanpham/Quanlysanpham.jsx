import React, { useState, useRef } from "react";
import { formatVND } from "../../Common/formatVND";
// import "";
export default function Quanlysanpham() {
  const [showmodalThemHangmuc, setshowmodalThemHangmuc] = useState(false);
  const [showmodalThemsanpham, setshowmodalThemsanpham] = useState(false);

  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [Deletehangmuc, setDeletehangmuc] = useState();
  const [currentCategory, setCurrentCategory] = useState("");
  const [renameValue, setRenameValue] = useState("");

  const [showCreateModal, setshowCreateModal] = useState(null);
  //dropdown
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const [hangmuc, sethangmuc] = useState("");
  const [iconhangmuc, seticonhangmuc] = useState();
  const [categories, setCategories] = useState(["đồ ăn", "Thức uống"]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataitems, setdataitems] = useState([
    {
      image: "ttsanpham/tt23.jpg",
      name: "trà hoa quả",
      desc: "Đây là đồ úng ngon ngon ngon",
      price: "123456",
      hangmuc: "đồ ăn",
      status: "có sẵn",
    },
    {
      image: "ttsanpham/tt24.jpg",
      name: "trà mãng cầu",
      desc: "Đây là đồ úng ngon lém nhe",
      price: "456436",
      hangmuc: "Thức uống",
      status: "Không có sẵn",
    },
    {
      image: "ttsanpham/tt25.jpg",
      name: "trà hoa quả nhiệt đới",
      desc: "Đây là đồ úng cũng có phần thú vị phết",
      price: "123654",
      hangmuc: "Thức uống",
      status: "có sẵn",
    },
    {
      image: "ttsanpham/tt26.png",
      name: "trà trung nghĩa",
      desc: "Đây là đồ úng tuyệt hảo",
      price: "999999",
      hangmuc: "Thức uống",
      status: "có sẵn",
    },
  ]);

  const [DropdownItemcate, setDropdownItemcate] = useState(false);
  const [formData, setFormData] = useState({
    images: [],
    imageUrls: [],
    name: "",
    type: "",
    desc: "",
    price: "",
    status: "",
  });

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));

    setFormData((prevData) => ({
      ...prevData,
      images: files,
      imageUrls: urls,
    }));
  };

  //Handle them moi hang muc
  const handleSubmit = (e) => {
    e.preventDefault();
    const exist = categories.find((item) => item === hangmuc);
    if (exist) {
      console.log("sản phẩm đã tồn tại");
    } else {
      setCategories([...categories, hangmuc]);
      console.log("Category added:", hangmuc);
      setshowmodalThemHangmuc(false);
    }
  };

  //Handle dropdown
  const toggleDropdown = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(index);
    }
  };
  const toggleDropdowncate = (index) => {
    if (DropdownItemcate === index) {
      setDropdownItemcate(null);
    } else {
      setDropdownItemcate(index);
    }
  };

  //Handle Doi ten
  const handleRename = (item) => {
    setCurrentCategory(item);
    setRenameValue(item);
    setShowRenameModal(true);
    setDropdownVisible(null);
  };

  const handleRenameSubmit = (e) => {
    e.preventDefault();
    const updatedCategories = categories.map((cat) =>
      cat === currentCategory ? renameValue : cat
    );
    setCategories(updatedCategories);
    setShowRenameModal(false);
  };

  const handleDeletehangmuc = (item) => {
    setDropdownVisible(null);
    setshowDeleteModal(true);
    setDeletehangmuc(item);
  };
  const handleDeletesubmit = (hangmuc) => {
    console.log(hangmuc);
    const newCategories = categories.filter((item) => item !== hangmuc);
    setCategories(newCategories);
    setshowDeleteModal(false);
  };

  const handleCreateSanpham = (itemhangmuc) => {
    console.log(itemhangmuc);
    setDropdownVisible(null);
    setFormData((prevData) => ({
      ...prevData,
      type: itemhangmuc,
    }));

    setshowCreateModal(itemhangmuc);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setshowCreateModal(false);
    setshowmodalThemsanpham(false);
    setFormData({
      images: [],
      imageUrls: [],
      name: "",
      type: "",
      desc: "",
      price: "",
      status: "",
    });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      seticonhangmuc();
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="px-4 pt-4 pb-[69px] sm:ml-80 h-screen inner-bg">
      <div className=" border-1 border-gray-200 rounded-lg dark:border-gray-700 bg-white h-auto">
        <h1 className="text-2xl font-bold text-center py-4 heading-title mx-auto border-b-[1px] border shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
          Danh mục sản phẩm
        </h1>
        <div className="pt-8 pb-5">
          <div className="flex items-center justify-center act gap-[88px]">
            <button
              className="btn btnVoucher btn_themhangmuc"
              onClick={() => setshowmodalThemHangmuc(true)}
            >
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
                Thêm hạng mục
              </span>
            </button>
            <button
              className="btn btnVoucher btn_themsanpham"
              onClick={() => setshowmodalThemsanpham(true)}
            >
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
                Thêm sản phẩm
              </span>
            </button>
          </div>
        </div>
        <div className="table px-8 w-full pb-[69px]">
          {categories &&
            categories.map((item, index) => (
              <div key={index} className="">
                <div
                  className={`flex justify-between items-center m-2.5 pb-4 ${
                    selectedCategory === item
                      ? " border-none"
                      : "border-b border-[rgba(219,219,219,1)]"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div className="px-2">
                      {selectedCategory === item ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          width="14"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          width="14"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                      )}
                    </div>
                    <p
                      className="name cursor-pointer"
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item}
                    </p>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-center items-center "
                    >
                      ...
                    </button>
                    {dropdownVisible === index && (
                      <div className="absolute right-0 box-border shadow-[0px_0px_5px_-5px_rgba(0,0,0,0.25)] border rounded-lg bg-white overflow-hidden z-50">
                        <ul className="text-base font-normal p-5 flex justify-center flex-col items-start">
                          <li
                            className="flex items-center gap-2 hover:bg-gray-200 whitespace-nowrap cursor-pointer px-5 py-2 w-full"
                            onClick={() => handleRename(item)}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="14"
                                viewBox="0 0 512 512"
                              >
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
                              </svg>
                            </span>
                            Đổi tên
                          </li>
                          <li
                            className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap"
                            onClick={() => handleCreateSanpham(item)}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="12.25"
                                viewBox="0 0 448 512"
                              >
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                              </svg>
                            </span>
                            Thêm sản phẩm
                          </li>
                          <li
                            className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap"
                            onClick={() => handleDeletehangmuc(item)}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="12.25"
                                viewBox="0 0 448 512"
                              >
                                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                              </svg>
                            </span>
                            Xóa
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {selectedCategory === item && (
                  <div className="z-10  py-4 flex items-stretch gap-10 flex-wrap border-b border-[rgba(219,219,219,1)]">
                    {dataitems
                      .filter((dataItem) => dataItem.hangmuc === item)
                      .map((filteredItem, idx) => (
                        <div
                          key={idx}
                          className=" w-[220px] rounded-[20px] overflow-hidden box-border "
                        >
                          <img
                            src={`./${filteredItem.image}`}
                            alt=""
                            className="w-[220px] object-cover rounded-t-[20px]"
                          />
                          {/* bg-[rgba(255,255,255,0.25)] */}
                          <div className="flex flex-col flex-grow text px-3 bg-[#cebeffb0] pt-3 pb-[14px] rounded-b-[20px]">
                            <div className="flex items-center justify-between">
                              <p className="title font-medium text-base">
                                {filteredItem.name}
                              </p>
                              <div className="relative">
                                <button
                                  className="more"
                                  onClick={() => toggleDropdowncate(idx)}
                                >
                                  .
                                </button>
                                {DropdownItemcate === idx && (
                                  <div className="absolute left-0 box-border shadow-[0px_0px_5px_-5px_rgba(0,0,0,0.25)] border rounded-lg bg-white overflow-hidden z-1000">
                                    <ul className="text-base font-normal p-5 flex justify-center flex-col items-start">
                                      <li
                                        className="flex items-center gap-2 hover:bg-gray-200 whitespace-nowrap cursor-pointer px-5 py-2 w-full"
                                        onClick={() => handleRename(item)}
                                      >
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14"
                                            width="14"
                                            viewBox="0 0 512 512"
                                          >
                                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
                                          </svg>
                                        </span>
                                        Đổi tên
                                      </li>
                                      <li
                                        className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap"
                                        onClick={() =>
                                          handleCreateSanpham(item)
                                        }
                                      >
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14"
                                            width="12.25"
                                            viewBox="0 0 448 512"
                                          >
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                                          </svg>
                                        </span>
                                        Thêm sản phẩm
                                      </li>
                                      <li
                                        className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap"
                                        onClick={() =>
                                          handleDeletehangmuc(item)
                                        }
                                      >
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14"
                                            width="12.25"
                                            viewBox="0 0 448 512"
                                          >
                                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                          </svg>
                                        </span>
                                        Xóa
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>

                            <p
                              className="subTitle_qlsp text-sm leading-[22px] font-normal pt-2 pb-3"
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {filteredItem.desc}
                            </p>
                            <p className="font-medium text-sm leading-[22px] py-1 text-white w-full flex justify-center items-center rounded-full bg-[rgba(150,84,244,1)]">
                              {formatVND(filteredItem.price)}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      {showmodalThemHangmuc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="py-9 px-8">
              <p className="title text-2xl font-medium mb-6">Thêm hạng mục</p>
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
      )}
      {showRenameModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="py-9 px-8">
              <p className="title text-2xl font-medium mb-6">
                Đổi tên hạng mục
              </p>
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
      )}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white px-6 rounded-lg w-[640px]">
            <div className="flex items-center justify-between py-6 ">
              <h4 className="text-[#1E293B] text-2xl font-semibold">Xóa</h4>
              <button
                className=" text-white px-4 py-2 rounded mr-2"
                onClick={() => {
                  setshowDeleteModal(false);
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 1L13 13"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 1L1 13"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="">
              <p className="font-normal text-base text-[#1E293B]">
                Bạn có chắc chắn xóa voucher này không ?
              </p>
              <p className="font-normal text-base text-[#1E293B] pb-3">
                (Tất cả sản phẩm trong hạng mục này cũng bị xóa)
              </p>
              <div>
                <div className="cta py-3 px-5 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setshowDeleteModal(false);
                    }}
                    className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
                  >
                    <p className="">Trở lại</p>
                  </button>
                  <button
                    onClick={() => handleDeletesubmit(Deletehangmuc)}
                    className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
              <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                Thêm sản phẩm cho trà
              </h1>
              <div
                className="absolute top-[35%] left-[32px] cursor-pointer "
                onClick={() => setshowCreateModal(false)}
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
            </div>
            <form
              onSubmit={handleCreateSubmit}
              className=" px-8 bg-white rounded shadow-md pb-[96px]"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-black mb-2"
                >
                  Tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Đây là nước uống bestsaler"
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="desc"
                  className="block text-base font-medium text-black mb-2"
                >
                  Mô tả
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block text-base font-medium text-black mb-2"
                >
                  Giá
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="status"
                  className="block text-base font-medium text-black mb-2"
                >
                  Trạng thái
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                >
                  <option className="py-2 px-3" value="" disabled hidden>
                    Select status
                  </option>
                  <option className="py-2 px-3" value="Có sẵn">
                    Có sẵn
                  </option>
                  <option className="py-2 px-3" value="Không có sẵn">
                    Không có sẵn
                  </option>
                </select>
              </div>
              <div className="mb-12">
                <label
                  htmlFor="image"
                  className="block text-base font-medium text-black mb-2"
                >
                  Ảnh sản phẩm
                </label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                />
                <div className="flex flex-wrap justify-between mt-2">
                  {formData.imageUrls.length > 0 ? (
                    formData.imageUrls.map((url, index) => (
                      <div
                        key={index}
                        className="w-[144px] h-[88px] object-cover border rounded-[5px] border-[rgba(176,176,176,1)] my-3 cursor-pointer"
                        style={{
                          backgroundImage: `url(${url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        onClick={handleImageClick}
                      ></div>
                    ))
                  ) : (
                    <div
                      className="w-[144px] h-[88px] border rounded-[5px] border-[rgba(176,176,176,1)] flex items-center justify-center text-gray-400 cursor-pointer"
                      onClick={handleImageClick}
                    >
                      Chọn ảnh
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 flex justify-center items-center text-base font-medium bg-[rgba(150,84,244,1)] border border-[rgba(150,84,244,1)] text-white rounded-full"
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      )}
      {showmodalThemsanpham && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
              <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                Thêm sản phẩm
              </h1>
              <div
                className="absolute top-[35%] left-[32px] cursor-pointer "
                onClick={() => setshowmodalThemsanpham(false)}
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
            </div>
            <form
              onSubmit={handleCreateSubmit}
              className=" px-8 bg-white rounded shadow-md pb-[96px]"
            >
              <div className="mb-5">
                <label
                  htmlFor="type"
                  className="block text-base font-medium text-black mb-2"
                >
                  Loại
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                >
                  <option value="" disabled hidden>
                    Chọn loại sản phẩm
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-black mb-2"
                >
                  Tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Đây là nước uống bestsaler"
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="desc"
                  className="block text-base font-medium text-black mb-2"
                >
                  Mô tả
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block text-base font-medium text-black mb-2"
                >
                  Giá
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="status"
                  className="block text-base font-medium text-black mb-2"
                >
                  Trạng thái
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full pt-3 px-3 pb-[14px] text-base font-medium placeholder:text-gray-200 text-black border border-[rgba(202,202,202,1)] rounded-lg outline-none"
                  required
                >
                  <option className="py-2 px-3" value="" disabled hidden>
                    Select status
                  </option>
                  <option className="py-2 px-3" value="Có sẵn">
                    Có sẵn
                  </option>
                  <option className="py-2 px-3" value="Không có sẵn">
                    Không có sẵn
                  </option>
                </select>
              </div>
              <div className="mb-12">
                <label
                  htmlFor="image"
                  className="block text-base font-medium text-black mb-2"
                >
                  Ảnh sản phẩm
                </label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                />
                <div className="flex flex-wrap justify-between mt-2">
                  {formData.imageUrls.length > 0 ? (
                    formData.imageUrls.map((url, index) => (
                      <div
                        key={index}
                        className="w-[144px] h-[88px] object-cover border rounded-[5px] border-[rgba(176,176,176,1)] my-3 cursor-pointer"
                        style={{
                          backgroundImage: `url(${url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        onClick={handleImageClick}
                      ></div>
                    ))
                  ) : (
                    <div
                      className="w-[144px] h-[88px] border rounded-[5px] border-[rgba(176,176,176,1)] flex items-center justify-center text-gray-400 cursor-pointer"
                      onClick={handleImageClick}
                    >
                      Chọn ảnh
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 flex justify-center items-center text-base font-medium bg-[rgba(150,84,244,1)] border border-[rgba(150,84,244,1)] text-white rounded-full"
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
