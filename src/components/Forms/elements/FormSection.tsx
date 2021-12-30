const FormSection: React.FC = ({ children }) => {
    return (
        <div
            className='
            grid 
            gap-5
            grid-cols-2 md:grid-cols-4 
            mb-5
    '>
            {children}
        </div>
    );
};

export default FormSection;
