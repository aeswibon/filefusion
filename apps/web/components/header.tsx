"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@c/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@c/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@c/ui/sheet";

interface NavigationSection {
  name: string;
  href: string;
}

interface HeaderProps {
  navigation: {
    features: NavigationSection[];
    resources: NavigationSection[];
    company: NavigationSection[];
  };
}

export default function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderDropdownMenu = (title: string, items: NavigationSection[]) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white/70 hover:text-white">
          {title}
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 border-none text-white/80">
        {items.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link
              href={item.href}
              className="hover:bg-white/10 focus:bg-white/10"
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderMobileMenu = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="bg-black/95 text-white">
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {Object.entries(navigation).map(([sectionName, items]) => (
                <div key={sectionName}>
                  <p className="block py-2 text-sm font-semibold text-white/70 capitalize">
                    {sectionName}
                  </p>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-sm hover:bg-white/10 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="py-6 space-y-2">
              <Link
                href="/login"
                className="block py-2 text-sm font-semibold hover:bg-white/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-white text-black hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-white font-bold text-xl"
            >
              File Fusion
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {renderDropdownMenu("Features", navigation.features)}
            {renderDropdownMenu("Resources", navigation.resources)}
            {renderDropdownMenu("Company", navigation.company)}
            <Link
              href="/pricing"
              className="text-sm font-semibold leading-6 text-white/70 hover:text-white"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-white/70 hover:text-white"
            >
              Sign in
            </Link>
            <Link href="/get-started">
              <Button className="bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>

          {renderMobileMenu()}
        </div>
      </nav>
    </header>
  );
}
