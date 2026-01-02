import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioCard from '../components/PortfolioCard';
import MarqueeCards from '../components/MarqueeCards';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Home = () => {
    // Corrected to use relative path for image or a public URL. 
    // Since we don't have real images, using placeholders.
    const dummyProjects = [
        {
            id: 1,
            title: "Mobile Banking App",
            author: "Jane Doe",
            image: "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd",
            likes: 230,
            views: "5.2k",
        },
        {
            id: 2,
            title: "E-commerce Dashboard",
            author: "John Smith",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            likes: 185,
            views: "3.1k",
        },
        {
            id: 3,
            title: "Travel Landing Page",
            author: "Alice Johnson",
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7",
            likes: 342,
            views: "8.5k",
        },
        {
            id: 4,
            title: "Fitness Tracker UI",
            author: "Mike Brown",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            likes: 120,
            views: "2.1k",
        },
        {
            id: 5,
            title: "Smart Home App",
            author: "Sarah Lee",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
            likes: 450,
            views: "12k",
        },
        {
            id: 6,
            title: "SaaS Landing Page",
            author: "David Wilson",
            image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
            likes: 210,
            views: "4.8k",
        },
        {
            id: 7,
            title: "Crypto Wallet",
            author: "Emily Davis",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
            likes: 310,
            views: "6.9k",
        },
        {
            id: 8,
            title: "Food Delivery App",
            author: "Chris Martin",
            image: "https://images.unsplash.com/photo-1521305916504-4a1121188589",
            likes: 155,
            views: "2.8k",
        },
        {
            id: 9,
            title: "Social Media Dashboard",
            author: "Laura White",
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
            likes: 390,
            views: "9.1k",
        },
        {
            id: 10,
            title: "NFT Marketplace",
            author: "Daniel Rock",
            image: "https://images.unsplash.com/photo-1644143379190-08f8dbe1a8d5",
            likes: 520,
            views: "15k",
        },
        {
            id: 11,
            title: "Learning Platform",
            author: "Sophia Green",
            image: "https://images.unsplash.com/photo-1584697964192-11b8471c53c6",
            likes: 275,
            views: "4.5k",
        },
        {
            id: 12,
            title: "Real Estate App",
            author: "Ryan Black",
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
            likes: 198,
            views: "3.3k",
        },
        {
            id: 13,
            title: "Task Management",
            author: "Olivia Grey",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
            likes: 410,
            views: "11k",
        },
        {
            id: 14,
            title: "Music Streaming",
            author: "Lucas Hill",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
            likes: 330,
            views: "7.2k",
        },
        {
            id: 15,
            title: "AI Chat Interface",
            author: "Emma Watson",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            likes: 600,
            views: "18k",
        },
    ];


    const categories = ["All", "Animation", "Branding", "Illustration", "Mobile", "Print", "Product Design", "Typography", "Web Design"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [selectedCategory]); // Re-run when category changes to observe new elements

    return (
        <div className="font-sans bg-[#050505] min-h-screen text-white">
            <Navbar />

            {/* Dashboard Sub-Header / Toolbar */}
            <div className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-16 md:top-20 z-40 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-all border ${selectedCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-blue-600/20 hover:text-blue-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-[13px] font-bold hover:bg-white/10 transition-all text-gray-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                            Filters
                        </button>
                        <div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <span className="text-[13px] font-bold text-gray-400 group-hover:text-white transition-colors">Sort by</span>
                            <select className="bg-transparent border-none text-[13px] font-bold outline-none cursor-pointer text-white appearance-none">
                                <option className="bg-[#0f172a]" value="popular">Popular</option>
                                <option className="bg-[#0f172a]" value="new">Newest</option>
                                <option className="bg-[#0f172a]" value="trending">Trending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <main className="px-4 md:px-6 py-12 max-w-[1400px] mx-auto w-full text-white">
                {/* Trending Spotlight Section */}
                <div className="mb-12 md:mb-16 reveal">
                    <div className="flex items-center gap-2 mb-6 px-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">Trending Spotlight</h2>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl bg-blue-600/5 border border-white/5 min-h-[380px] md:aspect-[25/9] flex items-center p-6 md:p-16 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                        {/* Background subtle decoration */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                        <div className="max-w-[600px] relative z-10 w-full">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">Featured Template</span>
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight tracking-tighter text-white">Ultimate CRM & Dashboard Kit v2.0</h3>
                            <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed font-medium line-clamp-3 md:line-clamp-none">Elevate your SaaS project with our most comprehensive UI kit yet. 50+ pages, dark mode, and fully responsive.</p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <button className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all w-full sm:w-auto">Get Template</button>
                                <button className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-bold text-sm hover:bg-white/10 transition-all w-full sm:w-auto">Preview Details</button>
                            </div>
                        </div>

                        {/* Floating image decoration - Only for Large/Laptop screens */}
                        <div className="hidden xl:block absolute right-20 top-1/2 -translate-y-1/2 w-[450px] rotate-[-5deg] group-hover:rotate-[0deg] transition-all duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Spotlight" className="rounded-2xl border border-white/10" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                    {dummyProjects.map((project, index) => (
                        <div key={project.id} className="reveal" style={{ transitionDelay: `${(index % 5) * 0.1}s` }}>
                            <PortfolioCard
                                title={project.title}
                                author={{ name: project.author }}
                                image={project.image}
                                likes={project.likes}
                                views={project.views}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center pb-12">
                    <button className="px-12 py-3 bg-white/5 text-white border border-white/10 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
                        Browse more inspiration
                    </button>
                </div>
            </main>

            <div className="mb-20 w-full">
                <MarqueeCards />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
