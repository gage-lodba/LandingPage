const links = [
  { label: "Link #1", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { label: "Link #2", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { label: "Link #3", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const container = document.querySelector(".links");

for (const { label, url } of links) {
  const anchor = document.createElement("a");
  anchor.textContent = label;
  anchor.href = url;
  anchor.className = "button";
  container.append(anchor);
}
