interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione1(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a área de administração
    }

    // redirecionar para a área do usuário
}