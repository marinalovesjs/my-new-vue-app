function greet() {
    const name = document.getElementById("username").value;
    const message = name ? `Привет, ${name}! Рада тебя видеть 👋` : "Пожалуйста, введите имя!";
    document.getElementById("output").textContent = message;
}
