import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">EC</span>
            </div>
            <span className="text-xl font-bold text-gradient hidden sm:block">EcommerceApp</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products, brands and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 h-10 w-full bg-muted/50 border-0 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {theme === 'light' && <Sun className="h-4 w-4" />}
                {theme === 'dark' && <Moon className="h-4 w-4" />}
                {theme === 'system' && <Monitor className="h-4 w-4" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="h-4 w-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Monitor className="h-4 w-4 mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <User className="h-4 w-4" />
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="h-9 w-9 relative">
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Login Button */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Login
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 h-12 text-sm">
            <Link to="/mission" className="text-muted-foreground hover:text-primary transition-colors">Mission</Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Electronics</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fashion</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home & Kitchen</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sports</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Books</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beauty</a>
            <div className="flex items-center space-x-2 ml-auto">
              <span className="deal-badge">🔥 Deals</span>
              <span className="text-success font-medium">Free Delivery</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}