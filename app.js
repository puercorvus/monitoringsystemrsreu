document.getElementById("requestForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const fileInput = form.querySelector('input[type="file"]');
    if (fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
    }

    try {
       const response = await fetch("https://monitoringsystemrsreu.vercel.app/api/request", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        document.getElementById("response").innerText = result.status || "Заявка отправлена.";
    } catch (err) {
        document.getElementById("response").style.color = "red";
        document.getElementById("response").innerText = "Ошибка при отправке: " + err;
    }
});
