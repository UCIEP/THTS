
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2,
  MessageCircle,
  Edit3,
  RotateCcw
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import AboutUsModal from './components/AboutUsModal';
import Packages from './components/Packages';
import PackagesModal from './components/PackagesModal';
import PackageDetailModal from './components/PackageDetailModal';
import PatientFlow from './components/PatientFlow';
import PatientFlowModal from './components/PatientFlowModal';
import Footer from './components/Footer';
import LiaisonOfficer from './components/LiaisonOfficer';
import DownloadModal from './components/DownloadModal';
import BookingModal from './components/BookingModal';
import AdminLogin from './components/AdminLogin';
import EditModal from './components/EditModal';

const App: React.FC = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isPackagesModalOpen, setIsPackagesModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFlowModalOpen, setIsFlowModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('Executive MCU');
  const [currentPackageDetail, setCurrentPackageDetail] = useState<any>(null);
  const [editTarget, setEditTarget] = useState<{section: string, data: any} | null>(null);

  const defaultContent = {
    siteSettings: {
      logoText: "SF",
      logoImage: "", 
      hospitalName: "RSUD SITI FATIMAH",
      subTitle: "Medical Tourism"
    },
    hero: {
      badge: "Pusat Wisata Medis Sumatera Selatan",
      title: "Standar Layanan Internasional Dengan Keramahan Lokal",
      description: "Nikmati pengalaman perawatan kesehatan terbaik di RSUD Siti Fatimah. Kami menggabungkan teknologi medis mutakhir dengan paket wisata eksklusif untuk kenyamanan pemulihan Anda.",
      stats: [
        { value: "50+", label: "Dokter Spesialis" },
        { value: "200+", label: "Tempat Tidur VIP" },
        { value: "98%", label: "Kepuasan Pasien" },
        { value: "ISO", label: "Terakreditasi KARS" }
      ]
    },
    aboutUs: {
      title: "Dedikasi Kami untuk Wisata Kesehatan",
      description: "Medical Tourism di RSUD Siti Fatimah bukan sekadar perawatan medis, melainkan pengalaman holistik yang menggabungkan keunggulan klinis dengan kenyamanan wisata budaya dan kuliner Sumatera Selatan. Kami hadir untuk memastikan pasien dari luar daerah maupun mancanegara mendapatkan pendampingan terbaik.",
      managementTeam: [
        { name: "dr. Syamsuddin Isaac SM, Sp.OG", role: "Direktur Utama", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
        { name: "H. Syahrial, S.E., M.Si", role: "Direktur Umum & Keuangan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { name: "dr. Asep Zainuddin, Sp.An", role: "Direktur Pelayanan", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" }
      ],
      liaisonTeam: [
        { name: "Sarah Azhari", role: "Senior Liaison Officer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
        { name: "Rendi Pratama", role: "Tourism Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
        { name: "Maya Putri", role: "Patient Concierge", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    whyUs: [
      { title: "Teknologi Mutakhir", description: "Dilengkapi dengan peralatan diagnostik dan bedah terkini untuk hasil yang lebih akurat dan pemulihan cepat.", icon: "Zap" },
      { title: "Pusat Unggulan", description: "Fokus pada Kardiologi, Ortopedi, dan MCU Komprehensif dengan tim medis ahli bersertifikasi internasional.", icon: "ShieldCheck" },
      { title: "Layanan End-to-End", description: "Mulai dari perencanaan perjalanan hingga perawatan paska-operasi, kami mendampingi setiap langkah Anda.", icon: "Heart" },
      { title: "Wisata Eksklusif", description: "Lokasi strategis di pusat kota dengan akses mudah ke destinasi wisata kuliner dan sejarah di Palembang.", icon: "MapPin" }
    ],
    packages: [
      { 
        title: "Executive Medical Check-up", 
        subtitle: "Pemeriksaan Menyeluruh", 
        price: "Mulai Rp 3.500k", 
        features: ["Pemeriksaan Lab Lengkap", "Konsultasi Spesialis", "Radiologi & EKG", "Makan Siang Nutrisi", "Lounge VIP"], 
        longDescription: "Paket Executive MCU kami dirancang untuk memberikan gambaran kesehatan Anda secara menyeluruh dalam waktu satu hari. Layanan ini mencakup berbagai pemeriksaan fisik, penunjang, dan konsultasi spesialis di lingkungan yang nyaman dan privat.",
        detailedInclusions: [
          { category: "Pemeriksaan Medis", items: ["Pemeriksaan Fisik oleh Dokter Spesialis Penyakit Dalam", "Hematologi Lengkap & Laju Endap Darah", "Profil Lipid (Kolesterol Total, HDL, LDL, Trigliserida)", "Fungsi Ginjal & Hati", "Urin Lengkap"] },
          { category: "Penunjang & Imaging", items: ["Rontgen Thorax", "EKG (Rekam Jantung)", "USG Abdomen"] },
          { category: "Hospitality", items: ["Akses Lounge VIP", "Makan Siang Nutrisi Khusus", "Liaison Officer Pribadi"] }
        ],
        color: "blue" 
      },
      { 
        title: "Cardiology Suite", 
        subtitle: "Kesehatan Jantung Utama", 
        price: "Mulai Rp 12.000k", 
        features: ["Echocardiography", "Treadmill Test", "Konsultasi Sp.JP", "Cek Penanda Jantung", "Akomodasi Hotel 1 Malam"], 
        longDescription: "Paket khusus untuk mendeteksi risiko dan kesehatan organ jantung Anda secara mendalam menggunakan teknologi kardiologi terkini.",
        detailedInclusions: [
          { category: "Prosedur Jantung", items: ["Echocardiography", "Treadmill Stress Test", "Pemeriksaan Enzim Jantung (Troponin)"] },
          { category: "Akomodasi", items: ["Menginap 1 Malam di Hotel Mitra RSUD", "Transportasi Bandara-Hotel-RS (PP)"] }
        ],
        color: "emerald" 
      },
      { 
        title: "Wellness & Aesthetic", 
        subtitle: "Revitalisasi & Estetika", 
        price: "Hubungi Kami", 
        features: ["Perawatan Kulit Medis", "Program Penurunan BB", "Nutrisi Parenteral", "Paket City Tour", "LO Pribadi"], 
        longDescription: "Paduan antara kesehatan fisik dan estetika. Dapatkan perawatan peremajaan kulit sekaligus program kebugaran yang dipantau oleh ahli gizi.",
        detailedInclusions: [
          { category: "Medical Aesthetics", items: ["Konsultasi Dokter Estetika", "Treatment Wajah Premium", "Injeksi Vitamin Booster"] },
          { category: "Wisata & Relaksasi", items: ["Setengah Hari City Tour Palembang", "Wisata Kuliner Khas"] }
        ],
        color: "purple" 
      },
      { 
        title: "Orthopedic Care", 
        subtitle: "Kesehatan Tulang", 
        price: "Mulai Rp 15.000k", 
        features: ["MRI Scan", "Fisioterapi Intensif", "Konsultasi Sp.OT", "Pemeriksaan Kepadatan Tulang", "Transportasi VIP"], 
        longDescription: "Fokus pada pemulihan sendi dan tulang. Cocok untuk pasien yang membutuhkan rehabilitasi paska-cedera atau pengecekan osteoporosis.",
        detailedInclusions: [
          { category: "Diagnosis", items: ["MRI Scan Lokasi Spesifik", "Bone Density Scan (DEXA)"] },
          { category: "Pemulihan", items: ["3 Sesi Fisioterapi Intensif", "Pendampingan Kursi Roda VIP"] }
        ],
        color: "blue" 
      },
      { 
        title: "Diabetes Care", 
        subtitle: "Manajemen Gula Darah", 
        price: "Mulai Rp 5.000k", 
        features: ["Cek HbA1c", "Konsultasi Gizi Klinik", "Edukasi Diabetes", "Paket Diet Sehat", "Penjemputan Stasiun/Bandara"], 
        longDescription: "Program komprehensif untuk penyandang diabetes atau mereka yang memiliki risiko genetik, mencakup manajemen diet dan edukasi pola hidup.",
        detailedInclusions: [
          { category: "Laboratorium", items: ["Pemeriksaan HbA1c", "Gula Darah Puasa & 2 Jam PP"] },
          { category: "Edukasi", items: ["Sesi Privat dengan Edukator Diabetes", "Panduan Menu Diet Harian"] }
        ],
        color: "emerald" 
      }
    ],
    patientFlow: [
      { num: "01", title: "Konsultasi Online", desc: "Lakukan telekonsultasi awal dengan dokter kami untuk menentukan rencana tindakan." },
      { num: "02", title: "Pengaturan Perjalanan", desc: "LO kami membantu proses tiket, hotel, and administrasi kedatangan Anda." },
      { num: "03", title: "Prosedur Medis", desc: "Penanganan medis profesional dengan teknologi terkini di RSUD Siti Fatimah." },
      { num: "04", title: "Pemulihan & Wisata", desc: "Masa pemulihan yang nyaman disertai paket wisata ringan di kota Palembang." }
    ],
    detailedFlow: [
      { title: "1. Registrasi & Konsultasi Online", description: "Langkah awal memulai perjalanan medis Anda dengan kemudahan akses digital.", details: ["Pendaftaran via Website/WhatsApp", "Telekonsultasi awal dengan Dokter Spesialis", "Review riwayat medis secara digital"] },
      { title: "2. Perencanaan & Administrasi", description: "Tim Liaison Officer (LO) menyiapkan seluruh kebutuhan logistik Anda.", details: ["Estimasi biaya & durasi tindakan", "Verifikasi asuransi/jaminan", "Booking hotel & jadwal RS"] },
      { title: "3. Kedatangan & Penjemputan", description: "Sambutan hangat segera setelah Anda tiba di Palembang.", details: ["Penjemputan VIP di Bandara/Stasiun", "Asistensi bagasi oleh Porter khusus", "Transfer langsung ke RS atau Hotel"] },
      { title: "4. Admisi & Pemeriksaan Fisik", description: "Proses masuk rumah sakit yang cepat tanpa antrean panjang.", details: ["Check-in Priority Lane", "Pemeriksaan penunjang (Lab/Radiologi)", "Orientasi fasilitas kamar VIP"] },
      { title: "5. Tindakan Medis Utama", description: "Penanganan oleh tim medis ahli dengan standar internasional.", details: ["Prosedur medis/bedah modern", "Pemantauan intensif paska-tindakan", "Update kondisi ke keluarga secara berkala"] },
      { title: "6. Pemulihan & Rehabilitasi", description: "Fokus pada pengembalian kondisi fisik yang optimal.", details: ["Fisioterapi & mobilisasi dini", "Diet nutrisi khusus oleh Gizi Klinik", "Pendampingan LO untuk kebutuhan non-medis"] },
      { title: "7. Wisata Relaksasi (Opsional)", description: "Menikmati keindahan Palembang jika kondisi fisik memungkinkan.", details: ["Paket wisata kuliner Pempek", "Kunjungan sejarah Jembatan Ampera", "Belanja kerajinan khas Sumsel"] },
      { title: "8. Kepulangan & Aftercare", description: "Kami memastikan Anda pulang dalam kondisi terbaik dan tetap terpantau.", details: ["Resume medis lengkap", "Antar kembali ke Bandara/Stasiun", "Monitoring paska-layanan via Telemedicine"] }
    ],
    liaison: {
      title: "Pendampingan Pribadi oleh Liaison Officer",
      description: "Kami mengerti bahwa perjalanan medis ke luar daerah membutuhkan koordinasi yang matang. LO kami siap membantu Anda mulai dari penjemputan bandara, reservasi hotel, hingga pengaturan jadwal konsultasi dokter.",
      features: [
        "Layanan Penjemputan VIP",
        "Penerjemah Bahasa Asing (Opsional)",
        "Koordinasi Logistik & Akomodasi",
        "Update Kondisi Pasien 24/7"
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
    },
    footerMenus: {
      services: [
        { name: "Medical Check Up", link: "#" },
        { name: "Cardiovascular Center", link: "#" },
        { name: "Orthopedic Center", link: "#" },
        { name: "Wellness Program", link: "#" }
      ],
      quickLinks: [
        { name: "Booking Jadwal", link: "#" },
        { name: "Informasi Kamar", link: "#" },
        { name: "Berita & Media", link: "#" },
        { name: "Kontak Kami", link: "#" }
      ]
    },
    contact: {
      address: "Jl. Kol. H. Burlian No.KM.6, Kota Palembang, Sumatera Selatan",
      phone: "(0711) 5718883",
      email: "info@rsudsitifatimah.com",
      whatsapp: "62811721612"
    },
    downloadSettings: {
      fileName: "Executive Medical Tourism Guide",
      description: "Mohon tunggu sebentar, sistem sedang mengumpulkan data paket terbaru untuk Anda."
    }
  };

  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('rsud_content_v12');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('rsud_content_v12', JSON.stringify(content));
  }, [content]);

  const resetToDefault = () => {
    if (window.confirm("Apakah Anda yakin ingin mengembalikan semua konten ke pengaturan awal? Perubahan Anda akan hilang.")) {
      setContent(defaultContent);
    }
  };

  const openEdit = (section: string) => {
    const sectionData = JSON.parse(JSON.stringify(content[section as keyof typeof content]));
    setEditTarget({ section, data: sectionData });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (newData: any) => {
    setContent((prev: any) => ({ ...prev, [editTarget!.section]: newData }));
    setIsEditModalOpen(false);
    setEditTarget(null);
  };

  const handleBookingFromModal = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsPackagesModalOpen(false);
    setIsDetailModalOpen(false);
    setIsBookingOpen(true);
  };

  const handleDetailOpen = (pkg: any) => {
    setCurrentPackageDetail(pkg);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="relative min-h-screen futuristic-bg selection:bg-blue-500/30">
      <Navbar 
        settings={content.siteSettings}
        onBooking={() => { setSelectedPackage('Executive MCU'); setIsBookingOpen(true); }} 
        onAboutClick={() => setIsAboutUsOpen(true)}
        onPackagesClick={() => setIsPackagesModalOpen(true)}
        onFlowClick={() => setIsFlowModalOpen(true)}
        isAdmin={isAdmin} 
        onLoginClick={() => isAdmin ? setIsAdmin(false) : setIsAdminLoginOpen(true)}
        onEdit={() => openEdit('siteSettings')}
      />
      
      {isAdmin && (
        <div className="fixed top-24 left-6 z-50 flex flex-col gap-2">
          <button 
            onClick={resetToDefault}
            className="bg-rose-600 hover:bg-rose-500 text-white p-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all text-xs"
          >
            <RotateCcw className="w-4 h-4" /> Reset Semua
          </button>
          <button 
            onClick={() => openEdit('aboutUs')}
            className="bg-orange-500 hover:bg-orange-400 text-white p-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all text-xs"
          >
            <Edit3 className="w-4 h-4" /> Edit Tentang Kami
          </button>
          <button 
            onClick={() => openEdit('detailedFlow')}
            className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all text-xs"
          >
            <Edit3 className="w-4 h-4" /> Edit Detail Alur
          </button>
          <button 
            onClick={() => openEdit('footerMenus')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all text-xs"
          >
            <Edit3 className="w-4 h-4" /> Edit Menu Bawah
          </button>
        </div>
      )}

      <main>
        <section id="hero" className="relative group">
          {isAdmin && (
            <button 
              onClick={() => openEdit('hero')}
              className="absolute top-32 right-10 z-40 bg-orange-500 hover:bg-orange-400 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all text-sm"
            >
              <Edit3 className="w-4 h-4" /> Edit Hero
            </button>
          )}
          <Hero 
            heroData={content.hero}
            onDownload={() => setIsDownloadOpen(true)} 
            onConsult={() => window.open(`https://wa.me/${content.contact.whatsapp}`, '_blank')}
          />
        </section>
        
        <section id="why-us" className="relative">
          {isAdmin && (
            <button 
              onClick={() => openEdit('whyUs')}
              className="absolute top-10 right-10 z-20 bg-orange-500 hover:bg-orange-400 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all text-sm"
            >
              <Edit3 className="w-4 h-4" /> Edit Keunggulan
            </button>
          )}
          <WhyUs advantages={content.whyUs} />
        </section>

        <section id="packages" className="relative">
          {isAdmin && (
            <button 
              onClick={() => openEdit('packages')}
              className="absolute top-10 right-10 z-20 bg-orange-500 hover:bg-orange-400 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all text-sm"
            >
              <Edit3 className="w-4 h-4" /> Edit Paket
            </button>
          )}
          <Packages 
            packagesData={content.packages.slice(0, 3)} 
            onSeeMore={() => setIsPackagesModalOpen(true)}
            onDetailClick={handleDetailOpen}
          />
        </section>

        <section id="flow" className="relative">
          {isAdmin && (
            <button 
              onClick={() => openEdit('patientFlow')}
              className="absolute top-10 right-10 z-20 bg-orange-500 hover:bg-orange-400 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all text-sm"
            >
              <Edit3 className="w-4 h-4" /> Edit Alur Ringkas
            </button>
          )}
          <PatientFlow 
            steps={content.patientFlow} 
            onSeeDetail={() => setIsFlowModalOpen(true)}
          />
        </section>

        <section id="liaison" className="py-20 bg-slate-900/50 relative">
          {isAdmin && (
            <button 
              onClick={() => openEdit('liaison')}
              className="absolute top-10 right-10 z-20 bg-orange-500 hover:bg-orange-400 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all text-sm"
            >
              <Edit3 className="w-4 h-4" /> Edit LO Section
            </button>
          )}
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 glass-card p-8 lg:p-12 rounded-3xl overflow-hidden relative">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {content.liaison.title}
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {content.liaison.description}
                </p>
                <div className="space-y-4">
                  {content.liaison.features.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-900/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Langsung dengan LO
                </button>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px] w-full">
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
                <img 
                  src={content.liaison.image} 
                  alt="Liaison Officer" 
                  className="relative rounded-2xl border border-white/10 shadow-2xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        contact={content.contact} 
        settings={content.siteSettings} 
        menus={content.footerMenus}
        isAdmin={isAdmin}
        onEditMenus={() => openEdit('footerMenus')}
        onEditContact={() => openEdit('contact')}
      />

      <LiaisonOfficer 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        hospitalName={content.siteSettings.hospitalName} 
        loImage={content.liaison.image}
      />
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} settings={content.downloadSettings} />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        whatsapp={content.contact.whatsapp} 
        hospitalName={content.siteSettings.hospitalName} 
        initialPackage={selectedPackage}
      />
      
      <AboutUsModal 
        isOpen={isAboutUsOpen} 
        onClose={() => setIsAboutUsOpen(false)} 
        data={content.aboutUs} 
        contact={content.contact} 
      />

      <PackagesModal 
        isOpen={isPackagesModalOpen} 
        onClose={() => setIsPackagesModalOpen(false)} 
        packages={content.packages} 
        onBooking={handleBookingFromModal}
        onDetailOpen={handleDetailOpen}
      />

      <PackageDetailModal 
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        pkg={currentPackageDetail}
        onBooking={handleBookingFromModal}
      />

      <PatientFlowModal 
        isOpen={isFlowModalOpen} 
        onClose={() => setIsFlowModalOpen(false)} 
        steps={content.detailedFlow}
      />

      <AdminLogin 
        isOpen={isAdminLoginOpen} 
        onClose={() => setIsAdminLoginOpen(false)} 
        onSuccess={() => { setIsAdmin(true); setIsAdminLoginOpen(false); }} 
      />
      
      {isEditModalOpen && editTarget && (
        <EditModal 
          key={editTarget.section}
          isOpen={isEditModalOpen} 
          onClose={() => setIsEditModalOpen(false)} 
          section={editTarget.section} 
          initialData={editTarget.data} 
          onSave={handleSaveEdit} 
        />
      )}
    </div>
  );
};

export default App;
