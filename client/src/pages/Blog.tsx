import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] py-32">
      <div className="container">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-[#5239cc]">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Insights and thoughts on technology, project management, and business intelligence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog posts will be added here */}
          <div className="text-muted-foreground text-center p-12 border border-white/5 rounded-lg">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
