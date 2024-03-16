import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Button
        type="back"
        onClick={(e) => {
          // Add preventDefault to precent reload on click since it would block
          // actually navigating back
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}
