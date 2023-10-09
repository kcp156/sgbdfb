import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import UserNav from "./UserNav"

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className=" w-full flex-1  md:w-auto md:flex-none">
            <div className="hidden md:flex"><CommandMenu /></div>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <UserNav/>
          </nav>
        </div>
      </div>
    </header>

  )
}
