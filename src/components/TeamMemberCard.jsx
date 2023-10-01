import React from "react";

const TeamMemberCard = ({ name, role, imageSrc }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row ">
      <div className="mb-4 flex items-center justify-center md:mb-0 md:mr-4 md:w-1/3">
        <img
          src={imageSrc}
          alt={`${name} - ${role}`}
          className="h-20 w-20 rounded-full"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="mb-2 text-lg font-semibold md:mb-4 md:text-xl lg:text-2xl">
          {name}
        </h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
