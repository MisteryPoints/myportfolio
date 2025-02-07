"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    )
  }, [scope.current, animate]) // Added animate to dependencies

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0 inline-block mr-1">
              {word}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  )
}

