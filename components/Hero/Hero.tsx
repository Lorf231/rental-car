import Link from "next/link";

const Hero = () => {
    return (
    <section className="bg-[url('/heroImage.png')] w-full h-screen bg-cover bg-no-repeat bg-center">
      <div >
        <div>
          <h1>Find your perfect rental car</h1>
          <p>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <Link href="/catalog">View Catalog</Link>
      </div>
    </section>
    )
}

export default Hero;