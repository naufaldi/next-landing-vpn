import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

type ScrollAnimationWrapper = {
  children: ReactNode;
  className?: string;
};

const ScrollAnimationWrapper: FC<ScrollAnimationWrapper> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
