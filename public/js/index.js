function rand()
{
    var ran = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('random_text').value = ran;
    document.getElementById('body_col').style.backgroundColor = ran;
}