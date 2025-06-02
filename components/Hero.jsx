// app/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex flex-col items-center justify-center text-center 
        text-white px-6 
        h-screen
      "
    >
      <div className="bg-black/50 p-6 rounded-md max-w-3xl w-full shadow-2xl">
        <h1
          className="
            mb-4 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-extrabold hero-heading
          "
        >
          Professional Web
        </h1>

        <p
          className="
            mb-8 
            text-base sm:text-lg md:text-xl lg:text-2xl 
            font-medium hero-subheading
          "
        >
          Personal Touch
        </p>

        <a
          href="#services"
          className="
            inline-block 
            rounded-full bg-teal-500 px-5 py-2 text-sm
            sm:px-6 sm:py-3 sm:text-base 
            md:px-8 md:py-3 md:text-lg 
            lg:px-10 lg:py-4 lg:text-xl
            font-semibold hover:bg-teal-600 transition
          "
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}