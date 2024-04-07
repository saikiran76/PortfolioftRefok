import Stripe from "./stripe"

const Stripes = ()=>{
    const names = ["Get Started", "Projects", "Skills", "Blog", "Hire Me"];

    return(
        <div className="py-5 pt-20 flex">
            {
                names.map((name, index)=>(
                    <Stripe key={index} val={name}/>
                ))

            }
        </div>
    )
}

export default Stripes;