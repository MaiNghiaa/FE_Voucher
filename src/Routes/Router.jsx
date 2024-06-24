import { lazy, memo, Suspense, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from "../Pages/LandingPage/LandingPage";
import VoucherManagement from "../Pages/VoucherManagement/VoucherManagement";

import VoucherCampaignManagement from "../Pages/VoucherCampaignManagement/VoucherCampaignManagement";
import Khachhangquaytrolai from "../Pages/Khachhangquaytrolai/Khachhangquaytrolai";
import Quanlysanpham from "../Pages/Quanlysanpham/Quanlysanpham";
import Quanlytienthuong from "../Pages/Quanlytienthuong/Quanlytienthuong";
import Xemthem from "../Pages/Xemthem/Xemthem";
import Thongbao from "../Pages/Thongbao/Thongbao";

const PageLayout = lazy(() => import("../Layouts/PageLayout"));

function RouterComponent() {
  const location = useLocation();

  const routes = [
    {
      path: "/",
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading....</p>}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <PageLayout>
                <LandingPage />
              </PageLayout>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      ),
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/VoucherManagerment", element: <VoucherManagement /> },
        {
          path: "/VoucherCampaignManagement",
          element: <VoucherCampaignManagement />,
        },
        {
          path: "/Khachhangquaytrolai",
          element: <Khachhangquaytrolai />,
        },
        {
          path: "/Thongbao",
          element: <Thongbao />,
        },
        {
          path: "/Quanlysanpham",
          element: <Quanlysanpham />,
        },
        {
          path: "/Quanlytienthuong",
          element: <Quanlytienthuong />,
        },
        {
          path: "/Xemthem",
          element: <Xemthem />,
        },
      ],
    },
  ];
  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(RouterComponent);
