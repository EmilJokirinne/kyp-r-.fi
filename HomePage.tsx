import Navbar from "@/Navbar";
import Hero from "@/Hero";
import QuickAnswers from "@/QuickAnswers";
import UseCaseSelector from "@/UseCaseSelector";
import HelmetCategoryGrid from "@/HelmetCategoryGrid";
import ComparisonTable from "@/ComparisonTable";
import StandardsSection from "@/StandardsSection";
import MotorcycleSection from "@/MotorcycleSection";
import SpecsSection from "@/SpecsSection";
import ChooseSteps from "@/ChooseSteps";
import SizeGuide from "@/SizeGuide";
import FitChecklist from "@/FitChecklist";
import ReplaceSection from "@/ReplaceSection";
import MistakesSection from "@/MistakesSection";
import FAQAccordion from "@/FAQAccordion";
import CTASection from "@/CTASection";
import Footer from "@/Footer";
import { faqs } from "@/content";
import { site } from "@/site";

/** Rakenteinen data: WebSite, Organization ja FAQPage. Ei arvosteluja, hintoja tai sertifikaatteja. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: "fi-FI",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: `${site.url}/`,
        logo: `${site.url}/icon.svg`,
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#ukk`,
        inLanguage: "fi-FI",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <a
        href="#sisalto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Siirry sisältöön
      </a>
      <Navbar />
      <main id="sisalto">
        <Hero />
        <QuickAnswers />
        <UseCaseSelector />
        <HelmetCategoryGrid />
        <ComparisonTable />
        <StandardsSection />
        <MotorcycleSection />
        <SpecsSection />
        <ChooseSteps />
        <SizeGuide />
        <FitChecklist />
        <ReplaceSection />
        <MistakesSection />
        <FAQAccordion />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
