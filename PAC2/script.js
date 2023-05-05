var numero1, numero2, resultat, inici;
numero1=prompt("Escriu un número entre 1 i 50");
numero2=prompt("Escriu un segon número entre 1 i 50");
resultat=(parseInt(numero1)+parseInt(numero2));
if (parseInt(numero1)>1 && parseInt(numero1)<51 && parseInt(numero2)>1 && parseInt(numero2)<51)
    {
        function esPrimer(num)
        {
            for (var x=2; x <num; x++)
            {
                if (num % x == 0)
                {
                    document.write ("el primer número no és primer");
                    return false;
                }
            }
            document.write ("el primer número és primer");
            return true;
        }
        function esParell(num)
        {
            if (num % 2 === 0)
            {
                document.write ("el primer número és parell");
                return true;
            }
            

            document.write ("el primer número és senar");
            return false;
        }

        var resPrimer1 = esPrimer(numero1);

        if (resPrimer1)
            {resPrimer1=' és primer';}
        else
            {resPrimer1=' no és primer';}

        var resPrimer2 = esPrimer(numero2);

        if (resPrimer2)
            {resPrimer2=' és primer';}
        else
            {resPrimer2=' no és primer';}

        //----------------------------------------------parell/senar
        var resParell1 = esParell(numero1);
        if (resParell1)
            {
                resParell1=' és parell';
                inici=parseInt(numero1)+2;

            }
        else
            {
                resParell1=' és senar';
                inici=parseInt(numero1)+1;
            }

        var resParell2 = esParell(numero2);

        if (resParell2)
            {resParell2=' és parell';}
        else
            {resParell2=' és senar';}

        //------------------------------------------------
        const ArrayResultat = [];
        if (parseInt(numero1)<parseInt(numero2))
            {
                for(var x=parseInt(inici);x<parseInt(numero2);x+=2)
                {
                    ArrayResultat.push(x);
                }
            }
        else if (parseInt(numero1)>parseInt(numero2))
        {
            {
                for(var x=parseInt(inici)-3;x>parseInt(numero2);x-=2)
                {
                    ArrayResultat.push(x);
                }
            }
        }
        else
        {
            ArrayResultat.push('rang: '+numero1);
        }


        alert('La suma és ' + resultat +'\n el '+numero1+ resPrimer1+' i el '+numero2+resPrimer2+'\n el '+numero1+ resParell1+' i el '+numero2+resParell2+'\n'+ArrayResultat.toString());
    }
else
    {
        alert("Els valors introduïts han de ser números enters positius entre l'1 i el 50!");
    }
