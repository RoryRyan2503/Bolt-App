const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return( 
        <div className="flex items-center justify-center h-full bg-violet-300">
            {children}
        </div>
    );
}

export default AuthLayout;