import SectionTitle from "./SectionTitle";
import SectionTitle1 from "./SectionTitle1";

const CompetitionsandAwards = () => {
    return (
        <section
            id="competitions"
            className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-32">
            <SectionTitle1 title="COMPETITIONS / AWARDS" titleNO="< >" />
            <div className="relative mt-2 wrap overflow-hidden">
                {/* Vertical timeline line */}
                <div className="border-2 absolute border-opacity-20 border-white h-full left-1/2"></div>

                {/* Timeline event 1 */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div className="order-1 mt-5 bg-gray-800 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Left-facing arrow for event 1 */}
                        <div className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 transform -translate-y-1/2 border-l-[8px] md:border-l-[10px] border-l-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-r-[8px] md:border-r-[10px] border-r-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="font-bold text-center text-slate-300 text-lg md:text-xl">
                            Hack4Gov3 CTF 2024 - UC Representative
                        </h3>
                        <p className="text-gray-700 leading-tight"></p>
                    </div>
                </div>

                {/* Timeline event 2 */}
                <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                    </div>
                    <div className="order-1 mt-5 bg-gray-800 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Right-facing arrow for event 2 */}
                        <div className="absolute -right-4 md:-right-6 lg:-right-10 top-1/2 transform -translate-y-1/2 border-r-[8px] md:border-r-[10px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[8px] md:border-l-[10px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className=" mb-3 text-center font-bold text-slate-300 text-lg md:text-xl">
                            Philippine Startup Challenge 9 Orientation & Mock Pitching
                        </h3>
                        <p className="text-gray-500 leading-tight"></p>
                    </div>
                </div>

                {/* Timeline event 3 */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 mt-5 bg-gray-800 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Left-facing arrow for event 3 */}
                        <div className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 transform -translate-y-1/2 border-l-[8px] md:border-l-[10px] border-l-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-r-[8px] md:border-r-[10px] border-r-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="mb-3 text-center font-bold text-slate-300 text-lg md:text-xl">
                            Startup Ignited 6 - Isango Pitching Competition
                        </h3>
                        <p className="text-gray-700 leading-tight"></p>
                    </div>
                </div>

                {/* Timeline event 4 */}
                <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 md:w-14 md:h-14 border-2 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                    </div>
                    <div className="order-1 mt-5 bg-gray-800 rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Right-facing arrow for event 4 */}
                        <div className="absolute -right-4 md:-right-6 lg:-right-10 top-1/2 transform -translate-y-1/2 border-r-[8px] md:border-r-[10px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[8px] md:border-l-[10px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="mb-3 text-center font-bold text-slate-300 text-lg md:text-xl">
                            Philippine Startup Challenge 9 Semi Finalist
                        </h3>
                        <p className="text-gray-500 leading-tight">
                            Lead a diverse team including Hipster, Hustler, and me as a hacker and spearhead the development of
                            our MVP fintech app named PeraPinoy to secure a spot as a PSC 9 CAR Semifinalist and pitch our
                            startup to the judges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitionsandAwards;
