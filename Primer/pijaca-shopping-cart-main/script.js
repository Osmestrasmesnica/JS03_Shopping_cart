//pravis ukupan zbir i stavljas da je na pocetku 0 i da se dodaje na ukupan total i ovo moras van funkcije da stavis !!!
let zbir = 0;


function addToCart(element) {

    // trazis najblizeg parenta i iz njega kasnije izedvajas sve
    let glavniElement = element.closest('.single-item');
    
    // izdvajanje kolicine iz glavnog parenta
    let kolicina = element.previousElementSibling;
    // console.log(kolicina.value);

    // kolicinu mogu i ovako jos da napisem ali ne znam da li ima razlike ili ne
    let value =glavniElement.querySelector('input').value;
    // console.log(value);

    // ovde izdvajas cenu iz glavnog parenta
    let cena = glavniElement.querySelector('.price').innerText;
    // console.log(cena);
    
    // ovde izdvajas naziv namirnice iz glavnog parenta
    let namirnica = glavniElement.querySelector('h3').innerText;
    // console.log(namirnica);

    // napravljena je class za deo gde ce se ubacivati pojedinacno sve prethodno
    // pravis element i u njega preko innerHtml ubacujes elemente odozgo
    // da se ne bi brisao prethodni unos dodajes + ispred = kod innerHtml
    let proizovdiKorpe = document.querySelector('.cart-items');
    // console.log(proizovdiKorpe);
    
    


  

    // postavljas uslov da ne moze da se unese 0
    // takodje pretvaras vrednost kolicina=string u kolicina=number tako sto napises parseInt(quantity)
    // napomena od kolicine typoeof(value) = string a typoeof(kolicina) = object 
    if (parseInt(value) > 0) {

        //ukupna kolicina mora da se koriste samo brojevi tako da maknes $ i ostale stvari koje ne predstavljaju broj i string pretvaras u broj
        cena = cena.substring(1); //sklanjas $
        cena = parseInt(cena); //pretvaras da bude number a ne string
        value = parseInt(value);
        let total = cena * value;
        
        zbir += total;
        console.log(zbir);
        // console.log(typeof(cena));
        // console.log(typeof(value));
        // console.log(total);
        //    proizovdiKorpe.innerHTML += `Proizvod: ${namirnica} - Cena: ${cena} - Kolicina: ${value} - Ukupno: ${total}$. <br>`; //da mozes sve da ubacis koristis ove kose `` navodnike a elemente oznacavas sa ${nazivelementa}
            
        //zelis da izgleda lepo to pa pises umesto kao ovo gore u html i dodajes za dugme onclick="removeFromCart(this) class="remove-item" i kasnije ces da napises gore negde tu funkciju "removeFromCart", takodje ubacicemo zbir u <span> kako bi mogli lakse da ga selektujemo kasnije kada koristimo .remove  
        proizovdiKorpe.innerHTML += `<div class="cart-single-item">
                                        <h3>${namirnica}</h3>
                                        <p>$${cena} x ${value} = $<span>${total}</span></p>
                                        <button onclick="Ukloni(this)" class="remove-item">Ukloni</button> 
                                    </div>`;
    
        document.querySelector('.total').innerHTML = `Vas racun je: ${zbir}$<br> ako nemas.....<br> onda cemo na 3..4..<br> BEŽIIIIII!!<br><button>Ukloni</button>`;

        element.innerText = 'Dodato' //menjas ime dugmeta u "Dodato"
        
        element.setAttribute('disabled','true'); //nakon klika dugme ce dobiti atribut "disabled" i moras i da dodas da je "true" ili da ostavis prazne ""
    } else {
        alert('Odaberi kolicinu da te ne bih opet vratio u prodavnicu!!!')
    }
    
}

function Ukloni(element) {
    // trazis najblizeg parenta i iz njega kasnije sakrivas, ovo si vec pisao gore ali ovo je nova funkcije i ona ne prepoznaje da si ti gore vec nest pisao
    let soppingovano = element.closest('.cart-single-item');
    //  console.log(glavniElement);

    //ovde izdvajas span, pretvaras ga parseInt(cenaKojuOduzimam) u broj i to sto u njemu pise oduzimas od ukupnog zbira kada kliknes na dugme
    let cenaKojuOduzimam = soppingovano.querySelector('p span').innerText;
    // console.log(cenaKojuOduzimam);
    cenaKojuOduzimam = parseInt(cenaKojuOduzimam)
    zbir -= cenaKojuOduzimam

    //ne zaboravi da ubacis opet da ti prikaze to sto si oduzeo
    document.querySelector('.total').innerHTML = `Vas racun je: ${zbir}$<br> ako nemas.....<br> onda cemo na 3..4..<br> BEŽIIIIII!!<br><button>Ukloni</button>`;


    // za uklanjanje koristimo .remove()
    soppingovano.remove()
}

/* 
dugme da uklonis ZBIR ukupan
omoguci da se restartuje dugme za unos pojedinacnih proizvoda
retartuj brojeve da budu 0
*/