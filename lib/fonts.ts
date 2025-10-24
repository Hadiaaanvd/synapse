import { Anton } from "next/font/google"
import { Poppins } from "next/font/google"

export const headingFont = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const bodyFont = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})
