/** Mobile toggle menu */
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn")

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show")
})

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show")
})

/**github avatar and bio */
const profilePic = document.getElementById("git_profile")
const gitBio = document.getElementById("git_bio")
const hireable = document.getElementById("hireable")

fetch("https://api.github.com/users/JKuffler")
  .then(r => r.json())
  .then(data => {
    profilePic.src = data.avatar_url
    gitBio.innerText = data.bio
    document.getElementById("profile_pic").appendChild(profilePic)
    data.hireable === null
      ? (hireable.innerHTML = `Hireable: 🙋‍♂️ `)
      : (hireable.innerHTML = `Hireable: 🙋‍♂️`)
    data.hireable
      ? (hireable.innerHTML = `Hireable: 🙋‍♂️ `)
      : (hireable.innerHTML = `Hireable: ⛔`)
  })

/** LINKDin */
const linkBadge = document.getElementById("link_badge")

linkBadge.innerHTML = `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jason-kuffler" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jason-kuffler?trk=profile-badge">LinkedIn</a></div>
`

const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector("footer")
const copyright = document.createElement("p")

copyright.innerHTML =
  "Jason Küffler " + "© " + thisYear + "" + "<a href=#top> Top </a>"
footer.appendChild(copyright)
