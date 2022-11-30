
$(function () {
    $(document).scroll(function () {
        let y = Math.floor($(window).scrollTop())
        if ((y) > 7327) {
            $("#backgroungTransition").addClass("position")
            $("#backgroungTransition").addClass("darkImage")
            $("#backgroungTransition").removeClass("lightImage")
            $("#heading").addClass("showHeading")
            $("#heading").removeClass("hideHeading")

        }

        if ((y) > 8400) {
            $("#backgroungTransition").addClass("lightImage")
            $("#backgroungTransition").removeClass("darkImage")
        }
        if ((y) > 8700) {
            $("#backgroungTransition").removeClass("position")
            $("#backgroungTransition").addClass("lightImage")
            $("#backgroungTransition").removeClass("darkImage")
            $("#heading").addClass("hideHeading")
            $("#heading").removeClass("showHeading")
        }
    })
    $("#dropdown").click(function () {
        $(".dropdown-content").toggleClass("show-dropdown-content")
    })

    $("#menuIcon").click(function () {
        $(".left").toggleClass("showHeader")
    })
    $("#secondMenuIcon").click(function () {
        $(".secondRightNav").toggleClass("showSecondHeader")
    })
})

