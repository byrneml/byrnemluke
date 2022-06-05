import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Page } from "@/components/Layout/Page";
import config from "@/data/config";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ title, description, children }: Props) => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto min-h-screen px-4">
      <Header />
      <Page title={title} description={description} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
