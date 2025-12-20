const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

let expression = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        // Clear all
        if (value === "AC") {
            expression = "";
            input.value = "";
        }

        // Backspace
        else if (value === "Back") {
            expression = expression.slice(0, -1);
            input.value = expression;
        }

        // Calculate result
        else if (value === "=") {
            try {
                if (expression === "") return;
                const result = Function("return " + expression)();
                expression = result.toString();
                input.value = expression;
            } catch (error) {
                input.value = "Error";
                expression = "";
            }
        }

        // Prevent multiple operators
        else if (isOperator(value)) {
            if (expression === "" || isOperator(expression.slice(-1))) return;
            expression += value;
            input.value = expression;
        }

        // Numbers & decimal
        else {
            expression += value;
            input.value = expression;
        }
    });
});

// Helper function
function isOperator(char) {
    return ["+", "-", "*", "/", "%"].includes(char);
}
