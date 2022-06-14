import React, { ReactNode } from "react";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Page } from "@/components/Layout/Page";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  includeLine?: boolean;
};

const Layout = ({ title, description, children, includeLine }: Props) => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto h-screen px-6">
      <Header />
      <Page title={title} description={description} includeLine={includeLine} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
