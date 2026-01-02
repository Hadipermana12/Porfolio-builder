const Footer = () => {
    return (
        <footer className="bg-[#050505] text-[#94a3b8] py-16 px-6 font-sans border-t border-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-sm">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-6 font-serif tracking-tight">PortFolio</h2>
                    <p className="mb-6 leading-relaxed">
                        The world’s leading community for creatives to share, grow, and get hired.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                        {/* Other social icons could be added here similar to above */}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">For Designers</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Go Pro!</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Explore Design Work</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Design Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Overtime Podcast</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Hire Designers</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Post a Job Opening</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Post a Freelance Project</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Search for Designers</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Media Kit</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Directories</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Design Jobs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Designers for Hire</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Tags</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Places</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© 2026 PortFolio. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="font-bold text-white">20,501,392</span> shots dribbbled
                </div>
            </div>
        </footer>
    );
};

export default Footer;
