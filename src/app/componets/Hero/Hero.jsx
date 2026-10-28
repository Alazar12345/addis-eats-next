import "./Hero.css"
import Image from "next/image";
function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
             <h1>Authentic Ethiopan Taste Delivered To you
                </h1>
                <p>
                    Experiense Traditional Ethiopan Dishes made With fresh ingredients and authentic flavors.
                </p>
                <button>Explore menu</button>
            </div>
            <div className="hero-img">
                <Image 
                src="/Ethiopian.png"
                alt="ethiopan food bufe"
                width={1600}
                height={850}
                />

            </div>
        </section>
    )
}
export default Hero;