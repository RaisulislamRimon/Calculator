function insertNumber(number) {
    var existingNumber = $("#result").val();
    $("#result").val(existingNumber + number);
}

function clearResult() {
    $("#result").val('');
}

function calculate() {
    var calculationResult = eval($("#result").val());
	
    $("#result").val("Ans : " + calculationResult);
}

function deleteNumber() {
    var presentValue = $("#result").val();
    if (presentValue != '') {
        $("#result").val(presentValue.slice(0, -1));
    }
}