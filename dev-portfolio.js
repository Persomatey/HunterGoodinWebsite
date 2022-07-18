/* Custom Modal */

function OpenModal(isURL, path)
{
	var modal = document.getElementById("modal");
	modal.style.display = "block";
	var span = document.getElementById("span");
	
	if(isURL)
	{
		document.getElementById("modalID").innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/` + path + `" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
	}
	else
	{
		document.getElementById("modalID").innerHTML = `<img style="width:100%; height:100%; object-fit:contain; margin:auto;" src="` + path + `">`; 
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() 
	{
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) 
	{
		if (event.target == modal) 
		{
			modal.style.display = "none";
		}
	}
}

/* Include Projects */
function LoadIncludedProjects()
{
	console.log("Test 4");

	fetch('NewProject.html')
	.then(response=> response.getElementById("project").text())
	.then(text=> document.getElementById('NewProject').innerHTML = text);
}

/* Utility Functions */

function UnselectAllButtons(proj, buttonCount)
{
	for (var i = 1; i <= buttonCount; i++)
	{
		document.getElementById(`But${proj}${i}`).className = "buttonUnselected";
	}
}

function CopyEmailAddress() 
{
	navigator.clipboard.writeText("huntercgoodin@gmail.com");

	var tooltip = document.getElementById("myTooltip").innerHTML = "Copied email address";
}

function HoverOverEmailAddress() 
{
	var tooltip = document.getElementById("myTooltip").innerHTML = "Copy to clipboard";
}

/* Google Captcha Stuff */

var boolCap = false; 

function CheckRecaptcha() 
{
	var response = grecaptcha.getResponse();
	if(response.length == 0) 
	{
		boolCap = false; 
	}
	else
	{
		boolCap = true; 
	}
}

function AfterSend()
{
	var error = ""; 
	var name = " 'Name' ";
	var email = " 'Email' "; 
	var message = " 'Message' "; 
	var cap = " 'ReCaptcha' "; 
	var count = 0; 

	if(document.forms["gform"]["entry.246933771"].value == "")
	{
		error = error + name; 
		count++; 
	}

	if(document.forms["gform"]["entry.1580348872"].value == "")
	{
		error = error + email; 
		count++;
	}

	if(document.forms["gform"]["entry.1579448101"].value == "")
	{
		error = error + message; 
		count++;
	}

	if(boolCap == false)
	{
		error = error + cap; 
		count ++; 
	}

	if(count == 0)
	{
		document.getElementById("gform").reset();
		document.getElementById("feedback").innerHTML = "<font color='#45a049'><b>Message Sent!</b></font>";
	}
	else if(count == 1)
	{
		document.getElementById("feedback").innerHTML = "<font color='#ff4242'><b> " + error + " is a required field </b></font>";
	}
	else if(count > 1)
	{
		document.getElementById("feedback").innerHTML = "<font color='#ff4242'><b> " + error + " are required fields </b></font>";
	}
}

/* New Project Functions */

function ChangeImageNewL()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew1").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunLogo.png">`; 
}
function ChangeImageNewI1()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew2").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay1.png');">`; 
}
function ChangeImageNewI2()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew3").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay2.png');">`; 
}
function ChangeImageNewVid()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew4").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 

}

/* Crypto Alert Bot Functions */

function ChangeImageCryL()
{
	UnselectAllButtons(`Cry`, 2);
	document.getElementById("ButCry1").className = "buttonCrySelected";
	document.getElementById("CryMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="https://raw.githubusercontent.com/Persomatey/CryptoAlertBot/master/images/CryptoBotLogoBot.png">`; 
}

function ChangeImageCryVid()
{
	UnselectAllButtons(`Cry`, 2);
	document.getElementById("ButCry2").className = "buttonCrySelected";
	document.getElementById("CryMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/MusicThumb.png" onclick="OpenModal(true, '4t32sicjFYI');">`; 
}

/* Funem Functions */

function ChangeImageFunemL()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem1").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunLogo.png">`; 
}
function ChangeImageFunemI1()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem2").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay1.png');">`; 
}
function ChangeImageFunemI2()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem3").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FunGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay2.png');">`; 

}
function ChangeImageFunemVid()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem4").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 
}

/* Music-Chan Functions */

