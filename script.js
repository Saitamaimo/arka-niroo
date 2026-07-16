*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Vazirmatn',sans-serif;
    background:#071A2D;
    color:#fff;
}

header{
    <link rel="stylesheet" href="style.css">
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0A2744;
    position:sticky;
    top:0;
}

.logo{
    font-size:30px;
    font-weight:900;
    color:#ff9800;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 12px;
    font-weight:bold;
}

nav a:hover{
    color:#ff9800;
}

.hero{
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
    background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop') center/cover;
}

.hero h1{
    font-size:60px;
    margin-bottom:20px;
}

.hero p{
    font-size:24px;
    max-width:850px;
    line-height:2;
}

.btn{
    display:inline-block;
    margin-top:40px;
    background:#ff9800;
    color:#fff;
    text-decoration:none;
    padding:18px 45px;
    border-radius:10px;
    font-size:22px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    transform:scale(1.05);
    background:#ffb300;
}

.about{
    padding:80px 10%;
    background:#0b2037;
}

.about h2{
    font-size:42px;
    margin-bottom:25px;
    color:#ff9800;
}

.about p{
    font-size:22px;
    line-height:2;
}

footer{
    background:#06111d;
    padding:30px;
    text-align:center;
    font-size:18px;
}
