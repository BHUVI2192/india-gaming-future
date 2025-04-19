
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

// Form schema
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  gameName: z.string().min(2, "Game name is required"),
  prizePool: z.string().min(1, "Prize pool is required"),
  registrationLink: z.string().url("Must be a valid URL"),
  startDate: z.string().min(1, "Start date is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function OrganizeTournamentForm({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      gameName: "",
      prizePool: "",
      registrationLink: "",
      startDate: "",
      description: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to organize a tournament");
      navigate("/login");
      return;
    }

    setIsUploading(true);
    try {
      let thumbnailUrl = "/placeholder.svg";
      
      // Upload thumbnail if provided
      if (thumbnail) {
        const fileExt = thumbnail.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `tournaments/${fileName}`;
        
        const { error: uploadError, data } = await supabase.storage
          .from('tournament-thumbnails')
          .upload(filePath, thumbnail);
          
        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('tournament-thumbnails')
          .getPublicUrl(filePath);
          
        thumbnailUrl = publicUrl;
      }
      
      // Store tournament data in the database
      const { error } = await supabase
        .from('tournaments')
        .insert([
          {
            title: values.title,
            game_name: values.gameName,
            prize_pool: values.prizePool,
            registration_link: values.registrationLink,
            start_date: values.startDate,
            description: values.description,
            thumbnail_url: thumbnailUrl,
            organizer_id: user?.id,
          },
        ]);
        
      if (error) throw error;
      
      toast.success("Tournament created successfully!");
      setOpen(false);
      form.reset();
      setThumbnail(null);
    } catch (error: any) {
      toast.error(error.message || "Failed to create tournament");
      console.error("Error creating tournament:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-gaming-card">
        <DialogHeader>
          <DialogTitle>Organize a Tournament</DialogTitle>
          <DialogDescription>
            Fill in the details to create your esports tournament.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tournament Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tournament title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="gameName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Game</FormLabel>
                  <FormControl>
                    <Input placeholder="BGMI, Valorant, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="prizePool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prize Pool</FormLabel>
                  <FormControl>
                    <Input placeholder="₹10,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="registrationLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://forms.google.com/..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Link to your Google Form or registration page
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input type="date" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea 
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={4}
                      placeholder="Provide details about your tournament..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <Input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {thumbnail && (
                <p className="text-sm text-muted-foreground">
                  Selected: {thumbnail.name}
                </p>
              )}
            </div>
            
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="gaming-button"
                disabled={isUploading}
              >
                {isUploading ? "Creating..." : "Create Tournament"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
