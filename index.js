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
const gitBio = document.getElementById("git_bio")
const hireable = document.getElementById("hireable")

fetch("https://api.github.com/users/JKuffler")
  .then(r => r.json())
  .then(data => {
    profilePic.src = data.avatar_url
    gitBio.innerText = data.bio
    document.getElementById("profile_pic").appendChild(profilePic)
    data.hireable ? (hireable.innerHTML = `Hireable: 🙋‍♂️ `) : hireable.innerHTML = `Hireable: ⛔`
  })

fetch("https://api.github.com/users/JKuffler/repos")
  .then(r => r.json())
  .then(repos => {
    const projectSection = document.getElementById("projects")
    const projectsList = projectSection.querySelector("ul")

    const sortedRepos = repos.sort((a, b) => b.id - a.id)
    console.log(sortedRepos)
    for (let i = 0; i < 10; i++) {
      const repos = document.createElement("li")
      repos.innerHTML =
        `<a href=${sortedRepos[i].html_url} target='_blank' rel="noopener noreferrer">` +
        `  ${sortedRepos[i].name}  `.toString().slice(0, 22) +
        `|Created| ` +
        new Date(`${sortedRepos[i].created_at}`).toDateString() +
        `</a>`
      projectsList.appendChild(repos)
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
