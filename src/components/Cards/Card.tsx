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
        md:mr-5 
        last:mr-0 
        md:w-1/2
        '>
            {children}
        </div>
    );
};

export default Card;
