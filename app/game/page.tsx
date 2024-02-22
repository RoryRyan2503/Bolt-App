import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Link from "next/link";


const GameLayout = ({
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
          <p className="pb-10">Themes Choice</p>
        <ul className="flex justify-center items-center">
            <li className="p-5">
                <Link href="/">
                    <Button>Horror</Button>
                </Link>
            </li>
            <li className="p-5">
                <Link href="/">
                    <Button>Thiller</Button>
                </Link>
            </li>
            <li className="p-5"> 
                <Link href="/">
                    <Button>Fantasy</Button>
                </Link>
            </li>
        </ul>
            
            <div className="pt-10 ">
           <Link href="/game">
            <Button variant="destructive" size="lg">Custom</Button>
            </Link>
            </div>
        </div>
        
        </>
    )
}

export default GameLayout;