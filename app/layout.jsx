import Footer from "@components/Footer";
import Nav from "@components/nav";
import Sidebar from "@components/Sidebar";
import "@styles/globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-around h-screen gap-2">
        <h1 className="text-lg bg-pink-100 text-center">
          <Nav />
        </h1>
        <div className="flex gap-4 h-full">
          <div className="bg-yellow-100 wrapp h-full flex items-center justify-center border-r-2 border-blue-400 p-2">
            <span className=" text-3xl">
              <Sidebar />
            </span>
          </div>
          {children}
        </div>
        <h1 className="text-center bg-green-100">
          <Footer />
        </h1>
      </body>
    </html>
  )
}
