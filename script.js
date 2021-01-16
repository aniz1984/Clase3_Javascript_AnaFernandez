var semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let i = 0;

for ( i ; i < semana.length ; i++ ) {
    if ( ( i % 2 ) == 0 ) {
        console.log ( "Hoy es" + " " + semana[i] + " " +"¡Día par, a bañarse!" ) ;
        alert("Hoy es" + " " + semana[i] + " " +"¡Día par, a bañarse!")
    }
    if ( ( i % 2 ) != 0 ) {
        console.log ( "Hoy es" + " " + semana[i] + " " +"¡Día impar! Podés quedarte sucio" ) ;
        alert("Hoy es" + " " + semana[i] + " " +"¡Día impar! Podés quedarte sucio")
    }
}