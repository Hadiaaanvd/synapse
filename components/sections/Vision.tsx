export default function Vision() {
  return (
    <section
      id="vision"
      className="relative w-full overflow-hidden section-spacing"
    >
      <div className="lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-16 relative z-1">
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col gap-8">
          <h2>
            WE TAKE THE TIME TO
            GET TO KNOW <span className="text-primary">YOU.</span>
          </h2>

          <div className="text-sm flex flex-col gap-4 text-foreground lg:text-lg leading-relaxed">
            <p>
              We believe in getting to know you, your industry, and your
              problem, intimately. We’re obsessive about detail and we know
              investing the time to understand you means better outcomes for
              all.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col justify-end" />
      </div>
      <div className="flex justify-end">
      <div className="vision-pill-gradient w-[70vw] mt-20 md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-40 lg:h-60" />
      </div>
    </section>
  );
}
