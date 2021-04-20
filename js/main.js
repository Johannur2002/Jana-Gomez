window.onload = function () {
    const btn = document.querySelector('.menu-button');
    const btn_burger = document.querySelector('.menu-button__burger');
    const menu = document.querySelector('.menu')
    const menu_nav = document.querySelector('.menu-nav')
    const menu_item = document.querySelectorAll('.menu__item')

    let isOpen = false

    btn.addEventListener('click', openNav)

    function openNav() {
        
        if (!isOpen) {
            
            btn_burger.classList.add('open')
            menu.classList.add('open')
            menu_nav.classList.add('open')
            menu_item.forEach(e => {
                e.classList.add('open')
            })

            isOpen = true
        } else {
            btn_burger.classList.remove('open')
            menu.classList.remove('open')
            menu_nav.classList.remove('open')
            menu_item.forEach(e => {
                e.classList.remove('open')
            })

            isOpen = false
        }

    }

    // Form Validation component
    const name = document.querySelector('.form__group__input__name')
    const subject = document.querySelector('.form__group__input__subject')
    const email = document.querySelector('.form__group__input__email')
    const password = document.querySelector('.form__group__input__password')
    const form = document.querySelector('.form')
    const massage = document.querySelector('.form__group__input__massage')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        showError(name, 'Name must be required')
        showError(subject, 'Please give your subject')
        showError(email, 'Please inter a valid email')
        showError(massage, 'Please write something for us')

        if (password.value.length < 6) {
            showError(password, 'Password must be longer than 6 characters')
        } else if (password.value.length > 20) {
            showError(password, 'Password must be lower than 20 characters')
        } else if (password.value === 'password' || password.value === 'Password') {
            showError(password, 'Password can\'t be password')
        } else {
            showSuccess(password)
        }
    })

    function showError(giveValue, massage) {
        if (giveValue.value === '') {
            let text = giveValue.parentElement;
            let msg = text.querySelector('span')
            msg.style.display = 'inline-block'
            giveValue.classList.add('error')
            msg.innerText = massage
        } else {
            showSuccess(giveValue)
        }
    }

    function showSuccess(target) {
        if (target.value) {
            target.classList.add('success')
        }
    }

}

    