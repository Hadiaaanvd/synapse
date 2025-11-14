"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-brand-gradient text-brand-white rounded-t-[3.4em] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="page-gutters py-8 md:py-10 lg:py-14 flex flex-col gap-8 text-xs sm:text-sm container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-8 md:gap-12">
          <motion.div className="flex-1 flex flex-col gap-4" variants={itemVariants}>
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
              This website does not belong to a real company. It is a Planspiel
              Web Engineering project at the Technical University of Chemnitz.
            </p>
          </motion.div>
          <div className="flex flex-1 flex-row gap-16 md:justify-between md:align-end md:max-w-1/3">
            <motion.div variants={itemVariants}>
              <h4 className="text-brand-white text-xs font-semibold uppercase tracking-wide mb-4">
                Company
              </h4>

              <div className="flex flex-col gap-2 text-(--brand-white)/80">
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="#about" className="hover:text-brand-white">
                    About
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="#home" className="hover:text-brand-white">
                    Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="#contact" className="hover:text-brand-white">
                    Contact
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="#team" className="hover:text-brand-white">
                    Team
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-brand-white text-xs font-semibold uppercase tracking-wide mb-4">
                Social
              </h4>

              <div className="flex flex-col gap-2 text-(--brand-white)/80">
                <motion.a
                  href="https://www.facebook.com/synapsetech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Facebook
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/synapsee-tech/"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/synapsetech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://x.com/SynapseTech2025"
                  className="hover:text-brand-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Twitter
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="h-px w-full bg-white/16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] sm:text-[14px] text-white/80"
          variants={itemVariants}
        >
          <p>© Synapse Inc. All Rights Reserved 2025. </p>

          <Dialog>
            <DialogTrigger className="border-b border-foreground text-xs  font-normal">
              Imprint
            </DialogTrigger>
            <DialogContent className="space-y-4">
              <DialogHeader>
                <DialogTitle className="tracking-[0.04em] leading-5">
                  Imprint
                </DialogTitle>
                <DialogDescription className="space-y-4 text-sm">
                  <div className="my-4">
                    <strong className="text-foreground">Administration</strong>
                    <br />
                    Team Synapse
                  </div>

                  <strong className="text-foreground">Address</strong>
                  <div className="mb-4">
                    Str. der Nationen 62
                    <br />
                    09111, Chemnitz, Germany
                  </div>
                  <strong className="text-foreground">Contact</strong>
                  <div className="mb-4">
                    Email:
                    <a
                      href="mailto:synapsetech4@gmail.com"
                      className="text-primary hover:underline"
                    >
                      synapsetech4@gmail.com
                    </a>
                  </div>
                  <strong className="text-foreground">Disclaimer</strong>
                  <div className="mb-4">
                    This website does not belong to a real company. It is Ía
                    Planspiel Web Engineering project at the Technical
                    University of Chemnitz.
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.footer>
  );
}
