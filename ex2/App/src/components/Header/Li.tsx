import type { ReactNode } from "react";

type LiProps = {
    children: ReactNode;
    className?: string;
};

export default function Li({ children, className = "" }: LiProps) {
    return <li className={`cursor-pointer ${className}`}>{children}</li>;
};