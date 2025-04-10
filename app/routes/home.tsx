// app/routes/home.tsx
export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/bg-abstract.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Jonathan Park
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Marketing Advisor & Full-Stack Developer
        </p>

        <a
          href="/projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg font-semibold transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
