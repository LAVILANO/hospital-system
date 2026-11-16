// =====================================
// 1. SHOW AND HIDE PASSWORD
// =====================================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        this.innerHTML = '<i class="bi bi-eye"></i>';

    } else {

        password.type = "password";
        this.innerHTML = '<i class="bi bi-eye-slash"></i>';

    }

});


// =====================================
// 2. PROVINCE AND DISTRICT SELECTION
// =====================================

const province = document.getElementById("province");
const district = document.getElementById("district");

const districts = {

    Kigali: [
        "Nyarugenge",
        "Gasabo",
        "Kicukiro"
    ],

    Northern: [
        "Burera",
        "Gakenke",
        "Gicumbi",
        "Musanze",
        "Rulindo"
    ],

    Southern: [
        "Gisagara",
        "Huye",
        "Kamonyi",
        "Muhanga",
        "Nyamagabe",
        "Nyanza",
        "Nyaruguru",
        "Ruhango"
    ],

    Eastern: [
        "Bugesera",
        "Gatsibo",
        "Kayonza",
        "Kirehe",
        "Ngoma",
        "Nyagatare",
        "Rwamagana"
    ],

    Western: [
        "Karongi",
        "Ngororero",
        "Nyabihu",
        "Nyamasheke",
        "Rubavu",
        "Rusizi",
        "Rutsiro"
    ]

};

province.addEventListener("change", function () {

    const selectedProvince = this.value;

    district.innerHTML =
        '<option value="">Select district</option>';

    if (districts[selectedProvince]) {

        districts[selectedProvince].forEach(function (name) {

            const option = document.createElement("option");

            option.value = name;
            option.textContent = name;

            district.appendChild(option);

        });

    }

});


// =====================================
// 3. HOSPITAL REGISTRATION
// =====================================

const hospitalForm =
    document.getElementById("hospitalForm");

const message =
    document.getElementById("message");

const submitButton =
    hospitalForm.querySelector('button[type="submit"]');

hospitalForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (!hospitalForm.checkValidity()) {

        hospitalForm.reportValidity();
        return;

    }

    if (password.value.length < 8) {

        message.textContent =
            "Password must contain at least 8 characters.";

        message.style.color = "red";
        return;

    }

    // Collect all form information
    const formData = new FormData(hospitalForm);

    const hospitalData =
        Object.fromEntries(formData.entries());

    hospitalData.terms_accepted =
        document.getElementById("terms").checked;

    // Prevent repeated submissions
    submitButton.disabled = true;
    submitButton.textContent = "Registering...";

    message.textContent = "Saving hospital information...";
    message.style.color = "#0754dc";

    try {

        const response = await fetch(
            "http://localhost:3000/api/hospitals/register",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(hospitalData)

            }
        );

        const result = await response.json();

        if (!response.ok) {

            throw new Error(result.message ||
                "Registration failed.");

        }

        message.textContent = result.message;
        message.style.color = "green";

        // Clear the form after successful registration
        hospitalForm.reset();

        district.innerHTML =
            '<option value="">Select district</option>';

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } catch (error) {

        message.textContent =
            error.message ||
            "Cannot connect to the hospital server.";

        message.style.color = "red";

        console.error("Registration error:", error);

    } finally {

        submitButton.disabled = false;

        submitButton.innerHTML =
            '<i class="bi bi-send-fill"></i> Register Hospital';

    }

});


// =====================================
// 4. RESET MESSAGE
// =====================================

hospitalForm.addEventListener("reset", function () {

    message.textContent = "";

    setTimeout(function () {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

        district.innerHTML =
            '<option value="">Select district</option>';

    }, 0);

});