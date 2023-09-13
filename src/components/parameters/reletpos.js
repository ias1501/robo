import React, { useState, useEffect, useRef } from "react";
import supabase from "@/lib/supabase-browser";

function Reletpos() {
  const [xPosition, setXPosition] = useState("");
  const [yPosition, setYPosition] = useState("");
  const [markerPositions, setMarkerPositions] = useState([]); // Use an array to store multiple marker positions
  const [showMarkerPopup, setShowMarkerPopup] = useState(false);
  const canvasSize = { width: 400, height: 400 };
  const canvasRef = useRef(null);

  useEffect(() => {
    async function fetchAllValues() {
      try {
        const { data, error } = await supabase
          .from("positional_para")
          .select("Acc_x, Acc_y")
          .order("created_at", { ascending: true }); // Change to ascending to get all values

        if (error) {
          throw error;
        }

        const values = data; // An array of all x and y values

        // Create an array of marker positions from the values
        const markers = values.map((value) => ({
          x: value.Acc_x,
          y: value.Acc_y,
        }));

        // Update the marker positions state
        setMarkerPositions(markers);

        // Update X and Y positions to the latest value
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAllValues();

    const parameters = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "parameters" },
        (payload) => {
          console.log("Change received!", payload);
          fetchAllValues();
        }
      )
      .subscribe();
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if the click is within any marker's boundaries
    const clickedMarker = markerPositions.find(
      (marker) =>
        x >= marker.x - 10 &&
        x <= marker.x + 10 &&
        y >= marker.y - 10 &&
        y <= marker.y + 10
    );

    // Show the marker popup if clicking on a marker
    if (clickedMarker) {
      setShowMarkerPopup(true);
    } else {
      // Hide the marker popup if clicking outside any marker
      setShowMarkerPopup(false);
    }
  };

  const drawCanvas = (ctx) => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    // Draw grid lines
    ctx.strokeStyle = "#ccc";
    for (let x = 0; x <= canvasSize.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasSize.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvasSize.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasSize.width, y);
      ctx.stroke();
    }

    // Draw X and Y axes
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(0, canvasSize.height / 2);
    ctx.lineTo(canvasSize.width, canvasSize.height / 2);
    ctx.moveTo(canvasSize.width / 2, 0);
    ctx.lineTo(canvasSize.width / 2, canvasSize.height);
    ctx.stroke();

    // Plot all marker positions
    if (markerPositions.length > 0) {
      ctx.fillStyle = "red";
      const markerRadius = 5; // Radius of the circular marker
      markerPositions.forEach((marker) => {
        ctx.beginPath();
        ctx.arc(marker.x, marker.y, markerRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawCanvas(ctx);
  }, [markerPositions]);

  return (
    <div className="card">
      <h1 className="text-2xl font-semibold mb-4">IoT Device Position</h1>
      <div className="w-1/2 bg-sky-50 shadow-md p-4 rounded-lg relative">
        <div className="relative h-96">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 cursor-pointer"
            width={canvasSize.width}
            height={canvasSize.height}
            onClick={handleCanvasClick}
          ></canvas>
          {showMarkerPopup && markerPositions.length > 0 && (
            <div
              className="absolute bg-white p-2 rounded shadow-md"
              style={{
                top: markerPositions[0].y + 20, // Adjust the position
                left: markerPositions[0].x + 10, // Adjust the position
              }}
            >
              {markerPositions.map((marker, index) => (
                <div key={index}>
                  <p>X: {marker.x.toFixed(2)}</p>
                  <p>Y: {marker.y.toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reletpos;
