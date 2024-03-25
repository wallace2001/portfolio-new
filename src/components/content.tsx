
interface IContent {
    children: React.ReactNode;
}

const Content = ({ children }: IContent) => {
    return (
        <div className="w-full h-full flex justify-center flex-col items-center">
            <div className="w-full md:w-[70%] h-full bg-backgroundContent p-10">
                {children}
            </div>
        </div>
    );
}

export default Content;