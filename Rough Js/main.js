const rc = rough.canvas(document.getElementById("canvas"));
const rf = rough.canvas(document.getElementById("canvas2"));
rf;
// rc.rectangle(10, 10, 200, 200, {
//   strokeWidth: 1,
//   stroke: "green",
//   fill: "red",
//   fillStyle: "zigzag",
//   roughness: 6,
// }); // x, y, width, height

rc.circle(50, 50, 80, { fill: "red" }); // fill with red hachure
rc.rectangle(120, 15, 80, 80, { fill: "red" });
rc.circle(50, 150, 80, {
  fill: "rgb(10,150,10)",
  fillWeight: 3, // thicker lines for hachure
});
rc.rectangle(220, 15, 80, 80, {
  fill: "red",
  hachureAngle: 60, // angle of hachure,
  hachureGap: 8,
});
rc.rectangle(120, 105, 80, 80, {
  fill: "rgba(255,0,200,0.2)",
  fillStyle: "solid", // solid fill
});

rf.path("M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z", { fill: "green" });
rf.path("M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z", { fill: "purple" });
rf.path("M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z", { fill: "red" });
rf.path("M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z", { fill: "blue" });
