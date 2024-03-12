import React from "react";
import styles from "./map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  // Can be used to move to any url
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}
