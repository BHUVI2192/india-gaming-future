
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function CreateNewsForm() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("gaming");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("news").insert([
        {
          title,
          description,
          imageUrl,
          source,
          category,
          isVerified: true,
          date: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast.success("News article created successfully!");
      setTitle("");
      setDescription("");
      setImageUrl("");
      setSource("");
    } catch (error) {
      console.error("Error creating news:", error);
      toast.error("Failed to create news article");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gaming-card p-6 rounded-lg border border-muted">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter news title"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Enter news description"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
          Image URL
        </label>
        <Input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium mb-1">
          Source
        </label>
        <Input
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
          placeholder="Enter news source"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          required
        >
          <option value="gaming">Gaming</option>
          <option value="esports">Esports</option>
          <option value="tournaments">Tournaments</option>
        </select>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create News Article"}
      </Button>
    </form>
  );
}
