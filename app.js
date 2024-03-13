//Task #07
let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD"
];

document.write("<h2>Available Qualifications: </h2>");
document.write("<ol>")
for (let i = 0; i < qualifications.length; i++) {
  document.write(qualifications[i], "<br>");
}