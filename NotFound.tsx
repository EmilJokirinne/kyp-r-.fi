import Navbar from "@/Navbar";
import Footer from "@/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Sivua ei löytynyt</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Hakemaasi sivua ei ole olemassa tai se on siirretty.
        </p>
        <a href="/" className="mt-8 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-fjord">
          Takaisin etusivulle
        </a>
      </main>
      <Footer />
    </>
  );
}
