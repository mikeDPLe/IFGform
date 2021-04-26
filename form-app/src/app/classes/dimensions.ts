export class Dimensions {
    width!:number 
    height!:number
    widthUnit!: string
    heightUnit!: string


    constructor(public stringWidth: string, public stringHeight: string) {
        this.width = parseFloat(stringWidth);
        this.widthUnit = stringWidth.replace(/([0-9\.\s])/g,'');
        this.height = parseFloat(stringHeight);
        this.heightUnit = stringHeight.replace(/([0-9\.\s])/g,'')
    }


  
}



