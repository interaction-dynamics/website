import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { siteMap } from '@/lib/constants'
import { useTranslations } from '@/services/translation'

export function Navigation() {
  const { t } = useTranslations('navigation')

  return (
    <NavigationMenu className="hidden md:block pr-2">
      <NavigationMenuList className="gap-2">
        {Object.entries(siteMap)
          .filter(([key]) => key !== 'Home')
          .map(([key, value]) => (
            <NavigationMenuItem key={key}>
              <Link href={value} passHref legacyBehavior>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  target={value.startsWith('http') ? '_blank' : undefined}
                >
                  {t(key)}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
