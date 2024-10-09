import Navbar from "@/app/components/appbar/Navbar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className={"h-full bg-red"}>{children}</div>;
};

export default MainLayout;
