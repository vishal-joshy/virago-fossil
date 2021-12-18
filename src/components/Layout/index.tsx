import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
