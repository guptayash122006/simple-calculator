const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", (s) => {
        const value = s.target.innerText;

        if (value === "AC") {
            input.value = "Hello";
        }
        else if (value === "back") {
            input.value = input.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }
        else {
            input.value += value;
        }
    });
});
