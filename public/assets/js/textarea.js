// Textarea Formatter
writetext = document.getElementById('write-textarea');
codeoutput=document.getElementById('code-output');

    function display(source,destination)
    {
    destination.textContent = source;
    }

writetext .onkeyup=function(){
     display(this.value,codeoutput); 
};

// Coustom Textarea Formatter
document.getElementById('submitBtn').addEventListener('click',function(e){
    e.preventDefault()
    var myTextarea=document.getElementById("myTextarea").value;
    document.getElementById("output").innerHTML = myTextarea;
});
