interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; // Usando '?' o item vira um dado opcional
}

function redirecione2(usuario: IUsuario | IAdmin) {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    }
    // redirecionar para a área do usuário
}