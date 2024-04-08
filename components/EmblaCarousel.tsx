import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { slider } from "@/config/slider";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { title } from "./primitives";

import { CiShoppingCart } from "react-icons/ci";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slider.map((item) => (
          <div className="embla__slide" key={item.name}>
            <section className="flex flex-col md:flex-row justify-between items-center p-0">
              <div className="flex-1">
                <h2 className={title({ size: "sm" })}>{item.name}</h2>
                <br />
                <br />
                <strong className="text-[#BDC5C5] font-medium">
                  {item.description}
                </strong>
                <br />
                <br />
                <p className="text-[#BDC5C5] font-extralight">{item.more}</p>
                <br />
                <strong className="text-xl text-[#26BCC6]">
                  CLP ${item.price}
                </strong>
                <br />
                <Button
                  className="mt-5 bg-[#26BCC6] px-5"
                  startContent={<CiShoppingCart size={25} />}
                >
                  Comprar
                </Button>
              </div>

              <div className="flex img-container">
                <h3
                  className={`absolute ml-[3%] mt-[55%] sm:mt[19%] md:mt-[11%] block z-[-1] rotate-[calc(35deg)] text-center text-[95px] sm:text-[100px] md:text-[150px] text-[#26BCC6] underline-offset-8 transition sm:text-2xl md:text-5xl justify-center font-[Biker]`}
                >
                  {item.backText}
                </h3>
                <Image
                  src={"/imgs/slider/" + item.img}
                  alt={item.name}
                  width={550}
                  height={700}
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
