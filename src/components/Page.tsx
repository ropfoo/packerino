interface PageProps {
    title: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
    return (
        <main className='p-5 mt-20 bg-night'>
            <h1 className='text-3xl lg:text-4xl text-dirt font-bold mb-5'>
                {title}
            </h1>
            {children}
        </main>
    );
};

export default Page;
