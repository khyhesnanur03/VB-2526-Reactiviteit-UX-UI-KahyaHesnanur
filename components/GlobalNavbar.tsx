"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu knop links */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Search box rechts */}
      <div className="fixed top-4 right-6 z-50">
        <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl text-gray-600 text-sm shadow-sm">
          🔍 Zoek artikels...
        </div>
      </div>

      {/* Sidebar menu */}
      <SidebarSlider
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <nav className="flex flex-col space-y-6 text-lg">

          <a href="/" className="hover:underline font-semibold">
            Overzicht
          </a>

          <a href="/flamenco" className="hover:underline">
            Flamenco
          </a>

          <a href="/valerie" className="hover:underline">
            Valerie Expo
          </a>

          <a href="/zwangerschap" className="hover:underline">
            Zwangerschap
          </a>

        </nav>
      </SidebarSlider>
    </>
  )
}