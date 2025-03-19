import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "How to Build a Stunning Website with Framer",
    description: "A step-by-step guide on creating beautiful websites with Framer Motion",
    image: "/blog/post1.jpg"
  },
  {
    title: "10 website elements for maximum user engagement",
    description: "Essential elements that keep visitors coming back",
    image: "/blog/post2.jpg"
  },
  {
    title: "The importance of content in driving website traffic",
    description: "Why content strategy matters for your online success",
    image: "/blog/post3.jpg"
  },
  {
    title: "10 common web development mistakes to avoid",
    description: "Common pitfalls and how to avoid them in your next project",
    image: "/blog/post4.jpg"
  },
  {
    title: "Why responsive web design is critical for your business",
    description: "The impact of mobile-first design on user experience",
    image: "/blog/post5.jpg"
  },
  {
    title: "The art of SEO writing: How to write content that ranks on Google",
    description: "Optimize your content with expert tips on writing SEO-friendly content",
    image: "/blog/post6.jpg"
  }
];

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
              Insights and thoughts on web design, development, and digital trends.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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