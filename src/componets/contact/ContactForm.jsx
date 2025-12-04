import React from 'react'

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Let’s Start
      </h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Name + Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-primary mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-primary mb-1">Mobile No</label>
            <input
              type="text"
              placeholder="Your Mobile No"
              className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
            />
          </div>
        </div>

        {/* Email + Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-primary mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-primary mb-1">Website</label>
            <input
              type="text"
              placeholder="Your Link to website (if there is one)"
              className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-primary mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="What do you want to get done?"
            className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-sm"
        >
          Send
          <span>➜</span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm