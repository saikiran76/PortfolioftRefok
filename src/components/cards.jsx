import Card from "./card";

const Cards = () =>{
    const cards = [{
        name:"Netflix-GPT",
        description:"Netflix GPT is a cutting-edge project that combines the power of Netflix-style movie browsing with the intelligence of OpenAI's GPT technology. With a sleek design and seamless user experience, this project aims to revolutionize how users discover and interact with movie content."
    }, {
        name:"MyTube",
        description:"Youtube built from scratch from its native styling to its functionality. Includes Sections like Header, sidebar, Category list, Home, Video page, comment sectio. The data is not hard-coded, the data from Youtube API has been used for nativity. It is built using my favourite frontend javascript framework React and Redux is also used for advanced state (data) management."
    }, {
        name: "FoodOnline",
        Description: "Order your food online and your needs on your way at your doorstep. A Frontend application like Swiggy built with love using React."
    }, {
        name: "Alike Airbnb",
        Description: "an exceptional end-to-end application that mirrors the renowned features of Airbnb. From exploring listings to adding new ones as authorized users, our application boasts a stunning user interface coupled with robust authentication functionalities. Leveraging the Mapbox API for seamless geocoding, our project is a testament to innovation and user-centric design."
    },
    {
        name: "Portfolio Website",
        description:"This portfolio project is a visually stunning and interactive showcase of my work, inspired by the exceptional user interface, typography, and animations of the Refokus website. Built from scratch using the React framework, this portfolio presents my projects and showcases my skills in the latest web development technologies."
       }
]
    return(
        <div className="border-zinc-700 border-t-[0.5px] border-b-[1px] min-w-xl mt-2 font-serif">
            {
                cards.map((item, index)=>(
                    <Card key={index} name={item.name} desc={item.description}/>

                ))
            }
            
        </div>

    )

}

export default Cards;