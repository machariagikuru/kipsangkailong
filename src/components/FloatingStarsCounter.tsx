import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const FloatingStarsCounter = () => {
    const [count, setCount] = useState(0);
    const fastTarget = 2436;
    const finalCount = 4372;

    useEffect(() => {
        let current = 0;
        let fastInterval: NodeJS.Timeout;
        let slowInterval: NodeJS.Timeout;

        // Step 1: Count quickly to 4000
        fastInterval = setInterval(() => {
            current += 100;
            if (current >= fastTarget) {
                current = fastTarget;
                clearInterval(fastInterval);

                // Step 2: Slow count by +1 to 5372
                slowInterval = setInterval(() => {
                    current += 1;
                    setCount(current);

                    if (current >= finalCount) {
                        clearInterval(slowInterval);
                    }
                }, 2000); // Slow step (50ms per increment)
            }
            setCount(current);
        }, 40); // Fast step (every 40ms, +100)

        return () => {
            clearInterval(fastInterval);
            clearInterval(slowInterval);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-bounce hover:animate-none">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-sm sm:text-base">
                {count.toLocaleString()}  #KipsangKailong4ES in numbers

            </span>
        </div>
    );
};
