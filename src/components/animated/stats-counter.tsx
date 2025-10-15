import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatsCounterProps {
  value: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

export function StatsCounter({ value, label, icon, delay = 0 }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Extract number from value string (e.g., "190K" -> 190)
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0
  const suffix = value.replace(/[\d]/g, '')
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(numericValue)
      }, delay)
    }
  }, [isInView, numericValue, delay, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center justify-center mb-2">
        {icon && <div className="mr-2 text-pink-500">{icon}</div>}
        <div ref={ref} className="text-2xl font-bold text-pink-500">
          0{suffix}
        </div>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}