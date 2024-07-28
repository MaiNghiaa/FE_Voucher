import React, { useState } from "react";
import { formatVND } from "../../Common/formatVND";
import { editSvg, plusSvg, trash2Svg } from "../../Common/svg";
import AddCategoryModal from "../../Components/ProductManagement/AddCategoryModal";
import AddProductModal from "../../Components/ProductManagement/AddProductModal";
import UpdateItemModal from "../../Components/ProductManagement/UpdateItemModal";
import CreateItemModal from "../../Components/ProductManagement/CreateItemModal";
import RenameCategoryModal from "../../Components/ProductManagement/RenameCategoryModal";
import DeleteCategoryModal from "../../Components/ProductManagement/DeleteCategoryModal";
import DeleteProductModal from "../../Components/ProductManagement/DeleteProductModal";
import { dataProductManagement } from "../../MookData/DataCheckboxCampaign";
export default function ProductManagement() {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState();
  const [currentCategory, setCurrentCategory] = useState("");
  const [deleteProduct, setDeleteProduct] = useState("");
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [categories, setCategories] = useState(["Food", "Drinks"]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [dataItems, setDataItems] = useState(dataProductManagement);

  const [showUpdateItemModal, setShowUpdateItemModal] = useState(false);
  const [updatedDataItem, setUpdatedDataItem] = useState({
    images: [],
    imageUrls: [],
    name: "",
    category: "",
    desc: "",
    price: "",
    status: "",
  });
  const [dropdownItemCategory, setDropdownItemCategory] = useState(false);
  const [formData, setFormData] = useState({
    images: [],
    imageUrls: [],
    name: "",
    category: "",
    desc: "",
    price: "",
    status: "",
  });

  // Handle adding new category
  const handleSubmit = (newCategory) => {
    const exist = categories.find((item) => item === newCategory);
    if (exist) {
      console.log("Category already exists");
    } else {
      setCategories([...categories, newCategory]);
      console.log("Category added:", newCategory);
      setShowCategoryModal(false);
    }
  };

  // Handle dropdown
  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const toggleDropdownCategory = (index) => {
    setDropdownItemCategory(dropdownItemCategory === index ? null : index);
  };

  // Handle rename
  const handleRename = (item) => {
    setCurrentCategory(item);
    setShowRenameModal(true);
    setDropdownVisible(null);
  };

  const handleRenameSubmit = (CateUpdate) => {
    const updatedCategories = categories.map((cat) =>
      cat === currentCategory ? CateUpdate : cat
    );
    setCategories(updatedCategories);
    setShowRenameModal(false);
  };

  const handleUpdateItem = (item, idx) => {
    setUpdatedDataItem(item);
    setShowUpdateItemModal(true);
  };

  const handleDeleteCategory = (item) => {
    setDropdownVisible(null);
    setShowDeleteModal(true);
    setDeleteCategory(item);
  };

  const handleDeleteSubmit = (category) => {
    console.log(category);
    const newCategories = categories.filter((item) => item !== category);
    setCategories(newCategories);
    setShowDeleteModal(false);
  };

  const handleDeleteProduct = (item) => {
    setDropdownItemCategory(false);
    setShowDeleteProductModal(true);
    setDeleteProduct(item.name);
  };

  const handleDeleteProductSubmit = (product) => {
    const newItems = dataItems.filter((item) => item.name !== product);
    setDataItems(newItems);
    setShowDeleteProductModal(false);
  };

  const handleCreateProduct = (category) => {
    setDropdownVisible(null);
    setFormData((prevData) => ({
      ...prevData,
      category: category,
    }));
    setShowCreateModal(category);
  };

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatedDataItem((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateSubmit = (formnewData) => {
    console.log("handleCreateSubmit", formnewData);
    const newId = (
      dataItems.length > 0
        ? Math.max(...dataItems.map((item) => parseInt(item.id))) + 1
        : 1
    ).toString();
    const newItem = {
      id: newId,
      image: formnewData.imageUrls[0],
      name: formnewData.name,
      desc: formnewData.desc,
      price: formnewData.price,
      category: formnewData.category,
      status: formnewData.status,
    };

    setDataItems((prevDataItems) => [...prevDataItems, newItem]);

    setShowProductModal(false);
    setFormData({
      images: [],
      imageUrls: [],
      name: "",
      category: "",
      desc: "",
      price: "",
      status: "",
    });
  };

  const handleUpdateItemSubmit = (e) => {
    e.preventDefault();
    const updatedId = updatedDataItem.id;
    const updatedItems = dataItems.map((item) =>
      item.id === updatedId ? { ...item, ...updatedDataItem } : item
    );
    setDataItems(updatedItems);
    setShowUpdateItemModal(false);
    setUpdatedDataItem({
      images: [],
      imageUrls: [],
      name: "",
      category: "",
      desc: "",
      price: "",
      status: "",
    });
  };

  const handleCategoryClick = (category) => {
    console.log(category);
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  // useEffect(() => {
  //   console.log("selectedCategory:", selectedCategory);
  //   console.log("categories:", categories);
  //   console.log("dataItems:", dataItems);
  // }, [showCategoryModal, showProductModal, categories, dataItems]);
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
              onClick={() => setShowCategoryModal(true)}
            >
              {plusSvg}

              <span className="font-medium text-base text-[#5900D9]">
                Thêm hạng mục
              </span>
            </button>
            <button
              className="btn btnVoucher btn_themsanpham"
              onClick={() => setShowProductModal(true)}
            >
              {plusSvg}

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
                            onClick={() => handleCreateProduct(item)}
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
                            onClick={() => handleDeleteCategory(item)}
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
                    {dataItems
                      .filter((dataItem) => dataItem.category === item)
                      .map((filteredItem, idx) => (
                        <div
                          key={idx}
                          className=" w-[220px] rounded-[20px] box-border "
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
                              <div className="relative" key={idx}>
                                <button
                                  className="more px-1 py-1"
                                  onClick={() => toggleDropdownCategory(idx)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3"
                                    height="16"
                                    viewBox="0 0 4 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14ZM0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8ZM0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </button>
                                {dropdownItemCategory === idx && (
                                  <div className="absolute left-0 box-border shadow-[0px_0px_5px_-5px_rgba(0,0,0,0.25)] border rounded-lg bg-white overflow-hidden z-1000">
                                    <ul className="text-base font-normal p-5 flex justify-center flex-col items-start">
                                      <li
                                        className="flex items-center gap-2 hover:bg-gray-200 whitespace-nowrap cursor-pointer px-5 py-2 w-full"
                                        onClick={() =>
                                          handleUpdateItem(filteredItem, idx)
                                        }
                                      >
                                        <span>{editSvg}</span>
                                        Chỉnh sửa
                                      </li>

                                      <li
                                        className="flex items-center gap-2 cursor-pointer px-5 py-2 w-full hover:bg-gray-200 whitespace-nowrap"
                                        onClick={() =>
                                          handleDeleteProduct(filteredItem)
                                        }
                                      >
                                        <span>{trash2Svg}</span>
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
        {/* done */}
        {showCategoryModal && (
          <AddCategoryModal
            isOpen={showCategoryModal}
            onClose={() => setShowCategoryModal(false)}
            onAdd={handleSubmit}
          />
        )}
        {/* done */}
        {showRenameModal && (
          <RenameCategoryModal
            isOpen={showRenameModal}
            onClose={() => setShowRenameModal(false)}
            onRename={handleRenameSubmit}
            currentCategory={currentCategory}
          />
        )}
        {/* done */}
        {showDeleteModal && (
          <DeleteCategoryModal
            isOpen={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onDelete={handleDeleteSubmit}
            deleteCategory={deleteCategory}
          />
        )}
        {/* done */}
        {showDeleteProductModal && (
          <DeleteProductModal
            isOpen={showDeleteProductModal}
            onClose={() => setShowDeleteProductModal(false)}
            deleteProduct={deleteProduct}
            onDelete={handleDeleteProductSubmit}
          />
        )}
        {showCreateModal && (
          <CreateItemModal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onAdd={handleCreateSubmit}
          />
        )}
        {/* done */}
        {showProductModal && (
          <AddProductModal
            isOpen={showProductModal}
            onClose={() => setShowProductModal(false)}
            onAdd={handleCreateSubmit}
            categories={categories}
          />
        )}
        {/* done */}
        {showUpdateItemModal && (
          <UpdateItemModal
            showUpdateItemModal={showUpdateItemModal}
            setShowUpdateItemModal={setShowUpdateItemModal}
            handleUpdateItemSubmit={handleUpdateItemSubmit}
            updatedDataItem={updatedDataItem}
            handleChangeUpdate={handleChangeUpdate}
            categories={categories}
          />
        )}
      </div>
    </div>
  );
}
