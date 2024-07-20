import React, { useState } from "react";
import CreateHangmuc from "../../Components/ProductManagement/CreateHangmuc";
// import "";
export default function Quanlysanpham() {
  const [showmodalThemHangmuc, setshowmodalThemHangmuc] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [renameValue, setRenameValue] = useState("");

  //dropdown
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const [hangmuc, sethangmuc] = useState("");
  const [categories, setCategories] = useState([]);

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
  console.log(categories);

  //Handle dropdown
  const toggleDropdown = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(index);
    }
  };

  //Handle Doi ten
  const handleRename = (item) => {
    setCurrentCategory(item);
    setRenameValue(item);
    setShowRenameModal(true);
  };

  const handleRenameSubmit = (e) => {
    e.preventDefault();
    const updatedCategories = categories.map((cat) =>
      cat === currentCategory ? renameValue : cat
    );
    setCategories(updatedCategories);
    setShowRenameModal(false);
    setDropdownVisible(null);
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
            <button className="btn btnVoucher btn_themsanpham">
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
            categories.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center m-2.5 pb-4 border-b border-[rgba(219,219,219,1)]"
                >
                  <div className="flex items-center justify-center">
                    <div className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="8.75"
                        viewBox="0 0 320 512"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                      </svg>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="14"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg> */}
                    </div>
                    <p className="name">{item}</p>
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
                          <li className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap">
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
                          <li className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap">
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
              );
            })}
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
    </div>
  );
}
