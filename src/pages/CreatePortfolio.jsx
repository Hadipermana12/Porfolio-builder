import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreatePortfolio = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        informasiDasar: { fokus: '', target: '' },
        researchQuestion: '',
        literatur: '',
        metode: '',
        metodologi: [''],
        produk: '',
        valueKomersial: ''
    });

    const handleInputChange = (section, field, value) => {
        if (field) {
            setFormData(prev => ({
                ...prev,
                [section]: { ...prev[section], [field]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [section]: value }));
        }
    };

    const handleMetodologiChange = (index, value) => {
        const newList = [...formData.metodologi];
        newList[index] = value;
        setFormData(prev => ({ ...prev, metodologi: newList }));
    };

    const addMetodologiStep = () => {
        setFormData(prev => ({ ...prev, metodologi: [...prev.metodologi, ''] }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6 reveal active">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Step 1: Informasi Dasar</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Fokus</label>
                                <input
                                    type="text"
                                    value={formData.informasiDasar.fokus}
                                    onChange={(e) => handleInputChange('informasiDasar', 'fokus', e.target.value)}
                                    placeholder="Contoh: Portofolio proyek TI organisasi"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Target</label>
                                <input
                                    type="text"
                                    value={formData.informasiDasar.target}
                                    onChange={(e) => handleInputChange('informasiDasar', 'target', e.target.value)}
                                    placeholder="Contoh: Konsultan & direktorat TI"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6 reveal active">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Step 2: Research & Literature</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Research Question</label>
                                <textarea
                                    value={formData.researchQuestion}
                                    onChange={(e) => handleInputChange('researchQuestion', null, e.target.value)}
                                    placeholder="Contoh: Bagaimana menyusun portofolio proyek TI yang efektif?"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all h-32"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Literatur</label>
                                <input
                                    type="text"
                                    value={formData.literatur}
                                    onChange={(e) => handleInputChange('literatur', null, e.target.value)}
                                    placeholder="Contoh: IT portfolio management"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 reveal active">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Step 3: Metode & Metodologi</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Metode</label>
                                <input
                                    type="text"
                                    value={formData.metode}
                                    onChange={(e) => handleInputChange('metode', null, e.target.value)}
                                    placeholder="Contoh: Structuring"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Metodologi (Langkah-langkah)</label>
                                <div className="space-y-3">
                                    {formData.metodologi.map((step, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={step}
                                            onChange={(e) => handleMetodologiChange(index, e.target.value)}
                                            placeholder={`Langkah ${index + 1}`}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                        />
                                    ))}
                                    <button
                                        onClick={addMetodologiStep}
                                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        + Tambah Langkah
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6 reveal active">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Step 4: Output & Value</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Produk</label>
                                <input
                                    type="text"
                                    value={formData.produk}
                                    onChange={(e) => handleInputChange('produk', null, e.target.value)}
                                    placeholder="Contoh: Portfolio template & project list"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Value Komersial</label>
                                <input
                                    type="text"
                                    value={formData.valueKomersial}
                                    onChange={(e) => handleInputChange('valueKomersial', null, e.target.value)}
                                    placeholder="Contoh: Konsultan & direktorat TI"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6 reveal active">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Review Portfolio</h2>
                        <div className="bg-[#f2efed] text-black p-8 rounded-lg shadow-xl space-y-6">
                            <h3 className="text-3xl font-serif border-b border-gray-300 pb-4">SE Portfolio Summary</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-[#d95d21] uppercase text-xs tracking-wider mb-2">Informasi Dasar</h4>
                                    <p className="text-lg"><span className="font-semibold">Fokus:</span> {formData.informasiDasar.fokus}</p>
                                    <p className="text-lg"><span className="font-semibold">Target:</span> {formData.informasiDasar.target}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#d95d21] uppercase text-xs tracking-wider mb-2">Research Question</h4>
                                    <p className="text-lg">{formData.researchQuestion}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                <div className="p-4 bg-white/50 border border-gray-200">
                                    <h5 className="font-bold mb-2">Literatur</h5>
                                    <p>{formData.literatur}</p>
                                </div>
                                <div className="p-4 bg-white/50 border border-gray-200">
                                    <h5 className="font-bold mb-2">Metode</h5>
                                    <p>{formData.metode}</p>
                                </div>
                                <div className="p-4 bg-white/50 border border-gray-200">
                                    <h5 className="font-bold mb-2">Metodologi</h5>
                                    <ul className="list-decimal list-inside text-sm">
                                        {formData.metodologi.map((s, i) => s && <li key={i}>{s}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex gap-6 pt-4 border-t border-gray-300">
                                <div className="flex-1">
                                    <h5 className="font-bold text-[#d95d21] text-xs uppercase mb-2">Produk</h5>
                                    <p className="font-medium">{formData.produk}</p>
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold text-[#d95d21] text-xs uppercase mb-2">Value Komersial</h5>
                                    <p className="font-medium">{formData.valueKomersial}</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all transform hover:scale-[1.02]">
                            Download PDF / Save Portfolio
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="font-sans bg-[#050505] min-h-screen text-white">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl font-black mb-2 tracking-tight">Portfolio Builder</h1>
                        <p className="text-gray-400">Ikuti langkah-langkah untuk membangun strategi portofolio Anda.</p>
                    </div>
                    <div className="text-right">
                        <span className="text-3xl font-serif text-blue-500">{step}/5</span>
                        <div className="w-32 h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-500"
                                style={{ width: `${(step / 5) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="min-h-[400px]">
                    {renderStep()}
                </div>

                <div className="mt-12 flex justify-between gap-4">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Back
                        </button>
                    )}
                    <div className="ml-auto">
                        {step < 5 ? (
                            <button
                                onClick={nextStep}
                                className="px-10 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all"
                            >
                                Next Step
                            </button>
                        ) : null}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreatePortfolio;
