const btn = document.getElementById('myBtn')
const btn2 = document.getElementById('myBtn2')
const body = document.getElementsByTagName('body')[0]

const listener = function () {
    btn.addEventListener('click', async () => {
        const { paintRed } = await import('./modules/metodos.js')
        paintRed(body)
    })
}

listener()

const listener2 = function () {
    btn2.addEventListener('click', async () => {
        const { paintReset } = await import('./modules/metodos.js')
        paintReset(body)
    })
}

listener2()
