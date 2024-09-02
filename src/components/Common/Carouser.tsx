import * as React from "react"
import Autoplay from "embla-carousel-autoplay" 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface CarouselImagesProps {
    images: string[];
}
 
export function CarouselImages({images}: CarouselImagesProps) {
  return (
    <Carousel 
        className="w-full max-w-sm justify-center"
        opts={{ 
            align: "start",
            loop: true,
         }}
         plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}>
        <CarouselContent>
            {images.map(image => (
                <CarouselItem>
                    <div className="p-1">
                        <img loading="lazy" className="rounded-xl" src={image} alt="project-img" />             
                    </div>
                </CarouselItem>
            ))}    
        </CarouselContent>
    </Carousel>
  )
}