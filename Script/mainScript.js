function getString()
{
    var query = window.location.href;
    var para = query.split('=');
    const userName = para[1];
    alert(userName);
}

