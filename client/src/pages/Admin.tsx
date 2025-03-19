
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Pencil, Trash } from "lucide-react";
import type { BlogPost, InsertBlogPost } from "@shared/schema";

export default function Admin() {
  const queryClient = useQueryClient();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<InsertBlogPost>({
    title: "",
    description: "",
    content: "",
    image: ""
  });

  const { data: posts = [] } = useQuery<BlogPost[]>({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/posts").then(r => r.json())
  });

  const createMutation = useMutation({
    mutationFn: (post: InsertBlogPost) => 
      fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
      }).then(r => r.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      resetForm();
    }
  });

  const updateMutation = useMutation({
    mutationFn: (post: BlogPost) => 
      fetch(`/api/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
      }).then(r => r.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      resetForm();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      fetch(`/api/posts/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });

  const resetForm = () => {
    setFormData({ title: "", description: "", content: "", image: "" });
    setEditingPost(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updateMutation.mutate({ ...editingPost, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      description: post.description,
      content: post.content,
      image: post.image
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] py-32">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Blog Admin</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <Input
            placeholder="Title"
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
          />
          <Input
            placeholder="Image URL"
            value={formData.image}
            onChange={e => setFormData(prev => ({ ...prev, image: e.target.value }))}
          />
          <Textarea
            placeholder="Description"
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
          <Textarea
            placeholder="Content"
            value={formData.content}
            onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
            className="min-h-[200px]"
          />
          <div className="flex gap-2">
            <Button type="submit">
              {editingPost ? <Pencil className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
              {editingPost ? "Update Post" : "Create Post"}
            </Button>
            {editingPost && (
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </form>

        <div className="space-y-4">
          {posts.map(post => (
            <Card key={post.id} className="bg-black/30 border-white/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => deleteMutation.mutate(post.id)}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
