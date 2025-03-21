"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function SiteDrawer() {
  const navItems = [
    {
      title: "is iona.ai a good fit?",
      items: [
        {
          title: "Monthly hiring volume",
          description: "Find out if iona.ai matches your hiring scale",
          href: "/1-monthly-hiring-volume",
        },
        {
          title: "Key challenges",
          description: "Learn how we solve critical hiring problems",
          href: "/key-challenges",
        },
        {
          title: "Case studies",
          description: "See how leading companies succeed with iona.ai",
          href: "/case-studies",
        },
        {
          title: "Common pitfalls",
          description: "Avoid costly mistakes in your hiring process",
          href: "/common-pitfalls",
        },
      ],
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-24 w-24" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <div className="grid gap-6 py-6">
          <h1 className="text-4xl text-[#001A72] font-bold font-michroma">iona.ai </h1>

          {navItems.map((item) => (
            <div key={item.title} className="space-y-6">
              <h4 className="font-medium text-[20px] font-michroma">{item.title}</h4>
              <div className="grid gap-4">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="group grid gap-1 py-4 "
                  >
                    <div className="font-medium group-hover:text-accent-foreground">{subItem.title}</div>
                    <div className="text-sm font-mono text-muted-foreground group-hover:text-accent-foreground">
                      {subItem.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

