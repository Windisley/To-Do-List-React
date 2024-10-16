# To-Do List com React + Tailwind CSS 

## Esta aplicação de To-Do List representa uma excelente introdução ao desenvolvimento com React e Tailwind CSS, demonstrando como criar componentes, gerenciar estado, usar localStorage para persistência de dados e aplicar estilização eficiente. A combinação dessas tecnologias resulta em uma experiência de usuário fluida e eficiente, permitindo que os usuários gerenciem suas tarefas de forma prática e intuitiva. Este projeto não só serve como um exercício valioso para desenvolvedores iniciantes, mas também pode ser expandido com mais funcionalidades, como a edição de tarefas ou a categorização, conforme as necessidades do usuário evoluem.

![page_todo](https://github.com/user-attachments/assets/d45b7910-7632-4ea2-a346-95aea51df4fb)

# Como Usar a Aplicação

## Adicionar Tarefas:
### No campo de entrada, digite uma nova tarefa e clique em "enviar". A tarefa aparecerá na lista abaixo, permitindo que você adicione quantas desejar. Remover Tarefas:

## Para excluir uma tarefa 
### clique no ícone de lixeira correspondente. A tarefa será removida da lista e do armazenamento, garantindo que a interface reflita a nova situação.


## Salvar Tarefas:
### Utilize o botão de disquete para salvar a lista de tarefas manualmente. Isso garante que as alterações feitas sejam mantidas, mesmo se a página for recarregada. Visualizar Tarefas Salvas: Ao recarregar a página, as tarefas adicionadas anteriormente serão exibidas automaticamente, graças à funcionalidade de persistência de dados.

## Principais Hooks Usados:

### useState: Utilizado para armazenar a lista de tarefas. O estado é atualizado sempre que uma tarefa é adicionada ou removida.

### useRef: Permite criar uma referência ao campo de entrada, facilitando o acesso ao valor inserido pelo usuário sem causar re-renderizações desnecessárias.

### useEffect: Este hook é usado para executar código quando o componente é montado. No caso, ele carrega as tarefas salvas do localStorage ao inicializar a aplicação, garantindo que as informações anteriores sejam recuperadas.

## Tailwind CSS

### O que é? Tailwind CSS é um framework CSS utilitário que permite a construção de interfaces de forma rápida e eficiente, utilizando classes pré-definidas. Ele oferece uma abordagem diferente de estilização, focando em composição de classes ao invés de folhas de estilo tradicionais.
