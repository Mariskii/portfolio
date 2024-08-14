import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselImagesProps {
    images: string[];
}
 
export function CarouselImages({images}: CarouselImagesProps) {
  return (
    <Carousel 
        className="w-full max-w-xs justify-center"
        opts={{ 
            align: "start",
            loop: true,
         }}>
        <CarouselContent>
            {images.map(image => (
                <CarouselItem>
                    <div className="p-1">
                        <img className="rounded-xl" src={image} alt="project-img" />             
                    </div>
                </CarouselItem>
            ))}    
        </CarouselContent>
    </Carousel>
  )
}