require("dotenv").config();

const  cowsay  =  require ( "cowsay" ) ;
const name = process.env.NAME;
const school = process.env.CAMPUS;

console . log ( cowsay . say ( { 
    text : `Je suis ${name} de la ${school}` , 
    e : "oO" , 
    T : "U " 
} ) ) ;