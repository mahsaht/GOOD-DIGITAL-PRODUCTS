setTimeout(function() {
    $(".loader-div").remove()
}, 2000);
$(document).ready(function() {

    if (localStorage.getItem("factor") !== null) {
        $(".factor").html(localStorage.getItem("factor"))
    }

    var today = new Date()

    if (localStorage.getItem("saveRadio") === "pay-in-place") {
        let factorPrice = parseInt(localStorage.getItem("finalPrice"))

        if (factorPrice < 400) {
            factorPrice += 10
        }

        function factorProducts() {
            let productArray = []
            for (let index = 0; index < JSON.parse(localStorage.getItem("cartArray")).length; index++) {
                productArray.push(`
                <tr>
                    <td class="w-25">
                        ${ JSON.parse(localStorage.getItem("cartArray"))[index].name}
                    </td>
                    <td>
                        ${ JSON.parse(localStorage.getItem("cartArray"))[index].quantity}
                    </td>
                    <td>
                        ${ JSON.parse(localStorage.getItem("cartArray"))[index].price}$
                    </td>
                </tr>
            `)
            }
            return productArray.join('');

        }

        function factorDelivery() {
            if (factorPrice < 400) {
                return `
                <td class="w-25">
                    Delivery price
                </td>
                <td>
                *
                </td>
                <td>
                    10$
                </td>
                `
            }
        }
        $(".factor").html(`
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col" class="text-center w-25">
                    <img src="images/png/logo.png" width="100px">
                  </th>
                  <th scope="col">
                    Seller : GOOD DIGITAL PRODUCTS <br>
                    Telephone : +1-415-555-2671 <br>
                    Email : good-digital-products@gmail.com
                  </th>
                  <th scope="col">
                    Purchaser : ${localStorage.getItem("fullName")}<br>
                    Mobile phone : ${localStorage.getItem("mobilephoneNumber")}<br>
                    Tele phone : ${localStorage.getItem("telephoneNumber")}<br>
                    Address : ${localStorage.getItem("address")}<br>
                    Postal code : ${localStorage.getItem("postalCode")}
                  </th>
                </tr>
                <tr>
                    <td class="w-25">
                        Product name
                    </td>
                    <td>
                        Quantity
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
            <tbody>
                ${factorProducts()}
                <tr>
                ${factorDelivery()}
                </tr>            
            </tbody>
            <tfoot>
                <tr>
                <td>
                    Total price
                </td>
                <td>
                    ${factorPrice}$
                </td>
                <td>                
                    Payment method : Pay in place
                    <br>
                    Notes : ${localStorage.getItem("orderNotes") ? localStorage.getItem("orderNotes"):"no notes"}
                </td>
                </tr>
            </tfoot>
        </table>
        `)
    }
    if (localStorage.getItem("saveRadio") === "pay-now") {
        let factorPrice = parseInt(localStorage.getItem("finalPrice"))
        if (factorPrice < 400) {
            factorPrice += 10
        }

        function factorProducts() {
            let productArray = []
            for (let index = 0; index < JSON.parse(localStorage.getItem("cartArray")).length; index++) {
                productArray.push(`
                    <tr>
                        <td class="w-25">
                            ${ JSON.parse(localStorage.getItem("cartArray"))[index].name}
                        </td>
                        <td>
                            ${ JSON.parse(localStorage.getItem("cartArray"))[index].quantity}
                        </td>
                        <td>
                            ${ JSON.parse(localStorage.getItem("cartArray"))[index].price}$
                        </td>
                    </tr>
            `)
            }
            return productArray.join('');

        }

        function factorDelivery() {
            if (factorPrice < 400) {
                return `
                <td class="w-25">
                    Delivery price
                </td>
                <td>
                *
                </td>
                <td>
                    10$
                </td>
                `
            }
        }
        $(".factor").html(`
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col" class="text-center w-25">
                        <img src="images/png/logo.png" width="100px">
                    </th>
                  <th scope="col">
                  Seller : GOOD DIGITAL PRODUCTS <br>
                  Telephone : +1-415-555-2671 <br>
                    Email : good-digital-products@gmail.com
                  </th>
                  <th scope="col">
                    Purchaser : ${localStorage.getItem("fullName")}<br>
                    Mobile phone : ${localStorage.getItem("mobilephoneNumber")}<br>
                    Tele phone : ${localStorage.getItem("telephoneNumber")}<br>
                    Address : ${localStorage.getItem("address")}<br>
                    Postal code : ${localStorage.getItem("postalCode")}
                  </th>
                </tr>
                <tr>
                    <td>
                        Product name
                    </td>
                    <td>
                        Quantity
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
            <tbody>
                ${factorProducts()}
                <tr>
                ${factorDelivery()}
                </tr>            
            </tbody>
            <tfoot>
                <tr>
                <td class="w-25">
                    Total price
                </td>
                <td>
                    ${factorPrice}$
                </td>
                <td>                
                    Payment method : Pay in place
                    <br>
                    Notes : ${localStorage.getItem("orderNotes") ? localStorage.getItem("orderNotes"):"no notes"}
                </td>
                </tr>
            </tfoot>
        </table>
        `)
    }
    if (localStorage.getItem("saveRadio") === "pay-in-instalment") {
        if (localStorage.getItem("instalmentPrice") > 2500 && localStorage.getItem("finalPrice") > 2500) {
            let factorPrice = localStorage.getItem("instalmentPrice")
            let factorMonthlyInstalmentQuantity = parseInt(localStorage.getItem("monthlyInstalmentQuantity"))
            let factorMonthlyInstalmentPrice = localStorage.getItem("monthlyInstalmentPrice")
            let prePaymantpercentage = localStorage.getItem("prePaymentPercentage")
            let factorPrepayment = localStorage.getItem("prepayment")
            let day = today.getDate()
            let month = today.getMonth() + 1
            let year = today.getFullYear()
            $(".factor").html("");

            function factorProducts() {
                let productArray = []
                for (let index = 0; index < JSON.parse(localStorage.getItem("cartArray")).length; index++) {
                    productArray.push(`
                            <tr>
                                <td>
                                    ${ JSON.parse(localStorage.getItem("cartArray"))[index].name}
                                </td>
                                <td>
                                    ${ JSON.parse(localStorage.getItem("cartArray"))[index].quantity}
                                </td>
                                <td>
                                    ${ JSON.parse(localStorage.getItem("cartArray"))[index].price}$
                                </td>
                            </tr>
                        `)
                }
                return productArray.join('');

            }

            function factorDelivery() {
                if (factorPrice < 400) {
                    return `
                            <td>
                                Delivery price
                            </td>
                            <td>
                            *
                            </td>
                            <td>
                                10$
                            </td>
                            `
                }
            }

            function instalmentDates(index) {
                if (month + index + 1 > 12) {
                    if (index - 3 > 12) {
                        return index - 15 + "/" + day + "/" + parseInt(year + 2)
                    }
                    return index - 3 + "/" + day + "/" + parseInt(year + 1)
                } else {
                    return month + 1 + index + "/" + day + "/" + parseInt(year)

                }
            }

            function monthInstalment() {
                let monthInstalmentArray = []
                for (let index = 0; index < factorMonthlyInstalmentQuantity; index++) {
                    monthInstalmentArray.push(`
                            <tr>
                                <td class="w-25">
                                Instalment ${index+1}
                                </td>
                                <td>
                                    ${factorMonthlyInstalmentPrice}$
                                </td>
                                <td>
                                ${instalmentDates(index)}
                                </td>
                            </tr>
                        `)
                }
                return monthInstalmentArray.join('');
            }
            $(".factor").html(`
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                              <th scope="col" class="text-center w-25">
                                <img src="images/png/logo.png" width="100px">
                              </th>
                              <th scope="col">
                                Seller : GOOD DIGITAL PRODUCTS <br>
                                Telephone : +1-415-555-2671 <br>
                                Email : good-digital-products@gmail.com
                              </th>
                              <th scope="col">
                                Purchaser : ${localStorage.getItem("fullName")}<br>
                                Mobile phone : ${localStorage.getItem("mobilephoneNumber")}<br>
                                Tele phone : ${localStorage.getItem("telephoneNumber")}<br>
                                Address : ${localStorage.getItem("address")}<br>
                                Postal code : ${localStorage.getItem("postalCode")}
                              </th>
                            </tr>
                            <tr>
                                <td>
                                    Product name
                                </td>
                                <td>
                                    Quantity
                                </td>
                                <td>
                                    Price
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            ${factorProducts()}
                            <tr>
                            ${factorDelivery()}
                            </tr>            
                        </tbody>
                        <tfoot>
                            <tr>
                            <td class="w-25">
                                Total price
                            </td>
                            <td>
                                ${factorPrice}$
                            </td>
                            <td>                
                                Payment method : Pay in instalment (${prePaymantpercentage}% prepayment and ${factorMonthlyInstalmentQuantity} months instalment)
                            <br>
                            Notes : ${localStorage.getItem("orderNotes") ? localStorage.getItem("orderNotes"):"no notes"}
                            </td>
                            </tr>
                        </tfoot>
                    </table>
                    <table class="table table-bordered">
                        <thead>
                            <tr>                
                                <th scope="col" colspan="3" class="text-center">
                                    Instalment table
                                </th scope="col">
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="w-25">
                                Prepayment
                            </td>
                            <td>
                                ${factorPrepayment}$
                            </td>
                            <td>
                                ${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}
                            </td>
                        <tr>
                        ${monthInstalment()}
                        <tbody>
                    </table>
                    `)

        }
    }
    localStorage.setItem("factor", $(".factor").html())
    $(".factor").html(function(index, val) {
        return val + `<button class="btn finish">Finish</button>`
    })
    $("body .factor .finish").click(function() {
        alert("your order has been finished successfully , be in contact with us")
        localStorage.clear()
        window.location = "../index.html"
    })
})