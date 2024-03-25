
interface IContainer {
    children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
    return (
        <div className="w-full h-full flex justify-center flex-col items-center transition-all duration-150">
            <div className="w-full md:w-[70%] h-full bg-backgroundContent px-10 md:px-24 py-6 relative">
                {children}
            </div>
        </div>
    );
}

export default Container;