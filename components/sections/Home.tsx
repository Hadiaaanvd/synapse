import Image from "next/image";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <section id="home" className="relative z-0 hero-bg w-full">
      <div className="lg:container mx-auto md:pt-26 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12">
        <div className="w-full md:w-1/2 max-w-[640px] flex flex-col gap-8 order-1 md:order-0">
          <h1 className="text-center md:text-left">
            Build Better <span className="block text-primary">Together</span>
          </h1>

          <div className="flex flex-row items-start justify-center md:justify-start gap-2 md:gap-4 text-center md:text-left">
            <Image
              src="/icons/bullet.svg"
              alt="bullet"
              width={24}
              height={24}
              className="mt-0.5 shrink-0 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            />
            <p className="text-foreground font-body text-sm sm:text-base md:text-lg leading-relaxed md:leading-snug max-w-[26ch]">
              Tools that bring structure, speed, and focus to your work
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Button variant="secondary">
              <span>Explore Now</span>
              <Image
                src="/icons/arrow.svg"
                alt="arrow"
                width={24}
                height={24}
                className="-mr-3"
              />
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
          <Image
            src="/banner.png"
            alt="Banner"
            width={650}
            height={650}
            priority
            className="h-auto max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[625px]"
          />
        </div>
      </div>
    </section>
  );
}
