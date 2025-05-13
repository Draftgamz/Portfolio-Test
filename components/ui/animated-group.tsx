'use client';

import React from 'react';
import { motion, Variant, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string | Record<string, string | number>;
  animate?: string | Record<string, string | number>;
  transition?: Record<string, unknown>;
  delay?: number;
}

export const AnimatedGroup = ({
  children,
  className,
  variants,
  initial = 'hidden',
  animate = 'visible',
  transition,
  delay = 0,
  ...props
}: AnimatedGroupProps) => {
  const defaultVariants: Variants = {
    container: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 0.8,
        },
      },
    },
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants || defaultVariants.container}
      className={cn(className)}
      transition={transition}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div key={index} variants={variants ? undefined : defaultVariants.item}>
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};