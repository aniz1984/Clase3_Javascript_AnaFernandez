var semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let i = 0;

for ( i ; i < 7 ; i++ ) {
    console.log ( semana [i] ) ;
    if ( ( i % 2 ) == 0 ) {
        alert ( "¡Día Par! ¡Hora de bañarse!" ) ;
    }
}