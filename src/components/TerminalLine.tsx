import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const responses = ["sayid arip", "fullstack developer", "backend developer"];

export default function TerminalLine() {
    const [responseIndex, setResponseIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">(
        "typing",
    );

    useEffect(() => {
        const target = responses[responseIndex];

        if (phase === "typing") {
            if (displayed.length < target.length) {
                const timeout = setTimeout(() => {
                    setDisplayed(target.slice(0, displayed.length + 1));
                }, 60);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setPhase("waiting"), 2000);
                return () => clearTimeout(timeout);
            }
        }

        if (phase === "waiting") {
            const timeout = setTimeout(() => setPhase("deleting"), 500);
            return () => clearTimeout(timeout);
        }

        if (phase === "deleting") {
            if (displayed.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayed((prev) => prev.slice(0, -1));
                }, 35);
                return () => clearTimeout(timeout);
            } else {
                setResponseIndex((i) => (i + 1) % responses.length);
                setPhase("typing");
            }
        }
    }, [displayed, phase, responseIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="rounded-lg overflow-hidden"
            style={{
                backgroundColor: "rgba(26,39,68,0.04)",
                border: "1.5px solid rgba(26,39,68,0.1)",
                maxWidth: "420px",
            }}
        >
            {/* Terminal header dots */}
            <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{
                    borderBottom: "1px solid rgba(26,39,68,0.08)",
                    backgroundColor: "rgba(26,39,68,0.03)",
                }}
            >
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                        display: "inline-block",
                    }}
                />
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#f59e0b",
                        display: "inline-block",
                    }}
                />
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#22c55e",
                        display: "inline-block",
                    }}
                />
                <span
                    className="font-hand text-xs ml-2"
                    style={{ color: "#94a3b8" }}
                >
                    terminal
                </span>
            </div>

            {/* Terminal content */}
            <div className="px-4 py-3 font-hand" style={{ fontSize: "1rem" }}>
                <span style={{ color: "var(--red-accent)", fontWeight: 600 }}>
                    ~/workspace
                </span>
                <span style={{ color: "var(--ink" }}> $ </span>
                <span style={{ color: "var(--navy)", fontWeight: 500 }}>
                    who-am-i?
                </span>
                <br />
                <span style={{ color: "var(--navy)", fontWeight: 600 }}>
                    {displayed}
                    <span
                        style={{
                            display: "inline-block",
                            width: "2px",
                            height: "1em",
                            backgroundColor: "var(--navy)",
                            marginLeft: "2px",
                            verticalAlign: "text-bottom",
                            animation: "blink 1s infinite",
                        }}
                    />
                </span>
            </div>
        </motion.div>
    );
}
