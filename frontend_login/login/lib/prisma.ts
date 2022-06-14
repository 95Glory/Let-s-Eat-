// import { PrismaClient } from '@prisma/client';

// // 추가
// declare global {
//     var prisma: PrismaClient | undefined
// }
// //

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient();
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// }

// export default prisma;

import { PrismaClient } from '@prisma/client';
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
export const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === 'development') global.prisma = prisma;