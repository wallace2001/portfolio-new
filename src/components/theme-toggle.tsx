"use client"

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
      setIsMounted(true);
  }, []);

  if (!isMounted) {
      return null;
  }

  const isDark = theme === 'dark';

  const onChange = () => {

    if (isDark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button onClick={onChange} className="shadow rounded-full hover:scale-105" variant="secondary">
      {isDark ? <BsFillMoonStarsFill size={20} /> : <MdOutlineLightMode className="text-[#2CBDAA]" size={20} />}
    </Button>
  )
}
