import MainHero from "./components/landing/MainHero";
import Features from "./components/landing/Features";
import Rays from "./components/reusables/Rays";
import Pricing from "./components/landing/Pricing";
import CTA from "./components/reusables/CTA";
import Testimonial from "./components/reusables/Testimonial";
import FAQ from "./components/reusables/FAQ";

export default function Home() {
  const faqData = [
    {
      question: "Jak mogę zarejestrować konto?",
      answer:
        "Kliknij przycisk Rejestracja w prawym górnym rogu i wypełnij formularz.",
    },
    {
      question: "Czy mogę anulować subskrypcję?",
      answer: "Tak, anulowanie subskrypcji jest możliwe w ustawieniach konta.",
    },
    {
      question: "Jak zmienić hasło?",
      answer: "Wejdź w ustawienia konta i wybierz opcję Zmień hasło.",
    },
    // dodaj więcej pytań w razie potrzeby
  ];

  return (
    <>
      <Rays></Rays>
      <MainHero></MainHero>
      <Features></Features>
      <Pricing></Pricing>
      <CTA
        mainText="Lorem Ipsum"
        description="Lorem Ipsum"
        ctaButtonContent="Click Me!"
        ctaButtonHref="/"
        imagePath="/images/placeholder.png"
        imageAlt="Alt"
      ></CTA>
      <Testimonial
        title="Lorem"
        description="Lorem"
        isDescriptionVisible={true}
      ></Testimonial>
      <FAQ items={faqData}></FAQ>
    </>
  );
}
