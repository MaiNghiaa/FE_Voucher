import React, { useState } from "react";
import "../VoucherManagement/VoucherManagement.css";
import VoucherDetail from "../../Components/VoucherManagement/VoucherDetail";
import VoucherAddnew from "../../Components/VoucherManagement/VoucherAddnew";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function VoucherManagement() {
  //
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  //
  const [visibleCount, setVisibleCount] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [idVoucher, setIdVoucher] = useState();
  const [isOpenModalAddnew, SetisOpenModallAddnew] = useState(false);
  const [data, setdata] = useState([
    {
      id: 1,
      image: "./Voucher/vc1.png",
      voucherName: "Giảm 10% tối đa 10k",
      category: "Giảm Giá",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 2,
      image: "./Voucher/vc2.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 3,
      image: "./Voucher/vc3.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 4,
      image: "./Voucher/vc4.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 5,
      image: "./Voucher/vc5.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Hoạt động",
    },
    {
      id: 6,
      image: "./Voucher/vc6.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Không hoạt động",
    },
    {
      id: 7,
      image: "./Voucher/vc1.png",
      voucherName: "Quà Tặng",
      category: "Quà Tặng",
      usageTarget: "Tất cả",
      status: "Không hoạt động",
    },
  ]);

  const moreInfo = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + 3);
  };
  const lessInfo = () => {
    setVisibleCount(3);
  };

  const handleDeleteClick = (id) => {
    setShowModal(true);
    setIdVoucher(id);
  };

  const handleDelete = (id) => {
    console.log(`Deleting voucher with ID: ${id}`);

    setShowModal(false);
  };

  const handleDetail = () => {
    setShowModalDetail(true);
  };

  const ClickAddnew = () => {
    SetisOpenModallAddnew(true);
  };
  return (
    <div className="">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className=" fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-7 overflow-y-auto bg-sky-300 dark:bg-gray-800">
          <div className="flex items-center ps-2.5 mb-5 ">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt=""
            />

            <span className="flex flex-wrap self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Vouchers Business
            </span>
          </div>
          <ul className="space-y-2 text-base font-normal flex flex-wrap flex-col gap-3">
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8186 4.6664C12.7439 3.77787 11.2561 3.77787 10.1815 4.6664L4.79539 9.11964C4.30425 9.52572 4 10.1673 4 10.8663V17.8109C4 19.0784 4.95214 20 6 20H8V16.7478C8 14.4927 9.73415 12.5587 12 12.5587C14.2659 12.5587 16 14.4927 16 16.7478V20H18C19.0479 20 20 19.0784 20 17.8109V10.8663C20 10.1673 19.6958 9.52572 19.2046 9.11965L13.8186 4.6664ZM15.093 3.12502L20.479 7.57827C21.4494 8.38059 22 9.59705 22 10.8663V17.8109C22 20.066 20.2659 22 18 22H16C14.8954 22 14 21.1046 14 20V16.7478C14 15.4803 13.0479 14.5587 12 14.5587C10.9521 14.5587 10 15.4803 10 16.7478V20C10 21.1046 9.10457 22 8 22H6C3.73415 22 2 20.066 2 17.8109V10.8663C2 9.59705 2.55059 8.38059 3.52097 7.57827L8.90703 3.12502C10.7213 1.62499 13.2787 1.62499 15.093 3.12502Z"
                    fill="black"
                  />
                </svg>
                <span className="ms-4">Trang chủ</span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25006 6C5.25006 4.74022 5.7505 3.53204 6.6413 2.64124C7.5321 1.75044 8.74028 1.25 10.0001 1.25C11.2598 1.25 12.468 1.75044 13.3588 2.64124C14.2496 3.53204 14.7501 4.74022 14.7501 6C14.7501 7.25978 14.2496 8.46796 13.3588 9.35876C12.468 10.2496 11.2598 10.75 10.0001 10.75C8.74028 10.75 7.5321 10.2496 6.6413 9.35876C5.7505 8.46796 5.25006 7.25978 5.25006 6ZM10.0001 2.75C9.1381 2.75 8.31145 3.09241 7.70196 3.7019C7.09247 4.3114 6.75006 5.13805 6.75006 6C6.75006 6.86195 7.09247 7.6886 7.70196 8.2981C8.31145 8.90759 9.1381 9.25 10.0001 9.25C10.862 9.25 11.6887 8.90759 12.2982 8.2981C12.9076 7.6886 13.2501 6.86195 13.2501 6C13.2501 5.13805 12.9076 4.3114 12.2982 3.7019C11.6887 3.09241 10.862 2.75 10.0001 2.75ZM3.97606 13.664C5.55606 12.776 7.68606 12.25 10.0001 12.25C12.3141 12.25 14.4451 12.776 16.0251 13.664C17.5811 14.54 18.7501 15.866 18.7501 17.5V17.602C18.7511 18.764 18.7531 20.222 17.4741 21.264C16.8441 21.776 15.9641 22.141 14.7741 22.381C13.5811 22.623 12.0261 22.75 10.0001 22.75C7.97406 22.75 6.42006 22.623 5.22606 22.381C4.03606 22.141 3.15606 21.776 2.52606 21.264C1.24806 20.222 1.24906 18.764 1.25006 17.602V17.5C1.25006 15.866 2.42006 14.54 3.97606 13.664ZM4.71106 14.972C3.37106 15.725 2.75106 16.649 2.75106 17.5C2.75106 18.808 2.79106 19.544 3.47406 20.1C3.84406 20.402 4.46406 20.697 5.52406 20.911C6.58106 21.125 8.02606 21.25 10.0001 21.25C11.9741 21.25 13.4201 21.125 14.4761 20.911C15.5361 20.697 16.1561 20.402 16.5261 20.101C17.2101 19.544 17.2501 18.808 17.2501 17.5C17.2501 16.649 16.6291 15.725 15.2901 14.972C13.9731 14.232 12.1051 13.75 10.0001 13.75C7.89506 13.75 6.02706 14.232 4.71106 14.972ZM16.6901 7.447C17.4111 7.128 18.2481 7.188 19.0001 7.679C19.7521 7.189 20.5901 7.128 21.3101 7.447C21.7422 7.64319 22.1081 7.9604 22.3637 8.36026C22.6193 8.76011 22.7535 9.22546 22.7501 9.7C22.7501 10.648 22.3361 11.362 21.8401 11.903C21.4521 12.325 20.9731 12.682 20.5951 12.963L20.3671 13.135L20.3651 13.136C20.2151 13.25 20.0241 13.396 19.8211 13.511C19.573 13.6604 19.2905 13.7427 19.0011 13.75C18.6661 13.75 18.3831 13.627 18.1791 13.511C17.9898 13.3984 17.8084 13.2731 17.6361 13.136L17.6341 13.135C17.5641 13.081 17.4871 13.025 17.4061 12.964C17.0271 12.682 16.5481 12.325 16.1611 11.904C15.6641 11.362 15.2511 10.648 15.2511 9.7C15.2511 8.7 15.8341 7.825 16.6901 7.447ZM16.7501 9.7C16.7501 9.288 16.9901 8.955 17.2971 8.819C17.5641 8.701 17.9871 8.689 18.4681 9.172C18.5378 9.24215 18.6206 9.29781 18.712 9.3358C18.8033 9.37379 18.9012 9.39334 19.0001 9.39334C19.0989 9.39334 19.1969 9.37379 19.2882 9.3358C19.3795 9.29781 19.4624 9.24215 19.5321 9.172C20.0121 8.689 20.4371 8.701 20.7021 8.819C20.8684 8.89735 21.0086 9.02207 21.1059 9.17817C21.2031 9.33428 21.2531 9.51513 21.2501 9.699C21.2501 10.164 21.0611 10.532 20.7341 10.889C20.4521 11.197 20.1161 11.448 19.7441 11.726L19.4571 11.942C19.3378 12.0379 19.2126 12.1261 19.0821 12.206C19.0558 12.2214 19.0284 12.2348 19.0001 12.246C18.9717 12.2348 18.9443 12.2214 18.9181 12.206C18.8181 12.15 18.7061 12.066 18.5441 11.942L18.2561 11.726C17.8841 11.448 17.5481 11.196 17.2661 10.889C16.9391 10.532 16.7501 10.165 16.7501 9.7Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.3"
                  />
                </svg>
                <span className="flex-1 ms-4 whitespace-nowrap">
                  Khách hàng quay lại
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.0008 19C15.001 19.5046 14.8104 19.9906 14.4673 20.3605C14.1242 20.7305 13.654 20.9572 13.1508 20.995L13.0008 21H11.0008C10.4962 21.0002 10.0103 20.8096 9.64028 20.4665C9.2703 20.1234 9.04367 19.6532 9.00583 19.15L9.00082 19H15.0008ZM12.0008 2C13.8158 1.99997 15.5598 2.70489 16.8651 3.96607C18.1703 5.22726 18.9346 6.94609 18.9968 8.76L19.0008 9V12.764L20.8228 16.408C20.9023 16.567 20.9421 16.7429 20.9388 16.9206C20.9355 17.0984 20.8891 17.2727 20.8037 17.4286C20.7183 17.5845 20.5963 17.7174 20.4483 17.8158C20.3003 17.9143 20.1306 17.9754 19.9538 17.994L19.8388 18H4.16283C3.98499 18.0001 3.80979 17.957 3.65225 17.8745C3.4947 17.792 3.3595 17.6725 3.25824 17.5264C3.15698 17.3802 3.09267 17.2116 3.07083 17.0351C3.04899 16.8586 3.07026 16.6795 3.13283 16.513L3.17883 16.408L5.00083 12.764V9C5.00083 7.14348 5.73832 5.36301 7.05108 4.05025C8.36383 2.7375 10.1443 2 12.0008 2ZM12.0008 4C10.7124 4.00007 9.47366 4.49754 8.54305 5.38866C7.61243 6.27978 7.06174 7.49575 7.00583 8.783L7.00083 9V12.764C7.00084 13.012 6.95472 13.2579 6.86483 13.489L6.78983 13.659L5.61983 16H18.3828L17.2128 13.658C17.1018 13.4363 17.033 13.1959 17.0098 12.949L17.0008 12.764V9C17.0008 7.67392 16.474 6.40215 15.5364 5.46447C14.5987 4.52678 13.3269 4 12.0008 4Z"
                    fill="black"
                  />
                </svg>
                <span className="flex-1 ms-4 whitespace-nowrap">Thông báo</span>
                <span className="count flex items-center justify-center w-3 h-3 py-2.5 px-4 ms-4 text-sm font-medium text-white bg-[#9654F4] rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.25 3C19.7688 3 21 4.23122 21 5.75V12.0218C20.5368 11.7253 20.0335 11.4858 19.5 11.3135V5.75C19.5 5.05964 18.9404 4.5 18.25 4.5H5.75C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H5.75C4.23122 21 3 19.7688 3 18.25V5.75C3 4.23122 4.23122 3 5.75 3H18.25ZM14.25 11.5C14.4124 11.5 14.5627 11.5516 14.6855 11.6393C13.9801 11.9786 13.3455 12.4416 12.8096 13H6.75C6.33579 13 6 12.6642 6 12.25C6 11.8703 6.28215 11.5565 6.64823 11.5068L6.75 11.5H14.25ZM6.75 15.5H11.3135C11.159 15.9782 11.0585 16.4805 11.0189 17H6.75C6.33579 17 6 16.6642 6 16.25C6 15.8703 6.28215 15.5565 6.64823 15.5068L6.75 15.5ZM17.25 7.5H6.75L6.64823 7.50685C6.28215 7.55651 6 7.8703 6 8.25C6 8.66421 6.33579 9 6.75 9H17.25L17.3518 8.99315C17.7178 8.94349 18 8.6297 18 8.25C18 7.83579 17.6642 7.5 17.25 7.5ZM12.5002 15.6285L12.9474 16.0588C13.7651 16.8456 13.7651 18.1544 12.9474 18.9412L12.5002 19.3715C12.7007 19.945 12.9908 20.4742 13.353 20.9409L13.9549 20.7631C15.0524 20.4388 16.1976 21.0998 16.4659 22.2122L16.6385 22.9281C16.9189 22.9754 17.2067 23 17.5 23C17.7933 23 18.0811 22.9754 18.3614 22.9281L18.5341 22.2122C18.8024 21.0998 19.9476 20.4388 21.0451 20.7631L21.647 20.9409C22.0092 20.4742 22.2993 19.945 22.4998 19.3715L22.0526 18.9412C21.2349 18.1544 21.2349 16.8456 22.0526 16.0588L22.4998 15.6285C22.2993 15.055 22.0092 14.5258 21.647 14.0591L21.0451 14.2369C19.9476 14.5612 18.8024 13.9002 18.5341 12.7878L18.3614 12.0719C18.0811 12.0246 17.7933 12 17.5 12C17.2067 12 16.9189 12.0246 16.6385 12.0719L16.4659 12.7878C16.1976 13.9002 15.0524 14.5612 13.9549 14.2369L13.353 14.0591C12.9908 14.5258 12.7007 15.055 12.5002 15.6285ZM17.5 19C16.6994 19 16.0503 18.3284 16.0503 17.5C16.0503 16.6716 16.6994 16 17.5 16C18.3006 16 18.9497 16.6716 18.9497 17.5C18.9497 18.3284 18.3006 19 17.5 19Z"
                    fill="black"
                  />
                </svg>
                <span className="flex-1 ms-4 whitespace-nowrap">
                  Quản lý chiến dịch voucher
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_10780_27546)">
                    <path
                      d="M2.35575 21.2141L19.6415 21.2141C20.5093 21.2141 21.2129 20.5106 21.2129 19.6427L21.2129 2.35697C21.2129 1.48909 20.5093 0.785538 19.6415 0.785538L2.35575 0.785538C1.48787 0.785538 0.784319 1.48909 0.784319 2.35697L0.784319 19.6427C0.784319 20.5106 1.48787 21.2141 2.35575 21.2141Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.71289 4.71411H7.85575M4.71289 8.64268H11.7843M18.07 8.64268L13.3557 16.4998L7.85575 13.357L4.71289 18.0713"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <rect
                    x="0.75"
                    y="0.75"
                    width="20.5"
                    height="20.5"
                    rx="1.25"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <clipPath id="clip0_10780_27546">
                      <rect width="22" height="22" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="flex-1 ms-4 whitespace-nowrap">
                  Quản lý sản phẩm
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 21V12M12.0003 7H7.95032C5.18032 7 5.01032 3 7.95032 3C11.1003 3 12.0003 7 12.0003 7ZM12.0003 7H16.0503C18.9463 7 18.9463 3 16.0503 3C12.9003 3 12.0003 7 12.0003 7Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V12M21 12V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H5C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V12H21Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="flex-1 ms-4 whitespace-nowrap">
                  Quản lý phần thưởng
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 px-4 text-gray-900 rounded-lg dark:text-white  group">
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                    fill="black"
                  />
                  <path
                    stroke="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99922 13.3C8.71719 13.3 9.29922 12.7179 9.29922 12C9.29922 11.282 8.71719 10.7 7.99922 10.7C7.28125 10.7 6.69922 11.282 6.69922 12C6.69922 12.7179 7.28125 13.3 7.99922 13.3Z"
                    fill="black"
                  />
                  <path
                    stroke="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9992 13.3C16.7172 13.3 17.2992 12.7179 17.2992 12C17.2992 11.282 16.7172 10.7 15.9992 10.7C15.2812 10.7 14.6992 11.282 14.6992 12C14.6992 12.7179 15.2812 13.3 15.9992 13.3Z"
                    fill="black"
                  />
                  <path
                    stroke="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9992 13.3C12.7172 13.3 13.2992 12.7179 13.2992 12C13.2992 11.282 12.7172 10.7 11.9992 10.7C11.2812 10.7 10.6992 11.282 10.6992 12C10.6992 12.7179 11.2812 13.3 11.9992 13.3Z"
                    fill="black"
                  />
                </svg>

                <span className="flex-1 ms-4 whitespace-nowrap">Xem thêm</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      {!showModalDetail ? (
        <div className="p-4 sm:ml-80 bg-sky-400">
          <div className="pt-4 px-[42px] pb-[100px] border-2 border-gray-200  rounded-lg dark:border-gray-700 bg-white">
            <div className="Logo-nhatuyendung flex justify-end gap-4 items-center mb-4">
              <p className="ten-ntd font-medium text-base">Thead</p>
              <picture className="w-10 h-10 object-contain rounded-[40px]">
                <img src="./Thead.png" alt="" className="w-full h-full " />
              </picture>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btnVoucher" onClick={ClickAddnew}>
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
                  Tạo voucher
                </span>
              </button>
            </div>
            <div className="mt-6 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse box-border">
                <thead className="">
                  <tr className=" bg-[#EFE6FD] text-base font-bold">
                    <th className="py-3 px-[25px] inline-block  border border-[#CACACA] text-center">
                      Ảnh/
                      <br />
                      Video
                    </th>
                    <th className="   text-center">
                      <p className="">Tên Voucher</p>
                    </th>
                    <th className=" text-center py-3">
                      <p className="flex items-center justify-center">
                        Phân loại
                      </p>
                    </th>
                    <th className="   text-center">
                      <p className="">Đối tượng sử dụng</p>
                    </th>
                    <th className="   text-center">Trạng thái</th>
                    <th className="   text-center">
                      <p className="">Thao tác</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, visibleCount).map((item, index) => (
                    <tr key={index} className=" text-center">
                      <td className="">
                        <img
                          src={item.image}
                          alt="Voucher"
                          className="w-[76px] h-[80px] object-cover p-2"
                        />
                      </td>
                      <td className="  text-center">
                        <p className="flex items-center justify-center">
                          {item.voucherName}
                        </p>
                      </td>
                      <td className="   text-center">
                        <p className="">{item.category}</p>
                      </td>
                      <td className="   text-center">
                        <p className="">{item.usageTarget}</p>
                      </td>
                      <td className="   text-center ">
                        <p
                          className={`{ ${
                            item.status === "Hoạt động"
                              ? "text-green-500 "
                              : "text-red-500 "
                          }`}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className="   text-center ">
                        <div className="flex flex-col">
                          <button
                            className="text-blue-500 cursor-pointer"
                            onClick={() => handleDetail()}
                          >
                            Chi tiết
                          </button>{" "}
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
                  ))}
                </tbody>
              </table>
            </div>
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white px-6 rounded-lg w-[640px]">
                  <div className="flex items-center justify-between py-6 ">
                    <h4 className="text-[#1E293B] text-2xl font-semibold">
                      Xóa
                    </h4>
                    <button
                      className=" text-white px-4 py-2 rounded mr-2"
                      onClick={() => {
                        setShowModal(false);
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
                    <p className="font-normal text-base text-[#1E293B] pb-[24px]">
                      Bạn có chắc chắn xóa voucher này không ? {idVoucher}
                    </p>
                    <div>
                      <div className="cta py-3 px-5 flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setShowModal(false);
                          }}
                          className="h-10 w-[120px] flex justify-center items-center rounded-full border-[1px] border-[#9654F4] text-[#9654F4] hover:bg-[#9654F4] hover:text-white transition"
                        >
                          <p className="">Trở lại</p>
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(idVoucher);
                          }}
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
            {visibleCount < data.length && (
              <div
                className="mt-[22px] flex items-center justify-center"
                onClick={moreInfo}
              >
                <p className="text-base font-normal text-black text-more">
                  Xem thêm
                </p>
              </div>
            )}

            {visibleCount >= data.length && (
              <div
                className="mt-[22px] flex items-center justify-center"
                onClick={lessInfo}
              >
                <p className="text-base font-normal text-black text-more">
                  Thu gọn
                </p>
              </div>
            )}

            {isOpenModalAddnew && (
              <VoucherAddnew onClose={() => SetisOpenModallAddnew(false)} />
            )}
          </div>
        </div>
      ) : (
        <VoucherDetail
          onClose={() => {
            setShowModalDetail(false);
          }}
        />
      )}
    </div>
  );
}
{
  /* <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert>
        </Card>
      </Drawer> */
}
