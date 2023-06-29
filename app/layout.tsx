"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import React from "react"
import { ClipLoader } from "react-spinners"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const override = {
    display: "block",
    margin: "auto",
  }
   const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  return (
    <html lang="en">
      <style>@import url('/font.css');</style>
      <head />
      <body className="dark:bg-stone-900">
        {!loading ? (
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        ) : (
          <div className="loader">
            <ClipLoader color="#0d9488" size={150} cssOverride={override} loading={loading} aria-label="Loading Spinner" data-testid="loader" />
            <p>Loading...</p>
          </div>
        )}
      </body>
    </html>
  )
}