function ChangeImageMusicL()
{
	UnselectAllButtons(`Music`, 2);
	document.getElementById("ButMusic1").className = "buttonMusicSelected";
	document.getElementById("MusicMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="https://raw.githubusercontent.com/Persomatey/MusicBot/master/LoFiGirl.png?token=AFRVWK7IVN2U7LXLBY5TFYDA6AHK4">`; 
}
function ChangeImageMusicVid()
{
	UnselectAllButtons(`Music`, 2);
	document.getElementById("ButMusic2").className = "buttonMusicSelected";
	document.getElementById("MusicMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/MusicThumb.png" onclick="OpenModal(true, '4t32sicjFYI');">`; 
}

/* Key Finder Functions */

function ChangeImageKeyL()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey1").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/KeyLogo.png">`; 
}
function ChangeImageKeyI1()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey2").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/KeyGameplay1.png" onclick="OpenModal(false, 'images/devphotos/KeyGameplay1.png');">`; 
}
function ChangeImageKeyI2()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey3").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/KeyGameplay2.png" onclick="OpenModal(false, 'images/devphotos/KeyGameplay2.png');">`; 
}
function ChangeImageKeyVid()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey4").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/KeyThumb.png" onclick="OpenModal(true, 'w260kcveYuc');">`; 
}

/* Helation Functions */

function ChangeImageHelL()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel1").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<img style="width:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/HelLogo.png">`; 
}
function ChangeImageHelI1()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel2").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/HelGameplay1.png" onclick="OpenModal(false, 'images/devphotos/HelGameplay1.png');">`; 
}
function ChangeImageHelI2()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel3").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/HelGameplay2.png" onclick="OpenModal(false, 'images/devphotos/HelGameplay2.png');">`; 
}
function ChangeImageHelVid()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel4").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/HelThumb.png" onclick="OpenModal(true, 'SosAngzSoqQ');">`; 
}

/* Rewound Running Remix Functions */

function ChangeImageR3L()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR31").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/R3Logo.png">`; 
}
function ChangeImageR3I1()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR32").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/R3Gameplay1.png" onclick="OpenModal(false, 'images/devphotos/R3Gameplay1.png');">`; 
}
function ChangeImageR3I2()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR33").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/R3Gameplay2.png" onclick="OpenModal(false, 'images/devphotos/R3Gameplay2.png');">`; 
}
function ChangeImageR3Vid()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR34").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/R3Thumb.png" onclick="OpenModal(true, '2l0JYAdxMpk');">`; 
}

/* Legend of Fantasy Functions */

function ChangeImageLoFL()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF1").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/LoFLogo.png">`; 
}
function ChangeImageLoFI1()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF2").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/LoFGameplay1.png" onclick="OpenModal(false, 'images/devphotos/LoFGameplay1.png');">`; 
}
function ChangeImageLoFI2()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF3").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/LoFGameplay2.png" onclick="OpenModal(false, 'images/devphotos/LoFGameplay2.png');">`; 

}
function ChangeImageLoFVid()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF4").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/LoFThumb.png" onclick="OpenModal(true, 'DwehfYrfE_k');">`; 
}

/* Space Shooter 9000 Functions */

function ChangeImageSSL()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS1").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/SSLogo.png">`; 
}
function ChangeImageSSI1()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS2").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/SSGameplay1.png" onclick="OpenModal(false, 'images/devphotos/SSGameplay1.png');">`; 
}
function ChangeImageSSI2()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS3").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/SSGameplay2.png" onclick="OpenModal(false, 'images/devphotos/SSGameplay2.png');">`; 
}
function ChangeImageSSVid()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS4").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/SSThumb.png" onclick="OpenModal(true, 'Z_3XtojWlSA');">`; 
}

/* Factory Functions */

function ChangeImageFaL()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa1").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/FaLogo.png">`; 
}
function ChangeImageFaI1()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa2").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/FaGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FaGameplay1.png');">`; 
}
function ChangeImageFaI2()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa3").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/FaGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FaGameplay2.png');">`; 

}
function ChangeImageFaVid()
{

	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa4").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/FaThumb.png" onclick="OpenModal(true, 'ESyvW9RUt9A');">`; 
}

/* Black Ops III Functions */

function ChangeImageBO3L()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO31").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="images/devphotos/BO3Logo.png">`; 
}
function ChangeImageBO3I1()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO32").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/BO3Gameplay1.png" onclick="OpenModal(false, 'images/devphotos/BO3Gameplay1.png');">`; 
}
function ChangeImageBO3I2()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO33").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="images/devphotos/BO3Gameplay2.png" onclick="OpenModal(false, 'images/devphotos/BO3Gameplay2.png');">`; 
}
function ChangeImageBO3Vid()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO34").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="images/devphotos/BO3Thumb.png" onclick="OpenModal(true, 'GM2m9LG35N0');">`; 
}
