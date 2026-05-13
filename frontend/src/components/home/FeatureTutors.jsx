import React from "react";
import Typography from "../common/Typography";
import { Link } from "react-router-dom";
import { tutors } from "../../assets/constant/tutors";
import Btn from "../common/Btn";

function FeaturedTutors() {
  return (
    <section className="w-full py-16 bg-lightGreyBG">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* TITLE */}
        <div className="text-center mb-5">
          <Typography variant="h2" className="font-bold text-textBlack">
            Featured Tutors
          </Typography>

          <Typography variant="h4" className="text-textGrey mt-3">
            Learn from our top-rated educators with years of teaching experience
          </Typography>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                flex flex-col
                gap-4
                items-center
              "
            >
              {/* INITIALS */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {tutor.initials}
              </div>

              {/* NAME */}
              <Typography variant="h4" className="font-semibold text-textBlack">
                {tutor.name}
              </Typography>

              {/* SUBJECTS */}
              <div className="flex flex-wrap gap-2">
                {tutor.subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="text-xs bg-lightGreyBG px-2 py-1 rounded-full text-textGrey"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* RATING */}
              <Typography className="text-textGrey">
                ⭐ {tutor.rating} ({tutor.reviews})
              </Typography>

              {/* PRICE */}
              <Typography className="font-semibold text-textBlack">
                ${tutor.price}/hour
              </Typography>

              {/* BUTTON */}
              <Btn variant="blue" className="mt-2 font-medium">
                View Profile
              </Btn>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-5">
          <Link to="/teachers">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              View All Tutors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTutors;
