
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocation } from "react-router-dom";

export default function AboutDialog() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Check if the URL has the about hash
  useEffect(() => {
    if (location.hash === "#about") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location]);

  // Update URL when dialog state changes
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      window.history.pushState({}, "", "#about");
    } else {
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl bg-gaming-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">About Bharat Esports</DialogTitle>
          <DialogDescription>
            <div className="mt-4 space-y-4 text-base text-foreground">
              <p>
                Bharat Esports is one of India's leading esports organizations, dedicated to nurturing raw talent and transforming passionate gamers into true champions. Built on the belief that every underdog deserves a chance to shine, Bharat Esports provides a platform where dreams meet dedication, and potential turns into success.
              </p>
              <p>
                With a strong vision for the future of gaming in India, we are committed to creating opportunities, building communities, and setting new benchmarks in the world of esports. At Bharat Esports, we don't just play the game — we redefine it.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>
                  To discover and nurture esports talent across India, providing them with the resources, training, and opportunities needed to compete at the highest levels globally.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>
                  To establish India as a global powerhouse in esports by creating a sustainable ecosystem that supports players, tournament organizers, content creators, and fans.
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
