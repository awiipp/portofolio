import { motion } from "framer-motion";

const projects = [
    {
        title: "Admin Panel CMS",
        description:
            "Internal CMS for a logistics company. Role-based access, data export, and real-time dashboard.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        tag: "internship",
        tagColor: "var(--highlight-pink)",
        rotate: -2,
        tape: "yellow",
        image: "https://placehold.co/400x280/e2e8f0/94a3b8?text=CMS",
        caption: "admin panel, 2024",
    },
    {
        title: "REST API Service",
        description:
            "RESTful API for a mobile app backend. Auth, CRUD, and payment gateway integration.",
        tech: ["Go", "PostgreSQL", "JWT"],
        tag: "personal",
        tagColor: "var(--highlight-yellow)",
        rotate: 2,
        tape: "blue",
        image: "https://placehold.co/400x280/dbeafe/93c5fd?text=API",
        caption: "go backend, 2024",
    },
    {
        title: "E-Commerce Fullstack",
        description:
            "Fullstack web app with product catalog, cart, checkout, and admin dashboard.",
        tech: ["React.js", "Laravel", "MySQL"],
        tag: "college",
        tagColor: "var(--highlight-blue)",
        rotate: -1.5,
        tape: "yellow",
        image: "https://placehold.co/400x280/fce7f3/f9a8d4?text=Shop",
        caption: "final project, 2023",
    },
    {
        title: "Inventory System",
        description:
            "Internal tool for stock tracking, purchase orders, and supplier data. Live in production.",
        tech: ["PHP", "Laravel", "MySQL"],
        tag: "internship",
        tagColor: "var(--highlight-pink)",
        rotate: 1,
        tape: "blue",
        image: "https://placehold.co/400x280/fef9c3/fde68a?text=Inventory",
        caption: "production app, 2024",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen px-8 pt-24"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-24 relative"
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
                        className="font-hand text-4xl font-bold"
                        style={{ color: "var(--navy)" }}
                    >
                        my projects ✦
                    </h2>
                </div>
                <p
                    className="font-hand text-lg mt-6 ml-1"
                    style={{ color: "#64748b" }}
                >
                    things i've built, shipped, and learned from ~
                </p>
            </motion.div>

            {/* Cards grid */}
            <div
                className="grid gap-16"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px, 1fr))",
                    alignItems: "start",
                }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40, rotate: project.rotate }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: project.rotate,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                            delay: i * 0.12,
                        }}
                        whileHover={{
                            rotate: 0,
                            scale: 1.03,
                            y: -8,
                            zIndex: 20,
                        }}
                        className="relative"
                        style={{ cursor: "pointer" }}
                    >
                        {/* Tape */}
                        <div
                            className={`${project.tape === "blue" ? "tape-blue" : ""} tape absolute`}
                            style={{
                                top: "-12px",
                                left: "50%",
                                transform: `translateX(-50%) rotate(${i % 2 === 0 ? "-2deg" : "2deg"})`,
                                width: "70px",
                                zIndex: 20,
                            }}
                        />

                        <div
                            className="photo-print"
                            style={{
                                width: "100%",
                                padding: "14px 14px 0 14px",
                                background: "white",
                            }}
                        >
                            {/* Image area */}
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "4/3",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                                {/* Vignette */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.12) 100%)",
                                        pointerEvents: "none",
                                    }}
                                />
                                {/* Tag badge */}
                                <span
                                    className="font-hand text-xs px-2 py-0.5 rounded-full absolute"
                                    style={{
                                        top: "10px",
                                        right: "10px",
                                        backgroundColor: project.tagColor,
                                        color: "var(--navy)",
                                        fontWeight: 600,
                                        border: "1px solid rgba(26,39,68,0.1)",
                                    }}
                                >
                                    {project.tag}
                                </span>
                            </div>

                            {/* Bottom text — photocard style */}
                            <div style={{ padding: "12px 4px 14px" }}>
                                <p
                                    className="font-hand font-bold text-xl"
                                    style={{
                                        color: "var(--navy)",
                                        lineHeight: 1.2,
                                        marginBottom: "6px",
                                    }}
                                >
                                    {project.title}
                                </p>
                                <p
                                    className="font-hand text-sm leading-snug"
                                    style={{
                                        color: "#64748b",
                                        marginBottom: "10px",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="font-hand text-xs px-2 py-0.5 rounded"
                                            style={{
                                                backgroundColor:
                                                    "rgba(26,39,68,0.07)",
                                                color: "var(--navy)",
                                                border: "1px solid rgba(26,39,68,0.1)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {/* Caption */}
                                <p
                                    className="font-hand text-center mt-3"
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "#aaa",
                                        fontStyle: "italic",
                                        borderTop:
                                            "1px dashed rgba(26,39,68,0.12)",
                                        paddingTop: "10px",
                                    }}
                                >
                                    ~ {project.caption} ~
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-14 flex justify-center"
            >
                <span
                    className="font-hand text-base"
                    style={{
                        color: "#94a3b8",
                        fontStyle: "italic",
                        transform: "rotate(-1deg)",
                        display: "inline-block",
                    }}
                >
                    more on{" "}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="highlight"
                        style={{ fontWeight: 600, color: "var(--navy)" }}
                    >
                        github →
                    </a>
                </span>
            </motion.div>
        </section>
    );
}
