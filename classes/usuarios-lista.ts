import { Usuario } from './usuario';

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor() {}
    
    // Agregar usuario
    agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    actualizarUsuario( id: string, nombre: string ) {
        // Buscar usuario mediante el id
        for(let usuario of this.lista) {
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }
        
        console.log('Usuario actualizado');
        console.log(this.lista);
    }

    // Obtener toda la lista de usuarios conectados
    public getLista() {
        return this.lista;
    }

    // Obtener usuario por ID
    public getUsuario(id: string){
        return this.lista.find(usuario => usuario.id === id);
    }

    // Obtener usuarios en una sala particula
    public getUsuariosEnSala(sala: string) {
        return this.lista.filter(usuario => usuario.sala === sala);
    }

    // Borrar usuario
    // Cuando deja el chat o la conexion de sockets
    public borrarUsuario(id: string) {
        const usuarioTemp = this.getUsuario(id);

        this.lista = this.lista.filter(usuario => usuario.id !== id);

        return usuarioTemp;
    }


}