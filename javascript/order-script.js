setTimeout(function() {
    $(".loader-div").remove()
}, 2000);
$(document).ready(function() {

    if (localStorage.getItem("finalPrice") !== null) {
        if (localStorage.getItem("fullName") !== null) {
            if (localStorage.getItem("fullName").replace(/\s/g, '').length !== 0) {
                $('#full-name').val(localStorage.getItem("fullName"))
                checkFullName()
            }

        }
        if (localStorage.getItem("mobilephoneNumber") !== null) {
            if (localStorage.getItem("mobilephoneNumber").replace(/\s/g, '').length !== 0) {
                $('#mobilephone-number').val(localStorage.getItem("mobilephoneNumber"))
                checkMobilephoneNumber()
            }

        }
        if (localStorage.getItem("telephoneNumber") !== null) {
            if (localStorage.getItem("telephoneNumber").replace(/\s/g, '').length !== 0) {
                $('#telephone-number').val(localStorage.getItem("telephoneNumber"))
                checkTelephoneNumber()
            }

        }
        if (localStorage.getItem("postalCode") !== null) {
            if (localStorage.getItem("postalCode").replace(/\s/g, '').length !== 0) {
                $('#postal-code').val(localStorage.getItem("postalCode"))
                checkPostalCode()
            }

        }
        if (localStorage.getItem("address") !== null) {
            if (localStorage.getItem("address").replace(/\s/g, '').length !== 0) {
                $('#full-address').val(localStorage.getItem("address"))
                checkAddress()
            }

        }
        if (localStorage.getItem("orderNotes") !== null) {
            $('#notes').val(localStorage.getItem("orderNotes"))

        }
        if (localStorage.getItem("saveRadio") !== null) {
            $(`#${localStorage.getItem("saveRadio")}`).attr("checked", true)
        }
        $('#full-name').on('input', checkFullName)
        $('#mobilephone-number').on('input', checkMobilephoneNumber)
        $('#telephone-number').on('input', checkTelephoneNumber)
        $('#postal-code').on('input', checkPostalCode)
        $('#full-address').on('input', checkAddress)
        $('#notes').on('input', addNote)
        $('.show-price').on('click', finaliseOrder)
        $('#pay-in-place').on('input', function(event) {
            localStorage.setItem("saveRadio", $(event.currentTarget).attr("id"))
        })
        $('#pay-now').on('input', function(event) {
            localStorage.setItem("saveRadio", $(event.currentTarget).attr("id"))
        })
        $('#pay-in-instalment').on('input', function(event) {
            localStorage.setItem("saveRadio", $(event.currentTarget).attr("id"))
        })

        function checkFullName() {
            if ($('#full-name').val() === '') {
                $('#full-name-alert').html('fill the input completely')
                $('#full-name-alert').removeClass('valid')
                $('#full-name-alert').addClass('invalid')

            } else if (/\d+/g.test($('#full-name').val())) {
                $('#full-name-alert').html('your fullname must not have numbers')
                $('#full-name-alert').removeClass('valid')
                $('#full-name-alert').addClass('invalid')
            } else if ($('#full-name').val().length < 5) {
                $('#full-name-alert').html('your fullname must have 5 characters at least')
                $('#full-name-alert').removeClass('valid')
                $('#full-name-alert').addClass('invalid')

            } else if ($('#full-name').val().indexOf(' ') < 0) {
                $('#full-name-alert').html('please put space between your first and lastname')
                $('#full-name-alert').removeClass('valid')
                $('#full-name-alert').addClass('invalid')

            } else if ($('#full-name').val().indexOf('   ') !== -1 || $('#full-name').val().indexOf(' ') === $('#full-name').val().length - 1) {
                $('#full-name-alert').html('fill the input correctly')
                $('#full-name-alert').removeClass('valid')
                $('#full-name-alert').addClass('invalid')

            } else {
                $('#full-name-alert').html(`ok,it's valid`)
                $('#full-name-alert').removeClass('invalid')
                $('#full-name-alert').addClass('valid')
            }
            localStorage.setItem("fullName", $('#full-name').val())
        }

        function checkMobilephoneNumber() {
            if ($('#mobilephone-number').val() === '') {
                $('#mobilephone-number-alert').html('fill the input completely')
                $('#mobilephone-number-alert').removeClass('valid')
                $('#mobilephone-number-alert').addClass('invalid')
            } else if ($('#mobilephone-number').val().indexOf('00') !== 0) {
                $('#mobilephone-number-alert').html('put 00 before your country code')
                $('#mobilephone-number-alert').removeClass('valid')
                $('#mobilephone-number-alert').addClass('invalid')

            } else if ($('#mobilephone-number').val().length < 12 || $('#mobilephone-number').val().length > 15) {
                $('#mobilephone-number-alert').html('your mobilephone number must have 13 to 15 digits')
                $('#mobilephone-number-alert').removeClass('valid')
                $('#mobilephone-number-alert').addClass('invalid')
            } else {
                $('#mobilephone-number-alert').html(`ok,it's valid`)
                $('#mobilephone-number-alert').removeClass('invalid')
                $('#mobilephone-number-alert').addClass('valid')
            }
            localStorage.setItem("mobilephoneNumber", $('#mobilephone-number').val())

        }

        function checkTelephoneNumber() {
            if ($('#telephone-number').val() === '') {
                $('#telephone-number-alert').html('fill the input completely')
                $('#telephone-number-alert').removeClass('valid')
                $('#telephone-number-alert').addClass('invalid')
            } else if ($('#telephone-number').val().indexOf('00') !== 0) {
                $('#telephone-number-alert').html('put 00 before your country code')
                $('#telephone-number-alert').removeClass('valid')
                $('#telephone-number-alert').addClass('invalid')
            } else if ($('#telephone-number').val().length < 12 || $('#telephone-number').val().length > 15) {
                $('#telephone-number-alert').html('your telephone number must have 13 to 15 digits')
                $('#telephone-number-alert').removeClass('valid')
                $('#telephone-number-alert').addClass('invalid')
            } else if ($('#telephone-number').val() === $('#mobilephone-number').val()) {
                $('#telephone-number-alert').html('your telephone number must not be equal to your mobilephone number')
                $('#telephone-number-alert').removeClass('valid')
                $('#telephone-number-alert').addClass('invalid')

            } else {
                $('#telephone-number-alert').html(`ok,it's valid`)
                $('#telephone-number-alert').removeClass('invalid')
                $('#telephone-number-alert').addClass('valid')
            }
            localStorage.setItem("telephoneNumber", $('#telephone-number').val())
        }

        function checkPostalCode() {

            if ($('#postal-code').val() === '') {
                $('#postal-code-alert').html('fill the input completely')
                $('#postal-code-alert').removeClass('valid')
                $('#postal-code-alert').addClass('invalid')
            } else if ($('#postal-code').val().length !== 5) {
                $('#postal-code-alert').html('your postal code must have 5 digits')
                $('#postal-code-alert').removeClass('valid')
                $('#postal-code-alert').addClass('invalid')
            } else {
                $('#postal-code-alert').html(`ok,it's valid`)
                $('#postal-code-alert').removeClass('invalid')
                $('#postal-code-alert').addClass('valid')
            }
            localStorage.setItem("postalCode", $('#postal-code').val())

        }

        function checkAddress() {

            if ($('#full-address').val() === '') {
                $('#full-address-alert').html('fill the input completely')
                $('#full-address-alert').removeClass('valid')
                $('#full-address-alert').addClass('invalid')

            } else if ($('#full-address').val().length < 24) {
                $('#full-address-alert').html('your address must have 25 characters at least')
                $('#full-address-alert').removeClass('valid')
                $('#full-address-alert').addClass('invalid')
            } else if ($('#full-address').val().indexOf('      ') !== -1) {
                $('#full-address-alert').html('fill the input correctly')
                $('#full-address-alert').removeClass('valid')
                $('#full-address-alert').addClass('invalid')
            } else {
                $('#full-address-alert').html(`ok,it's valid`)
                $('#full-address-alert').removeClass('invalid')
                $('#full-address-alert').addClass('valid')
            }
            localStorage.setItem("address", $('#full-address').val())

        }

        function addNote() {
            localStorage.setItem("orderNotes", $("#notes").val())
        }

        function finaliseOrder() {
            let vaildSentence = `ok,it's valid`
            if ($('#full-name-alert').html() === vaildSentence && $('#mobilephone-number-alert').html() === vaildSentence && $('#telephone-number-alert').html() === vaildSentence && $('#postal-code-alert').html() === vaildSentence && $('#full-address-alert').html() === vaildSentence && $('#pay-in-place:checked').is(':checked')) {
                payInPLaceFunction()
                $('#final-buttons').html(`<button class="show-factor-order">show the factor and order</button>`)
                $('#final-buttons').click(factor)
                $('#pay-in-place').click(payInPLaceFunction)
                $('#pay-now').click(payNowFunction)
                $('#pay-in-instalment').click(payInInstalmentFunction)
                $('#pay-in-place').on('input', payInPLaceFunction)
                $('#pay-now').on('input', payNowFunction)
                $('#pay-in-instalment').on('input', payInInstalmentFunction)

            } else if ($('#full-name-alert').html() === vaildSentence && $('#mobilephone-number-alert').html() === vaildSentence && $('#telephone-number-alert').html() === vaildSentence && $('#postal-code-alert').html() === vaildSentence && $('#full-address-alert').html() === vaildSentence && $('#pay-now').is(':checked')) {
                payNowFunction()
                $('#final-buttons').html(`<button class="show-factor-order">show the factor and order</button>`)
                $('#final-buttons').click(factor)
                $('#pay-in-place').click(payInPLaceFunction)
                $('#pay-now').click(payNowFunction)
                $('#pay-in-instalment').click(payInInstalmentFunction)
                $('#pay-in-place').on('input', payInPLaceFunction)
                $('#pay-now').on('input', payNowFunction)
                $('#pay-in-instalment').on('input', payInInstalmentFunction)
            } else if ($('#full-name-alert').html() === vaildSentence && $('#mobilephone-number-alert').html() === vaildSentence && $('#telephone-number-alert').html() === vaildSentence && $('#postal-code-alert').html() === vaildSentence && $('#full-address-alert').html() === vaildSentence && $('#pay-in-instalment').is(':checked')) {
                payInInstalmentFunction()
                $('#final-buttons').click(factor)
                $('#pay-in-place').click(payInPLaceFunction)
                $('#pay-now').click(payNowFunction)
                $('#pay-in-instalment').click(payInInstalmentFunction)
                $('#pay-in-place').on('input', payInPLaceFunction)
                $('#pay-now').on('input', payNowFunction)
                $('#pay-in-instalment').on('input', payInInstalmentFunction)
            } else {
                $('.information-totalprice').html('You must complete all forms correctly to complete your order')
                $('.information-totalprice').addClass('alert')
            }
        }

        function payInPLaceFunction() {
            $('.information-totalprice').html('')
            $('.instalment-inputs').html('')
            $('#final-buttons').html(`<button class="show-factor-order">show the factor and order</button>`)
            var finalTotal = localStorage.getItem("finalPrice")
            if (finalTotal < 400) {
                $('.information-totalprice').html(`${parseInt(finalTotal)+10}$ => products price : ${finalTotal}$+ delivery price : 10$`)
                $('.information-totalprice').removeClass("alert")

            } else if (finalTotal > 400) {
                $('.information-totalprice').html(`${finalTotal}$ => products price : ${finalTotal}$ + delivery price : FREE`)
                $('.information-totalprice').removeClass("alert")

            }
            if ($('.information-totalprice').html().indexOf('products price') !== -1) {
                $('.show-price').remove()
            }
        }

        function payNowFunction() {
            $('.information-totalprice').html('')
            $('.instalment-inputs').html('')
            $('#final-buttons').html(`<button class="show-factor-order">show the factor and order</button>`)

            var finalTotal = localStorage.getItem("finalPrice")
            if (finalTotal < 400) {
                $('.information-totalprice').html(`${parseInt(finalTotal)+10}$ => products price : ${finalTotal}$+ delivery price : 10$`)
                $('.information-totalprice').removeClass("alert")

            } else if (finalTotal > 400) {
                $('.information-totalprice').html(`${finalTotal}$ => products price : ${finalTotal}$ + delivery price : FREE`)
                $('.information-totalprice').removeClass("alert")

            }
            if ($('.information-totalprice').html().indexOf('products price') !== -1) {
                $('.show-price').remove()
            }

        }
        //document.querySelector('.final-buttons').innerHTML += `<button class="show-factor-order">show the factor and order</button>`
        function payInInstalmentFunction() {
            $('.information-totalprice').html('')
            $('.instalment-inputs').html('')
            var finalTotal = localStorage.getItem("finalPrice")
            if (finalTotal < 2500) {
                $('#final-buttons').html('')
                $('.information-totalprice').html(`Sorry,total price of your shoppings must be more than 2500$ to have instalment shopping`)
                $('.information-totalprice').removeClass('alert')
            } else if (finalTotal >= 2500) {
                //     document.querySelector('.information-totalprice').innerHTML = `${finalTotal}$ => products price : ${finalTotal}$ + delivery price : FREE`
                //     document.querySelector('.information-totalprice').classList.remove('alert')
                $('#final-buttons').html(`<button class="show-factor-order">show the factor and order</button>`)
                $('.instalment-inputs').html(`
            <label for="prepayment-percentage">
            <div  id="prepayment-percentage-amount">
            prepayment percentage : 50%
            </div>
            <input id="prepayment-percentage" type="range" min="30" max="70" step="10" value="${prepaymentPercntage}">
            </label>
            <label for="monthly-instalment-quantity">
            <div id="monthly-instalment-quantity-amount">
            instalments quantity : 9 months
            </div>
            <input id="monthly-instalment-quantity" type="range" min="3" max="15">
            </label>
            `)
                var prepaymentPercntage = parseInt($('#prepayment-percentage').val())
                var monthlyInstalmentQuantity = parseInt($('#monthly-instalment-quantity').val())
                var benefit;
                if (prepaymentPercntage === 30) {
                    benefit = 110
                } else if (prepaymentPercntage === 40) {
                    benefit = 108
                } else if (prepaymentPercntage === 50) {
                    benefit = 106
                } else if (prepaymentPercntage === 60) {
                    benefit = 104
                } else if (prepaymentPercntage === 70) {
                    benefit = 102
                }

                $('.information-totalprice').html(`Total : ${Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity) * monthlyInstalmentQuantity + Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100)}$ => products price : ${finalTotal}$+instalment benefit: ${benefit-100}% +delivery price : FREE
            <p>prepayment : ${Math.round(finalTotal*benefit/100*prepaymentPercntage/100)}$</p>
            <p>monthly instalment :  ${Math.round(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)}$</p>`)
                var instalmentPrice = Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity) * monthlyInstalmentQuantity + Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100)
                localStorage.setItem("instalmentPrice", instalmentPrice)
                localStorage.setItem("monthlyInstalmentQuantity", monthlyInstalmentQuantity)
                localStorage.setItem("prePaymentPercentage", prepaymentPercntage)
                localStorage.setItem("monthlyInstalmentPrice", Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity))
                localStorage.setItem("prepayment", Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100))
                $('#prepayment-percentage').on('input', function() {
                    var prepaymentPercntage = parseInt($('#prepayment-percentage').val())
                    var monthlyInstalmentQuantity = parseInt($('#monthly-instalment-quantity').val())
                    $('#prepayment-percentage-amount').html(`prepayment percentage : ${prepaymentPercntage}%`)
                    $('#monthly-instalment-quantity-amount').html(`instalments quantity : ${$('#monthly-instalment-quantity').val()} months`)
                    var benefit;
                    if (prepaymentPercntage === 30) {
                        benefit = 110
                    } else if (prepaymentPercntage === 40) {
                        benefit = 108
                    } else if (prepaymentPercntage === 50) {
                        benefit = 106
                    } else if (prepaymentPercntage === 60) {
                        benefit = 104
                    } else if (prepaymentPercntage === 70) {
                        benefit = 102
                    }
                    var prepaymentPercntage = parseInt($('#prepayment-percentage').val())
                    var monthlyInstalmentQuantity = parseInt($('#monthly-instalment-quantity').val())
                    $('.information-totalprice').html(`Total : ${Math.round(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)*monthlyInstalmentQuantity+Math.round(finalTotal*benefit/100*prepaymentPercntage/100)}$ => products price : ${finalTotal}$+instalment benefit: ${benefit-100}% +delivery price : FREE
                <p>prepayment : ${Math.round(finalTotal*benefit/100*prepaymentPercntage/100)}$</p>
                <p>monthly instalment :  ${Math.round(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)}$</p>
                `)
                    var instalmentPrice = Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity) * monthlyInstalmentQuantity + Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100)
                    localStorage.setItem("instalmentPrice", instalmentPrice)
                    localStorage.setItem("monthlyInstalmentQuantity", monthlyInstalmentQuantity)
                    localStorage.setItem("prePaymentPercentage", prepaymentPercntage)
                    localStorage.setItem("monthlyInstalmentPrice", Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity))
                    localStorage.setItem("prepayment", Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100))
                    $('.information-totalprice').removeClass("alert")

                })

                $('#monthly-instalment-quantity').on('input', function() {
                        var prepaymentPercntage = parseInt($('#prepayment-percentage').val())
                        var monthlyInstalmentQuantity = parseInt($('#monthly-instalment-quantity').val())
                        var benefit;
                        if (prepaymentPercntage === 30) {
                            benefit = 110
                        } else if (prepaymentPercntage === 40) {
                            benefit = 108
                        } else if (prepaymentPercntage === 50) {
                            benefit = 106
                        } else if (prepaymentPercntage === 60) {
                            benefit = 104
                        } else if (prepaymentPercntage === 70) {
                            benefit = 102
                        }
                        $('#prepayment-percentage-amount').html(`prepayment percentage : ${prepaymentPercntage}%`)
                        $('#monthly-instalment-quantity-amount').html(`instalments quantity : ${$('#monthly-instalment-quantity').val()} months`)
                        $('.information-totalprice').html(`Total : ${Math.round(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)*monthlyInstalmentQuantity+Math.round(finalTotal*benefit/100*prepaymentPercntage/100)}$ => products price : ${finalTotal}$+instalment benefit: ${benefit-100}% +delivery price : FREE
                    <p>prepayment : ${Math.round(finalTotal*benefit/100*prepaymentPercntage/100)}$</p>
                    <p>monthly instalment :  ${Math.round(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)}$</p>
                    `)
                        var instalmentPrice = Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity) * monthlyInstalmentQuantity + Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100)
                        localStorage.setItem("instalmentPrice", instalmentPrice)
                        localStorage.setItem("monthlyInstalmentQuantity", monthlyInstalmentQuantity)
                        localStorage.setItem("prePaymentPercentage", prepaymentPercntage)
                        localStorage.setItem("monthlyInstalmentPrice", Math.round(((finalTotal * benefit / 100) - (finalTotal * benefit / 100 * prepaymentPercntage / 100)) / monthlyInstalmentQuantity))
                        localStorage.setItem("prepayment", Math.round(finalTotal * benefit / 100 * prepaymentPercntage / 100))
                        $('.information-totalprice').removeClass("alert")

                    })
                    // var prepaymentPercntage = parseInt(document.querySelector('#prepayment-percentage').value)
                    // var monthlyInstalmentQuantity = parseInt(document.querySelector('#monthly-instalment-quantity').value)
                    // document.querySelector('.information-totalprice').innerHTML = `${finalTotal*benefit/100}$ => products price : ${finalTotal}$+instalment benefit: ${benefit-100}% +delivery price : FREE
                    // <p>prepayment : ${Math.ceil(finalTotal*benefit/100*prepaymentPercntage/100)}$</p>
                    // <p>monthly instalment :  ${Math.ceil(((finalTotal*benefit/100)-(finalTotal*benefit/100*prepaymentPercntage/100))/monthlyInstalmentQuantity)}$</p>
                    // `
                var benefit;
                if (prepaymentPercntage === 30) {
                    benefit = 110
                } else if (prepaymentPercntage === 40) {
                    benefit = 108
                } else if (prepaymentPercntage === 50) {
                    benefit = 106
                } else if (prepaymentPercntage === 60) {
                    benefit = 104
                } else if (prepaymentPercntage === 70) {
                    benefit = 102
                }
                $('.information-totalprice').removeClass("alert")
            }
            $('.show-price').remove()

        }

        function factor() {
            window.location = "factor.html"

        }

    } else if (!localStorage.getItem("finalPrice")) {
        $(document).find("body").addClass("d-flex align-items-center justify-content-center")
        $(document).find("body").html(`<img src="images/svg/forbidden-illustration.svg" width="75%">`)
    }
})