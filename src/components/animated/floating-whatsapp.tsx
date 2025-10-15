import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface FloatingWhatsAppProps {
  onClick: () => void
}

export function FloatingWhatsApp({ onClick }: FloatingWhatsAppProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
    >
      <motion.button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <MessageCircle size={28} />
      </motion.button>
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full -z-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}