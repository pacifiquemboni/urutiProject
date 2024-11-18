import { ReactNode } from "react";
// import Header from "./header";
// import FooterSection from "./footer";

type props = {
  children: ReactNode;
};

export default function PageLayout({ children }: props) {
  return (
    <>
      {/* <Header /> */}
      <main className="">{children}</main>
      {/* <FooterSection /> */}
    </>
  );
}
