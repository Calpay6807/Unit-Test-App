import React, { useState } from "react";

const Form = () => {
  const [isChecked, setİsChecked] = useState(false);
  const [isHover, setİsHover] = useState(false);
  console.log(isHover);
  return (
    <div className="my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setİsChecked(e.target.checked)}
        id="terms"
        className="form-check-input"
        type="checkbox"
      />
      <div className="terms text-nowrap">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className="bg-light rounded p-2 shadow"
        >
          Sen Hiçbir Şeyi Haketmiyosun
        </p>
        <label className="lead" htmlFor="terms">
          Okudum onaylıorum
        </label>
      </div>
      <button
        onMouseEnter={() => setİsHover(true)}
        onMouseLeave={() => setİsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning"
      >
        Siparişi onayla
      </button>
    </div>
  );
};

export default Form;
