import { motion } from "framer-motion";
import PhotoCard from "./PhotoCard";
import TerminalLine from "./TerminalLine";
import BridgeSection from "./BridgeSection";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
            delay,
        },
    }),
};

export default function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-8 pt-20"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                position: "relative",
            }}
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 items-center">
                <div className="md:order-2 md:mt-0 mt-[150px]">
                    <PhotoCard />
                </div>

                <div className="flex flex-col gap-6 pb-16 md:order-1">
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.1}
                        className="flex items-center gap-2 w-fit mt-5"
                    >
                        <span
                            className="font-hand text-sm px-3 py-1 rounded-full"
                            style={{
                                backgroundColor: "rgba(26,39,68,0.07)",
                                color: "var(--navy)",
                                border: "1px solid rgba(26,39,68,0.12)",
                            }}
                        >
                            Jakarta · Indonesia
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.2}
                        className="font-hand leading-tight"
                        style={{
                            fontSize: "clamp(3.5rem, 7vw, 6rem)",
                            color: "var(--navy)",
                            fontWeight: 700,
                            lineHeight: 1.05,
                        }}
                    >
                        Sayid Arip
                    </motion.h1>

                    {/* Role tag */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.35}
                    >
                        <span
                            className="highlight-pink font-hand text-2xl"
                            style={{ fontWeight: 500 }}
                        >
                            Fullstack · Backend Developer
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.45}
                        className="font-hand text-xl leading-relaxed font-semibold"
                        style={{
                            color: "#374151",
                            maxWidth: "480px",
                        }}
                    >
                        Fresh graduate in Software Engineering with experience
                        building{" "}
                        <span className="highlight" style={{ fontWeight: 600 }}>
                            REST APIs & fullstack web apps
                        </span>
                        . Proficient in{" "}
                        <span
                            className="highlight-yellow"
                            style={{ fontWeight: 600 }}
                        >
                            Laravel & React.js
                        </span>
                        , with growing experience in Go. Comfortable working
                        across the stack and collaborating with cross-functional
                        teams.
                    </motion.p>

                    {/* Terminal */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.7}
                        className="mt-4"
                    >
                        <TerminalLine />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.85}
                        className="flex items-center gap-4 mt-2"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="font-hand text-lg md:px-7 md:py-3 px-4 py-2 rounded"
                            style={{
                                backgroundColor: "var(--navy)",
                                color: "white",
                                textDecoration: "none",
                                fontWeight: 700,
                                boxShadow: "4px 4px 0 rgba(26,39,68,0.15)",
                                display: "inline-block",
                            }}
                        >
                            see my work →
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="font-hand text-lg md:px-7 md:py-3 px-3.5 py-1.5 rounded"
                            style={{
                                backgroundColor: "transparent",
                                color: "var(--navy)",
                                textDecoration: "none",
                                fontWeight: 600,
                                border: "2px solid var(--navy)",
                                display: "inline-block",
                            }}
                        >
                            get in touch
                        </motion.a>
                    </motion.div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "-180px",
                        right: 0,
                        left: 0,
                        zIndex: 5,
                        justifyContent: "flex-end",
                        overflow: "hidden",
                        pointerEvents: "none",
                    }}
                    className="hidden md:flex"
                >
                    <BridgeSection />
                </div>
            </div>
        </section>
    );
}
