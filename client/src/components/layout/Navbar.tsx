import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-narrow">
        <nav className="my-4">
          <div className="rounded-lg bg-black/60 backdrop-blur-lg border border-white/10">
            <div className="flex h-16 items-center justify-between px-6">
              <Link href="/">
                <a className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">
                  Aristoteles Bernardo
                </a>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:gap-8 items-center">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a 
                      className={`text-sm font-medium transition-colors hover:text-primary
                        ${location === item.href ? 'text-foreground' : 'text-muted-foreground'}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Link href="/contact">
                  <Button 
                    className="bg-white/90 text-black hover:bg-white rounded-full px-6"
                    variant="ghost"
                  >
                    Let's Talk
                  </Button>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/90 border-white/10">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <a
                          className={`block text-base font-medium transition-colors hover:text-primary
                            ${location === item.href ? 'text-foreground' : 'text-muted-foreground'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    ))}
                    <Link href="/contact">
                      <Button 
                        className="w-full bg-white/90 text-black hover:bg-white rounded-full mt-4"
                        variant="ghost"
                        onClick={() => setIsOpen(false)}
                      >
                        Let's Talk
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}