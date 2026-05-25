
import Typography from "../common/Typography";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-14 pb-8">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ABOUT */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" className="font-bold text-white">
              TutorNest
            </Typography>

            <Typography className="text-white/80 leading-relaxed">
              Connecting students with verified tutors for personalized online
              learning experiences.
            </Typography>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4">
            <Typography variant="h4" className="font-semibold">
              Quick Links
            </Typography>

            <div className="flex flex-col gap-2 text-white/80">
              <Link to="/teachers" className="hover:text-white">
                Find Tutors
              </Link>
              <Link to="/courses" className="hover:text-white">
                Browse Courses
              </Link>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* FOR TUTORS */}
          <div className="flex flex-col gap-4">
            <Typography variant="h4" className="font-semibold">
              For Tutors
            </Typography>

            <div className="flex flex-col gap-2 text-white/80">
              <Link to="/become-tutor" className="hover:text-white">
                Become a Tutor
              </Link>
              <Link to="/guidelines" className="hover:text-white">
                Tutor Guidelines
              </Link>
              <Link to="/resources" className="hover:text-white">
                Resources
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <Typography variant="h4" className="font-semibold">
              Connect With Us
            </Typography>

            <Typography className="text-white/80">
              support@tutornest.com
            </Typography>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <Typography className="text-white/70 text-sm">
            © 2026 TutorNest. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
