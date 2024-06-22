import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sections/Sidebar";

export default function PageLayout() {
  return (
    <main className="relative">
      <div id="body" className="xl:mt-auto">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
