import React from "react";
import Image from "next/image";

const Certifications = () => {
    return (
        <section id="certifications" className="max-w-container mx-auto lgl:px-20 py-24">
            <div className="bg-transparent">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* First Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="introtopythondatacamp"
                                alt="Certified Web Developer"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Certified Web Developer</h3>
                            <p className="text-gray-600 text-center">Web Development Institute</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: Jan 2023</p>
                        </div>

                        {/* Second Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/assets/aws-cert.png" // Replace with actual image path
                                alt="AWS Certified Solutions Architect"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">AWS Certified Solutions Architect</h3>
                            <p className="text-gray-600 text-center">Amazon Web Services</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: Mar 2023</p>
                        </div>

                        {/* Third Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/assets/google-data-analytics.png" // Replace with actual image path
                                alt="Google Data Analytics Professional"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Google Data Analytics Professional</h3>
                            <p className="text-gray-600 text-center">Google</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: May 2023</p>
                        </div>

                        {/* Fourth Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/assets/scrum-master.png" // Replace with actual image path
                                alt="Certified Scrum Master"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Certified Scrum Master</h3>
                            <p className="text-gray-600 text-center">Scrum Alliance</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: Jul 2023</p>
                        </div>

                        {/* Fifth Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/assets/azure-fundamentals.png" // Replace with actual image path
                                alt="Microsoft Azure Fundamentals"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Microsoft Azure Fundamentals</h3>
                            <p className="text-gray-600 text-center">Microsoft</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: Sep 2023</p>
                        </div>

                        {/* Sixth Certification */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/assets/ethical-hacker.png" // Replace with actual image path
                                alt="Certified Ethical Hacker"
                                width={100}
                                height={100}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Certified Ethical Hacker</h3>
                            <p className="text-gray-600 text-center">EC-Council</p>
                            <p className="text-sm text-gray-500 text-center mt-2">Issued: Nov 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
