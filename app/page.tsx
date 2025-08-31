import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Kursus Bahasa Inggris ringan dan modern. Kelas online/offline, jadwal fleksibel, dan kurikulum berbasis CEFR.",
  keywords: [
    "kursus bahasa inggris",
    "esteem course",
    "les inggris",
    "toefl",
    "ielts",
  ],
  openGraph: {
    title: "Esteem Course | Kursus Bahasa Inggris",
    description:
      "Kursus Bahasa Inggris ringan dan modern. Kelas online/offline, jadwal fleksibel, dan kurikulum berbasis CEFR.",
    url: "https://esteem-course.example",
    siteName: "Esteem Course",
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(59,130,246,0.25),rgba(255,255,255,0))]"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-semibold tracking-tight">
            <span className="text-xl">Esteem</span>{" "}
            <span className="rounded-full bg-slate-900 px-2 py-1 text-xs font-bold text-white">
              Course
            </span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#kelas" className="hover:text-blue-600">
              Kelas
            </a>
            <a href="#harga" className="hover:text-blue-600">
              Harga
            </a>
            <a href="#testimoni" className="hover:text-blue-600">
              Testimoni
            </a>
            <a href="#kontak" className="hover:text-blue-600">
              Kontak
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Esteem%20Course,%20saya%20ingin%20daftar"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Daftar
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16" id="home">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <span>✨</span> Kursus Bahasa Inggris Modern
            </p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tingkatkan kemampuan{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Bahasa Inggris
              </span>{" "}
              Anda
            </h1>
            <p className="mb-8 text-slate-600">
              Belajar dengan kurikulum berbasis CEFR, tutor bersertifikat, dan
              jadwal fleksibel. Online atau offline—pilih yang paling cocok
              untuk Anda.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#kelas"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
              >
                Lihat Kelas
              </a>
              <a
                href="#harga"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Bandingkan Harga
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span>🎓 Tutor Bersertifikat</span>
              <span>🕒 Jadwal Fleksibel</span>
              <span>🧭 CEFR Aligned</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200 to-indigo-200 blur-2xl" />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  {
                    title: "Basic (A1–A2)",
                    text: "Dasar percakapan & tata bahasa",
                  },
                  {
                    title: "Intermediate (B1–B2)",
                    text: "Kelancaran & menulis profesional",
                  },
                  { title: "Advanced (C1)", text: "Academic & business" },
                  { title: "IELTS/TOEFL", text: "Strategi & simulasi tes" },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="font-semibold text-slate-900">{c.title}</p>
                    <p className="text-slate-600">{c.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-sm">Trial Class Minggu Ini</p>
                <p className="text-2xl font-bold">Gratis 1x Sesi</p>
                <p className="mt-1 text-sm/relaxed text-slate-300">
                  Kuota terbatas. Daftar via WhatsApp.
                </p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Esteem%20Course,%20saya%20ingin%20ikut%20trial"
                  className="mt-3 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Daftar Trial →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Tambahan Section lain seperti Features, Pricing, Testimoni, FAQ, Kontak === */}
      {/* 👉 Salin sisanya dari kode panjang yang sudah aku buat di atas */}
    </main>
  );
}
