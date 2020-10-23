// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatBurger").on("click", function(event) {

        console.log("hello");

        event.preventDefault();
        const id = $(this).data("id");
        const devouredBurger = !($(this).data("yumburger"));

        const burgerEaten = {
            devoured: devouredBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function() {
                console.log("burger is now", devouredBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const addBurger = {
            burger_name: $("#burg").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(
            function() {
                console.log("added burger to the menu");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        // console.log("hello");
        const id = $(this).data("id");
        // const devouredBurger = !($(this).data("yumburger"));
        // console.log("delete id", id);
        // console.log(devouredBurger)

        // const burgerEaten = {
        //     devoured: devouredBurger
        // };
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            // data: burgerEaten
        }).then(
            function() {
                console.log("thrown burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});