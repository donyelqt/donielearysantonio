import React from "react";

const Certifications = () => {
    const certifications = [
        {
            title: "Certified Web Developer",
            issuer: "Web Development Institute",
            date: "Jan 2023",
            image: "https://via.placeholder.com/100",
        },
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "Mar 2023",
            image: "https://via.placeholder.com/100",
        },
        {
            title: "Google Data Analytics Professional",
            issuer: "Google",
            date: "May 2023",
            image: "https://via.placeholder.com/100",
        },
        {
            title: "Certified Scrum Master",
            issuer: "Scrum Alliance",
            date: "Jul 2023",
            image: "https://via.placeholder.com/100",
        },
        {
            title: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            date: "Sep 2023",
            image: "https://via.placeholder.com/100",
        },
        {
            title: "Certified Ethical Hacker",
            issuer: "EC-Council",
            date: "Nov 2023",
            image: "https://via.placeholder.com/100",
        },
    ];

    return (
        <section id="certifications" className="max-w-container mx-auto lgl:px-20 py-24">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-20 h-20 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
                                <p className="text-gray-600 text-center">{cert.issuer}</p>
                                <p className="text-sm text-gray-500 text-center mt-2">
                                    Issued: {cert.date}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;