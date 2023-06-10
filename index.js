const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuário VIP' : 'Usuário normal'

if (pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
} else {
    console.log('usuario normal');
}
