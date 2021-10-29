

    //Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
    function getSizePrice(e) {
        this.form.elements['sz_tot'].value = parseFloat(this.value);
        updatePizzaTotal(this.form);
    }
   
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function updatePizzaTotal(form) {
    var sz_tot = parseFloat(form.elements['sz_tot'].value);
   
    
    form.elements['total'].value = formatDecimal(sz_tot);
 
}
(function() {
    var form = document.getElementById('formTask');
    var sz = form.elements['size'];
    for (var i=0, len=sz.length; i<len; i++) {
        sz[i].onclick = getSizePrice;
    }

    // set sz_tot to value of selected
    form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
    updatePizzaTotal(form);
})();


