import Button from "./Button";

const NewCard = () =>{
    return(
        <div className="max-w-screen-lg mx-auto py-28 flex gap-1 font-serif px-10">
            <div className="bg-zinc-800 rounded-md flex flex-col justify-between w-1/3 h-[480px] mb-4">
                <h1 className="text-3xl font-bold mt-10 px-10 text-white">Lets start</h1>
                <p className="text-sm text-zinc-600 mt-10 px-10 pb-4 font-regular">fokus on reokus rights bang bros yet to kick start the real-time actionable project to make party tonight and money</p>

            </div>
            <div className="bg-zinc-700 rounded-lg w-2/3 mb-4 hover:bg-green-600 cursor-pointer flex flex-col justify-between">
                <h1 className="text-3xl font-bold mt-10 px-10 text-white">Lets start</h1>
                <div className="px-10 pb-6">
                    <h1 className="text-4xl text-white font-semibold py-5">Wanna Check out</h1>
                    <Button/>
                </div>
                
            </div>

        </div>
    )
}

export default NewCard;




