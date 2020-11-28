import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mt-24 px-16 mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
