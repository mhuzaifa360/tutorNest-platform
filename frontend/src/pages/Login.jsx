import { useState } from "react";
import { Link } from "react-router";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import Btn from "../components/common/Btn";
import Typography from "../components/common/Typography";

const Login = () => {
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);

  return (
      <section className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-6">
          {/* TOP CONTENT */}
          <div className="flex flex-col gap-2 text-center">
            <Typography variant="h2" className="font-bold text-heading">
              Welcome Back
            </Typography>

            <Typography variant="body" className="text-muted">
              Sign in to your TutorNest account
            </Typography>
          </div>

          {/* ROLE SELECT */}
          <div className="flex flex-col gap-3">
            <Typography variant="body" className="font-semibold text-heading">
              I am a
            </Typography>

            <div className="flex items-center gap-3">
              <Btn
                onClick={() => setRole("Student")}
                className={`flex-1 h-12 rounded-xl border transition-all duration-300 font-semibold ${
                  role === "Student"
                    ? "!bg-primary !text-white border-primary"
                    : "!bg-white !text-primary border-border"
                }`}
              >
                Student
              </Btn>

              <Btn
                onClick={() => setRole("Teacher")}
                className={`flex-1 h-12 rounded-xl border transition-all duration-300 font-semibold ${
                  role === "Teacher"
                    ? "!bg-primary !text-white border-primary"
                    : "!bg-white !text-primary border-border"
                }`}
              >
                Teacher
              </Btn>
            </div>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-5">
            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <Typography variant="body" className="font-medium text-heading">
                Email
              </Typography>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-12 px-4 rounded-xl border border-border outline-none focus:border-primary"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <Typography variant="body" className="font-medium text-heading">
                Password
              </Typography>

              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 pr-12 rounded-xl border border-border outline-none focus:border-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-xl text-muted"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <Btn className="w-full h-12" variant="blue">
              Sign In
            </Btn>
          </form>

          {/* FOOTER */}
          <div className="text-center">
            <Typography variant="body" className="text-muted">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold">
                Sign up
              </Link>
            </Typography>
          </div>
        </div>
      </section>
    
  );
};

export default Login;
