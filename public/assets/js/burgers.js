// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
    // button to eat the burger
    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        // grabbing data from the burger-block.handlebars
        const id = $(this).data("id");
        const devouredBurger = !($(this).data("yumburger"));

        // setting the "devoured" status
        const burgerEaten = {
            devoured: devouredBurger
        };

        // Send the PUT request to update burger by id
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // button for adding the burger to the "order is ready" column
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // getting the user input and setting into the key "burger_name"
        const addBurger = {
            burger_name: $("#burg").val().trim()
        };

        // Send the POST request to create burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // deletes or "throws away" the burger by id
    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");
        // Send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});