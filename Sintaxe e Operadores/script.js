function compara(num1, num2){
    return `Os números ${num1} e ${num2} ${comparaNumeros(num1, num2)} são iguais. Sua soma e ${num1+num2} que é ${comparaSoma10(num1,num2)} que 10 e ${comparaSoma20(num1,num2)} que 20.`;   
};



function comparaNumeros(num1, num2){
    if (num1 != num2){
        return 'não';
    }
    else{
        return ``;
    }

};

function comparaSoma10(num1, num2){
    let soma=0;
    soma=num1+num2;
    if (soma < 10){
        return `menor`;
    }
    else if (soma > 10){
        return `maior`;
    }
    else{
        return `igual`;
    }


};

function comparaSoma20(num1, num2){
    let soma=0;
    soma=num1+num2;
    if (soma < 20){
        return `menor`;
    }
    else if (soma > 20){
        return `maior`;
    }
    else{
        return `igual`;

    }
};

console.log(compara(1,2));
