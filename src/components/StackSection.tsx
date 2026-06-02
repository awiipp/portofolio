import { motion } from "framer-motion";

const stacks = [
    {
        category: "Backend",
        pin: "var(--red-accent)",
        rotate: -1.5,
        cards: [
            { name: "Laravel", icon: "🔴", level: "proficient" },
            { name: "PHP", icon: "🐘", level: "proficient" },
            { name: "Go", icon: "🐹", level: "learning" },
            { name: "REST API", icon: "⚡", level: "proficient" },
        ],
    },
    {
        category: "Frontend",
        pin: "var(--highlight-blue)",
        rotate: 1,
        cards: [
            { name: "React.js", icon: "⚛️", level: "proficient" },
            { name: "Vue.js", icon: "💚", level: "learning" },
            { name: "TypeScript", icon: "🔷", level: "familiar" },
            { name: "Tailwind", icon: "🌊", level: "proficient" },
        ],
    },
    {
        category: "Database",
        pin: "var(--highlight-yellow)",
        rotate: -0.5,
        cards: [
            { name: "MySQL", icon: "🐬", level: "proficient" },
            { name: "PostgreSQL", icon: "🐘", level: "familiar" },
        ],
    },
    {
        category: "Tools",
        pin: "var(--highlight-pink)",
        rotate: 2,
        cards: [
            { name: "Git", icon: "🌿", level: "proficient" },
            { name: "Postman", icon: "📮", level: "proficient" },
            { name: "Docker", icon: "🐳", level: "learning" },
            { name: "Linux", icon: "🐧", level: "learning" },
        ],
    },
];

const levelColor: Record<string, string> = {
    proficient: "var(--highlight-yellow)",
    familiar: "var(--highlight-blue)",
    learning: "var(--highlight-pink)",
};

export default function StackSection() {
    return (
        <section
            id="stack"
            className="min-h-screen px-8 pt-24"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-20 relative"
            >
                <div
                    className="tape absolute"
                    style={{
                        top: "-10px",
                        left: "16px",
                        width: "60px",
                        transform: "rotate(-3deg)",
                        zIndex: 10,
                    }}
                />
                <div
                    className="inline-block"
                    style={{
                        background: "var(--cream)",
                        border: "2px solid var(--navy)",
                        padding: "8px 20px",
                        transform: "rotate(-1deg)",
                        boxShadow: "3px 3px 0 var(--navy)",
                    }}
                >
                    <h2
                        className="font-hand md:text-4xl text-3xl font-bold"
                        style={{ color: "var(--navy)" }}
                    >
                        my stack ✦
                    </h2>
                </div>
                <p
                    className="font-hand text-lg mt-6 ml-1"
                    style={{ color: "#64748b" }}
                >
                    tools i work with day to day ~
                </p>

                {/* Legend */}
                <div className="flex gap-4 mt-4 ml-1">
                    {Object.entries(levelColor).map(([level, color]) => (
                        <span
                            key={level}
                            className="font-hand text-sm px-2 py-0.5 rounded"
                            style={{
                                background: color,
                                color: "var(--navy)",
                                fontWeight: 600,
                            }}
                        >
                            {level}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Corkboard */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    background: "#c8a882",
                    borderRadius: "4px",
                    padding: "48px 40px",
                    boxShadow:
                        "inset 0 2px 12px rgba(0,0,0,0.15), 0 8px 32px rgba(26,39,68,0.12), 4px 4px 0 rgba(26,39,68,0.08)",
                    backgroundImage: `
                        radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.06) 0%, transparent 60%),
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 4px,
                            rgba(0,0,0,0.015) 4px,
                            rgba(0,0,0,0.015) 8px
                        )
                    `,
                    border: "12px solid #a07850",
                    position: "relative",
                }}
            >
                {/* Cork texture dots */}
                {Array.from({ length: 24 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            borderRadius: "50%",
                            background: "rgba(0,0,0,0.08)",
                            top: `${10 + ((i * 37) % 85)}%`,
                            left: `${5 + ((i * 19) % 90)}%`,
                            pointerEvents: "none",
                        }}
                    />
                ))}

                {/* Cards grid */}
                <div
                    className="grid gap-8"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(220px, 1fr))",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {stacks.map((stack, si) => (
                        <motion.div
                            key={stack.category}
                            initial={{
                                opacity: 0,
                                y: 20,
                                rotate: stack.rotate,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: stack.rotate,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: si * 0.1,
                            }}
                            whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
                            style={{ position: "relative" }}
                        >
                            {/* Pin */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-14px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 10,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.3))",
                                }}
                            >
                                {/* Pin head */}
                                <div
                                    style={{
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "50%",
                                        background: stack.pin,
                                        border: "2px solid rgba(0,0,0,0.15)",
                                        boxShadow:
                                            "inset 0 -2px 4px rgba(0,0,0,0.2), inset 2px 2px 3px rgba(255,255,255,0.4)",
                                    }}
                                />
                                {/* Pin needle */}
                                <div
                                    style={{
                                        width: "2px",
                                        height: "10px",
                                        background:
                                            "linear-gradient(to bottom, #888, #555)",
                                        borderRadius: "0 0 2px 2px",
                                    }}
                                />
                            </div>

                            {/* Card */}
                            <div
                                style={{
                                    background: "#fffef5",
                                    padding: "20px 16px 16px",
                                    boxShadow:
                                        "2px 4px 12px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)",
                                }}
                            >
                                {/* Category label */}
                                <p
                                    className="font-hand font-bold text-lg mb-3 pb-2"
                                    style={{
                                        color: "var(--navy)",
                                        borderBottom:
                                            "1.5px dashed rgba(26,39,68,0.15)",
                                    }}
                                >
                                    {stack.category}
                                </p>

                                {/* Tech items */}
                                <div className="flex flex-col gap-2">
                                    {stack.cards.map((card, ci) => (
                                        <motion.div
                                            key={card.name}
                                            initial={{ opacity: 0, x: -6 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: si * 0.1 + ci * 0.06,
                                            }}
                                            className="flex items-center justify-between"
                                        >
                                            <span
                                                className="font-hand text-base"
                                                style={{ color: "var(--navy)" }}
                                            >
                                                {card.icon} {card.name}
                                            </span>
                                            <span
                                                className="font-hand text-xs px-1.5 py-0.5 rounded"
                                                style={{
                                                    background:
                                                        levelColor[card.level],
                                                    color: "var(--navy)",
                                                    fontWeight: 600,
                                                    fontSize: "0.6rem",
                                                    letterSpacing: "0.03em",
                                                }}
                                            >
                                                {card.level}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Ruled lines subtle */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage:
                                            "repeating-linear-gradient(transparent, transparent 27px, rgba(148,163,184,0.2) 27px, rgba(148,163,184,0.2) 28px)",
                                        backgroundPositionY: "52px",
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom note */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-hand text-sm mt-8 text-center"
                style={{ color: "#94a3b8", fontStyle: "italic" }}
            >
                always learning, always building ~
            </motion.p>
        </section>
    );
}
