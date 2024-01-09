import { szenvedoMondatok } from "./angol";

export default class Model
{

    #cim;
    #sugoSzoveg;
    #Obj;
    #aktindex = 0;
    constructor(){
        this.#Obj = [];
        this.#cim = szenvedoMondatok[0];
        this.#sugoSzoveg = szenvedoMondatok[1];
        for (let index = 2; index < szenvedoMondatok.length; index++) {
            this.#Obj.push(szenvedoMondatok[index]);
            
        }
        for (let index = 0; index < this.#Obj.length; index++) {
            console.log(this.#Obj[index])
            
        }
    }
    getcim(){

        return this.#cim;
    }
   
    aktMondatFelosztas() {
        const mondat = this.#Obj[this.#aktindex].mondat;
         const mondatReszei = (mondat.split('_'));
        return mondatReszei;
    }
    
    aktMondatOsszeallit() {
        return this.#Obj[this.#aktindex].mondat;
    }
    kovMondat(){
        this.#aktindex++;

    }
    aktMondatDropdown() {
        const aktMondat = this.#Obj[this.#aktindex];
        const valasztasok = aktMondat.valasztas;
        valasztasok.unshift("Válassz...");
        return valasztasok;
    }
    

}