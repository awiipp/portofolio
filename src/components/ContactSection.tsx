import { motion } from "framer-motion";
import { useState } from "react";

const contacts = [
    {
        label: "github",
        href: "https://github.com/awiipp",
        color: "var(--highlight-yellow)",
        iconColor: "#b45309",
        rotate: -8,
    },
    {
        label: "linkedin",
        href: "https://linkedin.com",
        color: "var(--highlight-blue)",
        iconColor: "#1d4ed8",
        rotate: 3,
    },
    {
        label: "email",
        href: "mailto:sayid@email.com",
        color: "var(--highlight-pink)",
        iconColor: "#be185d",
        rotate: -4,
    },
];

const icons = {
    github: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    email: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    ),
};

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="min-h-screen px-8 py-24 flex flex-col items-center justify-center"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                position: "relative",
            }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-14 relative"
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
                        say hi! ✦
                    </h2>
                </div>
            </motion.div>

            {/* Main envelope / letter card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                }}
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "640px",
                }}
            >
                {/* Tape top */}
                <div
                    className="tape-blue tape absolute"
                    style={{
                        top: "-12px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(1deg)",
                        width: "80px",
                        zIndex: 10,
                    }}
                />

                {/* Letter paper */}
                <div
                    className="photo-print"
                    style={{
                        background: "#fffef5",
                        padding: "40px 40px 32px",
                        position: "relative",
                        overflow: "visible",
                    }}
                >
                    {/* Ruled lines */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "repeating-linear-gradient(transparent, transparent 31px, #e2e8f0 31px, #e2e8f0 32px)",
                            backgroundPositionY: "48px",
                            opacity: 0.5,
                            pointerEvents: "none",
                        }}
                    />

                    {/* Red margin line */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "32px",
                            width: "1.5px",
                            background: "rgba(230,57,70,0.3)",
                            pointerEvents: "none",
                        }}
                    />

                    <div
                        className="pl-3"
                        style={{ position: "relative", zIndex: 2 }}
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="font-hand text-2xl mb-6"
                            style={{
                                color: "var(--navy)",
                                fontWeight: 600,
                                lineHeight: "32px",
                            }}
                        >
                            Dear visitor,
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="font-hand text-xl leading-relaxed mb-8"
                            style={{ color: "#374151", lineHeight: "32px" }}
                        >
                            Whether you have a project in mind, want to
                            collaborate, or just want to chat — my inbox is
                            always open. Let's build something{" "}
                            <span
                                className="highlight"
                                style={{ fontWeight: 600 }}
                            >
                                cool together
                            </span>
                            . ✦
                        </motion.p>

                        {/* Contact links as sticky notes */}
                        <div className="flex gap-6 mb-8 mt-2">
                            {contacts.map((c, i) => (
                                <motion.a
                                    key={c.label}
                                    href={c.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45 + i * 0.08 }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    whileTap={{ scale: 0.93 }}
                                    title={c.label}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "6px",
                                        textDecoration: "none",
                                        transform: `rotate(${c.rotate}deg)`,
                                    }}
                                >
                                    {/* Stamp lingkaran */}
                                    <div
                                        style={{
                                            width: "72px",
                                            height: "72px",
                                            borderRadius: "50%",
                                            background: c.color,
                                            border: `2.5px dashed ${c.iconColor}40`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: c.iconColor,
                                            boxShadow:
                                                "2px 3px 0 rgba(26,39,68,0.1)",
                                            position: "relative",
                                        }}
                                    >
                                        {/* Ring dalam */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: "5px",
                                                borderRadius: "50%",
                                                border: `1px solid ${c.iconColor}30`,
                                            }}
                                        />
                                        {icons[c.label as keyof typeof icons]}
                                    </div>
                                    <span
                                        className="font-hand text-xs font-bold"
                                        style={{
                                            color: "#94a3b8",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {c.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Sign off */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="font-hand text-lg"
                            style={{ color: "var(--navy)", lineHeight: "32px" }}
                        >
                            Warmly,
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.75 }}
                            className="font-hand text-2xl font-bold"
                            style={{ color: "var(--navy)", lineHeight: "32px" }}
                        >
                            Sayid ✦
                        </motion.p>
                    </div>

                    <motion.a
                        whileHover={{ rotate: -2, scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        initial={{ rotate: 3 }}
                        animate={{ rotate: 3 }}
                        style={{
                            position: "absolute",
                            bottom: "28px",
                            right: "32px",
                            textDecoration: "none",
                            cursor: "pointer",
                            zIndex: 30,
                            display: "block",
                        }}
                    >
                        <div
                            style={{
                                width: "72px",
                                background: "var(--highlight-yellow)",
                                padding: "6px",
                                boxShadow: "2px 3px 8px rgba(26,39,68,0.15)",
                                backgroundImage: `
                                    radial-gradient(circle at 0% 50%, transparent 6px, var(--highlight-yellow) 6px),
                                    radial-gradient(circle at 100% 50%, transparent 6px, var(--highlight-yellow) 6px),
                                    radial-gradient(circle at 50% 0%, transparent 6px, var(--highlight-yellow) 6px),
                                    radial-gradient(circle at 50% 100%, transparent 6px, var(--highlight-yellow) 6px)
                                `,
                                outline: "3px dashed rgba(26,39,68,0.15)",
                                outlineOffset: "-8px",
                                transform: "rotate(3deg)",
                            }}
                        >
                            <div
                                style={{
                                    background: "var(--navy)",
                                    padding: "8px 6px 6px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "3px",
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    width="28"
                                    height="28"
                                >
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span
                                    className="font-hand font-bold"
                                    style={{
                                        color: "white",
                                        fontSize: "0.5rem",
                                        letterSpacing: "0.1em",
                                    }}
                                >
                                    INDONESIA
                                </span>
                            </div>

                            <p
                                className="font-hand font-bold text-center"
                                style={{
                                    fontSize: "0.6rem",
                                    color: "var(--navy)",
                                    marginTop: "4px",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                JKT · 2026
                            </p>
                        </div>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
