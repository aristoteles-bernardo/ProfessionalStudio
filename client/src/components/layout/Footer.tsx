import { Link } from "wouter";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:aridepaulag@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                aridepaulag@gmail.com
              </a>
              <a href="tel:+244931650542" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                +244 931 650 542
              </a>
              <a href="https://linkedin.com/in/aristotelesbernardo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-muted-foreground">Luanda, Angola</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/">
                <a className="block text-muted-foreground hover:text-primary">Home</a>
              </Link>
              <Link href="/contact">
                <a className="block text-muted-foreground hover:text-primary">Contact</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aristoteles Bernardo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
