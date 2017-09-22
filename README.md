Exercício de Empréstimos - Mastertech Back-end

Proposta:

Sistema com interface API (a priori sem front-end)
Cadastro de clientes com senha gravada como hash
Login de clientes cadastrados retornando token para as chamadas das APIs exclusivas do cliente
Simulacao de emprestimos passando valor desejado e quantidade de parcelas
Na simulacao são validadas as regras:
    Valor solicitado é menor ou igual à 30% da renda do cliente
    Quantidade de parcelas é menor ou igual à 6
Caso a simulação seja válida, o retorno será com o valor das parcelas, considerando 8% ao mês de taxa de juros simples no valor do empréstimo
Contratacao de emprestimos respeitando as mesmas regras da simulação e gravando "valor", "parcelas" e "data"
