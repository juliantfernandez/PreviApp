let text = document.getElementById('random')

let verdad = [
"Cuantas veces te pajeas a la semana?",
"Conta una anécdota vergonzosa con alguno de los presentes",
"Le darías a alguien de la ronda?",
"A quien cagarias a trompadas de la ronda?", 
"Quien es cornudo y no lo sabe?",
"Superaste a tu ex?",
"Fuiste infiel?",
"Tres mentiras, una verdad",
"Cuánto fue el máximo tiempo que estuviste sin bañarte?",
"Estarias con el/la ex de un amigo/a?",
"Con cuantas personas tuviste relaciones sexuales?",
"Pagarias por sexo?",
"Cual es la maxima diferencia de edad que estuviste estando con una persona mayor? y menor?",
"Tuviste relaciones al lado de un amigo mientras dormia?",
"Con quien saldrias a tomar un helado de la ronda?",
"Te sacaron alguna vez de un boliche? por que?",
"Comer cosas feas el resto de tu vida o no tener sexo nunca mas?",
"Te cae mal la pareja de algun amigo/a? quien?",
"Rompiste la cuarantena? que hiciste y con quien?",
"Dejarias a tu pareja por 10k de USD?",
"Tragar o escupir?",
"Del 1 al 10, que tan bueno te consideras en la cama?",
"Te agarraron ingrafanti teniendo sexo?",
"Estuviste con el/la ex de un amigo/a?",
"Tuviste sexo en algun lugar publico? conta como fue",
"Que es lo que mas te calienta de otra persona?",
"Pagaste por sexo alguna vez? y onlyfans o cafecito?",
"Boliche o previa eterna? fundamentá",
"Cual fue el lugar mas insolito en donde te masturbaste?",
"Perdonarias una infidelidad?",
"Cojer matar casar con los de la ronda"]

let reto = [
    "Escribirle a tu ex (cuentan chongos)",
    "Responderle una historia a la primera persona que se te aparezca",
    "Recrear y subir la primera historia que se te aparezca",
    "Un shot por cada persona que te responda la historia dentro de los próximos 10 minutos (subir foto del reto xd)",
    "Los demas participantes deciden el reto",
    "Pegaditos de ahora en mas todos tienen que acomodarse bien pegados entre si(si ya estaban asi juga un verdad)",
    "Hielo de boca en boca con el/la de la derecha", 
    "Beso al mas ebrio",
    "Hacele masajes durante 1 ronda al jugador de tu izquierda",
    "Juga al menos 5 rondas tomado/a de la mano con el jugador de tu derecha",
    "Publica una story diciendo 'sale una birrita? quien se suma?' ",
    "Ponete a dar catedra de como hacer un buen pete",
    "Pico al jugador mas lejos que tengas",
    "Pico al de enfrente",
    "Pulseada con el de la derecha, el que pierde toma",
    "Intercambia vaso con el de la izq",
    "Fondo a tu trago",
    "Tus vecinos toma (izq y derecha)",
    "Botellita (onda girar una botella y darle un beso a quien salga)",
    "Pico a todos",
    "Intercambia una prenda con el de tu derecha",
    "Vos y el jugador que tengas enfrente deciden un reto para los demas jugadores",
    "Sentante encima del jugador que tengas enfrente por 2 rondas",
    "Simulen situacion de boliche y encara a algun jugador. dibuje troesmaa",
    "Subi una historia diciendo que estas embarazada",
    "Llama a la mamá de alguno de los presentes para pedirle su mano",
    "Empeza una ronda pasando un cubito de hielo hasta que vuelva a vos",
    "Mandale un te extraño a alguno de tus exs",
    "Storytime de tu peor vez teniendo relaciones", 
    "Storytime de como fuiste infiel o como te fueron infiel", 
    "Storytime de como te friendzonearon",
"Decir el nombre de la o las personas que te comerías/ le darías un beso presentes en la previa"]

function randomVerdad(){
    const generateRandomVerdad = Math.floor(Math.random() * verdad.length);
    const randomVerdadB = verdad[generateRandomVerdad]
    return text.textContent = randomVerdadB
}
function randomReto(){
  
    const generateRandomReto = Math.floor(Math.random() * reto.length);
    const randomRetoB = reto[generateRandomReto]
    return text.textContent = randomRetoB
}

function random(){
    let randomArray = [...reto, ...verdad]
    const cualquiera = Math.floor(Math.random() * randomArray.length)
    const randomCualquiera = randomArray[cualquiera]
    return text.textContent = randomCualquiera

}
