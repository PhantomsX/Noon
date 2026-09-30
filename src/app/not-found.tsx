import Link from "next/link";
import "./globals.css";

// Root-level fallback for unmatched top-level paths. There is no shared root
// layout (each locale route group owns its own), so this file renders its own
// document shell.
const RootNotFound = () => (
  <html lang="en" dir="ltr" data-theme="light">
    <body
      className="flex flex-col min-h-screen items-center justify-center text-white ltr:font-neue-montreal"
      style={{
        background:
          "linear-gradient(189.91deg, #000000 77.69%, #231708 89.53%, #BE7B2D 142.18%)",
      }}
    >
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-bg py-3 tracking-widest ltr:font-elegance text-5xl md:text-7xl font-bold mb-4">
          404
        </h1>
        <p className="text-white ltr:font-elegance md:text-2xl mb-8">
          Page not found
        </p>
        <Link href="/" className="text-bg text-lg hover:underline">
          Back to home
        </Link>
      </div>
    </body>
  </html>
);

export default RootNotFound;
