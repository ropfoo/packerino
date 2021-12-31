const PageTitle: React.FC = ({ children }) => {
    return (
        <h1
            className='
text-3xl 
lg:text-4xl 
text-dirt 
font-bold 
mb-5 md:mb-10
'>
            {children}
        </h1>
    );
};

export default PageTitle;
