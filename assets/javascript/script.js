var sema = new Array();
sema[0] = 'um Domingo';
sema[1] = 'uma Segunda-feira';
sema[2] = 'uma Terça-feira';
sema[3] = 'uma Quarta-feira';
sema[4] = 'uma Quinta-feira';
sema[5] = 'uma Sexta-feira';
sema[6] = 'um Sábado';

var mes_ext = new Array();
mes_ext[0] = 'Janeiro';
mes_ext[1] = 'Fevereiro';
mes_ext[2] = 'Março';
mes_ext[3] = 'Abril';
mes_ext[4] = 'Maio';
mes_ext[5] = 'Junho';
mes_ext[6] = 'Julho';
mes_ext[7] = 'agosto';
mes_ext[8] = 'Setembro';
mes_ext[9] = 'Outubro';
mes_ext[10] = 'Novembro';
mes_ext[11] = 'Dezembro';

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
        }else if((m_ani == m_hoje) && (d_ani > d_hoje)){
            idade --;
        }
        document.getElementById('idade').value = idade;

        hoje.getDate(d_ani);
        hoje.setMonth(m_ani-1);
        hoje.setFullYear(a_ani);

        document.getElementById('sema').value = dia_semana[hoje.getDay()];
        document.getElementById('mext').value = nome_mes[m_ani-1];

        If (((d_ani >= 20 ) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2)))
        document.images ['signo'].src = './';
        else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20)  && (m_ani == 3)))
            document.images['signo'].src = './';
    }

}