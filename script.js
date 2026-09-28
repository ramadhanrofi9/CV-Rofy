function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("btn-theme");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}


document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    const pesanStatus = document.getElementById("pesan-status");

    pesanStatus.innerHTML = `
        <div class="alert-success">
            Terima kasih <strong>${nama}</strong>,
            pesan Anda telah berhasil dikirim!
        </div>
    `;

    this.reset();

});
