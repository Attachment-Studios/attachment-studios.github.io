
sim_a = "&#9398; &#9424; &#5039; &#8704; &#506; &#945; &#5609; @ &#570; &#8371; &ordf; &aring; &acirc; &#478;".split(" ");
sim_d = "&#9401; &#9427; &#5611; &#394; &#270; &#271; &#272; &#273; &eth; &#8706; &#8363; &#545; &#5798; &#5799;".split(" ");
sim_i = "&#9406; &#9432; &#8464; &#912; &#302; &#300; &iacute; &#943; &#906; &igrave; &#5029; &icirc; &#298; &#304;".split(" ");
sim_t = "&#9417; &#9443; &dagger; &#964; &#354; &#24178; &#12490; &#5055; &#5062; &#12486; &#8366; &#357; &#7786;".split(" ");
sim_y = "&#9422; &#9448; &#611; &#5033; &#5053; &#7822; &#7823; &#978; &#612; &#65509; &#1506; &#3062; &#4280;".split(" ");

function generateName() {
    let name = document.getElementById('name');

    let a = sim_a[Math.floor(Math.random() * sim_a.length)];
    let d = sim_d[Math.floor(Math.random() * sim_d.length)];
    let i = sim_i[Math.floor(Math.random() * sim_i.length)];
    let t = sim_t[Math.floor(Math.random() * sim_t.length)];
    let y = sim_y[Math.floor(Math.random() * sim_y.length)];
    let e = sim_a[Math.floor(Math.random() * sim_a.length)];

    name.innerHTML = (String(a) + String(d) + String(i) + String(t) + String(y) + String(e));
}

function action() {
    window.location.replace('Say Hi');
}

function pressedWannaSayHiButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>You're Not A Celebrity To Say That!!!</h3>
        <button onclick="pressedNotProButton()">I don't think he is such a professional...</button>
    </center>
    `;
}

function pressedNotProButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>He Is! He Has Some Certificates!!!</h3>
        <button onclick="pressedWritingStyleButton()">What is wrong with you writing style?</button>
    </center>
    `;
}

function pressedWritingStyleButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Don't Care That!!! You Wanna Look At His Certificates?</h3>
        <button onclick="pressedDoubtButton()">Is he really such a certified professional?</button>
    </center>
    `;
}

function pressedDoubtButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Actually He Is Well Certified For Web Development But Has Some Other Certificates And Much More Experience, Games And Apps As Well...</h3>
        <button onclick="pressedProofButton()">Do you have any proof?</button>
    </center>
    `;
}

function pressedProofButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Here You Go! Check Down!</h3>
        <button onclick="pressedAppButton()">Hmmm... I am interested to see his projects!</button>
    </center>
    `;
    document.getElementById('stuff').innerHTML = `
    <center>
        <h3>Certificates</h3>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Coding Fundamentals.pdf');">Coding
            Fundamentals I</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Coding Fundamentals II.pdf');">Coding
            Fundamentals II</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Using A Code Editor.pdf');">Using
            A Code Editor</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Intro To Webpages.pdf');">Intro
            To Webpages</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Intro To Interviewing.pdf');">Intro
            To Interviewing</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Array Methods.pdf');">Array
            Methods</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Animations.pdf');">Animations
            I</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Animations II.pdf');">Animations
            II</button>
        <button
            onclick="window.open('Certificates/Grasshopper(JS)/Grasshopper - Certificate - Automation.pdf');">Automation</button>
        <button
            onclick="window.open('Certificates/LinkedIn/LinkedIn - Certificate - Learning Java.pdf');">Learning
            Java</button>
    </center>
    `;
    document.getElementById('stuff').parentElement.innerHTML = document.getElementById('stuff').parentElement.innerHTML + `
    <br>
    <center>
        <hr>
    </center>
    <br>
    `;
}

function redirect(project) {
    var token = "/";
    window.open("https://attachment-studios.github.io" + token + project);
}

function goto(link) {
    window.open(link);
}

function pressedAppButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Again! Here You Go! Check Down!</h3>
        <button onclick="pressedHiButton()">Well, that's nice! I want to say him 'hi'! Please give me some way to contact!</button>
    </center>
    `;
    document.getElementById('stuff').innerHTML = `
    <center>
        <h3>Projects</h3>
        <button onclick="redirect('LineRun');">LineRun</button>
        <button onclick="redirect('Myth');">Myth</button>
        <button onclick="redirect('Long-Haul-Walk');">Long Haul Walk</button>
        <button onclick="redirect('Cells');">Cells</button>
        <button onclick="redirect('the-box');">The Box</button>
        <button onclick="goto('https://github.com/Attachment-45/MonsterCore');">MosterCore</button>
        <button onclick="redirect('blind-night-zombie-saga');">Blind Night Zombie Saga</button>
        <button onclick="redirect('Sheep-Over-Fence');">Sheep Over Fence</button>
        <button onclick="redirect('Nomenclate');">Nomenclate</button>
        <button onclick="goto('https://github.com/Attachment-Studios/Light-Push');">Light Push</button>
        <button onclick="redirect('InfoToWebPage');">InfoToWebPage</button>
        <button onclick="goto('https://attachment-studios.itch.io');">Itch Projects</button>
        <button onclick="goto('https://attachmentstudioswp.wordpress.com');">WordPress Stuff</button>
        <button onclick="goto('https://attachmentstudioswp.wordpress.com');">YouTube Videos</button>
        <button onclick="redirect('contents/arts');">Artwork(Physical)</button>
        <button onclick="redirect('contents');">More</button>
    </center>
    ` + document.getElementById('stuff').innerHTML;
}

function pressedHiButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>No! Even If You Beg, No!</h3>
        <button onclick="pressedBegButton()">I beg you!</button>
    </center>
        `;
}

function pressedBegButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Alright Then! Pass The Human Test! Less Intelligent Fellows Also Call It CAPTCHA. Pass It And I Permit You To Contact!</h3>
        <button onclick="pressedVerifyButton()">Ok, I have no problem.</button>
    </center>
        `;
}

function pressedVerifyButton() {
    let ans = prompt('Are You A Random Person?');
    if (ans.toLowerCase() == "yes") {
        let newAns = prompt('What Is Generally Your First Step For Learning A Programming Language?');
        if (newAns.toLowerCase().includes("hello") == true) {
            verified();
        }
    }
}

function verified() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Good! You Are Human!</h3>
        <button onclick="pressedYouAreNiceButton()">You are nice!</button>
    </center>
    `;
    document.getElementById('stuff').innerHTML = `
    <center>
        <h3>Contact</h3>
        <button onclick="goto('https://discord.gg/A5Z9dZqz8R');">Discord</button>
        <button onclick="goto('mailto:aditya.adigo@gmail.com');">Mail</button>
    </center>
    ` + document.getElementById('stuff').innerHTML;
}

function pressedYouAreNiceButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>Thanks! It Might Be Because Aditya Made Me!</h3>
        <button onclick="pressedThatsWhatIAmSayinButton()">That's what I'm saying!</button>
    </center>
        `;
}

function pressedThatsWhatIAmSayinButton() {
    document.getElementById('talk').innerHTML = `
    <center>
        <h3>:D</h3>
    </center>
        `;
}

