"use client"

import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { WavyBackground } from "@/components/ui/wavy-background"
import { SpotlightButton } from "@/components/ui/spotlight-button"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/utils/translations"

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = useTranslations(lang)

  const skills = [
    {
      id: 1,
      name: "React",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Next.js",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "TypeScript",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 bg-black text-white">
      <nav className="w-full flex justify-end mb-4">
        <Link href={lang === "en" ? "/es" : "/en"} className="text-sm underline">
          {lang === "en" ? "Español" : "English"}
        </Link>
      </nav>

      <WavyBackground className="max-w-4xl mx-auto pb-20 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center relative z-10">{t("welcome")}</h1>
        </motion.div>
        <div className="h-20 sm:h-40 relative w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </WavyBackground>

      <section className="my-10 sm:my-20 max-w-4xl mx-auto w-full">
        <TextGenerateEffect words={t("intro")} className="text-lg sm:text-2xl font-bold mb-8" />
        <AnimatedTooltip items={skills} />
      </section>

      <section className="my-10 sm:my-20 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t("featuredProjects")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {[1, 2, 3, 4].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <Image
                src={`/placeholder.svg?height=200&width=400`}
                alt={`${t("project")} ${project}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {t("project")} {project}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{t("projectDescription")}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SpotlightButton className="mt-8 sm:mt-12">{t("contactMe")}</SpotlightButton>
    </main>
  )
}

