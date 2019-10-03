const request = require('request');


const buscaPokemon = new Promise((res, rej) => {
    const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-10-02&end_date=2019-10-09&api_key=cHki91tzHH3cHgKMGZofOtaIcHsTxKdysba3lHcw"
    request.get(url, (error, response, body)=> {
        const json = JSON.parse(body);
        var peligros = []
        //forEach en dias 
            for(i = 0; i < json.near_earth_objects["2019-10-03"].length ; i++ ){       
                console.log(json.near_earth_objects["2019-10-03"][i].is_potentially_hazardous_asteroid)

                // if potentitial danger pass to another array 
                if (json.near_earth_objects["2019-10-03"][i].is_potentially_hazardous_asteroid === true){
                peligros.push(json.near_earth_objects["2019-10-03"][i].name);
                } 
}                
                console.log('dia1')

            for(i = 0; i < json.near_earth_objects["2019-10-04"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-04"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-04"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-04"][i].name);
                    } 

}
                console.log('dia2')
            for(i = 0; i < json.near_earth_objects["2019-10-05"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-05"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-05"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-05"][i].name);
                    } 

}
                console.log('dia3')
            for(i = 0; i < json.near_earth_objects["2019-10-06"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-06"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-06"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-06"][i].name);
                    } 
}
                console.log('dia4')
            for(i = 0; i < json.near_earth_objects["2019-10-07"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-07"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-07"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-07"][i].name);
                    } 
}
                console.log('dia5')
            for(i = 0; i < json.near_earth_objects["2019-10-08"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-08"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-08"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-08"][i].name);
                    } 
}
                console.log('dia6')
            for(i = 0; i < json.near_earth_objects["2019-10-09"].length ; i++ ){
                console.log(json.near_earth_objects["2019-10-09"][i].is_potentially_hazardous_asteroid)
                if (json.near_earth_objects["2019-10-09"][i].is_potentially_hazardous_asteroid === true){
                    peligros.push(json.near_earth_objects["2019-10-09"][i].name);
                    } 
}
                console.log('dia7')
                console.log(peligros)

                   
                   
       
response.statusCode === 200 
? res(json.near_earth_objects) 

: rej(error)
    })
});


buscaPokemon
    .then((res) => {
        return res;
    })
    .catch((rej) => {
        return rej;
    })

console.log(buscaPokemon.then((res) => {
    return res;
})
.catch((rej) => {
    return rej;
}))
console.log('Hilo de ejecución principal')

// for (let i = 0; i < 999999; i++){
//     console.log(i)
// };

// todos los asteroides potencialmente peligrosos para la tierra de hoy en 8 días

//  api key https://api.nasa.gov/planetary/apod?api_key=cHki91tzHH3cHgKMGZofOtaIcHsTxKdysba3lHcwcHki91tzHH3cHgKMGZofOtaIcHsTxKdysba3lHcw
// se activa la promesa en el click del asteroide

//HACER 7 peticionesen promeesas por dia
// if hazard print to app and  call to that specific data for name on promise on click
// posiblemente tambien brackstes antes de fecha brackets


//         var dias = ["2019-10-03", "2019-10-04", "2019-10-05", "2019-10-06", "2019-10-07", "2019-10-08" ,"2019-10-09"];
//         console.log(dias[0]) 

// //primero hazard potential
//                    

                   //alert peligro!!! si nos da tiempo
                //    y actualizandose x cantidad de tiempo para una app que te alerta  de posibles destructrucores del fin del mundo.
        // if ture go for name on antoher peticion request en vez de 1 i 
        

// // .move.name // if  near earth objects. if its potential hazardous fileter and till 8 
// peligro 1 y cuando da click hace peticion a ese endpoint en espceifco  con los parametros exactos precisospara el name con then
