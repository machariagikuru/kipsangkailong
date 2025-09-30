"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/slide1.jpg",
        alt: "Kailong Kipsang Campaign",
    },
    {
        id: 2,
        image: "/images/slide2.jpg",
        alt: "Transparent Leadership",
    },
    {
        id: 3,
        image: "/images/slide3.jpg",
        alt: "Empowering Teachers",
    },
];

export const TeamKailongKipsangImageSection = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [current, length]);

    // Always download file
    const handleShare = (url: string, filename: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-20 lg:py-32 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
                <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Top Left Logo */}
                    <img
                        src="/images/kuppet-logo.jpg"
                        alt="KUPPET Logo Left"
                        className="absolute top-4 left-4 w-16 h-16 object-contain opacity-80 z-20"
                    />
                    {/* Top Right Logo */}
                    <img
                        src="/images/kuppet-logo.jpg"
                        alt="KUPPET Logo Right"
                        className="absolute top-4 right-4 w-16 h-16 object-contain opacity-80 z-20"
                    />

                    {/* Bottom Left Share Button */}
                    <div className="absolute bottom-4 left-4 flex flex-col items-center z-30">
                        <button
                            onClick={() =>
                                handleShare("/images/poster.png", "/images/poster.jpg")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base font-semibold"
                        >
                            <Share2 className="w-5 h-5" />
                            Poster
                        </button>
                        <span className="mt-1 text-xs text-primary font-bold text-center">Download</span>
                    </div>

                    {/* Bottom Right Share Button */}
                    <div className="absolute bottom-4 right-4 flex flex-col items-center z-30">
                        <button
                            onClick={() =>
                                handleShare("https://chat.whatsapp.com/L2smgkT5OYoCxn0btO9j2i?", "https://chat.whatsapp.com/L2smgkT5OYoCxn0btO9j2i?")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base font-semibold"
                        >
                            <Share2 className="w-5 h-5" />
                            Group
                        </button>
                        <span className="mt-1 text-xs text-primary font-bold text-center">Join</span>
                    </div>

                    {/* Image Slides */}
                    <div className="w-full h-full overflow-hidden rounded-xl shadow-lg border border-border bg-white relative">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                aria-hidden={index !== current}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-5" : "bg-primary/50"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
