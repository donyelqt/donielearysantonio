import React from "react";
import ProjectsCard from "./ProjectsCard";

const AllProjects = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center"> 
            <h2 className="text-3xl font-titleFont font-semibold">
                All Projects
            </h2>
            <p className="text-sm font-titleFont text-textCyan">
                view the archive
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
            <ProjectsCard 
              title="Netflix Clone by Doniele"
              des="A full-stack website application Netflix clone utilized by React, Tailwind CSS, NextJS, Prisma, Supabase, NextAuth, and deployed in Vercel."
              listItem={["React", "Tailwind CSS", "NextJS", "Prisma", "Supabase", "NextAuth", "Vercel"]}  
              link="https://netflixbydoniele.vercel.app/"         
            />
            <ProjectsCard 
              title="Full - Stack Portfolio"
              des="A responsive and full-stack portfolio with admin login authorization allows you to see your Facebook Messenger, SMS, and Gmail messages for my university project purposes, utilized by HTML5, CSS3, and JavaScript ES7+"
              listItem={["HTML5", "CSS3", "JavaScript ES7+" ]}  
              link="https://doniele.pages.dev/"         
            />
            <ProjectsCard 
              title="DonieleAI"
              des="A simple AI image generator is utilized by HTML5, CSS3, JavaScript ES7+, and the OpenAI API."
              listItem={["HTML5", "CSS3", "JavaScript ES7+"]}  
              link="https://donieleai.pages.dev/"         
            />
            <ProjectsCard 
              title="UC GastroBaguio"
              des="A university healthcare website application for the hospitals based in Baguio City, Philippines, to solve the problems in gastroenteritis cases in Baguio City."
              listItem={["ReactJS", "NextJS", "SCSS"]}  
              link="https://ucgastrobaguio.vercel.app/"         
            />
            <ProjectsCard 
              title="UC GastroBaguio - Consultation"
              des="A full-stack univ healthcare web app and the first online platform of UC for hospitals that you can use to schedule your consultation for health-related services in hospitals in Baguio City quickly and efficiently."
              listItem={["NextJS", "Tailwind CSS", "NodeJS", "Strapi"]}  
              link="https://ucgastrobaguio-consultation.vercel.app/"         
            />
        </div>
    </div>
  );
};

export default AllProjects;