import { CtaCustom } from "@/components/section/cta";
import { FeatureCustom } from "@/components/section/feature";
import { FooterCustom } from "@/components/section/footer";
import { HeroCustom } from "@/components/section/hero";
import { NavbarCustom } from "@/components/section/navbar";
import { PricingCustom } from "@/components/section/pricing";
import { StatsCustom } from "@/components/section/stat";
import { TestimonialCustom } from "@/components/section/testimonial";


export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <section className="mx-auto w-[80%]">
        <NavbarCustom></NavbarCustom>
      </section>

      {/* LARGE BANNER */}
      <section>
        <div className="relative mx-auto max-w-screen">
          <img
            src="/img/nail-polish-gems.jpg"
            alt="placeholder"
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
      </section>

      {/* HERO */}
      <section className="mx-auto w-[80%]">
        <HeroCustom heading={"Beauty that feels as good as it looks."}></HeroCustom>
      </section>

      {/* STATS */}
      <section className="mx-auto w-[80%]">
        <StatsCustom></StatsCustom>
      </section>

      {/* FEATURE */}
      <section className="mx-auto w-[80%]">
        <FeatureCustom heading={""} feature1={undefined} feature2={undefined} feature3={undefined} feature4={undefined}></FeatureCustom>
      </section>

      {/* PRICING */}
      <section className="mx-auto w-[80%]">
        <PricingCustom></PricingCustom>
      </section>

      {/* Testimonial */}
      <section className="mx-auto w-[80%]">
        <TestimonialCustom></TestimonialCustom>
      </section>

      {/* CTA */}
      <section className="mx-auto w-[80%]">
        <CtaCustom heading={"Ready to Get Started?"} description={"Join thousands of satisfied customers using our platform to build amazing websites."}></CtaCustom>
      </section>

      {/* FOOTER */}
      <section className="mx-auto w-[80%]">
        <FooterCustom></FooterCustom>
      </section>
    </>
  );
}
