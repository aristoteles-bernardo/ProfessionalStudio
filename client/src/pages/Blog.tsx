import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts = [] } = useQuery<BlogPost[]>({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/posts").then(r => r.json())
  });

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
              Insights and thoughts on web design, development, and digital trends.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: post.id * 0.1 }}
            >
              <Card className="group bg-black/30 border-white/5 hover:border-[#5239cc]/30 transition-all duration-300">
                <CardContent className="p-4 space-y-4">
                  <div className="aspect-[16/9] rounded overflow-hidden bg-black/50">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[#5239cc] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {post.description}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full hover:bg-[#5239cc] hover:text-white transition-colors"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}