import { Mail } from 'lucide-react'

import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Cover } from '@/components/ui/cover'
import { HeroImage } from './hero-image'
import Link from 'next/link'
import { getTranslations } from '@/services/translation'

export async function Hero() {
  const { t } = await getTranslations('home')

  return (
    <main className="min-h-[75vh] py-20 flex flex-col items-stretch justify-center">
      <div>
        <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row relative items-center">
            <div className="flex-[1_1_100%]">
              <Typography variant="h1" className="leading-10 text-foreground">
                <div className="pb-4">{t('No bullshit')}</div>
                <Cover>{t('100% value')}</Cover>
              </Typography>
              <Typography
                variant="h2"
                className="leading-10 border-b-0 font-medium text-2xl text-muted-foreground"
              >
                {t('Not Just Another Web Agency')}
                <br />
                {t('We Deliver or You Don t Pay')}
                {/* We are not like any Web Agency
          <br />
          With us, you are satisfied or refunded  */}
              </Typography>
              <div className="flex gap-5 mt-5">
                {/* <Button size="lg" variant="outline">
                  Check our Case Studies
                </Button> */}
                <Button size="lg" asChild>
                  <Link href="#contact">
                    {t('Contact Us')} <Mail />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex-[0_0_auto]">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
