"use client";

export default function AuthModal({ modalId, title, message }) {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-xl font-bold text-green-600">{title}</h3>

          <p className="py-4">{message}</p>

          <div className="modal-action">
            <label htmlFor={modalId} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
