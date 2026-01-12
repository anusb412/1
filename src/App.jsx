import Hero1 from './assets/GlowNest/Hero1.jpeg'
import Hero2 from './assets/GlowNest/Hero2.jpeg'
import Hero3 from './assets/GlowNest/Hero3.jpeg'

export default function App() {
  return (
    <div className="bg-[var(--gn-black)] text-[var(--gn-white)] overflow-x-hidden">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        <img
          src={Hero1}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt=""
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Smarter Homes.<br /> Effortless Living.
          </h1>
          <p className="text-gray-300 mb-8">
            Control lighting, climate, and security from one simple app — built for modern living.
          </p>
          <button className="bg-[var(--gn-amber)] text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
            Get Early Access
          </button>
        </div>
      </section>
      <section className="bg-[var(--gn-gray)] py-28 px-6 relative">
        <img
          src={Hero3}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt=""
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            ["Instant Control", "Manage everything from your phone."],
            ["Energy Saving", "Reduce power use automatically."],
            ["Secure Living", "Real-time alerts & smart locks."]
          ].map(([title, text]) => (
            <div key={title} className="p-10 rounded-2xl bg-black/60 backdrop-blur shadow-2xl">
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative py-28 px-6 text-center">
        <img
          src={Hero2}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt=""
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Smart Home Owners
          </h2>
          <p className="text-gray-300 mb-10">
            Join thousands upgrading their homes with GlowNest.
          </p>
          <button className="bg-[var(--gn-amber)] text-black px-12 py-4 rounded-xl font-bold hover:scale-105 transition">
            Join the Waitlist
          </button>
        </div>
      </section>
    </div>
  );
}
