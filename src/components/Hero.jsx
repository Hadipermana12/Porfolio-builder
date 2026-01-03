import { Link } from 'react-router-dom';
import Orb from './Orb';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-6 bg-[#050505] text-white font-sans relative overflow-hidden transition-all duration-700 animate-fade-in">
            {/* Interactive Orb Background */}
            <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60">
                <Orb
                    hue={210}
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    backgroundColor="#050505"
                />
            </div>

            {/* Subtle Overlay to improve text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505] -z-10 pointer-events-none"></div>


            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black leading-[1.1] max-w-[1100px] mb-8 tracking-tighter text-white animate-fade-in-up slide-delay-1 drop-shadow-2xl">
                Tadika Portfolio-Builder <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300">Template Design</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 max-w-[700px] mb-14 leading-relaxed font-medium animate-fade-in-up slide-delay-2 px-4">
                The ultimate destination for designers to build, showcase, and grow their creative careers with premium templates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up slide-delay-3 w-full sm:w-auto px-6 sm:px-0">
                <Link to="/home" className="bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 active:scale-95 no-underline w-full sm:w-auto">
                    Get Started
                </Link>
                <button className="bg-white/5 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg font-bold border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 backdrop-blur-sm active:scale-95 w-full sm:w-auto">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Hero;
