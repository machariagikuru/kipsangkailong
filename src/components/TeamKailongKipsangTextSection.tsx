"use client";

import { useEffect, useState } from "react";

// Countdown component with animated numbers
const Countdown = () => {
    const targetDate = new Date("2026-01-25T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = Date.now();
            const difference = targetDate - now;
            setTimeLeft(difference > 0 ? difference : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft <= 0) {
        return (
            <div className="text-lg md:text-xl font-semibold mb-4 text-primary animate-bounce">
                🎉 Election day is here!
            </div>
        );
    }

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return (
        <div className="text-lg md:text-xl font-semibold mb-4 flex flex-col items-center">
            <span className="mb-2">
                🗳️ Voting in Kailong Kipsang Edwin in
            </span>
            <span className="flex gap-2 text-red-600 font-extrabold text-2xl md:text-3xl tracking-wide animate-pulse">
                <span className="bg-primary/10 px-2 py-1 rounded-lg">{days}d</span>
                <span className="bg-primary/10 px-2 py-1 rounded-lg">{hours}h</span>
                <span className="bg-primary/10 px-2 py-1 rounded-lg">{minutes}m</span>
                <span className="bg-primary/10 px-2 py-1 rounded-lg">{seconds}s</span>
            </span>
        </div>
    );
};

// Animated Supporter Counter with floating effect
const FloatingDotsCounter = () => {
    const [count, setCount] = useState(0);
    const [dotCount, setDotCount] = useState(1);
    const fastTarget = 2436;
    const finalCount = 4372;

    useEffect(() => {
        let current = 0;
        let fastInterval: NodeJS.Timeout;
        let slowInterval: NodeJS.Timeout;

        fastInterval = setInterval(() => {
            current += 100;
            setCount(current);

            if (current >= fastTarget) {
                current = fastTarget;
                clearInterval(fastInterval);
                setCount(current);

                slowInterval = setInterval(() => {
                    current += 1;
                    setCount(current);

                    if (current >= finalCount) {
                        clearInterval(slowInterval);
                    }
                }, 2000);
            }
        }, 40);

        return () => {
            clearInterval(fastInterval);
            clearInterval(slowInterval);
        };
    }, []);

    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 500);
        return () => clearInterval(dotInterval);
    }, []);

    const loadingDots = ".".repeat(dotCount);

    return (
        <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-6 py-3 rounded-full shadow-xl animate-float">
            <span className="text-red-600 font-extrabold text-lg animate-bounce">{loadingDots}</span>
            <span className="text-red-600 font-extrabold text-base sm:text-lg animate-fade-in">
                {count.toLocaleString()} Numbers don't lie
                <br />
                <span className="text-primary font-semibold">and we are is still growing{loadingDots}</span>
            </span>
        </div>
    );
};

// Custom animation classes
const customStyles = `
@keyframes float {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-10px);}
  100% { transform: translateY(0px);}
}
.animate-float {
  animation: float 2.5s ease-in-out infinite;
}
@keyframes fade-in {
  0% { opacity: 0;}
  100% { opacity: 1;}
}
.animate-fade-in {
  animation: fade-in 1.5s ease-in;
}
`;

export const TeamKailongkipsangedwinTextSection = () => (
    <>
        <style>{customStyles}</style>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-accent/10 text-foreground transition-all duration-500">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight drop-shadow-lg animate-fade-in">
                    Fellow Teachers in Elgeyo Marakwet :
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed animate-fade-in">
                    We deserve a louder voice, stronger rights,<br />
                    And a reliable support that never fails us.<br/>
                    Let us rise together
                </p>
                <Countdown />
                <FloatingDotsCounter />
                <p className="text-xl md:text-2xl font-bold text-primary mb-8 mt-4 animate-float">
                    #Welcome To #TeamKipsangKailong4ES
                </p>
                <button
                    onClick={() => {
                        const el = document.getElementById("about");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg text-lg font-semibold animate-fade-in"
                    aria-label="Learn more about Kipsang Kailong Edwin's vision"
                >
                    Learn More
                </button>
            </div>
        </section>
    </>
);