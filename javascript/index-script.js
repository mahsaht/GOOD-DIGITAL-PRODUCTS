$("img").attr("loading", "lazy")
setTimeout(function() {
    $(".loader-div").remove()
}, 3000);
$(document).ready(function() {

    $(".menu-icon").click(function() {
        $(".responsive-menu").html($(".nav-links-div").html());
        $(".menu-container").addClass("menu-container-active");
        $(".menu-container .fa-times").click(function() {
            $(".menu-container").removeClass("menu-container-active");
        });
    });

    $(".product-final-price").each(function(index, price) {
        $(this)
            .parent()
            .parent()
            .find(".product-price")
            .html(
                `${$(this).parent().parent().parent().find(".main-img").data("price")}$`
            );
        if (
            $(this).parent().parent().parent().find(".main-img").data("discount") ===
            "none"
        ) {
            $(this).parent().parent().find(".product-price").addClass("invisible");
            $(this).html(
                `${$(this).parent().parent().parent().find(".main-img").data("price")}$`
            );
            $(this)
                .parent()
                .parent()
                .parent()
                .find(".product-discount")
                .addClass("d-none");
        } else {
            $(this)
                .parent()
                .parent()
                .parent()
                .find(".product-discount")
                .html(
                    `${$(this)
           .parent()
           .parent()
           .parent()
           .find(".main-img")
           .data("discount")}%`
                );
            $(this).html(
                `${Math.ceil(
         ((100 -
           $(this)
             .parent()
             .parent()
             .parent()
             .find(".main-img")
             .data("discount")) *
           $(this)
             .parent()
             .parent()
             .parent()
             .find(".main-img")
             .data("price")) /
           100
       )}$`
            );
        }
    });
    // var productMaxHeight = 0;
    // $('.product').each(function() {
    //     if ($(this).height() > productMaxHeight) {
    //         productMaxHeight = $(this).height()
    //     }
    // })
    // $('.product').height(productMaxHeight)
    var productNameMaxHeight = 0;
    $(".product-name").each(function() {
        if ($(this).height() > productNameMaxHeight) {
            productNameMaxHeight = $(this).height();
        }
    });
    $(".product-name").height(productNameMaxHeight);

    var productPriceMaxHeight = 0;
    $(".product-price").each(function() {
        if ($(this).height() > productPriceMaxHeight) {
            productPriceMaxHeight = $(this).height();
        }
    });
    $(".product-price").height(productPriceMaxHeight);

    $(".filter-btn").click(function() {
        $(this).toggleClass("actived");
        $(".categories-list").toggleClass("actived");
        $(".displaying-category").toggleClass("actived");
    });
    $(".categories-list .special-filter").click(function() {
        $(".categories-list button").removeClass("actived");
        $(this).toggleClass("actived");
        $("#all").removeClass("actived");
        $("#products>.row").removeClass("justify-content-between");
        $("main #products .row").addClass("filtered");
        $(".categories-list button").removeClass("actived");
        $(this).addClass("actived");
        $(".displaying-category").html(`${$(this).attr("id")}s are displaying`);
        $(".main-img").parent().parent().addClass("d-none");
        $(`.main-img[data-category='${$(this).attr("id")}']`)
            .parent()
            .parent()
            .removeClass("d-none");
        $(".not-available").addClass("d-none");

        if (
            $("#products .row .product.d-none").length ===
            $("#products .row .product").length
        ) {
            $(".not-available").removeClass("d-none");
        } else {}
    });
    $("#all").click(function() {
        $(".categories-list button").removeClass("actived");
        $(this).addClass("actived");
        $("main #products .row").addClass("filtered");
        $("#products>.row").removeClass("justify-content-between");
        $(".displaying-category").html(`all categories are displaying`);
        $(".main-img").parent().parent().removeClass("d-none");
        $(".not-available").addClass("d-none");

        if (
            $("#products .row .product.d-none").length ===
            $("#products .row .product").length
        ) {
            $(".not-available").removeClass("d-none");
        } else {}
    });
    $("#discount").click(function() {
        $(".categories-list button").removeClass("actived");
        $(this).addClass("actived");
        $(".displaying-category").html(`all categories are displaying`);
        $(".main-img").parent().parent().removeClass("d-none");
        $(`.main-img[data-discount='none']`).parent().parent().addClass("d-none");
        $(".not-available").addClass("d-none");

        if (
            $("#products .row .product.d-none").length ===
            $("#products .row .product").length
        ) {
            $(".not-available").removeClass("d-none");
        } else {}
    });
    $(".product .view-btn").click(function() {
        document.querySelector(".main-viewing").innerHTML = "";
        document
            .querySelector(".main-viewing")
            .appendChild(this.parentElement.querySelector(".main-img").cloneNode());
        document.querySelector(".minor-viewing").innerHTML = "";
        $(this)
            .parent()
            .find(".minor-img")
            .each(function(index, img) {
                document.querySelector(".minor-viewing").appendChild(img.cloneNode());
            });
        $(".all-viewing").addClass("actived");
        $("body").addClass("overflow-hidden");
        $(".all-viewing .fa-times-circle").click(function() {
            document.querySelector(".main-viewing").innerHTML = "";
            document.querySelector(".minor-viewing").innerHTML = "";
            $(".all-viewing").removeClass("actived");
            $("body").removeClass("overflow-hidden");
        });
        $(".minor-viewing img").click(function() {
            let mainImg = $(".main-viewing img").attr("src");
            let clickedMinorImg = $(this).attr("src");
            $(".main-viewing img").attr("src", clickedMinorImg);
            $(this).attr("src", mainImg);
        });
    });
    $(".question-div").click(function() {
        if ($(this).parent().hasClass("actived")) {
            $(".question-div").each(function() {
                $(this).parent().find(".answer-div").slideUp();
                $(this).parent().removeClass("actived");
            });
            $(this).find("svg").removeClass("fa-minus");
            $(this).find("svg").addClass("fa-plus");
        } else {
            $(".question-div").each(function() {
                $(this).parent().find(".answer-div").slideUp();
                $(this).parent().removeClass("actived");
                $(this).find("svg").removeClass("fa-minus");
                $(this).find("svg").addClass("fa-plus");
            });
            $(this).parent().find(".answer-div").slideToggle();
            $(this).parent().addClass("actived");
            $(this).find("svg").removeClass("fa-plus");
            $(this).find("svg").addClass("fa-minus");
        }
    });
    $(".send-mail").click(function() {
        var userEmail = document.querySelector(".news-letter-input").value;
        if (
            userEmail.indexOf("@") > 1 &&
            userEmail.indexOf("@") == userEmail.lastIndexOf("@") &&
            userEmail.indexOf(".") > 0 &&
            userEmail.lastIndexOf(".") < userEmail.length &&
            userEmail.lastIndexOf(".") - userEmail.lastIndexOf("@") > 1
        ) {
            $(".news-letter-alert").html("done!check your email inbox");
            $(".news-letter-alert").addClass("valid");
            $(".news-letter-alert").removeClass("invalid");
        } else {
            $(".news-letter-alert").html(
                "your email address is not valid,enter a valid email address"
            );
            $(".news-letter-alert").addClass("invalid");
            $(".news-letter-alert").removeClass("vaild");
        }
        setTimeout(function() {
            userEmail = "";
            $(".news-letter-alert").html("");
            $(".news-letter-alert").removeClass("valid");
            $(".news-letter-alert").removeClass("invalid");
        }, 5000);
    });

    $(window).scroll(function() {
        if ($(this).height() < $(this).scrollTop()) {
            $(".fa-arrow-alt-circle-up").addClass("actived");
        } else {
            $(".fa-arrow-alt-circle-up").removeClass("actived");
        }
    });
    $("body").on("click", ".fa-arrow-alt-circle-up", function() {
        $(window).scrollTop(0);
    });


    if (localStorage.getItem("productsHtml") === null || localStorage.getItem("productsHtml").length === 0) {
        $(".cart-empty").removeClass("d-none")
        $(".cart-empty").addClass("d-flex")
        let clickArray = [];
        $(".product .product-info button").each(function(index, button) {
            clickArray[index] = 0;
        });
        let cartArray = [];

        $(".product .product-info button").click(function(addToCartEvent) {
            clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()]++
                if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] === 1) {
                    addToCart(addToCartEvent)
                } else
            if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] > 1 && clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] < 6) {

                addToQuantity(addToCartEvent)
            } else if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] > 5) {
                clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] = 5
            }


            function addToCart(addToCartEvent) {
                var cartProductObject = {
                    source: $(addToCartEvent.currentTarget).parent().parent().parent().find('.main-img').attr('src'),
                    name: $(addToCartEvent.currentTarget).parent().parent().find('.product-name').text(),
                    quantity: clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()],
                    price: parseInt($(addToCartEvent.currentTarget).parent().parent().find('.product-final-price').text())
                }
                $(".cart-empty").removeClass("d-flex")
                $(".cart-empty").addClass("d-none")
                $(".cart-main").html(function(index, val) {
                    return val + `<div class="cart-product d-flex align-items-center p-3">
                       <img class="cart-product-img" src="${cartProductObject.source}">
                       <div class="cart-product-name">${cartProductObject.name}</div>
                       <div class="cart-product-price">${cartProductObject.price}$</div>
                       <div class="product-amount-div d-flex align-items-center">
                       <button type="button" class="subtract-btn">
                       <i class=" fa fa-minus"></i>
                       </button>
                       <input class="amount-input" type="text" value="1" disabled>
                       <button type="button" class="add-btn">
                       <i class=" fa fa-plus"></i>
                       </button>
                       </div>
                       <i class="fas fa-times"></i>
                       </div>`
                })
                cartArray.push(cartProductObject)
                $(addToCartEvent.currentTarget).html(`added to cart <i class="fas fa-cart-arrow-down"></i>`)
                $(addToCartEvent.currentTarget).addClass("actived")
                setTimeout(function() {
                    $(addToCartEvent.currentTarget).html(`add to cart <i class="fas fa-cart-plus"></i>`)
                    $(addToCartEvent.currentTarget).removeClass("actived")
                }, 2000)
                calculateTotalQuantity()
                calculateTotalPrice()
                activeOrder()
                saveCart()
            }

            function addToQuantity(addToCartEvent) {
                $(addToCartEvent.currentTarget).html(`added to cart <i class="fas fa-cart-arrow-down"></i>`)
                $(addToCartEvent.currentTarget).addClass("actived")
                setTimeout(function() {
                    $(addToCartEvent.currentTarget).html(`add to cart <i class="fas fa-cart-plus"></i>`)
                    $(addToCartEvent.currentTarget).removeClass("actived")
                }, 2000)
                for (let i in cartArray) {
                    if (cartArray[i].name === $(addToCartEvent.currentTarget).parent().parent().find(".product-name").text()) {
                        cartArray[i].quantity++;
                        if (cartArray[i].quantity > 5) {
                            alert("you cant order more than 5 amounts of a product");
                            cartArray[i].quantity = 5
                        }
                        document.querySelectorAll(".cart-product .amount-input")[i].setAttribute("value", cartArray[i].quantity)
                        document.querySelectorAll(".cart-product .cart-product-price")[i].innerHTML = `${cartArray[i].price*cartArray[i].quantity}$`
                    }
                }
                calculateTotalQuantity()
                calculateTotalPrice()
                activeOrder()
                saveCart()
            }

            function calculateTotalQuantity() {
                var totalAmount = 0;
                $(".cart-product .amount-input").each(function(index, amount) {
                    totalAmount += parseInt(amount.value);
                });
                $(".cart-status-amount").html(totalAmount);
            }

            function calculateTotalPrice() {
                var totalPrice = 0;
                $(".cart-product .cart-product-price").each(function(index, price) {
                    totalPrice += parseInt(price.innerHTML);
                });
                $(".total-price").html(totalPrice + "$");
            }

            function activeOrder() {
                if ($(".cart-status-amount").html() === "0") {
                    $(".cart-div .cart-footer button").attr("disabled", "disabled")
                } else if ($(".cart-status-amount").html() !== "0") {
                    $(".cart-div .cart-footer button").removeAttr("disabled")
                    $(".cart-div .cart-footer button").click(function() {
                        localStorage.setItem("finalPrice", parseInt($(".total-price").html()))
                        saveCart()
                        window.location = "order.html"
                    })
                }
            }

            function saveCart() {
                localStorage.setItem("productsHtml", $(".cart-main").html())
                localStorage.setItem("cartArray", JSON.stringify(cartArray))
                localStorage.setItem("addToCartClickes", JSON.stringify(clickArray))
            }

            $(".cart-product .add-btn").unbind().click(function(addBtnEvent) {
                let objIndex = $(addBtnEvent.currentTarget).parent().parent().index()
                cartArray[objIndex].quantity++;
                if (cartArray[objIndex].quantity > 5) {
                    alert("you cant order more than 5 amounts of a product");
                    cartArray[objIndex].quantity = 5;
                }
                document.querySelectorAll(".cart-product .amount-input")[objIndex].setAttribute("value", cartArray[objIndex].quantity)
                document.querySelectorAll(".cart-product .cart-product-price")[objIndex].innerHTML = `${cartArray[objIndex].price*cartArray[objIndex].quantity}$`
                calculateTotalQuantity()
                calculateTotalPrice()
                activeOrder()
                saveCart()
            })
            $(".cart-product .subtract-btn").unbind().click(function(subtractBtnEvent) {
                let objIndex = $(subtractBtnEvent.currentTarget).parent().parent().index()
                cartArray[objIndex].quantity--;
                if (cartArray[objIndex].quantity < 1) {
                    cartArray[objIndex].quantity = 1;
                }
                document.querySelectorAll(".cart-product .amount-input")[objIndex].setAttribute("value", cartArray[objIndex].quantity)
                document.querySelectorAll(".cart-product .cart-product-price")[objIndex].innerHTML = `${cartArray[objIndex].price*cartArray[objIndex].quantity}$`
                calculateTotalQuantity()
                calculateTotalPrice()
                activeOrder()
                saveCart()
            })
            $("body").on("click", ".cart-product .fa-times", function(removeBtnEvent) {
                for (let i in document.querySelectorAll(".product-name")) {
                    if (document.querySelectorAll(".product-name")[i].innerHTML === $(removeBtnEvent.currentTarget).parent().find(".cart-product-name").text()) {
                        clickArray[i] = 0;
                    }
                }
                for (let i in cartArray) {
                    if (cartArray[i].name === $(removeBtnEvent.currentTarget).parent().find(".cart-product-name").text()) {
                        cartArray.splice(i, 1);
                    }
                }
                $(removeBtnEvent.currentTarget).parent().remove()
                calculateTotalQuantity()
                calculateTotalPrice()
                activeOrder()
                saveCart()
                if (parseInt($(".cart-status-amount").html()) === 0) {
                    $(".cart-empty").removeClass("d-none")
                    $(".cart-empty").addClass("d-flex")
                }
            })
            $(".cart-div .fa-trash-alt").click(function() {
                for (let i in cartArray) {
                    cartArray.splice(i, 1);
                }
                $(".cart-empty").removeClass("d-none")
                $(".cart-empty").addClass("d-flex")
                $(".cart-status-amount").html(0)
                $(".cart-main").html("")
                $(".total-price").html(0 + "$")
                $(".product .product-info button").each(function(index, button) {
                    clickArray[index] = 0;
                });
                activeOrder()
                saveCart()
            })


        })
    } else if (localStorage.getItem("productsHtml") !== null || localStorage.getItem("productsHtml").length !== 0) {
        $(".cart-empty").removeClass("d-flex")
        $(".cart-empty").addClass("d-none")
        $(".cart-main").html(localStorage.getItem("productsHtml"))
        cartArray = JSON.parse(localStorage.getItem("cartArray"))
        clickArray = JSON.parse(localStorage.getItem("addToCartClickes"))
        calculateTotalQuantity()
        calculateTotalPrice()
        activeOrder()
        saveCart()
        $(".product .product-info button").click(function(addToCartEvent) {
            clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()]++
                if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] === 1) {
                    addToCart(addToCartEvent)
                } else
            if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] > 1 && clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] < 6) {

                addToQuantity(addToCartEvent)
            } else if (clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] > 5) {
                clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()] = 5
            }
        })

        function addToCart(addToCartEvent) {
            var cartProductObject = {
                source: $(addToCartEvent.currentTarget).parent().parent().parent().find('.main-img').attr('src'),
                name: $(addToCartEvent.currentTarget).parent().parent().find('.product-name').text(),
                quantity: clickArray[$(addToCartEvent.currentTarget).parent().parent().parent().index()],
                price: parseInt($(addToCartEvent.currentTarget).parent().parent().find('.product-final-price').text())
            }
            $(".cart-empty").removeClass("d-flex")
            $(".cart-empty").addClass("d-none")
            $(".cart-main").html(function(index, val) {
                return val + `<div class="cart-product d-flex align-items-center p-3">
                   <img class="cart-product-img" src="${cartProductObject.source}">
                   <div class="cart-product-name">${cartProductObject.name}</div>
                   <div class="cart-product-price">${cartProductObject.price}$</div>
                   <div class="product-amount-div d-flex align-items-center">
                   <button type="button" class="subtract-btn">
                   <i class=" fa fa-minus"></i>
                   </button>
                   <input class="amount-input" type="text" value="1" disabled>
                   <button type="button" class="add-btn">
                   <i class=" fa fa-plus"></i>
                   </button>
                   </div>
                   <i class="fas fa-times"></i>
                   </div>`
            })
            cartArray.push(cartProductObject)
            $(addToCartEvent.currentTarget).html(`added to cart <i class="fas fa-cart-arrow-down"></i>`)
            $(addToCartEvent.currentTarget).addClass("actived")
            setTimeout(function() {
                $(addToCartEvent.currentTarget).html(`add to cart <i class="fas fa-cart-plus"></i>`)
                $(addToCartEvent.currentTarget).removeClass("actived")
            }, 2000)
            calculateTotalQuantity()
            calculateTotalPrice()
            activeOrder()
            saveCart()
        }

        function addToQuantity(addToCartEvent) {
            $(addToCartEvent.currentTarget).html(`added to cart <i class="fas fa-cart-arrow-down"></i>`)
            $(addToCartEvent.currentTarget).addClass("actived")
            setTimeout(function() {
                $(addToCartEvent.currentTarget).html(`add to cart <i class="fas fa-cart-plus"></i>`)
                $(addToCartEvent.currentTarget).removeClass("actived")
            }, 2000)
            for (let i in cartArray) {
                if (cartArray[i].name === $(addToCartEvent.currentTarget).parent().parent().find(".product-name").text()) {
                    cartArray[i].quantity++;
                    if (cartArray[i].quantity > 5) {
                        alert("you cant order more than 5 amounts of a product");
                        cartArray[i].quantity = 5
                    }
                    document.querySelectorAll(".cart-product .amount-input")[i].setAttribute("value", cartArray[i].quantity)
                    document.querySelectorAll(".cart-product .cart-product-price")[i].innerHTML = `${cartArray[i].price*cartArray[i].quantity}$`
                }
            }
            calculateTotalQuantity()
            calculateTotalPrice()
            activeOrder()
            saveCart()

        }

        function calculateTotalQuantity() {
            var totalAmount = 0;
            $(".cart-product .amount-input").each(function(index, amount) {
                totalAmount += parseInt(amount.value);
            });
            $(".cart-status-amount").html(totalAmount);
        }

        function calculateTotalPrice() {
            var totalPrice = 0;
            $(".cart-product .cart-product-price").each(function(index, price) {
                totalPrice += parseInt(price.innerHTML);
            });
            $(".total-price").html(totalPrice + "$");
        }

        function activeOrder() {
            if ($(".cart-status-amount").html() === "0") {
                $(".cart-div .cart-footer button").attr("disabled", "disabled")
            } else if ($(".cart-status-amount").html() !== "0") {
                $(".cart-div .cart-footer button").removeAttr("disabled")
                $(".cart-div .cart-footer button").click(function() {
                    localStorage.setItem("finalPrice", parseInt($(".total-price").html()))
                    saveCart()
                    window.location = "order.html"
                })
            }
        }

        function saveCart() {
            localStorage.setItem("productsHtml", $(".cart-main").html())
            localStorage.setItem("cartArray", JSON.stringify(cartArray))
            localStorage.setItem("addToCartClickes", JSON.stringify(clickArray))
        }

        $("body").on("click", ".cart-product .add-btn", function(addBtnEvent) {
            let objIndex = $(addBtnEvent.currentTarget).parent().parent().index()
            cartArray[objIndex].quantity++;
            if (cartArray[objIndex].quantity > 5) {
                alert("you cant order more than 5 amounts of a product");
                cartArray[objIndex].quantity = 5;
            }
            document.querySelectorAll(".cart-product .amount-input")[objIndex].setAttribute("value", cartArray[objIndex].quantity)
            document.querySelectorAll(".cart-product .cart-product-price")[objIndex].innerHTML = `${cartArray[objIndex].price*cartArray[objIndex].quantity}$`
            calculateTotalQuantity()
            calculateTotalPrice()
            activeOrder()
            saveCart()
        })
        $("body").on("click", ".cart-product .subtract-btn", function(subtractBtnEvent) {
            let objIndex = $(subtractBtnEvent.currentTarget).parent().parent().index()
            cartArray[objIndex].quantity--;
            if (cartArray[objIndex].quantity < 1) {
                cartArray[objIndex].quantity = 1;
            }
            document.querySelectorAll(".cart-product .amount-input")[objIndex].setAttribute("value", cartArray[objIndex].quantity)
            document.querySelectorAll(".cart-product .cart-product-price")[objIndex].innerHTML = `${cartArray[objIndex].price*cartArray[objIndex].quantity}$`
            calculateTotalQuantity()
            calculateTotalPrice()
            activeOrder()
            saveCart()
        })
        $("body").on("click", ".cart-product .fa-times", function(removeBtnEvent) {
            for (let i in document.querySelectorAll(".product-name")) {
                if (document.querySelectorAll(".product-name")[i].innerHTML === $(removeBtnEvent.currentTarget).parent().find(".cart-product-name").text()) {
                    clickArray[i] = 0;
                }
            }
            for (let i in cartArray) {
                if (cartArray[i].name === $(removeBtnEvent.currentTarget).parent().find(".cart-product-name").text()) {
                    cartArray.splice(i, 1);
                }
            }
            $(removeBtnEvent.currentTarget).parent().remove()
            calculateTotalQuantity()
            calculateTotalPrice()
            activeOrder()
            saveCart()
            if (parseInt($(".cart-status-amount").html()) === 0) {
                $(".cart-empty").removeClass("d-none")
                $(".cart-empty").addClass("d-flex")
            }
        })
        $(".cart-div .fa-trash-alt").click(function() {
            cartArray = []
            $(".cart-empty").removeClass("d-none")
            $(".cart-empty").addClass("d-flex")
            $(".cart-status-amount").html(0)
            $(".cart-main").html("")
            $(".total-price").html(0 + "$")
            $(".product .product-info button").each(function(index, button) {
                clickArray[index] = 0;
            });
            activeOrder()
            saveCart()
        })

    }
    $(document).keypress(
        function(event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });


})