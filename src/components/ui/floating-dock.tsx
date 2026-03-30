'use client';

import { cn } from "@/lib/utils";
import { IconPlus, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; ariaLabel?: string; onClick?: () => void }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; ariaLabel?: string; onClick?: () => void }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      {/* Backdrop when opened */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
      
      <div className={cn("relative mx-auto block md:hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-row gap-3 items-center"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.8,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ 
                    delay: (items.length - 1 - idx) * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950/90 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20 ring-1 ring-white/10 border border-white/10 group relative overflow-visible transform-gpu origin-center hover:scale-[1.15] hover:bg-white/10 transition-all duration-200 ease-in-out"
                    aria-label={item.ariaLabel || item.title}
                    title={item.title}
                    tabIndex={0}
                  >
                    <div className="h-5 w-5 text-white/80 group-hover:text-yellow-400 transition-colors duration-200">
                      {item.icon}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-950/95 backdrop-blur-md text-white text-xs px-2 py-1 rounded-lg shadow-xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.title}
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* FAB Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-950/90 backdrop-blur-md shadow-2xl ring-1 ring-white/10 border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <IconX className="h-6 w-6 text-yellow-400" />
            ) : (
              <IconPlus className="h-6 w-6 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; ariaLabel?: string; onClick?: () => void }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-2 rounded-2xl backdrop-blur-md bg-black/50 shadow-2xl hover:shadow-2xl hover:shadow-yellow-400/10 ring-1 ring-white/10 border border-white/10 px-4 pb-3 md:flex flex-nowrap transition-shadow duration-300",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  ariaLabel,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a 
      href={href} 
      aria-label={ariaLabel || title} 
      title={title} 
      tabIndex={0}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 ring-1 ring-white/10 border border-white/5 transform-gpu origin-center overflow-visible transition-all duration-200 ease-in-out"
        whileHover={{ scale: 1.15, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        whileTap={{ scale: 0.95 }}
      >
        
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-12 left-1/2 w-fit rounded-md border border-white/10 bg-zinc-950/95 backdrop-blur-md px-2 py-0.5 text-xs whitespace-nowrap text-white pointer-events-none z-[100]"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white/80 hover:text-yellow-400 transition-colors duration-200"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}