/* =====================================
   FILTER PROJECT
===================================== */

function filterProject(category) {

    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        }

        else if (project.classList.contains(category)) {
            project.style.display = "block";
        }

        else {
            project.style.display = "none";
        }

    });

}


/* =====================================
   VALIDASI FORM HUBUNGI SAYA
===================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("name").value.trim();

    const pesan = document.getElementById("message").value.trim();

    const error = document.getElementById("errorMessage");

    if(nama === "" && pesan === ""){

        error.innerHTML = "Nama dan pesan tidak boleh kosong.";

        return;

    }

    if(nama === ""){

        error.innerHTML = "Silakan isi nama Anda.";

        return;

    }

    if(pesan === ""){

        error.innerHTML = "Silakan tuliskan pesan Anda.";

        return;

    }

    error.innerHTML = "";

    alert("Pesan berhasil dikirim!");

    contactForm.reset();

});


/* =====================================
   ANIMASI SCROLL
===================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const posisi = section.getBoundingClientRect().top;

        const tinggiLayar = window.innerHeight;

        if(posisi < tinggiLayar - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});


/* =====================================
   KONDISI AWAL
===================================== */

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "0.7s";

});


window.dispatchEvent(new Event("scroll"));