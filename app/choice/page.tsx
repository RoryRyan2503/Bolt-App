import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
//import Image from "next/image";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"


const ChoiceLayout = () => {
    return(
        <>
        <div className="bg-slate-800 h-auto">
           
        <div className="flex justify-end p-5 ">

            
            <UserButton afterSignOutUrl="/" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-center p-20">
            <div>
            <p className="text-xl">Story</p>
            </div>
            <div className="mt-10 w-3/4 h-96 border-2">
            <p></p>
            </div>
            <div className="pt-10 ">
           <Link href="/dice">
            <Button variant="destructive" size="lg">Continue</Button>
            </Link>
            </div>
        </div>
        
        </>
    )
}

export default ChoiceLayout;