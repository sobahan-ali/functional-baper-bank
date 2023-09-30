

document.getElementById('btn_submit').addEventListener('click', function () {
    const parent = document.querySelector('.parent');
    const emailField = parent.children[0].value;
    const passField = parent.children[3].value;


    // console.log(emailField, passField);
    if (emailField === 'son@gmail.com' && passField === '12345') {
        window.open('./bank.html', '_blank');
    }
    else {
        alert('pleas give your right email and password')
    }


})

