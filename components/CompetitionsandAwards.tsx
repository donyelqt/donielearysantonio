import SectionTitle from "./SectionTitle";

const CompetitionsandAwards = () => {
    return (
        <section
            id="competitions"
            className="container mx-auto px-4 py-32">
            <SectionTitle title="COMPETITIONS AND AWARDS" titleNO="< >" />
            <div className="relative wrap overflow-hidden">
                {/* Vertical timeline line */}
                <div className="border-2 absolute border-opacity-20 border-white h-full left-1/2"></div>

                {/* Timeline event 1 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Hack4Gov4 2024</h3>
                        <p className="text-gray-700 leading-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
                        </p>
                    </div>
                </div>

                {/* Timeline event 2 */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Philippine Startup Challenge 9</h3>
                        <p className="text-gray-700 leading-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
                        </p>
                    </div>
                </div>

                {/* Timeline event 3 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
                        <p className="text-gray-700 leading-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitionsandAwards;
