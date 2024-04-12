
const Stripe = ({val}) =>{
    return(
        <div className="w-[22%] border-t-[1px] border-l-[1px] border-r-[1px] border-b-[1px] border-zinc-700 px-4 py-3 flex justify-between items-center">
            <span className="text-white font-semibold text-sm font-serif">{val}</span>
            {/* <span className="font-serif">1</span> */}

        </div>

    )
}

export default Stripe;