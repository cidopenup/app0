import Link from "next/link";
import { MessageSquare, Image, Binary, CopyrightIcon} from 'lucide-react';
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
            <Link
              href="https://github.com/cidopenup/app0" // Replace with your GitHub repo URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl font-bold gap-2 hover:text-primary transition-colors"
            >
              <Binary className="w-5 h-5" />
              app0
            </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Chat
            </Link>
            <Link 
              href="/generate" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Image className="w-4 h-4" />
              Generate Image
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
