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
      <nav className="mx-4 my-4">
        <div className="rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <Link href="/">
              <a className="text-xl font-semibold tracking-tight">
                Aristoteles Bernardo
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-6 items-center">
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
                <Button variant="outline" className="rounded-full bg-muted">
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
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
                      variant="outline" 
                      className="w-full rounded-full bg-muted"
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
    </header>
  );
}