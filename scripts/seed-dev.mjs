const response = await fetch("http://127.0.0.1:3000/api/seed", { method: "POST" });
const text = await response.text();
if (!response.ok) {
  console.error(text);
  process.exit(1);
}
console.log(text);
