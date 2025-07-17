import { Link, useLocation } from 'react-router-dom'
import { Search, Bell, MessageCircle, User, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { blink } from '../../blink/client'

interface HeaderProps {
  user: any
}

export default function Header({ user }: HeaderProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FreelanceHub</span>
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link
                to="/find-work"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/find-work')
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Find Work
              </Link>
              <Link
                to="/find-talent"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/find-talent')
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Find Talent
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for jobs or freelancers..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/messages">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>
                      {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/proposals">
                    Proposals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => blink.auth.logout()}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}