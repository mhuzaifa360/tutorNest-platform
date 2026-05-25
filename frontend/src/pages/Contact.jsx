
import Typography from "../components/common/Typography";

function Contact() {
  return (
    <div className="w-full">
      {/* HERO / TITLE */}
      <section className="bg-lightGreyBG py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 text-center">
          <Typography variant="h2" className="font-bold">
            Get in Touch
          </Typography>

          <Typography className="text-textGrey mt-3 max-w-2xl mx-auto">
            Have questions? We’d love to hear from you. Send us a message and
            we’ll respond as soon as possible.
          </Typography>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border p-3 rounded-lg outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="your@email.com"
                className="border p-3 rounded-lg outline-none focus:border-primary"
              />

              <textarea
                placeholder="Tell us how we can help..."
                rows="5"
                className="border p-3 rounded-lg outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Typography className="font-semibold mb-1">Email</Typography>
              <Typography className="text-textGrey">
                support@tutornest.com
              </Typography>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Typography className="font-semibold mb-1">Phone</Typography>
              <Typography className="text-textGrey">
                +1 (555) 123-4567
              </Typography>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Typography className="font-semibold mb-1">Office</Typography>
              <Typography className="text-textGrey">
                123 Education Street, San Francisco, CA 94102
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
