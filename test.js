class ProductManager {

    #products
    #lastId = 1

    constructor() {
        this.#products = []
    }

    getProducts() {
        return this.#products
    }

    getProductById(id) {

        let product = []

        let p = this.#products.map(function (element) {


            if (element.id == id) {
                product.push(element.id, element.title, element.price, element.thumbnail, element.code, element.stock)
            }

        })

        if (product.length === 0) {
            return "No se encontro ningun producto con ese id"
        } else {
            return product
        }

    }

    #getNewId() {
        const id = this.#lastId
        this.#lastId += 1
        return id
    }

    #findByCode(c) {

        let v = false

        let code = this.#products.map(function (element) {

            if (element.code == c) {
                v = true
                return v
            }

        })

        return v

    }


    addProduct(title, price, thumbnail, code, stock) {

        if (title == "" || price == "" || thumbnail == "" || code == "" || stock == "") {

            return "Es obligatorio completar todos los campos"

        } else {

            let codigo = this.#findByCode(code)

            if (codigo == true) {

                return "El codigo ya existe"

            } else {

                const product = {
                    id: this.#getNewId(),
                    title,
                    price,
                    thumbnail,
                    code,
                    stock
                }

                this.#products.push(product)
                return "cargado con exito"

            }




        }


    }
}

const productmanager = new ProductManager()

console.log(productmanager.getProducts())

console.log(productmanager.addProduct("dd", "33", "dadwadd", "dda2", "22"))

console.log(productmanager.getProducts())

console.log(productmanager.addProduct("dd", "33", "dadwadd", "dda2", "22"))

console.log(productmanager.getProductById(1))

console.log(productmanager.getProductById(5))