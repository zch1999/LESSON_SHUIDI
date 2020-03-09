import CarouselItem from '../carousel/src/item'

CarouselItem.install = function (Vue){
    console.log(CarouselItem)
    Vue.component(CarouselItem.name, CarouselItem)
}   

export default CarouselItem;