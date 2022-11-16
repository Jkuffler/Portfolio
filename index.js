const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector("footer")
const copyright = document.createElement("p")

const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn")

copyright.innerHTML =
  "Jason Küffler " + "© " + thisYear + "" + "<a href=#top> Top </a>"
footer.appendChild(copyright)

const profilePic = document.getElementById("git_profile")

fetch("https://api.github.com/users/JKuffler")
  .then(r => r.json())
  .then(data => {
    profilePic.src = data.avatar_url
    document.getElementById("profile_pic").appendChild(profilePic)
  })

fetch("https://api.github.com/users/JKuffler/repos")
  .then(r => r.json())
  .then(repos => {
    const projectSection = document.getElementById("projects")
    const projectsList = projectSection.querySelector("ul")

    const sortedRepos = repos.sort((a, b) => b.id - a.id)
    console.log(sortedRepos)
    for (let i = 0; i < 10; i++) {
      const project = document.createElement("li")
      project.innerHTML =
        `<a href=${sortedRepos[i].html_url} target='_blank' rel="noopener noreferrer">` +
        `  ${sortedRepos[i].name}  `.toString().slice(0, 22) +
        `|Created| ` +
        new Date(`${sortedRepos[i].created_at}`).toDateString() +
        `</a>`
      projectsList.appendChild(project)
    }
  })

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show")
})

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show")
})
