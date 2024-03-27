import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        const Comp = "button"
        return (
            <Comp
                className={`w-full p-3 bg-purple rounded-xl text-center text-white font-rubik font-medium text-lg md:text-xl md:h-24` + className}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"