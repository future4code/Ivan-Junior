import connection from "./connection"


// const searchActor = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${name}"
//     `)
//     return result
//   }

//   searchActor("Tony Ramos")
//   .then(console.log)
//   .catch(console.log)

//   const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//       // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
//       // o valor no resultado!
//     const count = result[0][0].count;
//     return count;
//   };

//   countActors("male")
//   .then(console.log)
//   .catch(console.log)

// const createActor = async (
//     id: string,
//     name: string,
//     salary: number,
//     dateOfBirth: Date,
//     gender: string
// ): Promise<void> => {
//     await connection
//         .insert({
//             id: id,
//             name: name,
//             salary: salary,
//             birth_date: dateOfBirth,
//             gender: gender,
//         })
//         .into("Actor");
// };

// createActor(())