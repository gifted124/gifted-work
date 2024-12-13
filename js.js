$(document).ready(function () {
    $("#submit-btn").click(function () {
        let hasError = false;

        $(".error").hide();

        if ($("#email").val().trim() === "") {
            $("#email-error").text("Please put in your email").show();
            hasError = true;
        }

        if ($("#last-loan-date").val().trim() === "") {
            $("#last-loan-date-error").text("Put in your Last Loan Date").show();
            hasError = true;
        }

        if ($("#last-loan-amount").val().trim() === "") {
            $("#last-loan-amount-error").text("Put in Last Loan Amount").show();
            hasError = true;
        }

        if ($("#current-account-balance").val().trim() === "") {
            $("#current-account-balance-error").text("Put in Current Account Balance").show();
            hasError = true;
        }

        if ($("#requested-loan-amount").val().trim() === "") {
            $("#requested-loan-amount-error").text("Put in your Requested Loan Amount").show();
            hasError = true;
        }

        const currentBalance = parseFloat($("#current-account-balance").val());
        const requestedLoan = parseFloat($("#requested-loan-amount").val());
        if (!isNaN(currentBalance) && !isNaN(requestedLoan) && requestedLoan > currentBalance) {
            $("#global-error").text("Sorry, you cannot apply for a loan exceeding your account balance").show();
            hasError = true;
        }

        if (!hasError) {
            alert("Form submitted successfully!");
        }
    });
});
