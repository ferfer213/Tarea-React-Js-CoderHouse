const products = [
{    id      : 1 ,
    name    : 'arroz' ,
    price    : 300 ,
    stock  : 15,
    description     : 'Bolsa de Arroz',
    img     : 'https://www.casa-segal.com/wp-content/uploads/2020/03/lucchetti-arroz-1kg-parboit-bolsa-almacen-casa-segal-mendoza-600x600.jpg',
    category : 'alimento'
},
{
    id      : 1 ,
    name    : 'coca-cola' ,
    price    : 300 ,
    stock  : 8,
    description     : 'Botella de coca',
    img     : 'https://carrefourar.vtexassets.com/arquivos/ids/220177/7790895000997_02.jpg?v=637704294205400000',
    category : 'bebida'
},
{
    id      : 1 ,
    name   : 'sugus' ,
    price    : 300 ,
    stock  : 29,
    description     : 'Caja de Sugus',
    img     : 'https://http2.mlstatic.com/D_NQ_NP_994233-MLA42016446778_052020-O.jpg',
    category : 'golosina'
}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}