import SectionTitle from "./SectionTitle";
import SectionTitle1 from "./SectionTitle1";

const CompetitionsandAwards = () => {
  return (
    <section
      id="competitions"
      className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-32">
      <SectionTitle1 title="COMPETITIONS / AWARDS" titleNO="< >" />
      <div className="relative wrap overflow-hidden">
        {/* Vertical timeline line */}
        <div className="border-2 absolute border-opacity-20 border-white h-full  left-1/2"></div>

        {/* Timeline event 1 */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 mt-5 bg-slate-300 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6">
            <h3 className="font-bold text-center text-gray-800 text-lg md:text-xl">
              Hack4Gov4 CTF 2024 - UC Representative
            </h3>
            <p className="text-gray-700 leading-tight">
              
            </p>
          </div>
        </div>

        {/* Timeline event 2 */}
        <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
          </div>
          <div className="order-1 mt-5 bg-slate-300 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6">
            <h3 className="text-center font-bold text-gray-800 text-lg md:text-xl">
              Startup Ignited 6 - Isango Pitching Competition
            </h3>
            <p className="text-gray-700 leading-tight">
              
            </p>
          </div>
        </div>

        {/* Timeline event 3 */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 mt-5 bg-slate-300 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6">
            <h3 className="text-center font-bold text-gray-800 text-lg md:text-xl">
              Philippine Startup Challenge 9 Semi Finalist
            </h3>
            <p className="text-gray-700 leading-tight">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsandAwards;

