//COmpare 2 JSON Objects

let obj1={name: "person1", age: 25};
let obj2={age: 24, name: "person2"};

let size=Object.keys(obj1).length;
let result=[];

let compareTwoJson=(obj1,obj2)=>{
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            
            if(Object.keys(obj1)[i]!==Object.keys(obj2)[j]){

                continue;
                
            }
            result[i]=true;
        }
    }
    return result;
}
// console.log(compareTwoJson(obj1,obj2));

let output=(result.length===size)?true:false;

// console.log(result.length);
// console.log(size);
console.log(output);

//Display all country flags in console.
let xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType='json';

xhr.send();

xhr.onload=function(){
    let responseObj=xhr.response;
    console.log(responseObj);
    let countriesWithFlag=responseObj.filter((item)=>{
        return item.flag;
    });
    let countryFlag=countriesWithFlag.map((item)=>{
        return `Flag: ${item.flag}`;
    })

    console.log(countryFlag);
}

//Display all countries name, region, sub-region and population.

let xhr1=new XMLHttpRequest();
xhr1.open('GET','https://restcountries.com/v3.1/all');
xhr1.responseType='json';
xhr1.send();

xhr1.onload=function(){
    let responseObj=xhr1.response;
    let countryName=responseObj.map((item)=>{
        return `Name: ${item.name.common}`;
    })
    console.log(countryName);
    let countryRegion=responseObj.map((item)=>{
        return `Region: ${item.region}`;
    })
    console.log(countryRegion);
    let countrySubRegion=responseObj.map((item)=>{
        return `Subregion: ${item.subregion}`;
    })
    console.log(countrySubRegion);
    let countryPopulation=responseObj.map((item)=>{
        return `Population: ${item.population}`;
    })
    console.log(countryPopulation);
    
}
