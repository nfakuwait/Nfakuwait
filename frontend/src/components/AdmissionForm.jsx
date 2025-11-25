import React, { useState } from "react";

const AdmissionForm = () => {
  const [age, setAge] = useState(null);
  const [ageError, setAgeError] = useState("");

  const [course, setCourse] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);

  const calculateAge = (dob) => {
    if (!dob) return null;
    const birth = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      years--;
    }

    return years;
  };

  const handleDOBChange = (e) => {
    const dob = e.target.value;
    const calculatedAge = calculateAge(dob);

    setAge(calculatedAge);

    if (calculatedAge !== null && calculatedAge < 5) {
      setAgeError("Age must be 5 years or above.");
    } else {
      setAgeError("");
    }
  };

  const handleCourseChange = (e) => {
    const selected = e.target.value;
    setCourse(selected);

    if (selected === "Tamil Class") {
      setLocationOptions(["Mangaf", "Abbasiya", "Salmiya", "Abu Halifa"]);
    } else if (selected === "Silambam") {
      setLocationOptions(["Mangaf"]);
    } else {
      setLocationOptions([]);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (age < 5) {
      setAgeError("Age must be at least 5 to submit.");
      return;
    }

    const formData = {
      name: e.target.name.value,
      civilIdNo: e.target.Civilidno.value,
      dob: e.target.dob.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      course: e.target.course.value,
      location: e.target.location.value,
      school: e.target.school.value,
      grade: e.target.grade.value,
      respond: false,
    };

    console.log("Form Submitted:", formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-data`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("Form submitted successfully!");
      }

      e.target.reset();
      setAge(null);
      setCourse("");
      setLocationOptions([]);
    } catch (err) {
      alert("Sorry Network Error. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="mt-5 md:mt-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl border border-slate-200 rounded-3xl p-10">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-10">
          Admission Form
        </h1>

        <form onSubmit={formSubmitHandler} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student's full name"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Civil ID */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Civil ID Number</label>
            <input
              type="text"
              name="Civilidno"
              placeholder="Eg: 123456789012"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* DOB */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              onChange={handleDOBChange}
              className={`mt-1 px-4 py-2 rounded-xl border ${
                ageError ? "border-red-500" : "border-gray-300"
              } focus:ring-blue-500 outline-none`}
            />
            {age !== null && (
              <p className="mt-1 text-sm font-medium text-gray-700">
                Age: <span className="text-blue-700">{age} years</span>
              </p>
            )}
            {ageError && (
              <p className="text-red-500 text-sm font-semibold mt-1">
                {ageError}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="House, Block, Area"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+965 XXXXXXXX"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Course Selection */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Course Applied For</label>
            <select
              name="course"
              required
              onChange={handleCourseChange}
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            >
              <option value="">Select course</option>
              <option value="Tamil Class">Tamil Class</option>
              <option value="Silambam">Silambam</option>
            </select>
          </div>

          {/* Dynamic Location Field */}
          {course && (
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Location</label>
              <select
                name="location"
                required
                className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
              >
                <option value="">Select location</option>
                {locationOptions.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* School */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">School</label>
            <input
              type="text"
              name="school"
              placeholder="Enter school name"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Grade */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Grade</label>
            <input
              type="text"
              name="grade"
              placeholder="Eg: Grade 1 / Grade 2"
              required
              className="mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              disabled={ageError}
              className={`px-10 py-3 rounded-full text-white font-semibold shadow-md transition ${
                ageError
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:scale-105"
              }`}
            >
              Submit Form
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
