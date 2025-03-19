import ContactForm from "@/components/shared/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
