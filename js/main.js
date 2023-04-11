window.onload = function() {
    let variable = document.getElementById("quoteKanye")
    fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => {
        variable.innerHTML ="\""+ data.quote+"\""
    })
}

