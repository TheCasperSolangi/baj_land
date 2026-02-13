import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bajgoLogo from "@/assets/bajgo-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={bajgoLogo} alt="BajGo" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-extrabold text-primary">BajGo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-semibold">Log in</Button>
          <Button size="sm" className="rounded-full font-semibold px-5">Sign up</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium py-2" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="block text-sm font-medium py-2" onClick={() => setOpen(false)}>About</Link>
          <Link to="/careers" className="block text-sm font-medium py-2" onClick={() => setOpen(false)}>Careers</Link>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" className="font-semibold">Log in</Button>
            <Button size="sm" className="rounded-full font-semibold px-5">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
