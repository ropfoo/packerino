interface PageProps {
    title: string;
    isSignIn?: boolean;
    img?: string;
}

const Page: React.FC<PageProps> = ({ children, title, isSignIn, img }) => {
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
                        <h1
                            className='
                            text-3xl 
                            lg:text-4xl 
                            text-dirt 
                            font-bold 
                            mb-5 md:mb-10
                        '>
                            {title}
                        </h1>
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
            p-5 md:p-16 
            mt-20 
            `}>
            <h1
                className='
                text-3xl 
                lg:text-4xl 
                text-dirt 
                font-bold 
                mb-5 md:mb-10
            '>
                {title}
            </h1>
            {children}
        </main>
    );
};

export default Page;
