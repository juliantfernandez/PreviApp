let text = document.getElementById('random')


let verdad = [
"cuantas veces te pajeas a la semana",
"conta una anécdota vergonzosa con alguno de los presentes",
"le darías a alguien de la ronda",
"a quien cagarias a trompadas de la ronda ", 
"quien es cornudo y no lo sabe ",
"superaste a tu ex",
"fuiste infiel",
"tres mentiras una verdad",
"cuánto fue el máximo tiempo que estuviste sin bañarte",
"estarias con el/la ex de un amigo/a?",
"con cuantas personas tuviste relaciones sexuales?",
"pagarias por sexo?",
"cual es la maxima diferencia de edad que estuviste estando con una persona mayor? y menor?",
"tuviste relaciones al lado de un amigo mientras dormia?",
"con quien saldrias a tomar un helado de la ronda?",
"te sacaron alguna vez de un boliche? por que?",
"comer cosas feas el resto de tu vida o no tener sexo nunca mas?",
"te cae mal la pareja de algun amigo/a? quien?",
"rompiste la cuarantena? que hiciste y con quien?",
"dejarias a tu pareja por 10k de USD?",
"tragar o escupir?",
"del 1 al 10, que tan bueno te consideras en la cama?",
"te agarraron ingrafanti teniendo sexo?",
"estuviste con el/la ex de un amigo/a?",
"tuviste sexo en algun lugar publico? conta como fue",
"que es lo que mas te calienta de otra persona?",
"pagaste por sexo alguna vez? y onlyfans o cafecito?",
"boliche o previa eterna? fundamentá",
"cual fue el lugar mas insolito en donde te masturbaste?",
"perdonarias una infidelidad?",
"cojer matar casar con los de la ronda"]
function randomVerdad(){
    const generateRandomVerdad = Math.floor(Math.random() * verdad.length);
    const randomVerdadB = verdad[generateRandomVerdad]
    return text.textContent = randomVerdadB
}

let reto = [
"escribirle a tu ex (cuentan chongos)",
"responderle una historia a la primera persona que se te aparezca",
"recrear y subir la primera historia que se te aparezca",
"un shot por cada persona que te responda la historia dentro de los próximos 10 minutos (subir foto del reto xd)",
"los demas participantes deciden el reto",
"pegaditos de ahora en mas todos tienen que acomodarse bien pegados entre si(si ya estaban asi juga un verdad)",
"hielo de boca en boca con el/la de la derecha", 
"beso al mas ebrio",
"hacele masajes durante 1 ronda al jugador de tu izquierda",
"juga al menos 5 rondas tomado/a de la mano con el jugador de tu derecha",
"publica una story diciendo 'sale una birrita? quien se suma?' ",
"ponete a dar catedra de como hacer un buen pete",
"pico al jugador mas lejos que tengas",
"pico al de enfrente",
"pulseada con el de la derecha, el que pierde toma",
"intercambia vaso con el de la izq",
"fondo a tu trago",
"tus vecinos toma (izq y derecha)",
"botellita (onda girar una botella y darle un beso a quien salga)",
"pico a todos",
"intercambia una prenda con el de tu derecha",
"vos y el jugador que tengas enfrente deciden un reto para los demas jugadores",
"sentante encima del jugador que tengas enfrente por 2 rondas",
"simulen situacion de boliche y encara a algun jugador. dibuje troesmaa",
"subi una historia diciendo que estas embarazada",
"llama a la mamá de alguno de los presentes para pedirle su mano",
"empeza una ronda pasando un cubito de hielo hasta que vuelva a vos",
"mandale un te extraño a alguno de tus exs",
"storytime de tu peor vez teniendo relaciones", 
"storytime de como fuiste infiel o como te fueron infiel", 
"storytime de como te friendzonearon"]
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
