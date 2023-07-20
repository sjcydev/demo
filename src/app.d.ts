// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  var prisma: PrismaClient;

  interface Usuario {
    nombre: string;
    apellido: string;
    cedula: string;
    correo: string;
    telefono: string;
    sexo: string;
    nacimiento: string;
    sucursal: string;
  }
}

// /// <reference types="lucia" />
// declare global {
//   namespace Lucia {
//     type Auth = import("$lib/server/lucia").Auth;
//     type UserAttributes = {
//       username: string;
//       nombre: string;
//       apellido: string;
//       correo: string;
//       password_updated: boolean;
//     };
//   }
// }

export {};
