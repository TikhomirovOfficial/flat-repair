let priceTypes = [
    {
        title: 'косметический',
        price: 1600
    },
    {
        title: 'капитальный',
        price: 3000
    },
    {
        title: 'эксклюзивный',
        price: 5000
    }
]
document.querySelector('#type').addEventListener('change', e => {
    changeService(e.target.selectedIndex)
})

document.querySelector('#count').addEventListener('change', e => {
    const selected = Number(document.querySelector('#type').selectedIndex)
    calcPrice(e.target.value, priceTypes[selected].price)
})

const changeService = (obj) => {
   calcPrice(Number(countInput.value), priceTypes[obj].price)
}

const countInput = document.getElementById('count')
let nowCount;
let price;

function calcPrice(now = Number(countInput.value), price) {
    nowCount = now
    price = nowCount * price;
    $('#sum').text(price)
}
calcPrice(0, 0)