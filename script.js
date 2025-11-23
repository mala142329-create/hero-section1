document.getElementById("filterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const madeBy = document.getElementById("madeBy").value;
    const type = document.getElementById("type").value;
    const price = document.getElementById("price").value;

    alert(
        `Filters Applied:\nMaterial: ${madeBy}\nType: ${type}\nPrice: ${price}`
    );
});
