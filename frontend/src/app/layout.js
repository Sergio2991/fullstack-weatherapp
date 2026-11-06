import "./globals.css";

export const metadata = {
  title: "Create Next Weather App",
  description: "Check weather all around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
