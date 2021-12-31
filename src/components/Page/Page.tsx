import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import PageTitle from './PageTitle';

interface PageProps {
    title?: string;
    isSignIn?: boolean;
    img?: string;
    hasNavBack?: boolean;
}

const Page: React.FC<PageProps> = ({
    children,
    title,
    isSignIn,
    img,
    hasNavBack,
}) => {
    const navigate = useNavigate();
    if (isSignIn)
        return (
            <main
                className='
                grid 
                md:grid-cols-2 lg:grid-cols-3
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
                    <div
                        className='
                        hidden sm:block 
                        row-span-1 md:row-span-2 
                        col-span-1 md:col-span-2
                        '>
                        <img
                            className='object-cover w-[100%] max-h-60 lg:max-h-screen'
                            src={img}
                            alt=''
                        />
                    </div>
                )}
            </main>
        );
    return (
        <main
            className={`
            bg-night
            text-gravel
            p-5 md:p-16 
            mt-20 
            `}>
            <div>
                {hasNavBack && (
                    <button className='mb-5 md:mb-10'>
                        <FiArrowLeft size={26} onClick={() => navigate(-1)} />
                    </button>
                )}
                {title && <PageTitle>{title}</PageTitle>}
            </div>
            {children}
        </main>
    );
};

export default Page;
