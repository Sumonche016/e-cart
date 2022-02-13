// increment function
function updateCasenumber(isIncrease) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    if (isIncrease) {
        caseInput.value = parseInt(caseNumber) + 1;

    } else if (caseNumber > 0) {

        caseInput.value = parseInt(caseNumber) - 1;

    }
    let caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseInput.value * 1219;

}




document.getElementById('case-plus').addEventListener('click', function() {
    updateCasenumber(true);
})


document.getElementById('case-minus').addEventListener('click', function() {
    updateCasenumber(false)

})