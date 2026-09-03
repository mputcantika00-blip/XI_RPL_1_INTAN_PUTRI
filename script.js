function tampilkanNama(){
    document.getElementById("namaAnggota").innerHTML =
    `

    <ol 
        style="list-style-type: decimal; 
        padding-left:5%;">
            <li>intan (intan@gmail.com)</li>
            <li>putri (putri@gmail.com)</li>
    </ol>

        <button onclick="location.reload()">
            tutup kembali
        </button>

    `;
}