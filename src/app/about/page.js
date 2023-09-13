"use client"
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TeamMemberCard from '@/components/TeamMemberCard';
import NavBar from '@/components/Navbar';
// import NavBar from '@/';


const teamMembers = [
  { name: 'Isha Shah', role: 'CEO', imageSrc: 'assets/Isha.jpg' },
  { name: 'Sayandeeep Nayak', role: 'CEO', imageSrc: 'assets/image 2.png' },
  { name: 'Dev Jhamtani', role: 'CEO', imageSrc: 'assets/IMG-20230201-WA0000.jpg' },
  { name: 'Isha Shah', role: 'CEO', imageSrc: 'assets/Isha.jpg' },
  { name: 'Isha Shah', role: 'CEO', imageSrc: 'assets/Isha.jpg' },
  // Add more team members here
];

const About = () => {
 

  return (
    
    <div className="flex flex-col min-h-screen bg-dashboard bg-cover bg-no repeat text-white">
      
      <nav className=" p-4">
       <NavBar/>
      </nav>

           {/* Our Story Section */}
      <section className="text-white-700 flex-grow flex items-center justify-center" >
        <div className=" text-white-100 max-w-7xl mx-auto px-8 md:px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-white mt-10 text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-white-100 md:text-lg">
          We are a dynamic team of five dedicated students hailing from diverse branches of engineering – Mechanical Engineering, Computer Engineering, and Information Technology. Currently in our third year of undergraduate studies at SVIT, our collective passion and drive are focused on reshaping the way humanity explores the underwater realm.
          Our journey has been guided by the invaluable expertise of our college alumnus, Arpit Shah, and his accomplished team. Their mentorship and support have played a pivotal role in propelling our remotely operated vehicle (ROV) towards unprecedented success.
          With a shared vision and relentless determination, we are committed to pushing the boundaries of what is possible beneath the waves. Together, we are not just students; we are innovators on a mission to revolutionize underwater exploration.

            {/* Add more content here */}
          </p>
        </div>
      </section>

      {/* Team Member Cards */}
      <section className=" flex-grow py-16 ">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 flex justify-center items-center">Meet Our Team</h2>
      <p className="text-2xl md:text-4xl font-semibold mb-8 flex justify-center items-center">The members who worked hard to bring this project to life.</p>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20 ">
          
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        <div className="md:col-span-3 flex justify-center items-center ">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.slice(0, 2).map((member, index) => (
              <TeamMemberCard key={index} name={member.name} role={member.role} imageSrc={member.imageSrc} />
            ))}
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center items-center ">
          <TeamMemberCard name={teamMembers[2].name} role={teamMembers[2].role} imageSrc={teamMembers[2].imageSrc} />
        </div>
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <TeamMemberCard key={index} name={member.name} role={member.role} imageSrc={member.imageSrc} />
            ))}
          </div>
        </div>
      </div>
      </div>
      </section>

      {/* Footer */}
      {/* <footer className="p-4">
        <div className="max-w-7xl mx-auto text-center">
          <Footer/>
        </div>
      </footer> */}
    
    </div>
  );
};

export default About;