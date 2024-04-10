const Footer = () =>{
    return(
        <div className="max-w-screen-lg mx-auto flex justify-between items-center text-white font-serif pt-44 pb-24">
            <div className="px-10 py-6 text-white">
                <h1 className="text-7xl font-bold">Hire me</h1>
            </div>
            <div className="pr-32 py-6 flex flex-col gap-4">
                {
                    ['📞  Contact: +91 7587093179', '✉️  Email: ksknew76105@gmail.com', '🔗  Linkedin', '🧑‍💻 Github'].map((item, index)=>(
                        item == "🔗  Linkedin" ? (<a href="https://www.linkedin.com/in/korada-saikiran-910a621a8/" key={index} className="text-sm tect-zinc-500 block cursor-pointer">{item}</a>):
                        <a key={index} className="text-sm tect-zinc-500 block cursor-pointer">{item}</a>
                    ))
                }

            </div>

        </div>
    )

}

export default Footer;