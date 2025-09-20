## Fundamentos de Recursividade

### Exercício 1: Fatorial
**Problema**: Implemente uma função recursiva para calcular o fatorial de n.
```
fatorial(0) = 1
fatorial(n) = n * fatorial(n-1) para n > 0
```

**Pontos-chave**:
- Caso base: fatorial de 0 é 1
- Chamada recursiva: multiplique n pelo fatorial de (n-1)
- Observe o padrão de chamadas e como cada chamada se resolve

### Exercício 2: Sequência de Fibonacci
**Problema**: Calcule o n-ésimo elemento da sequência de Fibonacci recursivamente.
```
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) para n > 1
```

**Pontos-chave**:
- Dois casos base: fibonacci(0) = 0, fibonacci(1) = 1
- A complexidade cresce exponencialmente - O(2ⁿ)
- Oportunidade para introduzir otimização via memoização

### Exercício 3: Soma de Elementos em Array
**Problema**: Calcule a soma de todos os elementos em um array usando recursão.
```
soma([]) = 0
soma([primeiro, ...resto]) = primeiro + soma(resto)
```

**Pontos-chave**:
- Divisão do problema: tratar o primeiro elemento + resolver o resto
- Análise da complexidade: O(n) em tempo, O(n) em espaço (pilha de chamadas)

## Manipulação de Strings

### Exercício 4: Inversão de String
**Problema**: Inverta uma string usando recursão.
```
inverter("") = ""
inverter(c + resto) = inverter(resto) + c
```

**Pontos-chave**:
- Manipulação de caractere inicial vs resto da string
- Pensar em como a pilha de chamadas constrói a string invertida

### Exercício 5: Verificação de Palíndromo
**Problema**: Verifique se uma string é um palíndromo usando recursão.
```
ehPalindromo("") = verdadeiro
ehPalindromo("a") = verdadeiro
ehPalindromo(primeiro + meio + ultimo) = (primeiro == ultimo) E ehPalindromo(meio)
```

**Pontos-chave**:
- Comparação dos caracteres externos e verificação recursiva do centro
- Tratamento de casos base (string vazia ou único caractere)

## Algoritmos Matemáticos

### Exercício 6: MDC (Algoritmo de Euclides)
**Problema**: Implemente o algoritmo de Euclides recursivamente para encontrar o MDC.
```
mdc(a, 0) = a
mdc(a, b) = mdc(b, a % b) para b > 0
```

**Pontos-chave**:
- Elegância do algoritmo de Euclides na forma recursiva
- Eficiência logarítmica: O(log min(a,b))

### Exercício 7: Conversão Decimal-Binária
**Problema**: Converta um número decimal para binário usando recursão.
```
decParaBin(0) = "0"
decParaBin(1) = "1"
decParaBin(n) = decParaBin(n/2) + (n%2)
```

**Pontos-chave**:
- Divisões sucessivas por 2
- Ordem de concatenação dos restos (diferente da inversão de string)

## Estruturas de Dados Recursivas

### Exercício 8: Percurso em Árvore Binária
**Problema**: Implemente percursos recursivos em uma árvore binária.
```
// Pré-ordem (raiz, esquerda, direita)
preOrdem(null) = []
preOrdem(nó) = [nó.valor] + preOrdem(nó.esquerda) + preOrdem(nó.direita)

// Em-ordem (esquerda, raiz, direita)
emOrdem(null) = []
emOrdem(nó) = emOrdem(nó.esquerda) + [nó.valor] + emOrdem(nó.direita)

// Pós-ordem (esquerda, direita, raiz)
posOrdem(null) = []
posOrdem(nó) = posOrdem(nó.esquerda) + posOrdem(nó.direita) + [nó.valor]
```

**Pontos-chave**:
- Natureza recursiva da estrutura de árvore
- Diferenças semânticas entre os tipos de percurso
- Caso base: nó nulo

### Exercício 9: Busca Binária Recursiva
**Problema**: Implemente busca binária em um array ordenado usando recursão.
```
buscaBinaria(array, valor, inicio, fim):
    se inicio > fim: retorne -1
    meio = (inicio + fim) / 2
    se array[meio] == valor: retorne meio
    se array[meio] > valor: retorne buscaBinaria(array, valor, inicio, meio-1)
    retorne buscaBinaria(array, valor, meio+1, fim)
```

**Pontos-chave**:
- Divisão e conquista: redução do espaço de busca pela metade
- Complexidade: O(log n) tempo, O(log n) espaço (pilha de chamadas)

## Algoritmos Clássicos

### Exercício 10: Torres de Hanói
**Problema**: Resolva o problema das Torres de Hanói para n discos.
```
moverDiscos(n, origem, destino, auxiliar):
    se n == 1:
        imprima "Mover disco 1 de " + origem + " para " + destino
        retorne
    moverDiscos(n-1, origem, auxiliar, destino)
    imprima "Mover disco " + n + " de " + origem + " para " + destino
    moverDiscos(n-1, auxiliar, destino, origem)
```

