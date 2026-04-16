import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <BrandLogo />
          <span className="text-2xl font-bold tracking-tight font-display">SEO Group Buy</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#tools" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Tools</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex text-zinc-400 hover:text-white hover:bg-white/5">Login</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 h-11 font-bold">Get Started</Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-zinc-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 text-zinc-50">
              <div className="flex flex-col gap-6 mt-12">
                <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-display hover:text-blue-400">Features</a>
                <a href="#tools" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-display hover:text-blue-400">Tools</a>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-display hover:text-blue-400">Pricing</a>
                <a href="#faq" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-display hover:text-blue-400">FAQ</a>
                <hr className="border-white/10" />
                <Button variant="ghost" className="justify-start px-0 text-xl font-bold font-display">Login</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-14 text-lg font-bold">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
