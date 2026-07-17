import { clientConfig } from "@/client.config";
import Marquee from "@/components/Marquee";

export default function ServicesStrip() {
  return (
    <div className="bg-acid border-y-2 border-paper py-4 overflow-hidden">
      <Marquee>
        {clientConfig.marquee.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 mx-4 text-ink font-serif font-bold text-lg md:text-xl uppercase whitespace-nowrap"
          >
            {item}
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
