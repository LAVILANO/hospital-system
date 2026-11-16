
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

    district.innerHTML = '<option value="">Select district</option>';

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
// 3. FORM VALIDATION
// =====================================

const hospitalForm = document.getElementById("hospitalForm");
const message = document.getElementById("message");

hospitalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!hospitalForm.checkValidity()) {

        hospitalForm.reportValidity();
        return;

    }

    const passwordValue = password.value;

    if (passwordValue.length < 8) {

        message.textContent = "Password must contain at least 8 characters.";
        message.style.color = "red";

        return;

    }

    // message.textContent =
    //     "Registration form completed! Connect PHP and MySQL to save the application.";

    // message.style.color = "green";

});


// =====================================
// 4. RESET MESSAGE
// =====================================

hospitalForm.addEventListener("reset", function () {

    message.textContent = "";

    setTimeout(function () {
        password.type = "password";
        togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
        district.innerHTML = '<option value="">Select district</option>';
    }, 0);

});
