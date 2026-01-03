import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';
import { useState, useEffect } from 'react';

const Templates = () => {
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
    }, []);

    // DATA UPDATED: Menggunakan URL Gambar yang merupakan Screenshot Landing Page asli
    const templateProjects = [
        { 
            id: 1, 
            title: "Modern Developer Portfolio", 
            author: "Ahmad Zaki", 
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop", 
            likes: 1200, views: '24k', 
            category: "Modern" 
        },
        { 
            id: 2, 
            title: "Creative Dark Landing Page", 
            author: "Budi Santoso", 
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop", 
            likes: 850, views: '12k', 
            category: "Creative" 
        },
        { 
            id: 3, 
            title: "Bento Layout UI Design", 
            author: "Citra Kirana", 
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop", 
            likes: 2100, views: '45k', 
            category: "Bento" 
        },
        { 
            id: 4, 
            title: "SaaS Portfolio Interface", 
            author: "Dedi Wijaya", 
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", 
            likes: 670, views: '8.2k', 
            category: "Technical" 
        },
        { 
            id: 5, 
            title: "Corporate Professional Web", 
            author: "Eka Putri", 
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", 
            likes: 430, views: '5.4k', 
            category: "Corporate" 
        },
        { 
            id: 6, 
            title: "Clean White Personal Page", 
            author: "Fahmi Idris", 
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1000&auto=format&fit=crop", 
            likes: 920, views: '15k', 
            category: "Modern" 
        },
        { 
            id: 7, 
            title: "Tech Dashboard Portfolio", 
            author: "Gina Laras", 
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop", 
            likes: 310, views: '4.1k', 
            category: "Technical" 
        },
        { 
            id: 8, 
            title: "Minimalist Software Showcase", 
            author: "Hendra Kurnia", 
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", 
            likes: 560, views: '9.3k', 
            category: "Modern" 
        },
    ];

    const categories = ["All", "Modern", "Creative", "Bento", "Technical", "Corporate"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? templateProjects
        : templateProjects.filter(p => p.category === activeCategory);

    return (
        <div className="font-sans bg-[#050505] min-h-screen text-white animate-fade-in selection:bg-blue-600/30">
            <Navbar />

            <header className="px-6 md:px-8 py-24 max-w-[1400px] mx-auto text-center reveal">
                <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 rounded-full text-blue-500 text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
                    Design Inspiration
                </div>
                <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                    Personal Portfolio <br />
                    <span className="text-blue-600">Landing Pages</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Koleksi tangkapan layar (screenshot) desain portofolio profesional untuk inspirasi proyek SE-20 Anda.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                                ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)]'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="px-4 md:px-8 pb-40 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="reveal group" style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
                            
                            {/* Browser/Window Frame Style */}
                            <div className="relative bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                                
                                {/* Mockup Top Bar */}
                                <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                </div>

                                {/* Bagian Gambar Utama */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        // PENTING: object-top agar Header Landing Page yang terlihat
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <button className="bg-white text-black w-full py-3 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            Preview Template
                                        </button>
                                    </div>
                                </div>

                                {/* Title & Author Info */}
                                <div className="p-6">
                                    <h4 className="font-bold text-lg mb-1 group-hover:text-blue-500 transition-colors tracking-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm">by {project.author}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Templates;