import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';
import { useEffect } from 'react';

const Explore = () => {
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

    // Dummy data for explore page
    const exploreProjects = [
        {
            id: 101,
            title: "Neo-Brutalism Web",
            author: "Alex Grid",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
            likes: 890,
            views: "12k",
        },
        {
            id: 102,
            title: "Minimalist Portfolio",
            author: "Sarah Space",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            likes: 560,
            views: "8.2k",
        },
        {
            id: 103,
            title: "Dashboard UI Kit",
            author: "Dev Interface",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            likes: 1200,
            views: "18k",
        },
        {
            id: 104,
            title: "Mobile Onboarding",
            author: "UX Master",
            image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
            likes: 430,
            views: "6.5k",
        },
        {
            id: 105,
            title: "Travel App Concept",
            author: "Nomad Design",
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7",
            likes: 720,
            views: "10.5k",
        },
        {
            id: 106,
            title: "3D Icon Set",
            author: "Pixel Perfect",
            image: "https://images.unsplash.com/photo-1633113214695-485b9a45b7a3",
            likes: 950,
            views: "14.2k",
        },
        {
            id: 107,
            title: "E-Learning Platform",
            author: "EduTech",
            image: "https://images.unsplash.com/photo-1584697964192-11b8471c53c6",
            likes: 340,
            views: "4.9k",
        },
        {
            id: 108,
            title: "Fitness Tracker",
            author: "Gym Rat",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            likes: 610,
            views: "9.1k",
        },
    ];


    const categories = ["All", "Popular", "New", "Mobile", "Web Design", "Typography", "Branding", "Illustration"];

    return (
        <div className="bg-[#050505] min-h-screen flex flex-col font-sans text-white">
            <Navbar />

            <header className="px-6 py-10 md:py-16 max-w-[1200px] mx-auto w-full text-center reveal">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white tracking-tight">Explore inspiring designs</h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-white/10 rounded-lg text-sm font-bold shadow-sm text-white">Popular</button>
                        <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold text-gray-400 hover:text-white transition-colors">New</button>
                    </div>
                    <button className="w-full sm:w-auto px-5 py-2.5 border border-white/10 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 text-gray-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        Filters
                    </button>
                </div>

                <div className="flex items-center gap-4 md:gap-6 overflow-x-auto pb-4 no-scrollbar justify-start sm:justify-center">
                    {categories.map(cat => (
                        <button key={cat} className="text-sm font-bold text-gray-400 hover:text-blue-400 whitespace-nowrap px-1 transition-colors">
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="px-4 md:px-6 pb-20 max-w-[1200px] mx-auto w-full flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {exploreProjects.map((project, index) => (
                        <div key={project.id} className="reveal" style={{ transitionDelay: `${(index % 3) * 0.1}s` }}>
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

                <div className="mt-16 text-center">
                    <button className="px-16 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                        Load more Work
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Explore;
