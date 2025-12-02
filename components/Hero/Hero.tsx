import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/heroImage.png')] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 text-center pb-24 md:pb-32">
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
            Find your perfect rental car
          </h1>
          <p className="text-lg font-medium text-gray-200 md:text-xl drop-shadow-md">
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        
        <Link 
          href="/catalog" 
          className="mt-8 px-10 py-3 button"
        >
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default Hero;