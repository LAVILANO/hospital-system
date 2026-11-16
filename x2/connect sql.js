document.getElementById("loginForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:3000/login",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            credentials: "include",

            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    );

    const data = await response.json();

    document.getElementById("message").textContent =
        data.message;

    if (response.ok) {
        window.location.href = "home.html";
    }

});