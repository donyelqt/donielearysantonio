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
                    <div className="z-20 flex items-center order-1 bg-textBlack shadow-xl w-12 h-12 md:w-16 md:h-16 border-4 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-textCyan">1</h1>
                    </div>
                    <div className="order-1 mt-5 bg-textBlack rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Left-facing arrow for event 1 */}
                        <div className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 transform -translate-y-1/2 border-l-[8px] md:border-l-[10px] border-l-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-r-[8px] md:border-r-[10px] border-r-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="mb-3 font-bold text-center text-textCyan text-lg md:text-xl">
                            Hack4Gov3 CTF 2024 - UC Representative
                        </h3>
                        <p className="text-gray-400 text-sm text-center leading-tight">
                            Showcased adaptability and a commitment to continuous learning by successfully upskilling in
                            cybersecurity, applying these new skills alongside my software development/engineering expertise to
                            contribute significantly to the teams performance.
                        </p>
                    </div>
                </div>

                {/* Timeline event 2 */}
                <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-textBlack shadow-xl w-12 h-12 md:w-16 md:h-16 border-4 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-textCyan">2</h1>
                    </div>
                    <div className="order-1 mt-5 bg-textBlack rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Right-facing arrow for event 2 */}
                        <div className="absolute -right-4 md:-right-6 lg:-right-10 top-1/2 transform -translate-y-1/2 border-r-[8px] md:border-r-[10px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[8px] md:border-l-[10px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className=" mb-3 text-center font-bold text-textCyan text-lg md:text-xl">
                            Philippine Startup Challenge 9 Orientation & Mock Pitching hosted by UC inTTO
                        </h3>
                        <p className="text-gray-400 text-sm text-center leading-tight">
                            We gain positive feedback and attract the UC inTTOs Tech Transfer Associate to volunteer to mentor our team for the upcoming Philippine Startup Challenge 9. We also secured a spot for the UC inTTOs Startup Incubation Program Cohort 8.
                        </p>
                    </div>
                </div>

                {/* Timeline event 3 */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-textBlack shadow-xl w-12 h-12 md:w-16 md:h-16 border-4 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-textCyan">3</h1>
                    </div>
                    <div className="order-1 mt-5 bg-textBlack rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Left-facing arrow for event 3 */}
                        <div className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 transform -translate-y-1/2 border-l-[8px] md:border-l-[10px] border-l-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-r-[8px] md:border-r-[10px] border-r-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="mb-3 text-center font-bold text-textCyan text-lg md:text-xl">
                            Startup Ignited 6 - Isango Pitching Competition
                        </h3>
                        <p className="text-gray-400 text-sm text-center leading-tight">
                            Pitch our startup to the various tech industry expert judges, gain valuable insights, and also be given a
                            chance by a former developer at IBM and a cybersecurity expert to reach out to our team for a 1-on-1
                            mentorship after we pitch our startup to the judges and gain those learnings to apply and prepare for the
                            Philippine Startup Challenge 9.
                        </p>
                    </div>
                </div>

                {/* Timeline event 4 */}
                <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-textBlack shadow-xl w-12 h-12 md:w-16 md:h-16 border-4 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-textCyan">4</h1>
                    </div>
                    <div className="order-1 mt-5 bg-textBlack rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 sm:px-6 relative">
                        {/* Right-facing arrow for event 4 */}
                        <div className="absolute -right-4 md:-right-6 lg:-right-10 top-1/2 transform -translate-y-1/2 border-r-[8px] md:border-r-[10px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[8px] md:border-l-[10px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                        <h3 className="mb-3 text-center font-bold text-textCyan text-lg md:text-xl">
                            Philippine Startup Challenge 9 Semi Finalist
                        </h3>
                        <p className="text-gray-400 text-sm text-center leading-tight">
                            Lead a diverse team including Hipster, Hustler, and me as a Hacker and spearhead the development of
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
