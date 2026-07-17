import type { Metadata } from "next";
import { clientConfig } from "@/client.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Policy from "@/components/Policy";

export const metadata: Metadata = {
  title: `${clientConfig.policy.heading} — ${clientConfig.brand.name}`,
  description: clientConfig.policy.intro,
};

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Policy />
      </main>
      <Footer />
    </>
  );
}
