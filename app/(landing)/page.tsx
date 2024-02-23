import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from 'nextjs-simple-typewriter';
import Image from "next/image";

 

const LandingPage = () => {
  
    return (
        < >
        <div className="absolute inset-0">

                <Image
                    src="/sunset.jpg"
                    alt="background image"
                    fill
                    className="opacity-50"
                />
            </div>
        <div className="relative z-10 flex flex-col justify-center items-center  h-full">
            <div>
            <span className="p-10 text-8xl ">
            <Typewriter 
            words={['Welcome to DunXr!','Ready for an Adventure?','Play Now!']}
            loop={100}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
           
          />
          
          </span>
          </div>
          
            <div className="flex justify-center mt-10">
                <Link className="pr-10" href="/sign-in">
                  
                    <Button className="">
                     Login
                    </Button>
    
                </Link>
                <Link href="/sign-up">
                    <Button>
                     Register
                    </Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default LandingPage;