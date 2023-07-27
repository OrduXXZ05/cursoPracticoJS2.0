const coupons = [
    {
        name: "SoyBatman",
        discount: 15
    },
    {
        name: "PeroEsSecreto",
        discount: 30,
    },
    {
        name: "NoLeDigasANadie",
        discount: 25,
    }
]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;


        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento 

}

function onClickCouponDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("inputCoupon")
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon) {
        alert("El cupón " + couponValue + " no es valido")
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento 
    }
}