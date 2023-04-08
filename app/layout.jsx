import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Users App",
  description: "See the details of users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/lux/bootstrap.min.css"
        />
      </head>
      <body>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <Navbar />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
