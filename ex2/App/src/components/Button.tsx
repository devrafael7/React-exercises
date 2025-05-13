import type { ReactNode } from "react"

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ( {type = "button", className = "", children, onClick} ) => {

    return (
        <button onClick={onClick} type={type} className={`flex rounded-full cursor-pointer justify-center items-center font-semibold ${className}`}>
            {children}
        </button>

    )
}

export default Button;