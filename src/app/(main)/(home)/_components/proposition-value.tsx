'use client'
import { Typography } from '@/components/typography'
import { Container } from '@/components/ui/container'
import { MarkedText } from '@/components/ui/marked-text'
import { Ripple } from '@/components/ui/ripple'
import { UnderlinedText } from '@/components/ui/underlined-text'
import { companyName } from '@/lib/constants'
import { useTranslations } from '@/services/translation'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'

export function PropositionValue() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: '-250px', once: true })

  const { t } = useTranslations('home')

  return (
    <main
      className=" bg-white flex flex-col items-center justify-center"
      ref={ref}
    >
      <Container className="pt-40 text-black text-center">
        <Typography variant="h1" component="h2">
          We Solve the{' '}
          <UnderlinedText>
            <Link href="/hardest-web-challenges" className="cursor-pointer">
              Hardest Web Challenges
            </Link>
          </UnderlinedText>
        </Typography>
        <div className="text-black font-bold pt-10 text-3xl leading-11">
          You want a product delivered
          <br /> in{' '}
          <MarkedText
            marked={isInView}
            markedClassName="bg-id-red"
            markedTextClassName="text-white"
          >
            days
          </MarkedText>{' '}
          instead of {` `}
          <MarkedText
            marked={isInView}
            markedClassName="bg-black"
            markedTextClassName="text-white"
          >
            months
          </MarkedText>
          {` `}?
        </div>
        <div className="text-black font-bold pt-10 text-3xl leading-11">
          You think a great{' '}
          <MarkedText
            marked={isInView}
            markedClassName="bg-id-red"
            markedTextClassName="text-white"
          >
            experience
          </MarkedText>{' '}
          will
          <br />
          magnify your awesome product?
        </div>
        <div className="text-black font-bold pt-10 text-3xl leading-11">
          You are done with the{` `}
          <MarkedText
            marked={isInView}
            markedClassName="bg-black"
            markedTextClassName="text-white"
          >
            crappy
          </MarkedText>{' '}
          code
          <br /> and you want something that{' '}
          <MarkedText
            marked={isInView}
            markedClassName="bg-id-red"
            markedTextClassName="text-white"
          >
            works
          </MarkedText>
          {` `}.
        </div>
      </Container>
      <div className="h-[600px] w-full text-center flex items-center justify-center mt-20 text-black font-bold text-4xl leading-14 relative overflow-hidden">
        <div>
          {t('Choose')}
          <div className="text-4xl">
            <UnderlinedText>{companyName}</UnderlinedText>
          </div>
        </div>
        <Ripple mainCircleSize={150} />
      </div>
    </main>
  )
}
