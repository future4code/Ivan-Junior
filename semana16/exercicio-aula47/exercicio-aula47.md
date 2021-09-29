## Exercício 1 

### b -
```
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

 searchActor("Tony Ramos")
  .then(console.log)
  .catch(console.log)
```
### c -
```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
	// o valor no resultado!
  const count = result[0][0].count;
  return count;

   countActors("male")
  .then(console.log)
  .catch(console.log)
};
```