const Card: React.FC = ({ children }) => {
    return (
        <div
            className='
        flex 
        bg-stone
        border-stonewet
        border
        rounded-2xl md:rounded-3xl
        w-full
        p-3 md:p-5
        relative 
        overflow-hidden
        '>
            {children}
        </div>
    );
};

export default Card;
