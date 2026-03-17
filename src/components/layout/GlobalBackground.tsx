"use client";

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Base Background Color */}
            <div className="absolute inset-0 bg-white dark:bg-[#020617]" />
            
            {/* Clean Premium Gradient */}
            <div 
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(circle at 70% 40%, rgba(139,92,246,0.08), transparent 40%)`
                }}
            />

            {/* Subtle Noise for Texture */}
            <div 
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
