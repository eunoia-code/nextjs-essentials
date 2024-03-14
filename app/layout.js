import "./globals.css";

export const metadata = {
  title: "NextJS Essentials",
  description: "Rizaldy Setiawan Hasanuddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
