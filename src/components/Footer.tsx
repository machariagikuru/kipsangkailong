import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground py-6 border-t border-primary mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2 text-center">
                <p className="text-sm sm:text-base flex flex-wrap justify-center items-center gap-1 leading-relaxed">
                    Crafted with
                    <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                    by{" "}
                    <a
                        href="https://wa.me/254703222523" // Your WhatsApp
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 font-semibold hover:underline transition"
                    >
                        Macharia
                    </a>{" "}
                    in honor of{" "}
                    <a
                        href="https://wa.me/254720470328" // Kailong Kipsang WhatsApp
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 font-semibold hover:underline transition"
                    >
                        Kailong Kipsang
                    </a>
                </p>
                <p className="text-xs text-primary-foreground/70">
                    &copy; 2025 All rights reserved.
                </p>
            </div>
        </footer>
    );
};
