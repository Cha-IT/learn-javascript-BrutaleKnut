let name = prompt('Skriv navnet ditt', 'Fabio')

if (name != null) {
    console.log('Hei' + ' ' + name)
}

let alder = prompt('Hvor gammel er du?', 0)

if (isNaN(alder)) {
    console.log('Du kan umulig være' + ' ' + alder + ' ' + 'år gammel.')
} else if (alder >= 18) {
    console.log('Du får kjøpe øl.')
} else {
    console.log('Du får ikke kjøpe øl.')
}

if (isNaN(alder)) {
    console.log('Folk som er' + ' ' + alder + ' ' + 'år gammel får ikke kjøre buss')
} else if (alder >= 67) {
    
}

let number = prompt('Skriv et tall', 1)

let tall = prompt('Det tallet suger, skriv et bedre tall', 72)
if (isNaN(number) || isNaN(tall)) {
console.log('Jeg sa tall, din idiot')
} else {
console.log(+tall + +number)
console.log(number - tall)
console.log(tall * number)
console.log(number / tall)  
}