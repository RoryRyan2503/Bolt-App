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
         <div className="bg-slate-800 relative z-10 h-auto">
           
           <div className="flex relative z-10 justify-end p-5 ">
   
               
               <UserButton afterSignOutUrl="/" />
           </div>
           </div>
           <div className="absolute inset-0 h-full">
                <Image
                    src="/DunXr.jpg"
                    alt="background image"
                    width={1920}
                    height={1080}
                    className="opacity-90"
                />
            </div>
        <div className="flex relative z-10 justify-center items-center h-full">
            
           <Link href="/game">
            <Button className="text-xl p-7"  size="lg">Start Game</Button>
            </Link>
            
        </div>
        
        </>
    )
}

export default DashboardLayout;