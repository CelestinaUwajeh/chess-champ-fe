"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: JSX.Element | JSX.Element[] | string;
  isLink?: boolean;
  to?: string;
  bgColor?: string;
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary";
  height?: string;
  width?: string;
  loading?: boolean;
}

const MotionButton = ({
  children,
}: {
  radiusValue?: string;
  children: ReactNode;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-fit h-fit"
      >
        <div>{children}</div>
      </m.div>
    </LazyMotion>
  );
};

const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLink = false,
      to = "/",
      size = "medium",
      variant = "primary",
      height,
      width,
      loading = false,
      disabled,
      className,
      ...props
    }: ButtonProps,
    ref
  ) => {
    type ButtonPropsSize = ButtonProps["size"];

    const sizeVariants: {
      [key in ButtonPropsSize]: { height: string; width: string };
    } = {
      small: {
        height: height || "h-8",
        width: width || "w-20",
      },
      medium: {
        height: height || "h-10",
        width: width || "w-24",
      },
      large: {
        height: height || "h-12",
        width: width || "w-72",
      },
    };

    const variantStyles: {
      [key in ButtonProps["variant"]]: {
        bg: string;
        text: string;
        border?: string;
        borderWidth?: string;
      };
    } = {
      primary: {
        bg: "bg-mainBg",
        text: "text-white",
      },
      secondary: {
        bg: "bg-white",
        text: "text-black",
        border: "border-main",
        borderWidth: "border-2",
      },
    };

    const dimension = (dim: "height" | "width") => {
      return `${sizeVariants[size][dim]}`;
    };

    const buttonClass = `${
      disabled ? "bg-main bg-opacity-50" : `${variantStyles[variant].bg}`
    } ${variantStyles[variant].text} ${variantStyles[variant].borderWidth} ${
      variantStyles[variant].border
    } rounded-[40px] text-sm whitespace-nowrap font-mont font-medium px-6 flex items-center justify-center gap-3 radius no-underline border-solid ${dimension(
      "height"
    )} ${dimension("width")} bg-[${variantStyles[variant]}] ${
      variant === "secondary" ? "bg-clip-text text-transparent bg-mainBg" : ""
    }`;

    return (
      <MotionButton>
        {isLink ? (
          <Link href={to} className={buttonClass}>
            {children}
          </Link>
        ) : (
          <button
            disabled={loading || disabled}
            ref={ref}
            {...props}
            className={buttonClass}
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
          </button>
        )}
      </MotionButton>
    );
  }
);

export default AppButton;
