import Button from "./Button";

const Card = ({name, desc}) =>{
    return(
        <div className="border-zinc-600  max-w-screen-lg mx-auto flex justify-between gap-10 font-serif py-10">
            <h1 className="text-4xl font-semibold px-14 py-20 text-center">{name}</h1>

            <div className="w-1/2 text-md px-6 py-6">
                <p className="text-sm px-2 pb-10">
                    {desc}

                </p>
                <Button name="More" />
            </div>
            
            
        </div>
    )
    
}

export default Card;