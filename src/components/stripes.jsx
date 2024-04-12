import Stripe from "./stripe"

const Stripes = ()=>{
    const names = ["Projects", "Skills", "Blog", "Hire Me"];

    return(
        <div className="py-5 pt-20 flex justify-center">
            {
                names.map((name, index)=>(
                    <Stripe key={index} val={name}/>
                ))

            }
        </div>
    )
}

export default Stripes;