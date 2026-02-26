import * as React from "react"

export function ShineBorder({
  borderWidth = 2,
  duration = 6,
  shineColor = ["#FB6D10", "#85112E"],
  className,
}) {
  const gradient = `linear-gradient(
    120deg,
    ${shineColor[0]},
    ${shineColor[1]},
    ${shineColor[0]}
  )`

  return (
    <div
      className={`absolute inset-0 rounded-[inherit] pointer-events-none ${className}`}
      style={{
        padding: borderWidth,
        background: gradient,
        backgroundSize: "300% 100%",
        animation: `shine ${duration}s linear infinite`,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  )
}
