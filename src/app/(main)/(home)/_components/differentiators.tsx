'use client'
import { Typography } from '@/components/typography'
import { Player } from '@lordicon/react'
import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'

import ai from '../_icons/ai.json'
import userCentric from '../_icons/user-centric.json'
import refund from '../_icons/refund.json'
import agile from '../_icons/agile.json'
import api from '../_icons/api.json'
import notebook from '../_icons/notebook.json'
import { Container } from '@/components/ui/container'
import { useTranslations } from '@/services/translation'

const differentiators = [
  {
    icon: agile,
  },
  {
    icon: notebook,
  },
  {
    icon: ai,
  },
  {
    icon: api,
  },
  {
    icon: userCentric,
  },
  {
    icon: refund,
  },
]

export function Differentiators() {
  const { t } = useTranslations('home')

  return (
    <main className="py-28 min-h-[75vh] flex items-center justify-center">
      <Container>
        <Typography variant="h1" component="h2">
          {t('Why Businesses Love Working with Us')}
        </Typography>
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 pt-10">
          {differentiators.map((differentiator, index) => (
            <Differentiator
              title={t(`differentiator.${index + 1}.title`)}
              description={t(`differentiator.${index + 1}.description`)}
              icon={differentiator.icon ?? ai}
              key={index}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

interface DifferentiatorProps {
  title: React.ReactNode
  description: React.ReactNode
  icon: object
}

export function Differentiator({
  title,
  description,
  icon,
}: DifferentiatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player>(null)

  const inView = useInView(ref, { margin: '-100px' })

  useEffect(() => {
    if (inView) {
      playerRef.current?.playFromBeginning()
    }
  }, [inView])

  return (
    <div
      className="pt-5"
      ref={ref}
      onMouseEnter={() => playerRef.current?.playFromBeginning()}
    >
      <Player
        icon={icon}
        ref={playerRef}
        colors="secondary:#a1a1a1,primary:#ffffff"
        size={60}
      />
      <Typography variant="h3" component="h3" className="font-bold mt-2">
        {title}
      </Typography>
      <Typography variant="p" className="text-muted-foreground mt-3!">
        {description}
      </Typography>
    </div>
  )
}
