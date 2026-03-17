const API = "http://localhost:5000/api";

// Load Events
async function loadEvents() {
  let res = await fetch(`${API}/events`);
  let data = await res.json();

  let container = document.getElementById("events");
  container.innerHTML = data.map(e =>
    `<div>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <small>${e.date}</small>
    </div>`
  ).join("");
}

// Load Hackathons
async function loadHackathons() {
  let res = await fetch(`${API}/hackathons`);
  let data = await res.json();

  let container = document.getElementById("hackathons");
  container.innerHTML = data.map(h =>
    `<div>
      <h3>${h.name}</h3>
      <p>Prize: ${h.prize}</p>
      <small>${h.deadline}</small>
    </div>`
  ).join("");
}

// Load Canteen
async function loadCanteen() {
  let res = await fetch(`${API}/canteen`);
  let data = await res.json();

  let container = document.getElementById("canteen");
  container.innerHTML = data.map(c =>
    `<div>
      <h3>${c.item}</h3>
      <p>₹${c.price}</p>
    </div>`
  ).join("");
}
