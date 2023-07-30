import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <h3 className="text-2xl font-bold text-content py-8 lg:max-w-3xl">Web Developer</h3>
        <p className="text-content py-1 lg:max-w-3xl">{personalDetails.about}</p>
        <h3 className="text-2xl font-bold text-content py-8 lg:max-w-3xl"> Developer</h3>
        <p className="text-content py-1 lg:max-w-3xl">{personalDetails.firstStack}</p>
        <h3 className="text-2xl font-bold text-content py-8 lg:max-w-3xl">Fusion Of Roles</h3>
        <p className="text-content py-1 lg:max-w-3xl">{personalDetails.rolesCombine}</p>
        <h3 className="text-2xl font-bold text-content py-8 lg:max-w-3xl">Passion For Collaboration</h3>
        <p className="text-content py-1 lg:max-w-3xl">{personalDetails.collab}</p>
      </section>
      <section>
        <h1 className="text-2xl py-8 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration}) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
