function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("mySlides fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// validation
function required(event) {
  var nama = document.getElementsByName("namalengkap").value;
  var tmptlahir = document.getElementsByName("tempatlahir").value;
  var tgllahir = document.getElementsByName("tanggallahir").value;
  var email = document.getElementsByName("email").value;
  var alamat = document.getElementsByName("alamat").value;
  var nomor = document.getElementsByName("nomorhp").value;
  var asal = document.getElementsByName("asalsekolah").value;

  if (nama === "" ||email == "" || tgllahir == "" || tmptlahir == "" || alamat == "" || nomor == "" || asal == "") {
    alert("Harap isi semua bidang yang diperlukan!");
  } else {
    confirmSendMessage(event);
  }
}

function confirmSendMessage(event) {
  var namanya = document.getElementsByName("namalengkap")[0].value;
  event.preventDefault(); // Mencegah pengiriman formulir jika ada bidang yang kosong
  var confirmation = confirm(
    "Apakah Data" + " " + namanya + " " + "Sudah Benar?"
  );

  if (confirmation) {
    viewAlert(namanya);
    window.location = "index.html";
  } else {
  }
}

function viewAlert() {
  var namanya = document.getElementsByName("namalengkap")[0].value;
  alert("Data " + namanya + " Berhasil Disimpan");
}

function resetForm() {
  document.getElementsByName("namalengkap")[0].value = "";
  document.querySelector("text").value = "";
  document.querySelector('input[type="date"]').value = "";
  document.querySelector("text").value = "";
  document.querySelector('input[type="email"]').value = "";
  document.querySelector("text").value = "";
  document.querySelector("text").value = "";
}

function validateForm() {
  var nama = document.querySelector('input[placeholder="Isi Nama Lengkap Anda."]').value;
  var tempatlahir = document.querySelector('input[placeholder="Isi Tempat Lahir Anda."]').value;
  var tgllahir = document.querySelector('input[placeholder="Isi Tanggal Lahir Anda."]').value;
  var alamat = document.querySelector('input[placeholder="Isi Alamat Lengkap Anda."]').value;  
  var email = document.querySelector('input[placeholder="Isi Email Anda."]').value;
  var nohp = document.querySelector('input[placeholder="Isi Nomor HP Anda."]').value;
  var Sekolah = document.querySelector('input[placeholder="Isi Asal Sekolah Anda."]').value;

  if (nama === "" || tempatlahir === "" ||
      tgllahir === "" || alamat=== "" || 
      email === "" || nohp === "" || Sekolah === "") {
    alert("Harap isi semua kolom.");
    return false;
  } else {
    var confirmationMessage = "Apakah data yang Anda masukkan sudah benar?\n\n";
    confirmationMessage += "Nama: " + nama + "\n";
    confirmationMessage += "Tempat Lahir: " + tempatlahir + "\n";
    confirmationMessage += "Tanggal Lahir: " + tgllahir + "\n";
    confirmationMessage += "Alamat: " + alamat + "\n";
    confirmationMessage += "Email: " + email + "\n";
    confirmationMessage += "No HP: " + nohp + "\n";
    confirmationMessage += "Asal Sekolah: " + Sekolah + "\n";

    if (confirm(confirmationMessage)) {
      alert("Data anda telah tersimpan!");
      return true;
    } else {
      return false;
    }
  }
}
