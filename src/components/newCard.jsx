import Button from "./Button";

const NewCard = () =>{
    return(
        <div className="max-w-screen-lg mx-auto py-28 flex flex-col md:flex-col gap-1 font-serif px-10">
            <div className="bg-zinc-800 rounded-md flex flex-col justify-between w-full h-[480px] md:w-1/3 mb-4">
                <h1 className="text-3xl font-bold mt-10 px-10 text-white">Love to code</h1>
                <p className="text-sm text-zinc-600 mt-10 px-10 pb-4 font-regular">Great UX is like crafting a delicious dish: its a blend of creativity and technical mastery. </p>

            </div>
            <div className="bg-zinc-700 rounded-lg w-full md:w-2/3 mb-4 hover:bg-green-600 cursor-pointer flex flex-col justify-between">
                <h1 className="text-3xl font-bold mt-10 px-10 text-white">using React</h1>
                <div className="px-10 pb-6">
                    <h1 className="text-4xl text-white font-semibold py-5">Wanna Check out my recent Blog</h1>
                    <Button name="On Medium" link="https://medium.com/@ksknew76"/>
                </div>
                
            </div>

        </div>
    )
}

export default NewCard;




