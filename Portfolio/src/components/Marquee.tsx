export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max marquee-track">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
