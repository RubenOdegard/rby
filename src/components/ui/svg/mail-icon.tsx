interface MailIconProps {
  height?: number;
  width?: number;
  color?: string;
}

export default function MailIcon(
  { height = 24, width = 24, color = "var(--foreground)" }: MailIconProps,
) {
  return (
    <svg
      className="text-white transition-all duration-250 ease-in-out"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      height={height}
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      width={width}
      style={{ color: `${color}`, width: `${width}px`, height: `${height}px` }}
    >
      <title className="sr-only">Mail Icon</title>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}
