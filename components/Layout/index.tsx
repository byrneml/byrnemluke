import React, { ReactNode } from "react";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  between?: boolean;
};

const Layout = ({ children, between }: Props) => {
  return (
    <div
      className={clsx(
        between ? "justify-between" : "",
        "flex flex-col w-screen max-w-[96rem] mx-auto h-screen max-h-screen lg:max-h-[1000px] px-5 pb-8 lg:px-16 lg:pb-16"
      )}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
