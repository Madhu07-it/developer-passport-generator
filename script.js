async function generateProfile() {

    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const image = document.getElementById("image").value;

    const response = await fetch("/generate-profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            bio,
            image
        })
    });

    const data = await response.json();

    document.getElementById("profileCard").innerHTML = `
        <div class="profile-card">
            <img src="${data.image}" alt="Profile Image">

            <h2>${data.name}</h2>

            <p>${data.bio}</p>
        </div>
    `;
}