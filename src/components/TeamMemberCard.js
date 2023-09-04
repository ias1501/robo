import React from 'react';

const TeamMemberCard = ({ name, role, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:flex-row flex flex-col ">
      <div className="md:w-1/3 md:mr-4 flex items-center justify-center mb-4 md:mb-0">
        <img src={imageSrc} alt={`${name} - ${role}`} className="rounded-full w-20 h-20" />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
