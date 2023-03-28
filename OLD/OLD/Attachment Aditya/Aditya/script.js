
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
    window.location.replace('Portfolio');
}

