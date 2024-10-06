"use client";

import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Eyes {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface EyessTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: ReactElement;

  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string;

  /**
   * @required
   * @type string
   * @description
   * The text to be displayed
   * */
  text: string;

  /**
   * @default 10
   * @type number
   * @description
   * The count of eyes
   * */
  eyesCount?: number;

  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the eyes
   * */
  colors?: {
    first: string;
    second: string;
  };
}

const EyessText: React.FC<EyessTextProps> = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  eyesCount = 10,
  ...props
}) => {
  const [eyes, setEyess] = useState<Eyes[]>([]);

  useEffect(() => {
    const generateStar = (): Eyes => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newEyess = Array.from({ length: eyesCount }, generateStar);
      setEyess(newEyess);
    };

    const updateStars = () => {
      setEyess((currentEyess) =>
        currentEyess.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        }),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second]);

  return (
    <div
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={
        {
          "--eyes-first-color": `${colors.first}`,
          "--eyes-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {eyes.map((sparkle) => (
          <Eyes key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  );
};

const Eyes: React.FC<Eyes> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
<ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"/><path fill={color} d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"/><circle fill="#8899A6" cx="6.594" cy="18" r="4.96"/><circle fill="#292F33" cx="6.594" cy="18" r="3.565"/><circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"/><ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"/><path fill={color} d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"/><circle fill="#8899A6" cx="25" cy="18" r="4.96"/><circle fill="#292F33" cx="25" cy="18" r="3.565"/><circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"/>
    </motion.svg>
  );
};

export default EyessText;
