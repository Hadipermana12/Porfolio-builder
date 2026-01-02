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

    const templateProjects = [
        { id: 201, title: "Modern Portfolio Template", author: "Zen Design", image: "https://images.unsplash.com/photo-1545235617-946b091c0e35?q=80&w=600&auto=format&fit=crop", likes: 450, views: '8.2k', category: "Portfolio" },
        { id: 202, title: "SaaS Landing Page kit", author: "Cloud UI", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", likes: 890, views: '15k', category: "Landing Page" },
        { id: 203, title: "Minimal Resume Builder", author: "Career Flow", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop", likes: 320, views: '5.4k', category: "Resume" },
        { id: 204, title: "Agency Portfolio Theme", author: "Bold Studio", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop", likes: 670, views: '11k', category: "Agency" },
        { id: 205, title: "E-commerce Storefront", author: "Shopify Master", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", likes: 540, views: '9k', category: "E-commerce" },
        { id: 206, title: "Photography showcase", author: "Lens Craft", image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=600&auto=format&fit=crop", likes: 410, views: '7.8k', category: "Portfolio" },
        { id: 207, title: "App Landing Page", author: "Mobile Pro", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", likes: 290, views: '4.2k', category: "Landing Page" },
        { id: 208, title: "Professional CV Kit", author: "Job Ready", image: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=600&auto=format&fit=crop", likes: 180, views: '3.1k', category: "Resume" },
    ];

    const categories = ["All", "Portfolio", "Landing Page", "Resume", "Agency", "E-commerce"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? templateProjects
        : templateProjects.filter(p => p.category === activeCategory);

    return (
        <div className="font-sans bg-[#050505] min-h-screen text-white animate-fade-in">
            <Navbar />

            <header className="px-6 md:px-8 py-12 md:py-16 max-w-[1400px] mx-auto text-center reveal">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight">
                    Premium <span className="text-blue-500">Design Templates</span>
                </h1>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 px-4 md:px-0">
                    Jumpstart your next project with our hand-crafted, high-converting templates for designers and developers.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                                ? 'bg-white text-black border-white'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="px-4 md:px-8 pb-32 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="reveal" style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
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

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 text-lg italic">No templates found in this category yet.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Templates;
