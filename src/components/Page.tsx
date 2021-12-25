interface PageProps {
    title: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
    return (
        <main className='p-8 mt-5'>
            <h1 className='text-3xl bold mb-5'>{title}</h1>
            {children}
        </main>
    );
};

export default Page;
