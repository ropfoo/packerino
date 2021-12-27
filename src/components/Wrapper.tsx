interface WrapperProps {
    className?: string;
}

export const AbsoluteCenter: React.FC<WrapperProps> = ({
    children,
    className,
}) => (
    <div className={'absolute left-[50%] -translate-x-1/2 flex ' + className}>
        {children}
    </div>
);
