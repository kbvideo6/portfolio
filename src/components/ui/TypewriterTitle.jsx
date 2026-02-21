import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const TypewriterTitle = ({ prefix = "./", title, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!isInView) return;

        let i = 0;
        setDisplayedText("");
        setIsTyping(true);

        const typingInterval = setInterval(() => {
            if (i < title.length) {
                setDisplayedText(title.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 50); // Speed of typing, adjust as needed

        return () => clearInterval(typingInterval);
    }, [isInView, title]);

    return (
        <h2 ref={containerRef} className={className}>
            {prefix && <span className="text-blue-400 mr-2">{prefix}</span>}
            <span className="text-slate-100">{displayedText}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[0.5em] h-[1em] bg-blue-400 ml-1 translate-y-[0.1em]"
            />
        </h2>
    );
};

export default TypewriterTitle;
