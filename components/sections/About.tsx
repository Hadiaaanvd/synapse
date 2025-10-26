export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden section-spacing"
    >
      <div className="lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-16 relative z-1">
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col gap-8">
          <h2>
              DIGITAL MARKETING <br /> AGENCY SPECIALISING IN&nbsp;
            <span className="block text-primary">
              LEAD GENERATION AND
              ECOMMERCE.
            </span>
          </h2>
        </div>

        <div className="w-full md:w-1/2 max-w-[680px] text-sm flex flex-col gap-4 text-foreground lg:text-xl leading-relaxed">
          <p>
            We believe in getting to know you, your industry, and your problem,
            intimately. We’re obsessive about detail and we know investing the
            time to understand you means better outcomes for all.
          </p>

          <p>
            We’re obsessive about detail and we know investing the time to
            understand you means better outcomes for all. We know investing the
            time to understand you means better outcomes for all.
          </p>
        </div>
      </div>
       <div className="about-pill-gradient w-[70vw] mt-30 md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-42 lg:h-68" />
    </section>
  );
}
