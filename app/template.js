"use client"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
}
export default function Template({ children }) {
    return <motion.main
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate="enter"
        transition={{duration: 1, ease: 'easeInOut' }}
    >
        {children}
    </motion.main>
}