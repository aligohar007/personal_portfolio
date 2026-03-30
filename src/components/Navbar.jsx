import React, { useEffect, useState } from 'react';
import { ChevronDown, Search, X, Menu, Sun, Moon } from 'lucide-react';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const navItems = [
    { label: 'Home', href: '#' },
    {
      label: 'Services',
      href: '#',
      submenu: [
        { label: 'Web Development', href: '#' },
        { label: 'UI/UX Design', href: '#' },
        { label: 'Consulting', href: '#' },
      ],
    },
    {
      label: 'Portfolio',
      href: '#',
      submenu: [
        { label: 'Projects', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Testimonials', href: '#' },
      ],
    },
    {
      label: 'Resources',
      href: '#',
      submenu: [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Tools', href: '#' },
      ],
    },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  // Theme handling: use localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        setTheme(stored);
        document.documentElement.classList.toggle('dark', stored === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // ignore
    }
  };

  return (
    <nav className="top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
  <a
    href="#"
    className="text-2xl font-bold transition-opacity duration-200 hover:opacity-90"
  >
    <span className="
      bg-clip-text text-transparent 
      bg-gradient-to-r from-primary-400 to-primary-200
       dark:text-white
      text-black
    ">  
      My Portfolio
    </span>
  </a>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-1 group"
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transform transition-all duration-200 dropdown-origin-top ${
                      openDropdown === index
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible'
                    } group-hover:opacity-100 group-hover:scale-100 group-hover:visible md:group-hover:block`}
                  >
                    <div className="py-1">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-150"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar and Icons */}
          <div className="flex items-center gap-4">
            {/* Search Box */}
            <div className="relative hidden sm:flex items-center">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-gray-400 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={handleSearchClose}
                    className="ml-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors duration-200 p-2"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hidden sm:inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-150"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors duration-200 p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 transition-all duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.submenu && openDropdown === index && (
                    <div className="bg-gray-50 dark:bg-slate-700 rounded-md mt-1 overflow-hidden transition-all duration-200">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-150"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
