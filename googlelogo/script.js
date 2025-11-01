
const data = {
  "users": [
    {
        "id":"2345","email":"oavi@gmail.com","password":"123"},
    
    { "id": "44d4", "email": "ram@gmail.com", "password": "ram" },
    { "id": "9d0e", "email": "rkranjithkumar009@gmail.com", "password": "123" }
  ]
};


function generateAvatar(email) {
  const firstLetter = email.charAt(0).toUpperCase();

  const colors = [
    "#F44336", "#E91E63", "#9C27B0", "#3F51B5",
    "#03A9F4", "#009688", "#4CAF50", "#FF9800", "#795548"
  ];


  const f=Math.floor(email.charCodeAt(0)*email.length*Math.random(10));
  
  
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash);
  }
  console.log(hash);
  
  const color = colors[Math.abs(f) % colors.length];

  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <circle cx="40" cy="40" r="40" fill="${color}" />
      <text x="50%" y="55%" text-anchor="middle" fill="white"
            font-size="40" font-family="Arial" dy=".3em">${firstLetter}</text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Get the container div
const userList = document.getElementById("user-list");

// Render avatars
data.users.forEach(user => {
  // Generate avatar for this user
  user.avatar = generateAvatar(user.email);

  // Create <img> element
  const img = document.createElement("img");
  img.src = user.avatar;
  img.alt = user.email;
  img.style.borderRadius = "50%";
  img.style.width = "60px";
  img.style.height = "60px";
  img.style.margin = "10px";

  // Optionally add email below image
  const label = document.createElement("p");
  label.textContent = user.email;

  // Wrap them in a div
  const wrapper = document.createElement("div");
  wrapper.style.display = "inline-block";
  wrapper.style.textAlign = "center";
  wrapper.appendChild(img);
  wrapper.appendChild(label);

  userList.appendChild(wrapper);
});
