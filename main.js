const salvarUsuario = () =>{
    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const sala = document.querySelector('#sala').value;
    const usuarioVotacao = {
        nome,
        idade,
        sala
    }
    localStorage.setItem('usuarioVotacao', JSON.stringify(usuarioVotacao));
    
}
