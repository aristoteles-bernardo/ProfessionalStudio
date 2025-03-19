import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="bg-background border-white/5 hover:border-white/10 transition-colors">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}