# MoveIt

## Next Level Week #4

Projeto desenvolvido durante os 5 dias do evento da [Rocketseat](https://rocketseat.com.br/), o `NLW4`.
A aplicação consiste em um Gamification, no qual ganha-se pontos de experiência cada vez que um ciclo 
é finalizado e um desafio é completado. O objetivo é reduzir os impactos causados por ficar o dia todo
sentado na frente de uma tela. Os desafios são tanto para o corpo (por exemplo, levantar-se da cadeira,
andar, alongar), quanto para os olhos. 


![Captura de tela de 2021-02-28 13-55-44](https://user-images.githubusercontent.com/52762669/109426498-b7ddfc80-79cc-11eb-8bbb-712c41f1f21f.png)


### Tecnologias Utilizadas
- [Next.js](https://nextjs.org/)
- [React.js](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)

<div>
  <img src="https://github.com/gustavofbc/pixel_of_shields/blob/main/dark/next_js_dark.png" />
  <img src="https://github.com/gustavofbc/pixel_of_shields/blob/main/dark/react_dark.png" />
  <img src="https://github.com/gustavofbc/pixel_of_shields/blob/main/base/typescript.png" />
</div>

### Funcionalidades
- Painel de contagem regressiva:
  - O tempo é fixado, e quando o botão é clicado, inicia-se a contagem. 
- Painel de desafios: 
  - Sempre que um ciclo é encerrado, um desafio aleatório aparece na tela.
  - É possível falahr ou completar um desafio, acumulando pontos sempre que
    um desafio é completado. Falhando ou completando, a contagem é resetada
    e é possível inciar um novo ciclo.
- Leveling
  - Acumulando-se pontos de experiência, é possível subir de nível. A cada
  nível, os pontos necessários aumentam. 
- Notificações
  - Sempre que um ciclo é encerrado e surge um novo desafio, é disparada
  uma notificação do navegador junto de um som de alerta. 
  
### Utilizando a aplicação

Clone este repositório, e na pasta do projeto execute:

```sh
yarn install
yarn dev
```

Você conseguirá utilizar a aplicação que estará rodando em `localhost:3000`.

### Próximos passos
- [Theme Drácula](https://draculatheme.com/contribute) 
  - O tema está em progresso na branch [feature/toggle-theme](https://github.com/mhrocha1997/moveit_nlw4/tree/feature/theme-toggle) utilizando-se de um switch na página principal e contextos.
- Autenticação com github




