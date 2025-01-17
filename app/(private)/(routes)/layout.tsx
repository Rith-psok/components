import Navbar from "@/app/components/appbar/Navbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"h-full"}>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
