import { languages } from "../i18n/settings";
import "../styles/globals.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Curriculum Vitae - Diego Padilla",
  description: "Mi Curriculum Vitae",
  icon: "/favicon.ico",
};

export default function Root({
  children,
  params,
}: {
  params: { lng: string };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.lng}>
      <body>{children}</body>
    </html>
  );
}
