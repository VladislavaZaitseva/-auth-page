const btn = document.querySelector('.btn');
const inpLog = document.querySelector('#inp1');
const inpPwd = document.querySelector('#inp2');

btn.addEventListener('click', function () {
    try {
        isValid()
        alert('Вы авторизовались!')
    } catch (error) {
        alert(error.message)
    }
})

function isValid (){
    if (inpLog.value == '' || inpPwd.value == '') throw new Error('одно из полей пустое')
    if (!/^[a-z0-9\._-]+@[a-z]+\.[a-z]+$/gm.test(inpLog.value) && !/^\+375[0-9]{9}$/gm.test(inpLog.value)) throw new Error('это не почта');
    if (inpPwd.value.length < 8) throw new Error('неверная длинна пароля')
}