# Diablo 2 Runewords

## Descrição do Projeto

O **Diablo 2 Runewords** é uma aplicação móvel desenvolvida para ajudar jogadores de Diablo 2 a encontrar todas as runewords disponíveis no jogo. A aplicação permite que os usuários selecionem as runas que possuem e filtre as runewords baseadas nas runas disponíveis, facilitando a escolha das melhores combinações possíveis.

## Tecnologias Utilizadas

### Desenvolvimento

- **React Native**: Framework para construção de aplicações móveis nativas usando React.
- **React Navigation**: Biblioteca de navegação para gerenciar rotas e navegação dentro da aplicação.
- **Styled Components**: Utilizado para estilização dos componentes com uma abordagem CSS-in-JS.
- **Context API**: Gerenciamento de estado leve e compartilhamento de dados entre componentes.
- **Redux**: Biblioteca para gerenciamento de estado global da aplicação.
- **React Hooks**: Utilizado para gerenciar estado e efeitos colaterais em componentes funcionais.

### Testes

- **Detox**: Ferramenta de teste de ponta a ponta (E2E) para aplicativos React Native.
- **Jest**: Framework de testes em JavaScript para garantir a funcionalidade e confiabilidade dos componentes e lógica da aplicação.

## Funcionalidades

- **Listagem Completa de Runewords**: Exibe todas as runewords disponíveis no jogo Diablo 2.
- **Seleção de Runas**: Permite ao usuário selecionar as runas que possui.
- **Filtragem de Runewords**: Filtra e exibe apenas as runewords que podem ser criadas com as runas selecionadas.

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```sh
   git clone git@github.com:pedro-olavo/d2-runewords.git
   cd d2-runewords
   ```

2. **Instale as Dependências**:
   ```sh
   yarn install
   ```

3. **Execute a Aplicação**:
   ```sh
   yarn start
   ```

4. **Execute os Testes**:
   - **Detox**:
     ```sh
     yarn build:detox
     yarn test:detox
     ```

## Estrutura do Projeto

- **/src**: Contém o código-fonte da aplicação.
  - **/components**: Componentes reutilizáveis.
  - **/screens**: Telas da aplicação.
  - **/navigation**: Configurações de navegação.
  - **/context**: Configurações e provedores do Context API.
  - **/redux**: Configurações e stores do Redux.
  - **/styles**: Estilos globais e temas.

## Contribuições

Contribuições são bem-vindas! Se você encontrar um problema ou tiver uma sugestão, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ por [Pedro Olavo](https://github.com/pedro-olavo).
