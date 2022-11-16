const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector("footer")
const copyright = document.createElement("p")

copyright.innerHTML =
  "Jason Küffler " + "© " + thisYear + "" + "<a href=#top> Top </a>"
footer.appendChild(copyright)

const profilePic = document.getElementById("git_profile")

fetch("https://api.github.com/users/JKuffler")
  .then(r => r.json())
  .then(data => {
    profilePic.src = data.avatar_url
    // const projectSection = document.getElementById("projects")
    // const projectsList = projectSection.querySelector("ul")

    document.getElementById("profile_pic").appendChild(profilePic)
    for (let i = 0; i < 3; i++) {
      const project = document.createElement("li")
      project.innerHTML =
        `<a href=${data[i].html_url} target='_blank' rel="noopener noreferrer">` +
        `  ${data[i].name}  `.toString().slice(0, 22) +
        `|Created| ` +
        new Date(`${data[i].created_at}`).toDateString().getFullYear() +
        `</a>`
      projectsList.appendChild(project)
    }
  })

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
