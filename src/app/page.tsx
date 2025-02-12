import Head from "next/head";
import { Header } from "./components/layout/Header";
import { LogoYieldz } from "./components/icons/logo-yieldz";
import { LogoWeb3 } from "./components/icons/logo-web3";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[30px_1fr_auto] items-center justify-items-center min-h-screen p-4 gap-16 sm:p-8">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <LogoWeb3 />
        </div>
        <span className="mx-auto">builder of</span>
        <div className="flex flex-col gap-2 items-center mx-auto">
          <div className="flex flex-col items-center">
            <a
              href="https://yieldz.cc"
              target="_blank"
              referrerPolicy="origin-when-cross-origin"
            >
              <LogoYieldz />
            </a>
          </div>
          <div className="flex flex-row gap-4">
            <a href="#" className="underline hover:no-underline">
              Whitepaper
            </a>
            <a
              href="/yieldz/litepaper.pdf"
              target="_blank"
              referrerPolicy="same-origin"
              className="underline hover:no-underline"
            >
              Litepaper
            </a>
            <a href="#" className="underline hover:no-underline">
              Docs
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
