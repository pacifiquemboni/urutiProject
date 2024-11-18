import { ReactNode } from "react";
import Header from "./header";
import backImage from "@assets/img/wheel_back.png";

type props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: props) {
  return (
    <section className="min-h-dvh grid" style={{ gridTemplateRows: "auto 1fr" }}>
      <Header />
      <main className="content-grid md:bg-gradient-to-b from-black to-[120%] to-primary">
        <div className="full-left grid md:grid-cols-5">
          <aside
            className="flex flex-col items-center justify-center gap-3 md:col-span-3 max-md:hidden rounded-se-3xl bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${backImage})`,
            }}
          />
          <div className="bg-background md:rounded-3xl grid place-items-center md:col-span-2 md:m-2 md:ml-0">
            {children}
          </div>
        </div>
      </main>
      {/* <FooterSection /> */}
    </section>
  );
}
