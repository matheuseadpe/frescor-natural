function submitForm(values){
    console.log(values)
    const data = {
        nome:values.nome,
        email:values.email,
        telefone:values.telefone
    }

    console.log(...data)
}