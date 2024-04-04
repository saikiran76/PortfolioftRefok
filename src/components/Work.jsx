const Work = () =>{
    const hoverStyles = {
        backgroundColor: '#dbf26e',
        backgroundImage: 'linear-gradient(319deg, #dbf26e 0%, #61fa74 37%, #1cfdd6 100%)',
        transition: 'background-color 1s ease', 
      };

      const images = [
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGrXa6QB6ih3I_6F3lPaJpJHSY-C1nZL0Nf9MJgFUeA&s", top:"50%", left:"50%", isActive:"true" },
        {url:"https://www.financialexpress.com/wp-content/uploads/2023/07/yt-reuters-4.jpg", top:"57%", left:"57%", isActive:"true"},
        {url:"https://startuptrak.com/wp-content/uploads/2020/12/Swiggy-Food-Startup.jpg", top:"63%", left:"60%", isActive:"true"},
        {url:"https://www.financialexpress.com/wp-content/uploads/2023/07/yt-reuters-4.jpg"}
      ]

    return(
        <div className="max-w-screen-lg mx-auto h-96 relative font-serif">
                <h1 style={hoverStyles} onMouseEnter={(e) => e.target.style = hoverStyles} onMouseLeave={(e) => e.target.style = null} className="text-medium text-[50vh] text-center text-white">Work</h1>

                <div className="w-full h-full absolute top-0">
                    {
                    images.map((item, index) => (
                            item.isActive && <img
                                key={index}
                                src={item.url}
                                className="absolute w-64 rounded-lg -translate-x-50% -translate-y-50%" style={{top: item.top, left:item.left}} alt="Net" />))
                    }
                </div>
        </div>
    )
}

export default Work;