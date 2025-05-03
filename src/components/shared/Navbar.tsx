"use client";
import {
  Navbar as NavigationBar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    {
      name: "About me",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Featured",
      link: "/#projects",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <NavigationBar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link href={"/"}>
            <NavbarLogo />
          </Link>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {/* <Link
              target="_blank"
              href={
                "https://drive.usercontent.google.com/download?id=1fKMnbTVHu4KQs5cDhlRiP3LFbbctqOH8&export=download&authuser=0"
              }
            > */}
            <NavbarButton
              href="https://drive.usercontent.google.com/download?id=1fKMnbTVHu4KQs5cDhlRiP3LFbbctqOH8&export=download&authuser=0"
              className="flex justify-center items-center gap-1"
              variant="primary"
            >
              Resume <DownloadIcon size={18} />
            </NavbarButton>
            {/* </Link> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavigationBar>
    </div>
  );
}
