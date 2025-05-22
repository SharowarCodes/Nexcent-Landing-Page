import frame from "../assets/Frame 35.png";
const Info2nd = () =>{
    return(
      <div className="flex pt-[80px] pb-[40px] flex-col-reverse md:flex-row items-center justify-between gap-10">
        <img
          src={frame} // Replace with actual image path
          alt="Illustration"
          className="w-[200px] px-[20px] md:w-1/2 max-w-md"
        />
        <div className=" w-[400px] md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            How to design your site footer like <br />  we did 
            </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum.<br /> Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem <br />sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium <br />auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

    );
};

export default Info2nd;