const Mark = ({imgArr}) =>{
    return(
        <div className="flex overflow-hidden gap-10 px-8 pt-8 pb-10 border-t-[1px] border-b-[1px] border-zinc-700 py-10">
            {
                imgArr.map((item, ind)=>(
                    <img key={ind} className="w-36 h-28" src={item.src} alt="tech"/>
                ))
            }

        </div>
    )
    
}

export default Mark;