
# Boas vindas ao repositório do projeto de TriviaGame!
# Habilidades

Nesse projeto, para o desenvolvimento da aplicação foram realizadas as seguintes ações:

  - Criar um store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.

--
  - Projeto em grupo.

 
### API de Trivia

A [API do Trivia](https://opentdb.com/api_config.php) é bem simples. Temos 2 endpoints que vamos precisar utilizar para esse exercício.

* **Pegar o token de sessão da pessoa que está jogando**
* **Pegar perguntas e respostas**


```
O token expira em 6 horas e te retornará um `response_code: 3` caso esteja expirado. **Atenção para que seu código contemple isso!** Caso o token seja inválido, essa será a resposta da API:

### Gravatar

O Gravatar é um serviço que permite deixar o avatar global a partir do email cadastrado, ele mostra sua foto cadastrada em qualquer site vinculado. Na tela de **Inicio**, a pessoa que joga pode colocar um e-mail que deve fazer uma consulta a API do [Gravatar](https://br.gravatar.com/site/implement/images/).

A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash `MD5` (https://br.gravatar.com/site/implement/hash/). Para gerar tal hash, recomendamos utilizar o [CryptoJs](https://github.com/brix/crypto-js).

---


Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

