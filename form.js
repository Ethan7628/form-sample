function cyears (){
    const inputField = document.getElementById('input_field');
    const value = inputField.value;
    console.log('value', value)
    const resultField = document.getElementById('result_field');
    if(resultField){
        resultField.value = value * 7;
    }
    //form.dogage.value = form.myage.value * 7
}