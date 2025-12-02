document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {

        let bookName = form.bookName.value.trim();
        let author = form.author.value.trim();
        let price = form.price.value.trim();
        let genre = form.genre.value.trim();
        let format = form.format.value;

        if (bookName === "") {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Book Name Required",
                text: "Please enter the book name.",
                toast: true,
                position: "bottom-end",
                timer: 1500,
                showConfirmButton: false
            });
            form.bookName.focus();
            return;
        }

        if (author === "") {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Author Required",
                text: "Please enter the author's name.",
                toast: true,
                position: "bottom-end",
                timer: 1500,
                showConfirmButton: false
            });
            form.author.focus();
            return;
        }

        if (price === "" || isNaN(price) || Number(price) <= 0) {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Invalid Price",
                text: "Please enter a valid price (greater than 0).",
            });
            form.price.focus();
            return;
        }

        if (genre === "") {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Genre Required",
                text: "Please select a genre.",
            });
            form.genre.focus();
            return;
        }

        let publisherDate = form.publisherDate.value;

        if (publisherDate === "") {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Date Required",
                text: "Please select a publisher date.",
            });
            form.publisherDate.focus();
            return;
        }

        let selectedFeatures = document.querySelectorAll("input[name='features']:checked");

        if (selectedFeatures.length === 0) {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Select a Feature",
                text: "Please choose at least one feature.",
            });
            return;
        }

        if (!format) {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Format Required",
                text: "Please select a book format.",
            });
            return;
        }
    });
});
