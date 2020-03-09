import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (cliente: Socket) => {

    const usuario = new Usuario(cliente.id);

    // Almacenamos el usuario en la lista de usuarios
    usuariosConectados.agregar(usuario);

}

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');

        usuariosConectados.borrarUsuario(cliente.id);
    });
}

// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (payload: {de: string, cuerpo: string}) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });

}

// Configurar usuario
export const configurarUsuario = (cliente: Socket) => {

    cliente.on('configurar-usuario', (payload: {nombre: string}, callback: Function) => {
        
        usuariosConectados.actualizarUsuario(cliente.id, payload.nombre);

        // Enviando respuesta al cliente
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });

}
