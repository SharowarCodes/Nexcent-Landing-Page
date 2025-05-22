// components/BlogCards.jsx

const cards = [
  {
    image: "image 18.png", // Update with your image paths
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "image 19.png",
    title: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "image 20.png",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

 const BlogCards =()=> {
  return (
    <div className=" bg-gray-100 pt-[80px] pb-[40px] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img src={card.image} alt="Card" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-gray-800 font-medium text-md mb-4">{card.title}</h3>
              <a
                href="#"
                className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:underline"
              >
                Readmore
                <span className="text-lg">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="  text-center mx-auto w-fit text-[40px] pt-[80px] pb-[40px]">
        <h2>Pellentesque suscipit <br />
        fringilla libero eu.</h2>
      </div>
    </div>
  );
}
export default  BlogCards;