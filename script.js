const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

let exp = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.innerText;

        // Clear
        if (val === "AC") {
            exp = "";
            input.value = "";
            return;
        }

        // Backspace
        if (val === "Back") {
            exp = exp.slice(0, -1);
            input.value = exp;
            return;
        }

        // Calculate
        if (val === "=") {
            try {
                if (exp === "") return;
                exp = eval(exp).toString();
                input.value = exp;
            } catch {
                input.value = "Error";
                exp = "";
            }
            return;
        }

        // Prevent invalid operator usage
        if (isOperator(val)) {
            if (exp === "" || isOperator(exp.slice(-1))) return;
        }

        // Append value
        exp += val;
        input.value = exp;
    });
});

function isOperator(ch) {
    return "+-*/%".includes(ch);
}
