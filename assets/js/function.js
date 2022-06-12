
//area calculator
const areaCal = (type,val1,val2) => {
    if(type == 'Rectangle'){
        return ` The area of Rectangle is ${val1 * val2}`;
        
    }else if(type == "Square"){
        return ` The area of square is ${ val1 * val1}`;
    }else if( type == "Triangle"){

        return ` The area of Triangle is ${.5 * val1 * val2}`;
    }else if( type == "Circle"){
        return ` The area of circle is ${3.1416 * (val1 * val1)}`;
    }
} 