import { ReactNode } from "react";
import "./globals.css";
interface Props {
  children?: ReactNode;
}

export const metadata = {
  title: "web app using next-auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
