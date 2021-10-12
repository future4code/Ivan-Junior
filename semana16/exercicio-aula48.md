## Exercícios da Aula 48

### Exércicio 1 

#### a) 
  * Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.

#### b)
  ```
  INSERT INTO Rating (id, comment, rate, movie_id) 
  VALUES (
	"001",
    "Excelente!",
    9,
	"001"
);
   ```

#### c)
  * O resultado é: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha. Isso ocorreu porque coloquei um id inexistente.


### Exércicio 2

#### a) 
  * ---


#### b) 
  ```
  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES (
   "001", 
   "001"
);
  ```