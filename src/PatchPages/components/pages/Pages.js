export class Pages{
    constructor(
        name,
        components,
    ){
        this.name = name;
        this.components = components;
        this.makeObjComponent = this.makeObjComponent.bind(this);
        this.checkTextForStatus = this.checkTextForStatus.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.data = [];
    }
    // 5jxeta6gnq
    makeObjComponent(){
        for(let n = 0;n < this.components.length; n++){
            this.data.push({name: this.components[n].name, value: this.components[n].value, status:this.components[n].status, order: this.components[n].order, style: this.components[n].style, link: this.saveImage(this.components[n])});
        }
        // console.log(this.data);
        // console.log(this.checkTextForStatus(this.data[1]));
    }

    checkTextForStatus(el){
        return el.status === "title" ? true : false;
    }

    saveImage(el){
        return `./../../media/images/${el.link}`;;
    }

    createComponent(){
        return 0;
    }
    
}