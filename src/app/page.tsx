import { LogoWeb3 } from "./components/icons/logo-web3";
import { LogoYieldz } from "./components/icons/logo-yieldz";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[30px_1fr_auto] items-center justify-items-center min-h-screen p-4 gap-16 sm:p-8">
      <Header />
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
        <div className="mx-auto">
          <LogoWeb3 />
        </div>
        <span className="mx-auto">builder of</span>
        <div className="flex flex-col gap-6 items-center mx-auto">
          <div className="flex flex-col items-center">
            <a
              href="https://yieldz.cc"
              target="_blank"
              referrerPolicy="origin-when-cross-origin"
            >
              <LogoYieldz />
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vReIw44i4gKlp8I-Y1zHxZB-ttHurSZuuKu8x1Kzqfx7poGIioy_N0mx9-cQID6GWwHaFt3ZXt3S0Bb/pub"
              target="_blank"
              referrerPolicy="same-origin"
              className="underline hover:no-underline"
            >
              Whitepaper
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSOqdo-hP0jRuNrcHxBglzwOEzp0j8NTwz75AyfZ3kZMhaceCcn0WN9Okw28ARGQV-Etn86GTuOkxSw/pub"
              target="_blank"
              referrerPolicy="same-origin"
              className="underline hover:no-underline"
            >
              Litepaper
            </a>
            <a
              href="https://yieldzcc.gitbook.io/docs"
              target="_blank"
              className="underline hover:no-underline"
            >
              Documentation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
