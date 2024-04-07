import Button from "./Button";


const Card = ({name, desc, mover, count}) =>{
    return(
        <div>
        <div onMouseEnter={()=>{mover(count)}} className="border-zinc-600  max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-10 font-serif py-24 md:py-10">
            
            <h1 className="text-4xl font-semibold px-10 py-10 md:py-20 text-center">{name}</h1>

            <div className="w-full md:w-1/2 text-md px-12 py-6">
                <p className="text-sm px-2 pb-10 ">
                    {desc}

                </p>
                <Button name="More" />
            </div>
            
            
        </div>
        </div>
    )
    
}

export default Card;