import { motion } from "framer-motion";
import jakarta from "../assets/images/projects/jakarta.png";
import nihongo from "../assets/images/projects/nihongo.png";
import ranpo from "../assets/images/projects/ranpo.png";
import smk from "../assets/images/projects/smk.png";
import zinc from "../assets/images/projects/zinc.png";

const projects = [
    {
        title: "SMKN 46 Jakarta Website",
        description:
            "Developed the official school website for SMKN 46 Jakarta as a community contribution project, providing information, announcements, and school profiles for students and visitors.",
        tech: ["Laravel", "React", "Inertia", "MySQL"],
        tag: "college",
        tagColor: "var(--highlight-blue)",
        rotate: -2,
        tape: "yellow",
        image: smk,
        caption: "community project · 2026",
        url: "https://smkn46jaktim.sch.id",
    },
    {
        title: "Zinc Blog Platform",
        description:
            "A multi-role blogging platform featuring administrators, editors, authors, and readers, with content management and publishing workflows.",
        tech: ["Laravel", "React", "Inertia", "MySQL"],
        tag: "personal",
        tagColor: "var(--highlight-yellow)",
        rotate: 2,
        tape: "blue",
        image: zinc,
        caption: "personal project · 2025",
        url: "https://github.com/awiipp/zinc",
    },
    {
        title: "Ranpo API Testing",
        description:
            "A command-line API testing tool built in Go, featuring an interactive terminal user interface for managing and testing API requests.",
        tech: ["Go"],
        tag: "personal",
        tagColor: "var(--highlight-yellow)",
        rotate: -1.5,
        tape: "yellow",
        image: ranpo,
        caption: "open-source tool · 2026",
        url: "https://github.com/awiipp/ranpo",
    },
    {
        title: "Nihongo Quiz",
        description:
            "An interactive website introducing Japanese language and culture through quizzes and educational mini-games designed for beginners.",
        tech: ["React"],
        tag: "personal",
        tagColor: "var(--highlight-yellow)",
        rotate: 1,
        tape: "blue",
        image: nihongo,
        caption: "educational project · 2026",
        url: "https://nihongo-quizu.vercel.app",
    },
    {
        title: "RupaJakarta",
        description:
            "A multilingual website showcasing Jakarta and Betawi culture, available in Indonesian, English, and Japanese, complete with interactive quizzes.",
        tech: ["React"],
        tag: "personal",
        tagColor: "var(--highlight-yellow)",
        rotate: 1,
        tape: "blue",
        image: jakarta,
        caption: "cultural showcase · 2025",
        url: "https://rupajakarta.vercel.app",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen px-8 md:pt-24 pt-16"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="md:mb-24 mb-16 relative"
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
                        onClick={() =>
                            project.url !== "#" &&
                            window.open(project.url, "_blank", "noreferrer")
                        }
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
                                {/* Lihat overlay */}
                                <div
                                    className="absolute font-hand text-sm font-bold"
                                    style={{
                                        bottom: "0",
                                        right: "0",
                                        padding: "6px 12px",
                                        background:
                                            "linear-gradient(to left, rgba(26,39,68,0.65) 50%, transparent)",
                                        color: "var(--cream)",
                                        letterSpacing: "0.03em",
                                        pointerEvents: "none",
                                    }}
                                >
                                    → view
                                </div>
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
                        href="https://github.com/awiipp"
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
