"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggler() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Փոխել դիզայնը</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Բաց դիզայն
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Մուգ դիզայն
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Լռելյայն դիզայն
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}