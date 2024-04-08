function submitForm(event){
    console.log(`SubmitForm... ${event}`)

    const formulario = document.getElementById('form-newspaper')
    const data = new FormData(formulario)

    data.forEach((value, key) => {
        console.log(`${key} = ${value}`)
    })
}
