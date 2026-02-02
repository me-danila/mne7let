import { Hero } from "@/app/components/Hero";
import { EventDetails } from "@/app/components/EventDetails";
import { PhotoGallery } from "@/app/components/PhotoGallery";
import { Wishlist } from "@/app/components/Wishlist";
import { Location } from "@/app/components/Location";
import { FloatingElements } from "@/app/components/FloatingElements";
import { StickyHeader } from "@/app/components/StickyHeader";
import { ConfettiSystem } from "@/app/components/ConfettiSystem";
import { Countdown } from "@/app/components/Countdown";
import { MouseFollower } from "@/app/components/MouseFollower";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden relative">
      <FloatingElements />
      <StickyHeader />
      <ConfettiSystem />
      <MouseFollower />
      <Hero />
      <Countdown />
      <EventDetails />
      {/*<PhotoGallery />*/}
      <Wishlist />
      <Location />
    </div>
  );
}