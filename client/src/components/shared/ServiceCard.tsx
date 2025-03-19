
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  buttonText: string;
}

export default function ServiceCard({ number, title, description, href, buttonText }: ServiceCardProps) {
  return (
    <div className="p-8 bg-[#0E0E0E] border border-white/5 h-full flex flex-col">
      <div className="mb-6 text-sm text-[#666666]">{number}</div>
      <h3 className="text-xl font-medium mb-4 tracking-wide">{title}</h3>
      <p className="text-[#666666] text-sm mb-8 flex-grow">{description}</p>
      <Link href={href}>
        <a className="inline-flex items-center gap-2 text-sm hover:text-[#5239cc] transition-colors">
          <span>{buttonText}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </Link>
    </div>
  );
}
