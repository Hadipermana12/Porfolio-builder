import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeHash, setActiveHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('scroll', handleScroll);

        // Also check on scroll to update active hash based on section visibility
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) setActiveHash('#' + id);
                }
            });
        }, { threshold: 0.5 });

        ['metodologi', 'product', 'team'].forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { path: "/home", label: "Home", hash: "" },
        { path: "/home", label: "metodologi", hash: "#metodologi" },
        { path: "/home", label: "Toolkit", hash: "#product" },
        { path: "/templates", label: "Templates", hash: "" },
        { path: "/home", label: "Tim", hash: "#team" },
    ];

    const getLinkStyles = (path, hash) => {
        const isCurrentPath = window.location.pathname === path || (window.location.pathname === '/' && path === '/home');
        const isCurrentHash = activeHash === hash;
        const isActive = isCurrentPath && isCurrentHash;

        return `
            px-5 py-2 rounded-full text-[13px] font-bold transition-all border
            ${isActive
                ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                : 'bg-white/5 text-gray-400 border-white/5 hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600'
            }
        `;
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

                <Link to="/home" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors">20</div>
                    <span className="text-xl md:text-2xl font-black text-white tracking-tighter cursor-pointer group-hover:text-blue-400 transition-colors">
                        AI Portfolio <span className="text-blue-500">Builder</span>
                    </span>
                </Link>

                <ul className="hidden md:flex gap-3">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link
                                to={link.path + link.hash}
                                className={getLinkStyles(link.path, link.hash)}
                                onClick={() => {
                                    setActiveHash(link.hash);
                                    if (window.location.pathname === link.path && link.hash) {
                                        scrollToSection(link.hash);
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden lg:flex items-center bg-white/5 px-4 py-2.5 rounded-full hover:bg-white/10 transition-all w-48 focus-within:w-64 focus-within:bg-white/10 border border-white/5">
                    <svg className="w-4 h-4 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Search..." className="bg-transparent border-none text-white outline-none text-sm w-full placeholder-gray-500 ml-3" />
                </div>
                <Link to="/create-portfolio" className="bg-blue-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap">Create</Link>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 md:hidden animate-fade-in-up slide-delay-1 p-6 z-50">
                    <ul className="flex flex-col gap-6 mb-8">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <Link
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveHash(link.hash);
                                        if (window.location.pathname === link.path && link.hash) {
                                            scrollToSection(link.hash);
                                        }
                                    }}
                                    to={link.path + link.hash}
                                    className={`text-lg font-bold transition-colors ${activeHash === link.hash && (window.location.pathname === link.path || (window.location.pathname === '/' && link.path === '/home'))
                                        ? 'text-blue-500'
                                        : 'text-white hover:text-blue-400'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4">
                        <Link onClick={() => setIsMenuOpen(false)} to="/create-portfolio" className="w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold">Create Portfolio</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
