import { useMemo } from "react";
import "./FloatingPetals.css";

// عدد بتلات معقول حتى لا يثقل الأداء على الموبايل
const PETAL_COUNT = 12;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(10, 22),
        duration: rand(14, 26),
        delay: rand(-20, 0),
        drift: rand(-40, 40),
        rotateStart: rand(0, 360),
      })),
    []
  );

  return (
    <div className="petals-layer" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
            "--rotate-start": `${p.rotateStart}deg`,
          }}
        />
      ))}
    </div>
  );
}
