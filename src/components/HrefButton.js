import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HrefButton({text, href}) {
  return (
    <Button asChild>
      <Link href={href}>
        {text}
      </Link>
    </Button>
  )
}
