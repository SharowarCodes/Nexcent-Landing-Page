import tim from "../assets/image 9.png";
const Tim = () =>{
    return(
      <div className="flex pt-[80px] pb-[40px] flex-col-reverse md:flex-row items-center justify-between gap-10">
        <img
          src={tim} // Replace with actual image path
          alt="Illustration"
          className="w-[200px] px-[20px] md:w-1/2 max-w-md"
        />
        <div className=" w-[400px] md:w-1/2">
           <p className="text-gray-600 mb-6 text-sm">
            Maecenas dignissim justo eget nulla rutrum molestie.
             Maecenas lobortis sem dui, vel rutrum risus tincidunt 
             ullamcorper. Proin eu enim metus. Vivamus sed libero ornare
             , tristique quam in, gravida enim. Nullam ut molestie arcu, 
             at hendrerit elit. Morbi laoreet elit at ligula molestie, nec
              molestie mi blandit. Suspendisse cursus tellus sed augue 
              ultrices, quis tristique nulla sodales. Suspendisse eget 
              lorem eu turpis vestibulum pretium. Suspendisse potenti. 
              Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
               Quisque vulputate odio neque, eget efficitur 
            libero condimentum id. Curabitur id nibh id sem dignissim
             finibus ac sit amet magna.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Tim Smith <br />
            </h3>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

    );
};

export default Tim;