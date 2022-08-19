alert("Hallo ini projek gabut sekaligus gak kelar punya saya")
alert("Mohon dimaklum kalo banyak bug, ini gak responsive, dan fungsinya juga gak begitu berjalan baik")
alert("Btw")
alert("Selamat datang!")

function gantiNama() {
  let Namanya = prompt("Siapa nama anda?")
  alert(`Hallo ${Namanya}, Selamat datang!`)
  document.getElementById('urName').innerHTML = `Nama: ${Namanya}`
}

function Click() {
  const Nama = document.getElementById('nama')
  const isiNama = Nama.value
  console.log(isiNama);

  const Kelas = document.getElementById('kelas')
  const isiKelas = Kelas.value
  console.log(isiKelas);

  const Jurusan = document.getElementById('jurusan')
  const isiJurusan = Jurusan.value
  console.log(isiJurusan);

  const Result = document.getElementById('result')
  const createLi = document.createElement('li')
  createLi.setAttribute('class', 'flex flex-col')

  Result.innerHTML =
  "<div class='flex flex-row items-center justify-center bg-[#232323] rounded-[5px] px-[30px] py-[10px] gap-[30px] font-semibold'>" +
    "<div class='text-white'>" +
      isiNama +
    "</div>" +
    "<div class='flex flex-col justify-center items-center px-[10px] py-[5px] bg-white rounded-[5px]'>" +
      `Kelas: ${isiKelas}` +
      '<br>' +
      `Jurusan: ${isiJurusan}` +
    "</div>"
  "</div>"
  Result.appendChild(createLi)

  Nama.value = ''
  Kelas.value = ''
  Jurusan.value = ''
}