import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sections/Sidebar";

export default function PageLayout() {
  // const Bgmain = {
  //   background:
  //     "radial-gradient(72.57% 49.33% at 70.82% 114.03%, rgba(195, 45, 180, 0.15) 16.65%, rgba(233, 120, 222, 0.00) 100%), radial-gradient(45.21% 68.82% at 48.05% -2.24%, rgba(101, 179, 234, 0.15) 0%, rgba(0, 163, 255, 0.00) 92.46%), linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), var(--Purple-Prymary---50, #EFE6FD)",
  // };

  return (
    <main className="relative">
      <div id="body" className="xl:mt-auto">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
