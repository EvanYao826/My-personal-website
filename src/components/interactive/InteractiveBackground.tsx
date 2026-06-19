"use client";

import { CursorGlow } from "./CursorGlow";
import { InteractiveDots } from "./InteractiveDots";

export function InteractiveBackground() {
  return (
    <>
      <InteractiveDots />
      <CursorGlow />
    </>
  );
}
