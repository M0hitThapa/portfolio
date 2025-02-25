export default function ContactForm() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-full max-w-md p-6 bg-black rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-white text-center mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-slate-200">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-400">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black border hover:bg-black/50 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  