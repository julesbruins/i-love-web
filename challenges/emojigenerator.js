console.log('works') // console is een #object met een log #function

const button = document.querySelector('button') // sla het button element op in een variabele (binding)

button.addEventListener('click', moveParagraph) // javascript met zogenaamde dot-notation

function moveParagraph () {
    const par =  document.querySelector('p')
    par.classList.toggle('moveit')
}

// conventions
// use a named callback function instead of a unanymous function
// use meaningfull names for variables and functions
// never set styling directly from JS, passt vlaues hroug custom propertie
// always use button to trigger an action