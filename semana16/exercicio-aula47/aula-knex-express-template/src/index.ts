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

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: string,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};
 
  createActor("07", "Keanu Reeves", 5000, "1985-05-12", "male")

  const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  updateActor("001", 5000000)
   .then(console.log)
   .catch(console.log)

// const deleteActor = async (id: string): Promise<void> => {
//     await connection("Actor")
//     .delete()
//     .where("id", id)
// }

// deleteActor("id")

// const avgSalary = async (gender: string): Promise<any> => {
//     const result = await connection("Actor")
//       .avg("salary as average")
//       .where({ gender });
  
//     return result[0].average;
//   };

//   avgSalary("female")

