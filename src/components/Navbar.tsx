import { motion } from "framer-motion";

const navItems = ["home", "projects", "stack"];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 md:py-2 py-4"
            style={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(250,249,246,0.85)",
            }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div
                    className="font-hand text-2xl font-bold"
                    style={{ color: "var(--navy)" }}
                >
                    ~/<span style={{ color: "var(--red-accent)" }}>awiipp</span>
                </div>

                {/* Nav links */}
                <div className="flex items-center md:gap-8 gap-4">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item}`}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                            className="font-hand text-lg relative group"
                            style={{
                                color: i === 0 ? "var(--navy)" : "#64748b",
                                textDecoration: "none",
                                fontWeight: i === 0 ? 600 : 400,
                            }}
                        >
                            {item}
                            {i === 0 && (
                                <span
                                    className="absolute -bottom-1 left-0 w-full h-0.5 rounded"
                                    style={{
                                        backgroundColor: "var(--red-accent)",
                                    }}
                                />
                            )}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 rounded transition-all duration-300 group-hover:w-full"
                                style={{ backgroundColor: "var(--navy-light)" }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="font-hand text-sm px-5 py-2 rounded"
                    style={{
                        backgroundColor: "var(--navy)",
                        color: "white",
                        textDecoration: "none",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                    }}
                >
                    Say hi!
                </motion.a>
            </div>
        </motion.nav>
    );
}
