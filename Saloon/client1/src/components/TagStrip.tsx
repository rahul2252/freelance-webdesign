import { clientConfig } from "@/client.config";
import Marquee from "@/components/Marquee";

export default function TagStrip() {
  return (
    <div className="bg-blush border-y border-border py-2.5" aria-hidden="true">
      <Marquee>
        {clientConfig.tagStrip.map((tag, i) => (
          <span key={i} className="flex items-center mx-4 whitespace-nowrap">
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-deep">
              {tag}
            </span>
            <span className="text-mauve/50 mx-4">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
