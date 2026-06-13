import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Problem } from "@/components/Problem/Problem";
import { Services } from "@/components/Services/Services";
import { Why } from "@/components/Why/Why";
import { Process } from "@/components/Process/Process";
import { Features } from "@/components/Features/Features";
import { Work } from "@/components/Work/Work";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Services dict={dict} />
        <Why dict={dict} />
        <Process dict={dict} />
        <Features dict={dict} />
        <Work dict={dict} />
        <Testimonials dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
