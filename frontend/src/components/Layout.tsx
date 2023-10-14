import { Navbar, Footer } from "."
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }