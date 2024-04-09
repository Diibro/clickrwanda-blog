import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata:Metadata = {
     title: "Click Rwanda | Blog",
     description: "Know more about click rwanda blog"
}

export default function RootLayout({
     children,
}: Readonly<{children: React.ReactNode}>
){
     return (
          <html lang="en">
               <body>
                    {children}
               </body>
          </html>
     )
}