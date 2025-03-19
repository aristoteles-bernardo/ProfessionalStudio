import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  buttonText: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, buttonText }: ServiceCardProps) {
  return (
    <Card className="bg-[#0E0E0E] border-white/5 hover:border-[#5239cc]/30 transition-colors group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#5239cc]/10 transition-colors">
          <Icon className="h-6 w-6 text-white group-hover:text-[#5239cc]" />
        </div>
        <h3 className="text-xl font-semibold group-hover:text-[#5239cc] transition-colors">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <Link href={href}>
          <Button 
            variant="ghost" 
            className="gap-2 hover:bg-[#5239cc] hover:text-white transition-colors"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}