import React from "react";

export default function EditMemberModal({
  isOpen,
  onClose,
  memberData,
  setMemberData,
  onUpdate,
  inputClass,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">

        <h2 className="text-xl font-semibold mb-4 text-cyan-800">
          Edit Member Details
        </h2>

        {/* Name */}
        <input
          className={inputClass}
          value={memberData.name}
          placeholder="Name"
          onChange={(e) =>
            setMemberData({ ...memberData, name: e.target.value })
          }
        />

        {/* Email */}
        <input
          className={inputClass}
          value={memberData.email}
          placeholder="Email"
          onChange={(e) =>
            setMemberData({ ...memberData, email: e.target.value })
          }
        />

        {/* Position */}
        <input
          className={inputClass}
          value={memberData.position}
          placeholder="Position"
          onChange={(e) =>
            setMemberData({ ...memberData, position: e.target.value })
          }
        />

        {/* Description */}
        <textarea
          className={inputClass + " min-h-24"}
          value={memberData.description}
          placeholder="Description"
          onChange={(e) =>
            setMemberData({ ...memberData, description: e.target.value })
          }
        />

        <button
          className="bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg w-full mt-4"
          onClick={onUpdate}
        >
          Update Member
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
