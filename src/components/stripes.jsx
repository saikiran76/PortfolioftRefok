import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stripe from "./stripe"

gsap.registerPlugin(ScrollTrigger);

const Stripes = ()=>{
    const names = ["Projects", "Skills", "Blog", "Hire Me"];

    const Ref = useRef(null)

    useEffect(() => {
        const el = Ref.current;
        gsap.fromTo(el, { scale: 0 }, {
            scale: 1.02, duration: 1, scrollTrigger: {
                trigger: el
            }
        })
    }, [])

    return(
        <div ref={Ref} className="py-5 pt-20 flex justify-center">
            {
                names.map((name, index)=>(
                    <Stripe key={index} val={name}/>
                ))

            }
        </div>
    )
}

export default Stripes;