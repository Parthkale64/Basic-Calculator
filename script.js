function reval(inputString) {
    const operation = inputString.replace(/\u00f7/g, '/').replace(/\u00d7/g, '*');
    console.log("Modified string:", operation);
    try {
        const result = eval(operation);
        if (typeof result === "number" && !isNaN(result)) {
            return result;
        } else {
            return "error";
        }
    } catch (e) {
        return "error";
    }
}

function scientific() {
    alert("scientific mode is not yet added");
}