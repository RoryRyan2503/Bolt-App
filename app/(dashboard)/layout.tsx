import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return(
        <>
        <div className="flex justify-end p-5">
            <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div>
            <Image
                width={500}
                height={500}
                alt="Logo"
                src="/gamelogo.jpg"
            />
            </div>
            <div className="pt-10 ">
           <Link href="/game">
            <Button variant="destructive" size="lg">Start Game</Button>
            </Link>
            </div>
        </div>
        
        </>
    )
}

export default DashboardLayout;