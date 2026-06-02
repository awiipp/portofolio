import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer style={{ position: "relative", overflow: "hidden" }}>
            <div
                style={{
                    width: "100%",
                    height: "20px",
                    background: "var(--navy)",
                    clipPath:
                        "polygon(0% 100%, 1% 20%, 2% 80%, 3% 10%, 4% 70%, 5% 30%, 6% 90%, 7% 15%, 8% 75%, 9% 40%, 10% 100%, 11% 25%, 12% 85%, 13% 5%, 14% 65%, 15% 35%, 16% 95%, 17% 20%, 18% 80%, 19% 10%, 20% 70%, 21% 30%, 22% 90%, 23% 15%, 24% 75%, 25% 40%, 26% 100%, 27% 25%, 28% 85%, 29% 5%, 30% 65%, 31% 35%, 32% 95%, 33% 20%, 34% 80%, 35% 10%, 36% 70%, 37% 30%, 38% 90%, 39% 15%, 40% 75%, 41% 40%, 42% 100%, 43% 25%, 44% 85%, 45% 5%, 46% 65%, 47% 35%, 48% 95%, 49% 20%, 50% 80%, 51% 10%, 52% 70%, 53% 30%, 54% 90%, 55% 15%, 56% 75%, 57% 40%, 58% 100%, 59% 25%, 60% 85%, 61% 5%, 62% 65%, 63% 35%, 64% 95%, 65% 20%, 66% 80%, 67% 10%, 68% 70%, 69% 30%, 70% 90%, 71% 15%, 72% 75%, 73% 40%, 74% 100%, 75% 25%, 76% 85%, 77% 5%, 78% 65%, 79% 35%, 80% 95%, 81% 20%, 82% 80%, 83% 10%, 84% 70%, 85% 30%, 86% 90%, 87% 15%, 88% 75%, 89% 40%, 90% 100%, 91% 25%, 92% 85%, 93% 5%, 94% 65%, 95% 35%, 96% 95%, 97% 20%, 98% 80%, 99% 15%, 100% 100%)",
                }}
            />

            <div
                style={{
                    background: "var(--navy)",
                    padding: "40px 48px 32px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-hand text-2xl font-bold"
                        style={{ color: "var(--cream)" }}
                    >
                        ~/
                        <span style={{ color: "var(--red-accent)" }}>
                            awiipp
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ textAlign: "center" }}
                    >
                        <div
                            style={{
                                background: "var(--highlight-yellow)",
                                padding: "10px 18px",
                                transform: "rotate(-1.5deg)",
                                display: "inline-block",
                                boxShadow: "3px 3px 0 rgba(0,0,0,0.15)",
                                position: "relative",
                            }}
                        >
                            <div
                                className="tape absolute"
                                style={{
                                    top: "-10px",
                                    left: "50%",
                                    transform: "translateX(-50%) rotate(1deg)",
                                    width: "44px",
                                    zIndex: 10,
                                }}
                            />
                            <p
                                className="font-hand text-sm font-bold"
                                style={{ color: "var(--navy)" }}
                            >
                                designed & built by Sayid ✦
                            </p>
                            <p
                                className="font-hand text-xs"
                                style={{ color: "#78716c", marginTop: "2px" }}
                            >
                                Jakarta · {new Date().getFullYear()}
                            </p>
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="font-hand text-sm"
                        style={{
                            background: "transparent",
                            border: "1.5px dashed rgba(250,249,246,0.25)",
                            color: "var(--cream)",
                            padding: "8px 16px",
                            cursor: "pointer",
                            letterSpacing: "0.03em",
                        }}
                    >
                        back to top ↑
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        maxWidth: "1200px",
                        margin: "28px auto 0",
                        borderTop: "1px dashed rgba(250,249,246,0.1)",
                        paddingTop: "16px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <p
                        className="font-hand text-xs"
                        style={{
                            color: "rgba(250,249,246,0.3)",
                            fontStyle: "italic",
                        }}
                    >
                        made with ☕ & too many tabs open
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
