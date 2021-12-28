interface CardProps {}

const Card: React.FC = ({ children }) => {
    return (
        <div
            className='
        flex 
        bg-stone
        border-stonewet
        border
        rounded-3xl
        w-full
        p-5
        md:p-5
        '>
            {children}
        </div>
    );
};

export default Card;
