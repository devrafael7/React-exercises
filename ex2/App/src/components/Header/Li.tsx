import type { ReactNode } from "react";

type LiProps = {
    children: ReactNode;
};

export default function Li({ children }: LiProps) {
    return <li className="cursor-pointer">{children}</li>;
};