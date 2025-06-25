import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Mouse, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Mouse className="h-6 w-6" />
            <span className="font-bold">MouseTrack</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={navLinkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/history" className={navLinkClasses}>
            History
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            <a href="https://github.com/your-repo/mousetrack" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
              </Button>
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;