import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: "/home", label: "Home" },
        { path: "/explore", label: "Inspiration" },
        { path: "/templates", label: "Templates" },
        { path: "/learn", label: "Learn" },
        { path: "/jobs", label: "Hire Designers" },
    ];

    const getLinkStyles = ({ isActive }) => `
        px-5 py-2 rounded-full text-[13px] font-bold transition-all border
        ${isActive
            ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
            : 'bg-white/5 text-gray-400 border-white/5 hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600'
        }
    `;

    return (
        <nav className={`flex justify-between items-center px-6 md:px-8 sticky top-0 z-[1000] font-sans transition-all duration-300 border-b ${scrolled
                ? 'h-16 bg-black/80 backdrop-blur-2xl border-white/10'
                : 'h-20 bg-black/40 backdrop-blur-md border-transparent'
            }`}>
            <div className="flex items-center gap-4 md:gap-8">
                {/* Hamburger Menu - Mobile Only */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                <Link to="/home" className="text-xl md:text-2xl font-black text-white tracking-tighter font-serif cursor-pointer hover:text-blue-400 transition-colors">Tadika-Templates Builder</Link>

                <ul className="hidden md:flex gap-3">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <NavLink to={link.path} className={getLinkStyles}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden lg:flex items-center bg-white/5 px-4 py-2.5 rounded-full hover:bg-white/10 transition-all w-48 focus-within:w-64 focus-within:bg-white/10 border border-white/5">
                    <svg className="w-4 h-4 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Search..." className="bg-transparent border-none text-white outline-none text-sm w-full placeholder-gray-500 ml-3" />
                </div>
                <Link to="/login" className="hidden sm:block text-gray-400 text-sm font-semibold hover:text-white transition-colors">Sign In</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap">Sign Up</Link>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 md:hidden animate-fade-in-up slide-delay-1 p-6 z-50">
                    <ul className="flex flex-col gap-6 mb-8">
                        <li><Link onClick={() => setIsMenuOpen(false)} to="/explore" className="text-lg font-bold text-white hover:text-blue-400">Inspiration</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} to="/templates" className="text-lg font-bold text-white hover:text-blue-400">Templates</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} to="/learn" className="text-lg font-bold text-white hover:text-blue-400">Learn</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} to="/jobs" className="text-lg font-bold text-white hover:text-blue-400">Hire Designers</Link></li>
                    </ul>
                    <div className="flex flex-col gap-4">
                        <Link onClick={() => setIsMenuOpen(false)} to="/login" className="w-full text-center py-3 border border-white/10 rounded-xl font-bold text-gray-300">Sign In</Link>
                        <Link onClick={() => setIsMenuOpen(false)} to="/signup" className="w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold">Get Started</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
