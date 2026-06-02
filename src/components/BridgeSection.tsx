import { motion } from "framer-motion";

const lines = [
    "A little note to myself,",
    "Not everything needs to be perfect.",
    "Every project started with",
    '"let\'s just try it"',
    "and ended with something new learned.",
    "There is still a lot to explore,",
    "but these projects mark",
    "how far I've come so far.",
];

export default function BridgeSection() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                transformOrigin: "right center",
                position: "relative",
                width: "60vw",
                marginRight: "-180px",
                background: "#fffef5",
                padding: "36px 120px 36px 56px",
                boxShadow: "-4px 4px 32px rgba(26,39,68,0.08)",
                pointerEvents: "all",
            }}
        >
            {/* Ruled lines */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 31px, #e2e8f0 31px, #e2e8f0 32px)",
                    backgroundPositionY: "36px",
                    pointerEvents: "none",
                    opacity: 0.7,
                }}
            />

            {/* Red margin line — di kiri teks, kanan dari holes */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "48px",
                    width: "1.5px",
                    background: "rgba(230,57,70,0.4)",
                    pointerEvents: "none",
                }}
            />

            {/* Binder holes — di tepi kiri kertas */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                }}
            >
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: "var(--cream)",
                            border: "1.5px solid #cbd5e1",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.12)",
                        }}
                    />
                ))}
            </div>

            {/* Tape */}
            <div
                className="tape absolute"
                style={{
                    top: "-10px",
                    left: "80px",
                    width: "60px",
                    transform: "rotate(-2deg)",
                    zIndex: 10,
                }}
            />

            {/* Text lines */}
            <div style={{ position: "relative", zIndex: 2 }}>
                {lines.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: i * 0.06,
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className={`font-hand ${i == 3 ? "highlight" : ""}`}
                        style={{
                            fontSize: "1rem",
                            color: "var(--navy)",
                            lineHeight: "32px",
                            margin: 0,
                            opacity: i > 5 ? 0.35 : 0.85,
                            fontWeight: i === 0 ? 800 : 400,
                        }}
                    >
                        {line}
                    </motion.p>
                ))}
            </div>

            {/* Torn bottom edge */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    right: 0,
                    height: "12px",
                    background: "var(--cream)",
                    clipPath:
                        "polygon(0% 0%, 2% 100%, 4% 20%, 6% 90%, 8% 10%, 10% 80%, 12% 30%, 14% 100%, 16% 20%, 18% 70%, 20% 0%, 22% 90%, 24% 40%, 26% 100%, 28% 10%, 30% 80%, 32% 30%, 34% 100%, 36% 0%, 38% 90%, 40% 20%, 42% 100%, 44% 30%, 46% 80%, 48% 0%, 50% 100%, 52% 20%, 54% 90%, 56% 10%, 58% 80%, 60% 30%, 62% 100%, 64% 0%, 66% 90%, 68% 20%, 70% 100%, 72% 30%, 74% 80%, 76% 0%, 78% 90%, 80% 40%, 82% 100%, 84% 10%, 86% 80%, 88% 30%, 90% 100%, 92% 0%, 94% 90%, 96% 20%, 98% 100%, 100% 0%)",
                }}
            />
        </motion.div>
    );
}
