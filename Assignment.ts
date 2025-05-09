

function formatString (input:string,toUpper?:boolean) {
    
    { if(toUpper === false){
        return input.toLocaleLowerCase()
    }else{
        return input.toLocaleUpperCase()
    }
        
}

}
console.log(formatString("pe pe"))



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const itemRating =items.filter(item => item.rating >= 4)
    return itemRating
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 4.2 },
    { title: "Book D", rating: 5.0 },
    { title: "Book E", rating: 3.0 }
  ];
  
  filterByRating(books); 
 

  function concatenateArrays<T>(...Arrays:T[][]):T[] {
    const concatenates=[...Arrays]
    const [a,b,c]=concatenates
    const concatenaed=[...a,...b,...c]
    return concatenaed
  }

  concatenateArrays<number>([1, 2], [3, 4], [5]);





  class vehicle {

    private make:string;
    private year:number;

    constructor(make:string,year:number) {
        this.make=make
        this.year=year
    }

    getInfo(){
        return `make:${this.make},Year:${this.year}`
    }
    
  }


  class car extends vehicle {
    private model:string

    constructor(make:string, year:number,model:string){

super(make,year);
this.model=model;
    }

    getModel(){
        return `Model:${this.model}`
    }
  }


  const myCar = new car("Toyota", 2020, "Corolla");
  
  console.log(myCar.getInfo())
  console.log(myCar.getModel())




function processValue(value: string | number):number {

    if( typeof value==="string"){
        const value2=value.length
        console.log(value2)
    }if(typeof value === "number"){

        console.log(value)
    }
}

processValue(9879)






interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
if(products.length === 0){
    return null
}else{
    const topPrice=Math.max(...products.map(product => product.price))
    return topPrice
}

  }


  
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "backpack", price: 96 },
    { name: "shoes", price: 99},
    { name: "Bag", price: 50 }
  ];
console.log(getMostExpensiveProduct(products)
) 






enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string{
   if(day === Day.Saturday || day === Day.Sunday){
    return 'weekend'
   }
  else{
    return `weekday`
  }
}

  console.log(getDayType(Day.Friday))






async function squareAsync(n: number): Promise<number>{
return new Promise((resolve,reject)=>{

    if (n < 0) {
        reject("Negative number is not allowed")
    }else{
        setTimeout(() => {
            const sqrNum = n*n
            resolve(sqrNum)
         }, 1000);
    }
    
    }
    
    
)}


squareAsync(-5)
.then(res =>console.log(res))
.catch(err =>console.log(err))