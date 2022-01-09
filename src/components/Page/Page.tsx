import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import PageTitle from './PageTitle';

interface PageProps {
    title?: string;
    isSignIn?: boolean;
    img?: string;
    hasNavBack?: boolean;
    titleElement?: JSX.Element;
}

const Page: React.FC<PageProps> = ({
    children,
    title,
    isSignIn,
    img,
    hasNavBack,
    titleElement,
}) => {
    const navigate = useNavigate();
    if (isSignIn)
        return (
            <main
                className='
                grid 
                sm:grid-cols-2 lg:grid-cols-3
                h-screen
                justify-items-stretch	
                '>
                <div
                    className={`
                    bg-night
                    p-5 md:p-16
                    mt-20 
                `}>
                    <div>
                        {title && <PageTitle>{title}</PageTitle>}
                        {children}
                    </div>
                </div>
                {img && (
                    <img
                        className='
                        object-cover 
                        lg:col-span-2  
                        h-full
                        hidden sm:block
                        '
                        src={img}
                        alt=''
                    />
                )}
            </main>
        );
    return (
        <main
            className={`
            bg-night
            text-gravel
            p-5 md:p-16
            lg:px-40 xl:px-60
            mt-20 
            `}>
            <div>
                <div className='flex justify-between items-center mb-5 md:mb-10'>
                    {hasNavBack && (
                        <button>
                            <FiArrowLeft
                                size={26}
                                onClick={() => navigate(-1)}
                            />
                        </button>
                    )}
                    {titleElement}
                </div>
                {title && <PageTitle>{title}</PageTitle>}
            </div>
            {children}
        </main>
    );
};

export default Page;
