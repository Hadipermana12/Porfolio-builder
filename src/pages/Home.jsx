import React, { useEffect } from 'react';
import {
    Download,
    Users,
    BookOpen,
    Mail,
    Database,
    ShieldCheck,
    BarChart3,
    ArrowRight,
    Target,
    FileText
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Team Member Photo Imports
import hadiImg from '../assets/hadi.jpg';
import rakaImg from '../assets/raka.jpg';
import riyadImg from '../assets/riyad.jpeg';

const Home = () => {
    const location = useLocation();

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

    // Robust scroll-to-hash logic using useLocation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure DOM is ready
            }
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600/30">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <header className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
                {/* Subtle Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-blue-600/[0.08] blur-[150px] rounded-full -z-10"></div>
                <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-blue-500/[0.05] blur-[100px] rounded-full -z-10"></div>

                <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-5 py-2 rounded-full text-blue-500 text-[11px] font-bold mb-8 uppercase tracking-[0.3em] reveal">
                    Topic AI-20: SE Portfolio Management
                </div>

                <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1] reveal">
                    Standarisasi  <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400">
                        Portfolio Builder
                    </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed reveal">
                    Bangun transparansi dan keberlanjutan proyek AI dengan kerangka kerja dokumentasi strategis berbasis riset global.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 reveal">
                    <a href="#product" className="group relative flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                        <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                        Unduh Toolkit (.zip)
                    </a>
                    <a href="#metodologi" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all text-gray-300">
                        Research Question
                    </a>
                </div>
            </header>

            {/* --- BENTO METHODOLOGY SECTION --- */}
            <section id="metodologi" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Methodology Main Card */}
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[3.5rem] p-10 md:p-16 reveal relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/[0.03] blur-3xl -z-0"></div>

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                                <BookOpen className="text-blue-500" size={28} />
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight">Metodologi Riset</h3>
                        </div>

                        <div className="mb-14 p-10 bg-blue-600/[0.04] border border-blue-500/10 rounded-[2.5rem] relative z-10">
                            <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Core Inquiry</span>
                            <p className="text-gray-200 leading-tight italic text-2xl md:text-3xl font-medium">
                                "Elemen strategis dan teknis apa saja yang wajib hadir dalam dokumentasi portofolio proyek AI?"
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            <StepItem number="01" title="Sistematik Literatur" desc="Analisis standar dokumentasi strategi AI & ITPM." />
                            <StepItem number="02" title="Kerangka Klasifikasi" desc="Kategorisasi proyek berdasarkan TRL & Business Value." />
                            <StepItem number="03" title="Validasi Instrumen" desc="Finalisasi template dokumen & master project list." />
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex-1 bg-blue-600 rounded-[3.5rem] p-12 flex flex-col justify-end group hover:shadow-[0_30px_60px_rgba(37,99,235,0.3)] transition-all reveal relative overflow-hidden">
                            <Target className="absolute top-10 right-10 text-white/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" size={80} />
                            <div className="relative z-10">
                                <h5 className="text-3xl font-black leading-none mb-4">Value Komersial</h5>
                                <p className="text-blue-100/80 text-sm leading-relaxed">
                                    Optimasi alokasi budget dan ROI untuk instansi pemerintah dan konsultan strategis.
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-[3.5rem] p-12 flex flex-col justify-end group hover:bg-white/[0.06] transition-all reveal relative overflow-hidden">
                            <Database className="absolute top-10 right-10 text-blue-500/20 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" size={80} />
                            <div className="relative z-10">
                                <h5 className="text-2xl font-bold mb-4">Resiliensi Aset</h5>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Menjaga kesinambungan data dan model dari resiko rotasi tim/vendor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STANDARDS GRID --- */}
            <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 reveal">
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Landasan & Standar</h3>
                        <p className="text-gray-500 text-lg">Toolkit dibangun menggunakan standar manajemen industri global.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                        <InfoCard icon={<FileText />} title="ITPM Framework" desc="Standard portfolio management untuk IT ROI." />
                        <InfoCard icon={<ShieldCheck />} title="Ethics Governance" desc="Kepatuhan etika dan transparansi algoritma." />
                        <InfoCard icon={<Database />} title="Asset Lifecycle" desc="Manajemen data dari raw hingga final models." />
                        <InfoCard icon={<Users />} title="Stakeholders" desc="Penyajian data sesuai profil target audiens." />
                    </div>
                </div>
            </section>

            {/* --- PRODUCT SHOWCASE (Redesigned for Elegance) --- */}
            <section id="product" className="py-32 px-6 scroll-mt-32">
                <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)]">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.08] blur-[120px] rounded-full -z-0 translate-x-1/3 -translate-y-1/3"></div>

                    <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
                        <div className="reveal">
                            <h3 className="text-4xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter">
                                Sempurna Untuk <br /> Diadopsi Langsung.
                            </h3>
                            <p className="mb-14 text-blue-100 text-lg leading-relaxed opacity-90 max-w-lg">
                                Solusi praktis untuk standarisasi portofolio proyek AI. Dibuat agar siap diisi dan dipresentasikan ke level eksekutif.
                            </p>

                            <div className="flex gap-16 mb-16 pl-1 border-l border-white/30 ml-2">
                                <div>
                                    <span className="text-5xl font-black italic block mb-2 leading-none">01</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200 pl-1">Template Docs</span>
                                </div>
                                <div>
                                    <span className="text-5xl font-black italic block mb-2 leading-none">02</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200 pl-1">Master Sheets</span>
                                </div>
                            </div>

                            <button className="group relative bg-[#050505] text-white font-black py-7 px-14 rounded-full flex justify-center items-center gap-4 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
                                UNDUH SE-20 TOOLKIT
                            </button>
                        </div>

                        <Link to="/templates" className="reveal group perspective-1000">
                            <div className="bg-[#050505] p-4 rounded-[3.5rem] shadow-4xl border border-white/10 overflow-hidden transform lg:rotate-6 group-hover:rotate-0 transition-all duration-1000 ease-out">
                                <div className="aspect-[16/11] bg-zinc-900 rounded-[2.5rem] overflow-hidden relative border border-white/5">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                        alt="Preview"
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col items-center justify-center p-12 text-center">
                                        <BarChart3 size={72} className="mb-8 text-blue-600 group-hover:scale-125 transition-transform duration-700" />
                                        <h5 className="text-2xl font-black text-white mb-3">Explore Design Gallery</h5>
                                        <p className="text-[11px] uppercase tracking-[0.4em] text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">View All Templates</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] text-black shadow-3xl hidden md:block z-20 group-hover:-translate-y-4 transition-transform duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg">V1</div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-blue-600 mb-0.5 tracking-widest">Released</p>
                                        <p className="text-xl font-black tracking-tighter text-slate-900">Official Toolkit</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- RESEARCH TEAM & CONTACT --- */}
            <section id="team" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32">
                <div className="text-center mb-24 reveal">
                    <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Discovery Group</div>
                    <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Kelompok 2</h3>
                    <p className="text-gray-500 font-medium">Mahasiswa Mata Kuliah Metodologi Penelitian</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal">
                    {[
                        { name: "Hadi Permana", role: "Developer", image: hadiImg, nim: "312210445" },
                        { name: "Muhamad Rizky Raka Pratama", role: "Membuat Laporan", image: rakaImg, nim: "312210397 " },
                        { name: "Muhammad Riyadus Solihin", role: "Membuat Power Point", image: riyadImg, nim: "312210404" }
                    ].map((member, idx) => (
                        <div key={idx} className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-4 transition-all duration-700 hover:border-blue-600/30 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                            {/* Photo Card Area (Horizontal inside vertical grid) */}
                            <div className="flex items-center gap-6 p-4">
                                <div className="w-24 h-24 flex-none rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-blue-500/50 transition-all duration-700 group-hover:rotate-3">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${member.name === "Hadi Permana" ? "object-top" : "object-center"
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="inline-block px-3 py-1 bg-blue-600/10 rounded-full text-blue-500 text-[8px] font-bold uppercase tracking-[0.2em] mb-3">
                                        {member.role}
                                    </div>
                                    <h4 className="font-bold text-lg text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight leading-tight">{member.name}</h4>

                                    {/* Cool NIM Display */}
                                    <div className="mt-4 flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl group-hover:border-blue-500/30 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] text-white font-bold uppercase tracking-[0.2em]">NIM</span>
                                            <span className="text-[11px] text-white font-mono tracking-wider">{member.nim}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Decorative Element */}
                            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-700 rounded-full"></div>

                            {/* Abstract Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    ))}
                </div>

                {/* Compact & Cool Contact Banner */}
                <div id="contact" className="mt-32 max-w-5xl mx-auto px-4 reveal">
                    <div className="relative p-1 bg-gradient-to-br from-blue-600/30 via-white/5 to-blue-600/30 rounded-[3rem] overflow-hidden group">
                        <div className="bg-[#080808] px-8 py-16 md:py-20 rounded-[2.9rem] relative overflow-hidden flex flex-col items-center text-center">
                            {/* Animated Glow BG */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:translate-x-12 transition-transform duration-1000"></div>
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:-translate-x-12 transition-transform duration-1000"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <Mail className="text-blue-500" size={28} />
                                </div>

                                <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight max-w-2xl">
                                    Kembangkan Strategi AI <br />
                                    <span className="text-blue-600">Terbaik Untuk Organisasi.</span>
                                </h4>

                                <p className="mb-10 text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto font-medium opacity-80">
                                    Konsultasikan implementasi dokumentasi aset AI yang berkelanjutan dan patuh standar global bersama kami.
                                </p>

                                <div className="flex flex-col items-center gap-4">

                                    <div className="flex items-center gap-2 text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] mt-4 opacity-60 group-hover:opacity-100 transition-all">
                                        Hubungi Tim Kami <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

/* --- PREMIUM UI COMPONENTS --- */

const StepItem = ({ number, title, desc }) => (
    <div className="group pt-4">
        <div className="flex items-center gap-4 mb-6">
            <div className="text-blue-500 font-black text-2xl tracking-tighter leading-none">{number}</div>
            <div className="h-px flex-1 bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>
        </div>
        <h5 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h5>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const InfoCard = ({ icon, title, desc }) => (
    <div className="p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] hover:border-blue-500/30 transition-all duration-500 group text-center cursor-default">
        <div className="mb-8 text-gray-500 group-hover:text-blue-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex justify-center">
            {React.cloneElement(icon, { size: 48, strokeWidth: 1.5 })}
        </div>
        <h6 className="font-bold text-xl mb-4 tracking-tight group-hover:text-white transition-colors">{title}</h6>
        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{desc}</p>
    </div>
);

export default Home;
