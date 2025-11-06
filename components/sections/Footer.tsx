import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-brand-white rounded-t-[3.4em] overflow-hidden">
      <div className="page-gutters py-8 md:py-10 lg:py-14 flex flex-col gap-8 text-xs sm:text-sm container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-8 md:gap-12">
          <div className="flex-1  flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Synapse Logo"
                width={200}
                height={40}
                className="shrink-0 -ml-2 w-[160] sm:w-[200]"
              />
            </div>

            <p className="text-white leading-relaxed max-w-120">
              Stay in the loop and sign up for the Synapse newsletter. Stay in the loop and sign up for the Synapse newsletter.
            </p>
          </div>
          <div className="flex flex-1 flex-row  gap-16 md:justify-between md:align-end md:max-w-1/3">
            <div>
              <h4 className="text-brand-white text-xs font-semibold uppercase tracking-wide mb-4">
                Company
              </h4>

              <div className="flex flex-col gap-2 text-(--brand-white)/80">
                <Link href="#about" className="hover:text-brand-white">
                  About
                </Link>
                <Link href="#home" className="hover:text-brand-white">
                  Home
                </Link>
                <Link href="#contact" className="hover:text-brand-white">
                  Contact
                </Link>
                <Link href="#team" className="hover:text-brand-white">
                  Team
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-brand-white text-xs font-semibold uppercase tracking-wide mb-4">
                Social
              </h4>

              <div className="flex flex-col gap-2 text-(--brand-white)/80">
                <a
                  href="https://www.facebook.com/synapsetech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/synapsetech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/synapsetech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/SynapseTech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-white/16" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] sm:text-[14px] text-white/80">
          <p>© Synapse Inc. All Rights Reserved 2025. This website does not belong to a real company.
            It is a Planspiel Web Engineering project at the Technical University of Chemnitz.</p>

          {/* <Link href="#" className="hover:text-white text-white/80">
            Terms &amp; Conditions
          </Link> */}

          <Dialog>
            <DialogTrigger>Imprint</DialogTrigger>
            <DialogContent className="space-y-4">
              <DialogHeader>
                <DialogTitle>Imprint</DialogTitle>
                <DialogDescription className="space-y-4 text-sm">
                  <div className="mb-4">
                    <strong>Administration</strong><br />
                    Team Synapse
                  </div>

                  <div className="mb-4">
                    Str. der Nationen 62<br />
                    09111, Chemnitz, Germany
                  </div>

                  <div className="mb-4">
                    Email: <a href="mailto:synapsetech4@gmail.com" className="text-blue-600 hover:underline">
                      synapsetech4@gmail.com
                    </a>
                  </div>

                  <div className="mb-4">
                    <strong>Responsible person</strong><br />
                    Nandor Krizbai
                  </div>

                  <div className="mb-4">
                    <strong>Disclaimer</strong><br />
                    This website does not belong to a real company. It is a Planspiel Web Engineering project at the Technical University of Chemnitz.
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </footer>
  );
}
