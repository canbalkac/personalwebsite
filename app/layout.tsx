import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Socials from "./_components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Can Balkaç - Home",
  description: "can, balkaç, balkac, personal website, full stack web developer, developer, software engineer, frontend developer, backend developer,portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`` + inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="bg-light-mode-bg text-white dark:bg-[#282828]">
              <div className="lg:flex min-lg:flex-col">
                <Navbar />
                <Socials />
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
