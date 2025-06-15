const tournaments = [
  {
    title: "Free Fire Squad Battle",
    prize: "₹1000",
    entry: "Free",
    time: "15 June, 7:00 PM"
  },
  {
    title: "Clash Squad Madness",
    prize: "₹500",
    entry: "Free",
    time: "16 June, 5:00 PM"
  }
];

const container = document.getElementById("tournaments");

tournaments.forEach((tour) => {
  const card = document.createElement("div");
  card.className = "tournament";
  card.innerHTML = `
    <h2>${tour.title}</h2>
    <p><strong>Prize:</strong> ${tour.prize}</p>
    <p><strong>Entry:</strong> ${tour.entry}</p>
    <p><strong>Time:</strong> ${tour.time}</p>
    <button class="join">Join Now</button>
  `;
  container.appendChild(card);
});
