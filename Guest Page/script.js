document.getElementById('guestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var classInfo = document.getElementById('class').value;
    var purpose = document.getElementById('purpose').value;

    if (name && classInfo && purpose) {
        var guestEntry = document.createElement('div');
        guestEntry.classList.add('guestEntry');
        guestEntry.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Kelas:</strong> ${classInfo}</p>
            <p><strong>Kepentingan:</strong> ${purpose}</p>
        `;
        document.getElementById('guestList').appendChild(guestEntry);

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('class').value = '';
        document.getElementById('purpose').value = '';

        // Show toast
        Toastify({
            text: "Selamat Datang, " + name + "!",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "linear-gradient(to right, #007bff, #0056b3)"
        }).showToast();
    } else {
        alert('Harap isi semua kolom!');
    }
});
