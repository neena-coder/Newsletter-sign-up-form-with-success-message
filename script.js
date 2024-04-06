document.getElementById('email').addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById('fill').style.display = 'none';
    document.getElementById('success').style.display = 'flex';

    document.getElementById('success').addEventListener("click", (ee)=>{
        window.location.reload();
    })
})