"use client";

import { useTheme } from "next-themes";
import { ChangeEvent, useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.currentTarget.value;
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={handleSetTheme}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
