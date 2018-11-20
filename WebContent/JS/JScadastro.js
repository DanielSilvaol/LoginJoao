
let cf = undefined;
let nf = undefined;
let pf = undefined;
const iv = $('#form fieldset');
var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var email = document.getElementById('email');
var c_email = document.getElementById('c_email');
var senha = document.getElementById('senha');
var c_senha = document.getElementById('c_senha');


$('.proximo').click(function() {
	if(nome.value  === "" || sobrenome.value == "" || senha.value  == "" || email.value == "" || c_senha.value == "" || c_email.value == "") {
		alert("Preencha todos os campos!");
    } else {
    	if(senha.value  == c_senha.value && email.value == c_email.value){
		cf = $(this).parent();
		nf = $(this).parent().next();
		
		$('#progresso li').eq($('fieldset').index(cf)).addClass('ativo');

		cf.addClass("sumiu");
		return nf.addClass("apareceu");
    	}
    	if(senha.value  != c_senha.value){
    		alert("Senha diferente!");
    	}
    	if(email.value != c_email.value){
    		alert("Email diferente!");
    	}
    }
	
});
		
$('.anterior').click(function() {
	cf = $(this).parent();
	pf = $(this).parent().prev();
	
	$('#progresso li').eq($('fieldset').index(cf)).removeClass('ativo');
	
	cf.removeClass("apareceu");
	return pf.removeClass("sumiu");
});
