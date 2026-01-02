import React from 'react';

const categories = [
    { title: "Typography", image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=300&auto=format&fit=crop", color: "bg-emerald-900/50" },
    { title: "Print", image: "https://images.unsplash.com/photo-1562619425-c307bb83bc42?q=80&w=300&auto=format&fit=crop", color: "bg-pink-900/50" },
    { title: "Product Design", image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=300&auto=format&fit=crop", color: "bg-purple-900/50" },
    { title: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=300&auto=format&fit=crop", color: "bg-gray-100" },
    { title: "Web Design", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=300&auto=format&fit=crop", color: "bg-blue-900/50" },
    { title: "Animation", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop", color: "bg-indigo-900/50" },
    { title: "Mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=300&auto=format&fit=crop", color: "bg-orange-900/50" },
    { title: "Illustration", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop", color: "bg-yellow-900/50" },
];

const MarqueeCards = () => {
    return (
        <div className="w-full overflow-hidden py-10 bg-[#050505]">
            <div className="relative w-full flex items-center">
                <div className="flex gap-6 animate-scroll whitespace-nowrap">
                    {/* Duplicate list for seamless infinite scroll */}
                    {[...categories, ...categories, ...categories].map((cat, index) => (
                        <div
                            key={index}
                            className="w-[220px] md:w-[260px] flex-shrink-0 cursor-pointer group"
                        >
                            <div className={`w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 relative ${cat.color}`}>
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg px-1">{cat.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeCards;
