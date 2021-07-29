
// orientation settings
if ( window.innerWidth < window.innerHeight ) {
	background_image = document.getElementById('background');
	background_image.style.height = "100%";
	background_image.style.width = "auto";
}

// themes
theme = 'dark';
binary = false;

if ( localStorage.getItem('theme') !== null ) {
	theme = localStorage.getItem('theme');
	if ( theme == 'dark' ) {
		theme = 'light';
	} else {
		theme = 'dark';
	}
} else {
	switch_mode();
}
if ( localStorage.getItem('binbg') !== null ) {
	let binbg = localStorage.getItem('binbg');
	if ( binbg == 'false' ) {
		binary = true;
	} else {
		binary = false;
	}
} else {
	switch_bin();
}

function switch_bin() {
	if ( binary ) {
		binary = false;
	} else {
		binary = true;
	}
	
	background_image = document.getElementById('background');
	if ( binary ) {
		background_image.style.opacity = '100%';
		localStorage.setItem('binbg', 'true');
	} else {
		background_image.style.opacity = '0%';
		localStorage.setItem('binbg', 'false');
	}
}

function switch_mode() {
	variable = document.querySelector(':root').style;
	background_image = document.getElementById('background');
	
	darkmode = [
		['--bckgrnd-color', '#333333'],
		['--heading-color', '#6ad1e6'],
		['--general-color', '#ffffff'],
		['--sel-tx-col', '#ffffff'],
		['--cm-bc', '#00000033'],
		['--cm-nc', '#ffffff00'],
		['--cm-hc', '#ffffff33'],
		['--cm-tc', '#6ad1e6ff'],
		['--ic-hc', '#00000033'],
	];
	lightmode = [
		['--bckgrnd-color', '#dddddd'],
		['--heading-color', '#ff3a3a'],
		['--general-color', '#333333'],
		['--sel-tx-col', '#333333'],
		['--cm-bc', '#00000033'],
		['--cm-nc', '#00000000'],
		['--cm-hc', '#ffffff77'],
		['--cm-tc', '#ff3a3aff'],
		['--ic-hc', '#ffffff77'],
	];
	
	if ( theme == 'light' ) {
		for ( let set of darkmode ) {
			variable.setProperty(set[0], set[1]);
		}
		background_image.src = 'Background.png';
		theme = 'dark';
	} else if ( theme == 'dark' ) {
		for ( let set of lightmode ) {
			variable.setProperty(set[0], set[1]);
		}
		background_image.src = 'Background Lite.png';
		theme = 'light';
	}
	localStorage.setItem('theme', theme);
}

switch_mode();
switch_bin();

// context menu
function show_context_menu(e) {
	let contextmenu = document.getElementById("contextmenu");
	contextmenu.innerHTML = `<i class="fas fa-sync-alt" onclick="cm_action('w -r');"></i><i class="fas fa-angle-up" onclick="cm_action('s -u');"></i><i class="fas fa-angle-down" onclick="cm_action('s -d');"></i><i class="fas fa-angle-double-up" onclick="cm_action('s -t');"></i><i class="fas fa-angle-double-down" onclick="cm_action('s -b');"></i><i class="fas fa-print" onclick="cm_action('w -p');"></i><i class="far fa-lightbulb" onclick="cm_action('w -m');"></i><i class="far fa-image" onclick="cm_action('w -w');"></i>`;
	contextmenu.style.left = e.clientX;
	contextmenu.style.top = e.clientY;
	contextmenu.style.opacity = '100%';
	contextmenu.style.transition = '0.15s';
}

function hide_context_menu() {
	let contextmenu = document.getElementById("contextmenu");
	contextmenu.innerHTML = ``;
	contextmenu.style.opacity = '0%';
	contextmenu.style.transition = '0.15s';
}

window.addEventListener("contextmenu", function(e) {
	e.preventDefault()
	show_context_menu(e);
});

window.addEventListener("click", function() {
	hide_context_menu();
});

function cm_action(b) {
	let c = b.split(" ");
	if ( c[0] == "w" ) {
		if ( c[1] == "-r" ) {
			location.reload();
		} else if ( c[1] == "-p" ) {
			print();
		} else if ( c[1] == "-m" ) {
			switch_mode();
		} else if ( c[1] == "-w" ) {
			switch_bin();
		} else {
			console.log("unknown action");
		}
	} else if ( c[0] == "s" ) {
		if ( c[1] == "-u" ) {
			scrollTo(0, scrollY - 100);
		} else if ( c[1] == "-d" ) {
			scrollTo(0, scrollY + 100);
		} else if ( c[1] == "-t" ) {
			scrollTo(0, 0);
		} else if ( c[1] == "-b" ) {
			scrollTo(0, 100000);
		} else {
			console.log("unknown action");
		}
	} else {
		console.log("unknown action");
	}
}

function sm(l) {
	if ( l == "youtube" ) {
		window.open('https://youtube.com/channel/UCYogrplaFuI-iZSmSnQpgsQ');
	} else if ( l == "twitch" ) {
		window.open('https://twitch.tv/AttachmentStudios');
	} else if ( l == "discord" ) {
		window.open('https://discord.gg/tZJUVgNpn2');
	} else if ( l == "patreon" ) {
		window.open('https://patreon.com/AttachmentStudios');
	} else if ( l == "github" ) {
		window.open('https://github.com/Attachment-Studios');
	} else if ( l == "itch" ) {
		window.open('https://attachment-studios.itch.io');
	}
}

if ( ((location.href).split('#')).length > 1 ) {
	let redirect = (((location.href).split('#')[1]).toLowerCase());
	if ( redirect == 'youtube' || redirect == 'yt' ) {
		location.replace('https://youtube.com/channel/UCYogrplaFuI-iZSmSnQpgsQ');
	} else if ( redirect == 'twitch' ) {
		location.replace('https://twitch.tv/AttachmentStudios');
	} else if ( redirect == 'discord' ) {
		location.replace('https://discord.gg/tZJUVgNpn2');
	} else if ( redirect == 'patreon' ) {
		location.replace('https://patreon.com/AttachmentStudios');
	} else if ( redirect == 'github' || redirect == 'gh' ) {
		location.replace('https://github.com/Attachment-Studios');
	} else if ( redirect == 'itch' || redirect == 'itch.io' || redirect == 'itchio' || redirect == 'itch-io' || redirect == 'i-io' || redirect == 'iio' || redirect == 'i.io' ) {
		location.replace('https://attachment-studios.itch.io/');
	} else if ( redirect == 'intro' ) {
		location.replace('https://youtu.be/e0wRzVwTkC4');
	} else {
		location.replace('https://attachment-studios.github.io/');
	}
}

