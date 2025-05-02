import { useEffect, useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center bg-fixed"
      style={{ backgroundImage: "url('/Home.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative w-2/3 text-center">
        <p
          className={`cinzel-bold text-6xl text-white drop-shadow-lg transition-all duration-1000 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          Divyansh Kashyap
        </p>

        {/* Optional tagline */}
        <p
          className={`mt-4 text-xl text-white font-light tracking-wide transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Full-Stack Developer | Clean Code Enthusiast
        </p>
      </div>
    </div>
  );
}

export default Home;
