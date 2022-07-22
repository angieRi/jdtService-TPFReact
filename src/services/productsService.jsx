import firebase from "../config/firebase";

export function getAllProduct(buscar){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q="+buscar)
        .then(res=>res.json())
        .catch(error=>console.log(error))

}
export function getByIdProduct(id){
    return fetch("https://api.mercadolibre.com/items/"+id)
        .then(res=>res.json())
}

export async function getProductsFirebase(){
    const queryProducts = await firebase.db.collection("productos")
        .get()
    return queryProducts.docs

}
export async function getProductFb(id){
    const queryProduct = await firebase.db.doc("productos/"+id).get()
    return queryProduct

}
export async function updateProduct(id,body){
    const queryProduct = await firebase.db.doc("productos/"+id).set(body)
    return queryProduct

}
export async function deleteProduct(id){
    const querySnapshot = await firebase.db.doc("productos/"+id).delete()
    return querySnapshot
}