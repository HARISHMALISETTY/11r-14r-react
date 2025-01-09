import React, { useState } from "react";

export default function CircleComp() {
  const [circles, setCircles] = useState([]);
  const [isIntersect, setIsIntersect] = useState(false);

  const handleClick = (e) => {
    const radius = Math.floor(Math.random() * 181 + 20); // researched to get random radius in b/w 20px and 200px
    const newCircle = { radius: radius, x: e.clientX, y: e.clientY }; // researched to capture the clicked coordinates

    const newCircles = [...circles, newCircle];

    if (newCircles.length > 2) {
      setCircles([]);
      setIsIntersect(false);
    } else {
      setCircles(newCircles);

      if (newCircles.length === 2) {
        const circle1 = newCircles[0];
        const circle2 = newCircles[1];

        const dx = circle2.x - circle1.x;
        const dy = circle2.y - circle1.y;

        const distance = Math.sqrt(dx ** 2 + dy ** 2); // researched how to find the distance b/w the two circles.
        const radiusSum = circle1.radius + circle2.radius;
        // if distance is < (c1.radius+c2.radius),then they both are intersected.-- researched about this.

        // Check if circles intersect
        if (distance < radiusSum) {
          console.log("The circles intersect");
          setIsIntersect(true);
        } else {
          console.log("The circles do not intersect");
          setIsIntersect(false);
        }
      }
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
          backgroundColor: isIntersect ? "red" : "white",
        }}
      >
        {circles.map((a, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: a.x - a.radius,
              top: a.y - a.radius,
              height: 2 * a.radius,
              width: 2 * a.radius,
              borderRadius: "50%",
              backgroundColor: "orange",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
