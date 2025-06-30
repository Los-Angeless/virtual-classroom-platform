import React, { useState } from "react";

const LiveClass = () => {
  const userRole = "instructor"; // change to "student" for testing

  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Java Basics - Live Session",
      instructor: "Nishant W.",
      time: "10:00 AM - 11:00 AM",
      link: "https://zoom.us/fake-link-1",
    },
    {
      id: 2,
      title: "AI in Education",
      instructor: "Prof. Paul",
      time: "2:00 PM - 3:30 PM",
      link: "https://zoom.us/fake-link-2",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    time: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      id: classes.length + 1,
      ...formData,
    };
    setClasses([...classes, newClass]);
    alert("✅ Live class created successfully!");
    setFormData({ title: "", instructor: "", time: "", link: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📺 Upcoming Live Classes</h2>

      <div className="grid gap-4 mb-8">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">{cls.title}</h3>
            <p className="text-gray-700">Instructor: {cls.instructor}</p>
            <p className="text-gray-600">Time: {cls.time}</p>
            <a
              href={cls.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      {userRole === "instructor" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-700">➕ Create New Live Class</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Class Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Instructor Name</label>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="e.g. 10:00 AM - 11:00 AM"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Zoom/Meet Link</label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://zoom.us/..."
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Create Class
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveClass;
