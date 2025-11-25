import React from "react";

export default function EditTeacherModal({
  isOpen,
  onClose,
  teacherData,
  setTeacherData,
  onUpdate,
  inputClass,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-xl font-semibold mb-4 text-cyan-800">
          Edit Teacher
        </h2>

        <input
          className={inputClass}
          value={teacherData.name}
          placeholder="Name"
          onChange={(e) =>
            setTeacherData({ ...teacherData, name: e.target.value })
          }
        />

        <input
          className={inputClass}
          value={teacherData.email}
          placeholder="Email"
          onChange={(e) =>
            setTeacherData({ ...teacherData, email: e.target.value })
          }
        />

        <input
          className={inputClass}
          value={teacherData.position}
          placeholder="Position"
          onChange={(e) =>
            setTeacherData({ ...teacherData, position: e.target.value })
          }
        />

        <textarea
          className={inputClass + " min-h-24"}
          value={teacherData.description}
          placeholder="Description"
          onChange={(e) =>
            setTeacherData({
              ...teacherData,
              description: e.target.value,
            })
          }
        />

        <button
          className="bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg w-full mt-4"
          onClick={onUpdate}
        >
          Update Teacher
        </button>

        <button
          className="bg-gray-200 mt-3 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
