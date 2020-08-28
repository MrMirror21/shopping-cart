import productItems from '../data/productItems';

let productList = productItems;
function Sortproduct(list) {
    const length = list.length - 1;
    let temp;
    for(var i = length; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if (list[j].score > list[j+1].score){
                temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    return;
}


Sortproduct(productList);

export default productList;