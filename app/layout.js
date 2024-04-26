import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptHive",
  description: "A platform to find and share prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          <Nav/>
          {children}
        </main>

      </body>
    </html>
  );
}
