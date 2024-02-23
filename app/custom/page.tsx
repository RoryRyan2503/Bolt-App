import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
//import Image from "next/image";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"


const CustomLayout = () => {
    return(
        <>
        <div className="bg-slate-800 h-auto">
           
        <div className="flex justify-end p-5 ">

            
            <UserButton afterSignOutUrl="/" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-center p-40">
            <div>
            <p className="text-xl">What do you want ur genre to be?</p>
            </div>
            <div className="mt-10 w-3/4 h-56">
            <Textarea className="h-56" />
            </div>
            <div className="pt-10 ">
           <Link href="/choice">
            <Button variant="destructive" size="lg">Submit</Button>
            </Link>
            </div>
        </div>
        
        </>
    )
}

export default CustomLayout;