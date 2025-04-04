import "./globals.css";

export const metadata = {
  title: "N/A",
  description: "N/A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
