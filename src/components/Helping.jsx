
import { FaUsers, FaBiking, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

const Helping = () => {
  return (
    <div className="bg-gray-100 py-12 pt-[80px] pb-[40px] px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Helping a local <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-6 text-gray-800">
          <div className="flex items-center space-x-3">
            <FaUsers className="text-green-600 text-2xl" />
            <div>
              <div className="font-semibold text-lg">2,245,341</div>
              <div className="text-sm text-gray-500">Members</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaBiking className="text-green-600 text-2xl" />
            <div>
              <div className="font-semibold text-lg">46,328</div>
              <div className="text-sm text-gray-500">Clubs</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="text-green-600 text-2xl" />
            <div>
              <div className="font-semibold text-lg">828,867</div>
              <div className="text-sm text-gray-500">Event Bookings</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaCreditCard className="text-green-600 text-2xl" />
            <div>
              <div className="font-semibold text-lg">1,926,436</div>
              <div className="text-sm text-gray-500">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
