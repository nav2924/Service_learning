import React from "react";

const teamMembers = [
  {
    name: "Dr. Sony Baboo",
    role: "Chairman",
    image: "https://via.placeholder.com/150?text=Dr.+Sony+Baboo",
  },
  {
    name: "Mr. Albert P.J.",
    role: "Executive Director",
    image: "https://via.placeholder.com/150?text=Mr.+Albert+P.J.",
  },
  {
    name: "Mrs. Laly Albert",
    role: "Secretary",
    image: "https://via.placeholder.com/150?text=Mrs.+Laly+Albert",
  },
  {
    name: "Dr. Philcy Philip",
    role: "Treasurer",
    image: "https://via.placeholder.com/150?text=Dr.+Philcy+Philip",
  },
  {
    name: "Mr. Pradeep Manohar",
    role: "Treasurer",
    image: "https://via.placeholder.com/150?text=Mr.+Pradeep+Manohar",
  },
  {
    name: "Rev. C.A. Benjamin",
    role: "Member",
    image: "https://via.placeholder.com/150?text=Rev.+C.A.+Benjamin",
  },
  {
    name: "Mrs. Shobha Pradeep",
    role: "Member",
    image: "https://via.placeholder.com/150?text=Mrs.+Shobha+Pradeep",
  },
  {
    name: "Rev. Michael Jebaraj",
    role: "Member",
    image: "https://via.placeholder.com/150?text=Rev.+Michael+Jebaraj",
  },
  {
    name: "Mr. Satish Varghese",
    role: "Member",
    image: "https://via.placeholder.com/150?text=Mr.+Satish+Varghese",
  },
];

const Team = ({ members }) => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
            >
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  {member.name}
                </p>
                <p className="text-base text-gray-400 font-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Default export with default team members
export default function TeamContainer() {
  return <Team members={teamMembers} />;
}
