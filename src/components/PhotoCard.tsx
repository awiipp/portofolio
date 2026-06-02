import { motion } from "framer-motion";
import icon from "../assets/images/icon.jpeg";

function AvatarPlaceholder() {
    return (
        <img
            src={icon}
            alt="Sayid"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
            }}
        />
    );
}

export default function PhotoCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center items-center pt-10 md:pt-0 -mt-[160px]"
        >
            {/* Main photo print */}
            <motion.div
                whileHover={{ rotate: 2, scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="photo-print px-[12px] pt-[12px] pb-[20px] relative z-10 md:w-[260px] w-[240px]"
                style={{
                    transform: "rotate(3deg)",
                    cursor: "pointer",
                }}
            >
                {/* Tape top-center */}
                <div
                    className="tape absolute"
                    style={{
                        top: "-10px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(-2deg)",
                        width: "70px",
                        zIndex: 20,
                    }}
                />

                {/* Photo area */}
                <div
                    style={{
                        width: "100%",
                        aspectRatio: "3/4",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <AvatarPlaceholder />

                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.12) 100%)",
                            pointerEvents: "none",
                        }}
                    />
                </div>

                <div
                    className="font-hand text-center pt-2"
                    style={{
                        fontSize: "1.1rem",
                        color: "var(--navy)",
                        fontStyle: "italic",
                        letterSpacing: "0.02em",
                    }}
                >
                    ~ Sayid, 2026 ~
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, rotate: -5, x: 20 }}
                animate={{ opacity: 1, rotate: -6, x: 20 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="photo-print absolute z-0 md:w-[220px] w-[170px] md:-right-[10px]"
                onClick={() => window.open("/assets/files/cv.pdf", "_blank")}
                style={{
                    top: "60px",
                    transform: "rotate(-6deg)",
                    cursor: "pointer",
                }}
            >
                <div
                    className="tape-blue tape absolute"
                    style={{
                        top: "-10px",
                        right: "20px",
                        transform: "rotate(3deg)",
                        width: "60px",
                        zIndex: 20,
                    }}
                />

                <div
                    style={{
                        width: "100%",
                        aspectRatio: "4/3",
                        overflow: "hidden",
                        backgroundColor: "#f0f4f8",
                        position: "relative",
                    }}
                >
                    <svg
                        viewBox="0 0 220 165"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <rect width="220" height="165" fill="#f8fafc" />
                        <text
                            x="16"
                            y="23"
                            fontSize="12"
                            fontWeight="700"
                            fill="#1a2744"
                            opacity="0.9"
                        >
                            Sayid Arip
                        </text>
                        <text
                            x="16"
                            y="40"
                            fontSize="9"
                            fontWeight="600"
                            fill="#1a2744"
                            opacity="0.8"
                        >
                            Summary
                        </text>
                        <rect
                            x="16"
                            y="52"
                            width="188"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <rect
                            x="16"
                            y="62"
                            width="170"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <rect
                            x="16"
                            y="72"
                            width="180"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <text
                            x="16"
                            y="95"
                            fontSize="9"
                            fontWeight="700"
                            fill="#1a2744"
                            opacity="0.8"
                        >
                            Education
                        </text>
                        <rect
                            x="16"
                            y="102"
                            width="188"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <rect
                            x="16"
                            y="112"
                            width="160"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <text
                            x="16"
                            y="135"
                            fontSize="9"
                            fontWeight="700"
                            fill="#1a2744"
                            opacity="0.8"
                        >
                            Experience
                        </text>
                        <rect
                            x="16"
                            y="142"
                            width="188"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                        <rect
                            x="16"
                            y="152"
                            width="140"
                            height="4"
                            rx="2"
                            fill="#cbd5e1"
                        />
                    </svg>
                </div>

                <div
                    className="font-hand text-center pt-2"
                    style={{
                        fontSize: "1.1rem",
                        color: "var(--navy)",
                        fontStyle: "italic",
                    }}
                >
                    ~ my resume ~
                </div>
            </motion.div>
        </motion.div>
    );
}
