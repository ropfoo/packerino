interface CardProps {}

const Card: React.FC = ({ children }) => {
    return (
        <div
            className='
        flex 
        bg-stone
        border-stonewet
        border
        rounded-xl
        p-5 
        mb-5       
        '>
            {children}
        </div>
    );
};

export default Card;
