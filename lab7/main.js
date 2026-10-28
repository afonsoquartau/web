//A. Estado e Variáveis

const colecao = document.querySelector('.lista-produtos')
const carrinho = document.querySelector('.lista-cesto')
const valor_total = document.querySelector('#valor-total')
const chave = 'produtos-selecionados'

if (localStorage.getItem(chave) === null) {
    localStorage.setItem(chave, JSON.stringify([]))
}

const produtos_selecionados = JSON.parse(localStorage.getItem(chave)) || []

//B. Funções Utilitárias

function formatarPreco(preco) {
    return Number(preco).toFixed(2).replace('.', ',') + ' €'
}

function criarProduto(produto) {
    const article = document.createElement('article')

    const imagem = document.createElement('img')
    imagem.src = produto.image
    imagem.alt = produto.title

    const titulo = document.createElement('h3')
    titulo.textContent = produto.title

    const descricao = document.createElement('p')
    descricao.className = 'descricao'
    descricao.textContent = produto.description

    const preco = document.createElement('p')
    preco.className = 'preco'
    preco.textContent = formatarPreco(produto.price)

    const botao = document.createElement('button')
    botao.textContent = 'Adicionar ao cesto'

    article.append(imagem, titulo, descricao, preco, botao)

    botao.addEventListener('click', () => adicionarProduto(produto))

    return article
}

function criaProdutoCesto(produto) {
    const article = document.createElement('article')

    const titulo = document.createElement('h3')
    titulo.textContent = produto.title

    const preco = document.createElement('p')
    preco.textContent = formatarPreco(produto.price)

    const botao = document.createElement('button')
    botao.textContent = 'Remover'

    article.append(titulo, preco, botao)

    botao.addEventListener('click', () => removerProduto(produto))

    return article
}

//C. Event Handlers

function renderizarProdutos(produtos) {
    colecao.innerHTML = ''

    produtos.forEach(produto => {
        const artigo = criarProduto(produto)
        colecao.append(artigo)
    })
}

function atualizaCesto() {
    carrinho.innerHTML = ''
    let total = 0

    produtos_selecionados.forEach(produto => {
        const artigo = criaProdutoCesto(produto)
        carrinho.append(artigo)
        total += Number(produto.price)
    })

    if (produtos_selecionados.length === 0) {
        carrinho.textContent = 'O cesto está vazio.'
    }

    valor_total.textContent = formatarPreco(total)
}

function adicionarProduto(produto) {
    produtos_selecionados.push(produto)
    localStorage.setItem(chave, JSON.stringify(produtos_selecionados))
    atualizaCesto()
}

function removerProduto(produto) {
    const indice = produtos_selecionados.findIndex(p => p.id === produto.id)

    if (indice !== -1) {
        produtos_selecionados.splice(indice, 1)
        localStorage.setItem(chave, JSON.stringify(produtos_selecionados))
        atualizaCesto()
    }
}

//D. Event Listeners

//E. Inicialização

renderizarProdutos(produtos)
atualizaCesto()
