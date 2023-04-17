let aprendices = ["Juan", "Jesu", "Carla","mario","lucas","maria","matias","sebastina","sara","lorena"];
class Aprendiz{
    constructor(nombre, edad, sexo, competencia, aprendices){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.competencia = competencia;
        this.aprendices = aprendices;
    }
    showInforAprendiz(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}  cursas la competencia  ${this.competencia} y estudian${this.aprendices}`)
    }
    recorrerA(){

        for(let i=0; i<this.aprendices.length;i++){
            if(this.aprendices[i].startsWith("m")){
                console.log(`${this.aprendices[i]}, no puede ingresar`) 
            }else
            if(this.aprendices[i].startsWith("A")){
                console.log(`${this.aprendices[i]},debe esperar su turno`);
        }else{
            console.log(`${this.aprendices[i]} puede ingresar`)
        }
    }
}
}
let Programacion = new Aprendiz ("Julian",23,"Masculino","JavaSE",aprendices)
Programacion.showInforAprendiz();
Programacion.recorrerA();


console.log("***--- Asincronia **---")
//promises(puede cumplirse o falla)
//pido el listado de 5 mil usuarios
//muestro el menu



const tareaAsincrona = () => {
    let promise = new Promise ((resolve, reject) => {
       setTimeout(() =>{
             console.log("Proceso asincrono terminado");
             resolve();
       }, 1300);
    })
    return Promise;
}
 tareaAsincrona().then(  function() {
    console.log("Todo ok")
})
console.log("Veamos si funciona")


