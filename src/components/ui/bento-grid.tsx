import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black p-6 transition-all duration-300 hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/10 hover:scale-[1.02] relative overflow-hidden",
        className,
      )}
    >
      {/* 背景の光る効果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {header}
      <div className="transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:translate-y-[-2px] relative z-10">
        <div className="mt-2 mb-2 font-sans font-bold text-white text-lg group-hover/bento:text-teal-100 transition-colors duration-300">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-gray-300 leading-relaxed group-hover/bento:text-gray-200 transition-colors duration-300">
          {description}
        </div>
      </div>
      
      {/* カスタムコンテンツ */}
      {children}
      
      {/* ホバー時の追加効果 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent transform scale-x-0 group-hover/bento:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};
