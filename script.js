const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const feedbackData = {
        name: name,
        rating: Number(rating),
        comment: comment
    };

    try {

        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(feedbackData)
        });



        const data = await response.json();

        document.getElementById("message").textContent = data.message;

        if (response.ok) {
            feedbackForm.reset();
        }

    } catch (error) {

        console.log("Error:", error);

        document.getElementById("message").textContent =
            "Something went wrong";

    }

});