**Pontos-chave**:
- Decomposição do problema em subproblemas menores
- Complexidade exponencial: O(2ⁿ)
- Visualização da pilha de chamadas

### Exercício 11: Merge Sort
**Problema**: Implemente o algoritmo Merge Sort usando recursão.
```
mergeSort(array):
    se array.tamanho <= 1: retorne array
    meio = array.tamanho / 2
    esquerda = mergeSort(array[0...meio-1])
    direita = mergeSort(array[meio...fim])
    retorne mesclar(esquerda, direita)
```

**Pontos-chave**:
- Divisão e conquista: dividir até chegar em arrays de tamanho 1
- Recombinação ordenada dos subarrays
- Complexidade: O(n log n) tempo, O(n) espaço adicional

## Backtracking e Permutações

### Exercício 12: Gerar Permutações
**Problema**: Gere todas as permutações possíveis de uma string.
```
permutacoes(""):
    retorne [""]

permutacoes(str):
    resultado = []
    para cada i em 0 até str.tamanho-1:
        char = str[i]
        novaStr = str.remover(i)
        permsResto = permutacoes(novaStr)
        para cada perm em permsResto:
            resultado.adicionar(char + perm)
    retorne resultado
```

**Pontos-chave**:
- Recursão combinatória
- Complexidade: O(n!) - cresce fatorialmente
- Árvore de recursão ramificada

### Exercício 13: Problema das N-Rainhas
**Problema**: Posicione N rainhas em um tabuleiro NxN sem que se ataquem.
```
resolverNRainhas(n):
    tabuleiro = array de n x n preenchido com 0
    resolverNRainhasAux(tabuleiro, 0, n)

resolverNRainhasAux(tabuleiro, coluna, n):
    se coluna >= n: retorne verdadeiro
    para cada linha em 0 até n-1:
        se ehSeguro(tabuleiro, linha, coluna):
            tabuleiro[linha][coluna] = 1
            se resolverNRainhasAux(tabuleiro, coluna+1, n):
                retorne verdadeiro
            tabuleiro[linha][coluna] = 0
    retorne falso
```

**Pontos-chave**:
- Backtracking: tentativa e erro com reversão
- Verificação de restrições a cada passo
- Casos de poda da árvore de busca

## Programação Dinâmica com Base Recursiva

### Exercício 14: Problema da Mochila
**Problema**: Selecione itens com valores e pesos para maximizar valor sem exceder capacidade.
```
mochila(pesos, valores, capacidade, n):
    se n == 0 ou capacidade == 0:
        retorne 0
    se pesos[n-1] > capacidade:
        retorne mochila(pesos, valores, capacidade, n-1)
    retorne max(
        valores[n-1] + mochila(pesos, valores, capacidade - pesos[n-1], n-1),
        mochila(pesos, valores, capacidade, n-1)
    )
```

**Pontos-chave**:
- Sobreposição de subproblemas: candidato para memoização
- Estrutura de decisão: incluir ou não incluir cada item
- Complexidade sem memoização: O(2ⁿ)

### Exercício 15: Menor Caminho em Matriz
**Problema**: Encontre o caminho de menor custo do canto superior esquerdo ao inferior direito.
```
menorCaminho(matriz, i, j):
    se i == matriz.linhas-1 e j == matriz.colunas-1:
        retorne matriz[i][j]
    se i == matriz.linhas-1:
        retorne matriz[i][j] + menorCaminho(matriz, i, j+1)
    se j == matriz.colunas-1:
        retorne matriz[i][j] + menorCaminho(matriz, i+1, j)
    retorne matriz[i][j] + min(
        menorCaminho(matriz, i+1, j),
        menorCaminho(matriz, i, j+1)
    )
```

**Pontos-chave**:
- Múltiplos casos base nas bordas
- Decisão ótima baseada nos resultados de subproblemas
- Candidato perfeito para memoização/programação dinâmica

## Conclusão e Considerações

Ao trabalhar com estes exercícios, observe os seguintes aspectos fundamentais da recursão:

1. **Identificação do caso base**: Todo algoritmo recursivo precisa ter condições de parada bem definidas.

2. **Formulação da relação de recorrência**: Como expressar o problema em termos de instâncias menores dele mesmo.

3. **Análise da complexidade**: Tempo e espaço, especialmente considerando a profundidade da pilha de chamadas.

4. **Otimização**: Quando usar memoização para evitar recálculo de subproblemas já resolvidos.

5. **Trade-offs**: Quando a recursão é apropriada versus abordagens iterativas, considerando legibilidade e eficiência.

A recursão é particularmente poderosa em problemas que apresentam:
- Estrutura naturalmente hierárquica
- Decomposição em subproblemas idênticos
- Soluções elegantes e concisas que seriam complexas em formato iterativo

Dominar recursividade expande significativamente seu arsenal de técnicas de resolução de problemas e proporciona uma perspectiva valiosa sobre decomposição algorítmica.
