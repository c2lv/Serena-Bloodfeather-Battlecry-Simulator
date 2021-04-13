var enemyAttack, enemyHealth, serenaAttack = 1, serenaHealth = 1;

/*
** 범위 초과 시 초기화 함수
** 인자가 0이면 적 하수인의 공격력, 1이면 생명력 최솟값으로 초기화
*/
function outOfRange(i)
{
    if (i == 0)
    {
        enemyAttack = 0;
        document.getElementById('enemyAttack').value = 0;
    }
    else // (i == 1)
    {
        enemyHealth = 1;
        document.getElementById('enemyHealth').value = 1;
    }
}

/*
** 선택한 적 하수인의 공격력과 생명력을 입력하면
** 전투의 함성이 발동된 상태인 붉은깃털 세레나의 능력치를 보여주는 함수
*/
function Battlecry()
{
    enemyAttack = document.getElementById('enemyAttack').value;
    enemyHealth = document.getElementById('enemyHealth').value;
    
    if (196 < enemyAttack)
    {
        alert("적 하수인의 공격력은 최대 196입니다.")
        outOfRange(0);
    }
    if (enemyAttack < 0)
    {
        alert("적 하수인의 공격력은 최소 0입니다.")
        outOfRange(0);
    }
    else if (196 < enemyHealth)
    {
        alert("적 하수인의 생명력은 최대 196입니다.")
        outOfRange(1);
    }
    else if (enemyHealth < 1)
    {
        alert("적 하수인의 생명력은 최소 1입니다.")
        outOfRange(1);
    }

    if (enemyAttack % 2 == 1) // 능력치가 홀수이면
        serenaAttack = (parseInt(enemyAttack / 2) + 1) + 1; // 그 능력치의 절반을 올림한 값을 가져온다.
    else // (enemyAttack % 2 == 0) // 능력치가 짝수이면
        serenaAttack = parseInt(enemyAttack / 2) + 1; // 그 능력치의 절반을 가져온다.
    // 아래도 위와 동일한 방식으로 적용
    if (enemyHealth % 2 == 1)
        serenaHealth = (parseInt(enemyHealth / 2) + 1) + 1;
    else // (enemyHealth % 2 == 0)
        serenaHealth = parseInt(enemyHealth / 2) + 1;

    if (serenaAttack < 10)
        document.getElementById('serenaAttack').innerHTML = '<span class=\"n' + serenaAttack + '\"></span>';
    else
        document.getElementById('serenaAttack').innerHTML = '<span class=\"n' + parseInt(serenaAttack / 10) + '\"></span><span class=\"n' + serenaAttack % 10 + '\"></span>';    
    if (serenaHealth < 10)
        document.getElementById('serenaHealth').innerHTML = '<span class=\"n' + serenaHealth + '\"></span>';
    else
        document.getElementById('serenaHealth').innerHTML = '<span class=\"n' + parseInt(serenaHealth / 10) + '\"></span><span class=\"n' + serenaHealth % 10 + '\"></span>';
}