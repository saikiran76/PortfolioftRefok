import Mark from "./mark";

const Marks = () =>{
    const images = [
        [{src: "https://i0.wp.com/compile.blog/wp-content/uploads/2021/11/Web3-Icon-3.png?resize=300%2C300&ssl=1"},
        {src: "https://www.svgrepo.com/show/306891/typescript.svg"},
        {src:"https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_nodejs_icon_157858.png"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyOe4xJhJFvDUbm1OSFnnEc4plFTvdYrBmOfNf-YUNA&s"},
        {src:"https://static-00.iconduck.com/assets.00/javascript-js-icon-256x256-6k722ssz.png"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0Z169XuEhHgETaIMDtZJgpvD9zh_Oboyq9WLZqntDw&s"},
        {src:"https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"}],

        [{src: "https://i0.wp.com/compile.blog/wp-content/uploads/2021/11/Web3-Icon-3.png?resize=300%2C300&ssl=1"},
        {src: "https://www.svgrepo.com/show/306891/typescript.svg"},
        {src:"https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_nodejs_icon_157858.png"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyOe4xJhJFvDUbm1OSFnnEc4plFTvdYrBmOfNf-YUNA&s"},
        {src:"https://static-00.iconduck.com/assets.00/javascript-js-icon-256x256-6k722ssz.png"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0Z169XuEhHgETaIMDtZJgpvD9zh_Oboyq9WLZqntDw&s"},
        {src:"https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"}]

    ]

    return(
        <div>
            {
                images.map((item, index)=>(
                    <Mark key={index} imgArr={item} />
                ) )
            }
        </div>
    )

}

export default Marks;