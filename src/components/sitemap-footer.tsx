import { companyName, siteMap, socials } from '@/lib/constants'
import { getCurrentYear } from '@/lib/current-date'
import { getSocialIcon } from '@/lib/get-social-icon'
import { getTranslations } from '@/services/i18n'

export async function Footer() {
  const { t } = await getTranslations('footer')

  const socialsWithIcons = socials.map((social) => ({
    ...social,
    icon: getSocialIcon(social),
  }))

  const links = Object.entries(siteMap).map(([name, href]) => ({
    name: t(name),
    href,
  }))

  return (
    <footer data-testid="footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {t(item.name)}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {socialsWithIcons
            .filter((item) => item.icon)
            .map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-6"
                />
              </a>
            ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-muted-foreground">
          &copy; {getCurrentYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
