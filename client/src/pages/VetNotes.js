import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";

export default function VetNotes() {
  return (
    <div>
        <h2>Notes for: "selected pet's name"</h2>
      <div>
        <div> {/* Expandable cards on click */}
            Note 1
        </div>
        <div>
            Note 2
        </div>
        <div>
            Note 3
        </div>
      </div>
    </div>
  );
}
