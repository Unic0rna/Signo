var dia_semana = new Array();
dia_semana[0] = 'um Domingo';
dia_semana[1] = 'uma Segunda-feira';
dia_semana[2] = 'uma Terça-feira';
dia_semana[3] = 'uma Quarta-feira';
dia_semana[4] = 'uma Quinta-feira';
dia_semana[5] = 'uma Sexta-feira';
dia_semana[6] = 'um Sábado';

var nome_mes = new Array();
nome_mes[0] = 'Janeiro';
nome_mes[1] = 'Fevereiro';
nome_mes[2] = 'Março';
nome_mes[3] = 'Abril';
nome_mes[4] = 'Maio';
nome_mes[5] = 'Junho';
nome_mes[6] = 'Julho';
nome_mes[7] = 'agosto';
nome_mes[8] = 'Setembro';
nome_mes[9] = 'Outubro';
nome_mes[10] = 'Novembro';
nome_mes[11] = 'Dezembro';

function Exibir() {
    var d_ani = document.getElementById('dia').value;
    var m_ani = document.getElementById('mes').value;
    var a_ani = document.getElementById('ano').value;

    if (isNaN(d_ani)) {
        window.alert('Dígito inválido, digite números');

    }

    else if (d_ani == '') {
        window.alert('O dia não pode ficar vazio')
    }

    else {
        d_ani = parseInt(d_ani)

        if ((d_ani < 1) || (d_ani > 31)) {

            window.alert('o dia deve ser entre 1 e 31');
        }

    }

    if (isNaN(m_ani)) {
        window.alert('Dígito inválido, digite números');

    }

    else if (m_ani == '') {
        window.alert('O mês não pode ficar vazio')
    }

    else {
        d_ani = parseInt(m_ani)

        if ((m_ani < 1) || (m_ani > 12)) {

            window.alert('o mês deve ser entre 1 e 12');
        }
    }

    if (isNaN(a_ani)) {
        window.alert('Dígito inválido, digite números');

    }

    else if (a_ani == '') {
        window.alert('O dia não pode ficar vazio')
    }
    else if (a_ani.length != 4) {
        alert('O ano deve conter 4 digitos')
    }

    else {
        d_ani = parseInt(d_ani)
        m_ani = parseInt(m_ani)
        a_ani = parseInt(a_ani)

        var hoje = new Date();
        var d_hoje = hoje.getDate();
        var m_hoje = hoje.getMonth() + 1;
        var a_hoje = hoje.getFullYear();

        var idade = a_hoje - a_ani;
        if (m_ani > m_hoje) {
            idade--;
        } else if ((m_ani == m_hoje) && (d_ani > d_hoje)) {
            idade--;
        }
        document.getElementById('idade').value = idade;

        hoje.getDate(d_ani);
        hoje.setMonth(m_ani - 1);
        hoje.setFullYear(a_ani);

        document.getElementById('sema').value = dia_semana[hoje.getDay()];
        document.getElementById('mext').value = nome_mes[m_ani - 1];
        document.getElementById('Signo');

        if (((d_ani >= 20) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2))) 
        {
            document.getElementById('Signo').src = "./assets/src/aqua.png";
            document.getElementById('Signo2').src = "./assets/src/aqua.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
            
        }

        else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3))) 
        {
            document.getElementById('Signo').src = "./assets/src/peixe.png";
            document.getElementById('Signo2').src = "./assets/src/peixe.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 19) && (m_ani == 4)))
        //"aries"
        {
            document.getElementById('Signo').src = "./assets/src/aries.png";
            document.getElementById('Signo2').src = "./assets/src/aries.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 20) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5)))
        //"touro"
        {
            document.getElementById('Signo').src = "./assets/src/touro.png";
            document.getElementById('Signo2').src = "./assets/src/touro.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6)))
        //"gemeos"
        {
            document.getElementById('Signo').src = "./assets/src/gemeos.png";
            document.getElementById('Signo2').src = "./assets/src/gemeos.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo').style.opacity = 1;
        }

        else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7)))
        //"cancer"
        {
            document.getElementById('Signo').src = "./assets/src/cancer.png";
            document.getElementById('Signo2').src = "./assets/src/cancer.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8)))
        //"leao"
        {
            document.getElementById('Signo').src = "./assets/src/leao.png";
            document.getElementById('Signo2').src = "./assets/src/leao.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9)))
        //"virgem"
        {
            document.getElementById('Signo').src = "./assets/src/virgem.png";
            document.getElementById('Signo2').src = "./assets/src/virgem.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }
        else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10)))
        //"libra"
        {
            document.getElementById('Signo').src = "./assets/src/libra.png";
            document.getElementById('Signo2').src = "./assets/src/libra.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11)))
        //"escopiao"
        {
            document.getElementById('Signo').src = "./assets/src/escor.png";
            document.getElementById('Signo2').src = "./assets/src/escor.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12)))
        //sargitario
        {
            document.getElementById('Signo').src = "./assets/src/sargi.png";
            document.getElementById('Signo2').src = "./assets/src/sargi.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }

        else {
            //capricornio
            document.getElementById('Signo').src = "./assets/src/capri.png";
            document.getElementById('Signo2').src = "./assets/src/sargi.png";
            document.getElementById('Signo').style.opacity = 1;
            document.getElementById('Signo2').style.opacity = 1;
        }
    }
}

function Limpar()
{
    document.getElementById('sema').value = '';
    document.getElementById('mext').value = '';
    document.getElementById('Signo').src = '';
    document.getElementById('dia').value = '';
    document.getElementById('mes').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('idade').value = '';
}