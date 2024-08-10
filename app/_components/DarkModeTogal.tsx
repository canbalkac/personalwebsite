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
import { setDefaultHighWaterMark } from "stream"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <Button className="bg-light-mode-bg dark:bg-black mb-3" variant="outline" size="icon">
          <Sun onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}