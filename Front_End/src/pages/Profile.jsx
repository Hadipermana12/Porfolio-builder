import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';

const Profile = () => {
    // Dummy user data
    const user = {
        name: "Hadi Jumpshoot",
        role: "Product Designer",
        location: "Jakarta, Indonesia",
        avatar: "https://via.placeholder.com/150",
        banner: "https://via.placeholder.com/1200x300",
        bio: "Creating digital experiences that make life easier. Focused on UI/UX and Interaction Design.",
        followers: "12.5k",
        following: "450",
        likes: "32.1k"
    };

    const userProjects = [
        { id: 201, title: "Travel App UI", author: "Hadi Jumpshoot", image: "https://cdn.dribbble.com/userupload/12975850/file/original-13271708170258752115163152174301.png?resize=400x300&vertical=center", likes: 234, views: '2.1k' },
        { id: 202, title: "Fintech Dashboard", author: "Hadi Jumpshoot", image: "https://cdn.dribbble.com/userupload/13010375/file/original-5327293121516f1c4021204642921099.png?resize=400x300&vertical=center", likes: 456, views: '5.6k' },
        { id: 203, title: "Coffee Shop Branding", author: "Hadi Jumpshoot", image: "https://cdn.dribbble.com/userupload/12555620/file/original-4d924765715974051010729731674400.png?resize=400x300&vertical=center", likes: 123, views: '1.2k' },
    ];

    return (
        <div className="bg-[#050505] min-h-screen flex flex-col font-sans text-white">
            <Navbar />

            <main className="flex-grow">
                {/* User Header */}
                <div className="max-w-[1000px] mx-auto px-6 pt-8 md:pt-12 pb-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <img src={user.avatar} alt={user.name} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-[#050505] shadow-2xl" />

                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black mb-1 text-white">{user.name}</h1>
                                <p className="text-gray-300 font-medium">{user.role} • {user.location}</p>
                            </div>
                            <div className="flex gap-4 justify-center md:justify-end">
                                <div className="text-center">
                                    <span className="block font-black text-lg text-white">{user.followers}</span>
                                    <span className="text-[10px] text-gray-500 uppercase font-black">Followers</span>
                                </div>
                                <div className="text-center">
                                    <span className="block font-black text-lg text-white">{user.likes}</span>
                                    <span className="text-[10px] text-gray-500 uppercase font-black">Likes</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl text-sm md:text-base">{user.bio}</p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto">Follow</button>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none px-6 py-2.5 border border-white/10 rounded-xl font-bold text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Message</button>
                                <button className="p-2.5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-white/5 mb-8 sticky top-20 bg-[#050505]/95 backdrop-blur-sm z-10 transition-colors">
                    <div className="max-w-[1200px] mx-auto px-6 flex gap-8 overflow-x-auto no-scrollbar">
                        <button className="py-4 border-b-2 border-white font-semibold text-sm text-white">Work</button>
                        <button className="py-4 border-b-2 border-transparent text-gray-400 font-semibold text-sm hover:text-white transition-colors">Boosted Shots</button>
                        <button className="py-4 border-b-2 border-transparent text-gray-400 font-semibold text-sm hover:text-white transition-colors">Collections</button>
                        <button className="py-4 border-b-2 border-transparent text-gray-400 font-semibold text-sm hover:text-white transition-colors">Liked Shots</button>
                        <button className="py-4 border-b-2 border-transparent text-gray-400 font-semibold text-sm hover:text-white transition-colors">About</button>
                    </div>
                </div>

                {/* Grid */}
                <div className="px-6 pb-20 max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
                        {/* Card New Upload */}
                        <div className="border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-center aspect-[4/3] cursor-pointer hover:border-blue-500 hover:bg-white/5 group transition-colors">
                            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-white">Upload your first shot</h3>
                            <p className="text-gray-500 text-sm">Show off your best work. Get feedback, likes and be a part of a growing community.</p>
                        </div>

                        {userProjects.map(project => (
                            <PortfolioCard
                                key={project.id}
                                title={project.title}
                                author={{ name: project.author, avatar: user.avatar }}
                                image={project.image}
                                likes={project.likes}
                                views={project.views}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
