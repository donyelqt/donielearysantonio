import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { introtopython_datacamp, understandingdatascience_datacamp, understandingdatavisualization_datacamp, understandingmachinelearning_datacamp } from "@/public/assets";

const Certifications = () => {
    return (
        <section id="certifications" className="max-w-container mx-auto lgl:px-20 py-24">
            <div className="bg-transparent">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-textLight mb-8">CERTIFICATIONS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1st Certification */}
                        <div className="bg-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-90 hover:shadow-lg duration-300">
                            <Image
                                src={introtopython_datacamp}
                                alt="Introduction to Python"
                                width={300}
                                height={300}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl text-white font-semibold text-center">Introduction to Python</h3>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-gray-400 text-center">DataCamp</p>
                                <p className="text-sm text-gray-400 text-center">Issued: Jan 2025</p>
                            </div>
                            <p className="text-textCyan text-md mt-4 hover:cursor-pointer"><a href="https://www.datacamp.com/statement-of-accomplishment/course/ce18e56d2ce65ba03dda2e5f801ce815e45723e2?raw=1" className="flex items-center">
                                View Certificate<FaArrowRight className="ml-2" />
                            </a>
                            </p>
                        </div>

                        {/* 2nd Certification */}
                        <div className="bg-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-90 hover:shadow-lg duration-300">
                            <Image
                                src={understandingdatascience_datacamp}
                                alt="Understanding Data Science"
                                width={300}
                                height={300}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl text-white font-semibold text-center">Understanding Data Science</h3>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-gray-400 text-center">DataCamp</p>
                                <p className="text-sm text-gray-400 text-center">Issued: Jan 2025</p>
                            </div>
                            <p className="text-textCyan text-md mt-4 hover:cursor-pointer"><a href="https://www.datacamp.com/statement-of-accomplishment/course/8ab417d390576c5f375389ab2ee8b7e1bf9f3b5f?raw=1" className="flex items-center">
                                View Certificate<FaArrowRight className="ml-2" />
                            </a>
                            </p>
                        </div>

                          {/* 3rd Certification */}
                          <div className="bg-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-90 hover:shadow-lg duration-300">
                            <Image
                                src={understandingmachinelearning_datacamp}
                                alt="Understanding Machine Learning"
                                width={300}
                                height={300}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl text-white font-semibold text-center">Understanding Machine Learning</h3>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-gray-400 text-center">DataCamp</p>
                                <p className="text-sm text-gray-400 text-center">Issued: Jan 2025</p>
                            </div>
                            <p className="text-textCyan text-md mt-4 hover:cursor-pointer"><a href="https://www.datacamp.com/statement-of-accomplishment/course/aae6b0e91d33cc85b80daa95d3dd964e1a6b9e66?raw=1" className="flex items-center">
                                View Certificate<FaArrowRight className="ml-2" />
                            </a>
                            </p>
                        </div>

                          {/* 4th Certification */}
                          <div className="bg-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-90 hover:shadow-lg duration-300">
                            <Image
                                src={understandingdatavisualization_datacamp}
                                alt="Understanding Data Visualization"
                                width={300}
                                height={300}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl text-white font-semibold text-center">Understanding Data Visualization</h3>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-gray-400 text-center">DataCamp</p>
                                <p className="text-sm text-gray-400 text-center">Issued: Jan 2025</p>
                            </div>
                            <p className="text-textCyan text-md mt-4 hover:cursor-pointer"><a href="https://www.datacamp.com/statement-of-accomplishment/course/0b03f6d06bdd3f91b83969f8b70defc7a7c6e780?raw=1" className="flex items-center">
                                View Certificate<FaArrowRight className="ml-2" />
                            </a>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
