const PortfolioCard = ({ title, author, image, likes, views }) => {
    return (
        <div className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-sans group bg-[#0f172a] border border-white/5 hover:border-blue-500/30">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-800">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-between p-5 group-hover:opacity-100">
                    <h3 className="text-white m-0 text-lg font-bold drop-shadow-md tracking-wide line-clamp-1">{title}</h3>
                    <div className="flex gap-2">
                        <button className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-2.5 cursor-pointer text-white hover:bg-white/20 transition-colors shadow-sm" aria-label="Save">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-2.5 cursor-pointer text-white hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/30 transition-colors shadow-sm" aria-label="Like">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 px-1.5 pb-1.5">
                <div className="flex items-center gap-2">
                    <img src={author?.avatar || 'https://via.placeholder.com/32'} alt={author?.name} className="w-5 h-5 rounded-full bg-gray-700 border border-gray-600" />
                    <span className="text-[13px] font-semibold text-gray-200 hover:text-white transition-colors truncate max-w-[80px]">{author?.name || 'Designer'}</span>
                    <span className="bg-blue-600/20 text-blue-400 text-[9px] px-1 py-0.5 rounded font-bold uppercase tracking-wider border border-blue-500/20">PRO</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-500 text-[11px] font-medium">
                    <div className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                        <span>{likes || 124}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                        <span>{views || '1.2k'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
