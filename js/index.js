function verificar() {
    let senha = document.querySelector('#p3a').value;
    let res = document.querySelector('.res');
    res.innerHTML = "A senha escolhida: " + senha;

    if (senha.length < 6) {
        res.innerHTML = "Senha fraca";
        res.style.color = "red";
    } else {
        res.innerHTML = "A senha é: " + senha;
        res.style.color = "green";
    }
}