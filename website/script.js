// main javascript code
// CURRENT BUTTON: 62

window.onerror = function(error) {
    popupBox(error)
}
var colorSettings = null;
interval = null;
window.onload = function() {
	qs("main").style.display = "block"
	qs("#loading").style.display = "none"
	if (!(localStorage.getItem("app.settings.bgcolor"))) {
		localStorage.setItem("app.settings.bgcolor","#333333")
	}
	colorSettings = localStorage.getItem("app.settings.bgcolor")
	qs("#backgroundSelector").value = colorSettings
	document.body.style.backgroundColor = colorSettings

	interval = setInterval(loop,50)
	setInterval(ticktime,1000)
}

function loadProj(id) { // load project
    document.getElementById("iframe").src = "https://turbowarp.org/" + id + "/embed?hqpen"
}

let resizeTimeout = null;
window.addEventListener("resize", (e) => {
	const width = e.target.innerWidth
	const height = e.target.innerHeight
	qs("#resize").style.display = "block"
	qs("#resize").innerHTML = `${width} &times; ${height}`
	if (resizeTimeout) {
		clearTimeout(resizeTimeout)
	}
	resizeTimeout = setTimeout(() => {
		qs("#resize").style.display = "none"
		resizeTimeout = null;
	}, 2500)
})

document.getElementById("jscode").onmousedown = function(e) { // runs the js code
	if ((e.button === 1) || (e.button === 0 && e.shiftKey)) {
		e.preventDefault()
		const jscode = document.getElementById("jscode").value
		if (jscode) {
			try {
				const customConsole = qs("#console")
				customConsole.innerHTML = ""
				println(`Snippet ran at: ${getCurrentTime()} on ${getCurrentDate()}`,"blue")
				const start = new Date().getTime()
				eval(jscode)
				const end = new Date().getTime()
				notif("JavaScript snippet<br> ran successfully!")
				println(`Snippet finished in: ${end-start}ms`,"green")
			} catch (error) {
				notif("JavaScript snippet<br>had an error!")
				println(`${error.name}: ${error.message}`,"red")
			}
		} else {
			notif("You can not run an<br>empty code snippet!")
		}
	}
}

function println(message, color = "black") { // prints a line to the fake console
    const customConsole = qs("#console")
    const logEntry = document.createElement('p')
    logEntry.textContent = message
    logEntry.style.color = color
    customConsole.appendChild(logEntry)
	customConsole.scrollBy(0,1000000)
}

function clearconsole() { // clears the fake console
    const customConsole = qs("#console")
    customConsole.textContent = ""
}


qs("#btn1").onclick = () => { // opens the github repo
    open("https://github.com/DressedAlarm184/DressedAlarm184")
}

var gamepad0 = true


qs("#btn55").onclick = () => {
	changebackground(qs("#backgroundSelector").value)
}

qs("#btn56").onclick = () => {
	qs("#backgroundSelector").value = "#333333"
	changebackground(qs("#backgroundSelector").value)
}

var stopWatchTime = 0
var stopWatchRunning = false
var stopWatchInterval = null

function startStopWatch() { // starts the stopwatch
    if (!stopWatchRunning) {
        stopWatchRunning = true
        stopWatchInterval = setInterval(updateStopWatch, 1000)
    }
}

function stopStopWatch() { // stops the stopwatch
    if (stopWatchRunning) {
        stopWatchRunning = false
        clearInterval(stopWatchInterval)
    }
}

function resetStopWatch() { // resets the stopwatch 
    stopWatchRunning = false
    clearInterval(stopWatchInterval)
    stopWatchTime = 0
    qs("#stopWatchDisplay").textContent = "00:00:00"
}

function updateStopWatch() { // updates the stopwatch with the current time
    stopWatchTime += 1
    const hours = String(Math.floor((stopWatchTime / 60 / 60) % 60)).padStart(2,"0")
    const minutes = String(Math.floor((stopWatchTime / 60) % 60)).padStart(2,"0")
    const seconds = String(Math.floor((stopWatchTime) % 60)).padStart(2,"0")
    qs("#stopWatchDisplay").textContent = `${hours}:${minutes}:${seconds}`
}

function changebackground(color) { // function to change bg color
    colorSettings = color
    document.body.style.backgroundColor = colorSettings
    localStorage.setItem("app.settings.bgcolor",colorSettings)
}

// javascript calculator
{qs("#calc1").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 1
}

qs("#calc2").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 2
}

qs("#calc3").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 3
}

qs("#calc4").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 4
}

qs("#calc5").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 5
}

qs("#calc6").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 6
}

qs("#calc7").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 7
}

qs("#calc8").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 8
}

qs("#calc9").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 9
}

qs("#calc0").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += 0
}

qs("#calcplus").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "+"
}

qs("#calcminus").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "-"
}

qs("#calcmul").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "*"
}

qs("#calcdiv").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "/"
}

qs("#calcpoint").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "."
}

qs("#calcleft").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += "("
}

qs("#calcright").onclick = () => {
    if (qs("#calc").innerText.length < 30)
    qs("#calc").innerText += ")"
}

qs("#calceq").onclick = () => {
    try {
        if (eval(qs("#calc").innerText) == Infinity) {
            qs("#calc").innerText = "OVERFLOW ERROR"
        } else {
            qs("#calc").innerText = eval(qs("#calc").innerText)
        }
    }catch(err) {
        qs("#calc").innerText = "UNKNOWN EXPRESSION ERROR"
    }
}

qs("#calcclear").onclick = () => {
    qs("#calc").innerText = ""
}}

function getPlatform() { // gets the users operating system.
    if (navigator.platform) {
        return navigator.platform
    } else {
        return "UNSUPPORTED"
    }
}

document.body.oncontextmenu = function(e) {
    e.preventDefault()
}

let userAgent = navigator.userAgent
let browserName
qs("#appurl").innerText = location.href


// gets the users browser
if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "Chrome"
}else if(userAgent.match(/firefox|fxios/i)){
    browserName = "Firefox"
    qs("main").style.width = "600px"
    document.querySelectorAll("legend").forEach((element) => {
        element.setAttribute("align","center")
	})
}  else if(userAgent.match(/safari/i)){
    browserName = "Safari"
}else if(userAgent.match(/opr\//i)){
    browserName = "Opera"
} else if(userAgent.match(/edg/i)){
    browserName = "Edge"
}else{
    browserName=null
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

document.querySelector("#btn41").onclick = function() {
    let i = Math.random() * 36
    popupBox(chars.substring(i,i+1))
}

function handlePinCodeButtonClick(event) { // handle pin code button click
    if (event.ctrlKey && event.shiftKey) {
        popupBox("The pin code is: " + pincode)
    }
}

qs("#btn40").addEventListener("click", handlePinCodeButtonClick)

// gets the current online time from the localstorage (or 0 on first visit) 
var runtime = parseInt(localStorage.getItem("app.stored.runtime",10)) || 0
var timeout = 0

function popupBox(msg, w = 250, h = 80, f = 14, l = 220) { // opens popup box
    if(msg) {
        qs("#custompopupBox").showModal()
        qs("#custompopupBoxMessage").innerText = msg
        qs("#custompopupBox").style.width = `${w}px`
        qs("#custompopupBoxMessage").style.height = `${h}px`
        qs("#custompopupBoxMessage").style.fontSize = `${f}px`
        qs("#closeAlert").style.left = `${l}px`
        qs("#custompopupBoxMessage").style.fontFamily = "Source Code Pro"
		qs("#custompopupBoxMessage").scrollBy(0, -1000000)
		if (browserName == "Firefox") {
			qs("#closeAlert").style.left = `${l - 20}px`
		}
	} else {
		throw new SyntaxError("No message provided")
	}
}

function closeCustompopupBox() { // close the custom alert box
    qs("#custompopupBox").close()
}

function getLocalStorageSizeInBytes() { // gets used space of localstorage
      let totalSize = 0
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        const keySize = key.length * 2
        const valueSize = (new TextEncoder().encode(value)).length
        totalSize += keySize + valueSize
      }
      return totalSize
}

qs("#btn38").onclick = function() {
    const localStorageSize = getLocalStorageSizeInBytes()
    notif(`Used Space:<br>${(localStorageSize/1024).toFixed(2)} KB`)
}

//RUNTIME IS COUNTED BELOW
///// VVVVVVVVVVVVVVVVVVVVVVVV

// ticks up the runtime while page is not hidden
function ticktime () {
    if (!document.hidden) {
        runtime = runtime + 1
    }
    if (lockout) {
        timeout--
    } else {
        timeout = -2
    }
    listfiles()
}

var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]



function copyTextToClipboard(txt) { // copies some text to the clipboard
    if (txt == "Press button to generate command") {
        popupBox("You need to press the button first before you can copy anything!")
        return false
    }
    if (navigator.clipboard) {
        navigator.clipboard.writeText(txt)
        popupBox("The text has successfully been copied to the clipboard!")
    } else {
        notif("Clipboard API<br>not supported!")
    }
}

function getCurrentTime() { // gets current time
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    return hours + ":" + minutes + ":" + seconds
}

function getCurrentDate() { // gets current date
    var d = new Date()
    var month = String(d.getMonth() + 1).padStart(2,"0")
    var date = d.getDate()
    var year = d.getFullYear()
    if (date < 10) {
        date = "0" + date
    }
    return `${month}/${date}/${year}`
}

// Loop Code
// _LOOP __L _REPEAT _RE __R // search terms
// main looping code (runs every ~50ms) 20 times per second
// handles the device info area the date and more
// handles counting runtime above! ^^^
function loop() { // start of loop
    var maininfo = "<p>Online Time: " + Math.floor(runtime/60) + " minutes </p><p>" + `Date & Time: ${getCurrentTime()} on ${getCurrentDate()} </p> <p>Device OS: ${getPlatform()}</p>`
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            var batterylevel = battery.level * 100
            document.getElementById("info").innerHTML = "<p>Device Battery Level: " + Math.round(batterylevel) + "% Remaining</p>" + maininfo
            if (battery.charging) {
                if (battery.chargingTime == Infinity) {
                    document.getElementById("charge").innerText = "Charging: True (UNKNOWN)"
                } else {
                    if (((battery.chargingTime / 60) / 60).toFixed(2) != 0.00) {
                        document.getElementById("charge").innerText = "Charging: True (" + ((battery.chargingTime / 60) / 60).toFixed(2) + "h Remaining)"
                    } else {
                        document.getElementById("charge").innerText = "Charging: True (Battery Full)"
                    }
                }
            } else {
                if (battery.dischargingTime == Infinity) {
                    document.getElementById("charge").innerText = "Charging: False (UNKNOWN)"
                } else {
                    document.getElementById("charge").innerText = "Charging: False (" + ((battery.dischargingTime / 60) / 60).toFixed(2) + "h Remaining)"
                }
            }
        })
    } else {
        document.getElementById("charge").innerText = "Charging: UNSUPPORTED"
        document.getElementById("info").innerHTML = "<p>Device Battery Level: UNSUPPORTED </p>" + maininfo
    }


    localStorage.setItem("app.stored.runtime",runtime)

    if (gamepad0) { // button B changes color of color input //
        document.getElementById("gamepad0").value = "#00FF00"
    } else {
        document.getElementById("gamepad0").value = "#0099FF"
    }

    if (navigator.getGamepads) {
        var gamepad = navigator.getGamepads()[0] // find a gamepad
        if (gamepad!=null) {
            gpr.innerText = "Gamepad Status: Connected" // gamepad button handling //
            if (gamepad.buttons[4].pressed) {
                qs("main").scrollBy(0,3)
            } else if (gamepad.buttons[5].pressed) {
                qs("main").scrollBy(0,-3)
            } else if (gamepad.buttons[0].pressed) {
                gamepad0 = false
            } else if (gamepad.buttons[8].pressed) {
                if (timeout < 0) {
                    popupBox("Hello!")
                    timeout = 15
                }
            } else if (gamepad.buttons[6].pressed) {
                document.querySelector("main").scrollBy(0,40)
            } else if (gamepad.buttons[7].pressed) {
                document.querySelector("main").scrollBy(0,-40)
            } else if (gamepad.buttons[3].pressed) {
                addChar()
            } else if (gamepad.buttons[2].pressed) {
                var text = document.getElementById("note")
                text.value = text.value.substring(0,(text.value.length) - 1)
                text.scrollBy(0,-0.000002)
            } else {
                gamepad0 = true
            }

        }else {
            gpr.innerText = "Gamepad Status: Disconnected"
        }
    } else {
        gpr.innerText = "Gamepad Status: UNSUPPORTED"
    }

    qs("#onlineSeconds").innerText = runtime
    qs("#onlineMinutes").innerText = (runtime / 60).toFixed(2)
    qs("#onlineHours").innerText = (runtime / 60 / 60).toFixed(3)
    qs("#onlineDays").innerText = (runtime / 60 / 60 / 24).toFixed(4)
} //END OF LOOP !!!!! END OF LOOP // END OF LOOP


  const buttons = document.querySelectorAll('button') // displays a message if the user clicks on an unused button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.innerText == "UNUSED") {
          popupBox("This button currently has no use right now!")
      }
    })
  })

var gpr = document.getElementById("gpresult")  // gets the gamepad result //


function addChar(){ // adds a random character to the text editor
    var rnd = Math.floor(Math.random() * 36)
    var text = document.getElementById("note")
    text.value = text.value + chars.substring(rnd,rnd+1)
    text.scrollBy(0,100000)
}

var lockout = true
var pincode = Math.round(Math.random() * 99999999)

document.getElementById("btn20").onclick = function() { // pin code stuffs
    var password = prompt("Enter Pin Code")
    if (password) {
        if (password == pincode) {
            lockout = false
            popupBox("Access Granted!")
        } else {
            popupBox("Wrong!")
        }
    }
}

document.querySelector("#btn34").onclick = () => { // download text editor contents
    var noteVal = document.querySelector("#note").value
    saveTextAsFile(noteVal,"download.txt")
}

function saveTextAsFile(textToWrite, fileNameToSaveAs) { // saves text as a file
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'})
    var downloadLink = document.createElement("a")
    downloadLink.download = fileNameToSaveAs
    downloadLink.innerHTML = "Download File"
    if (window.webkitURL != null)
    {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
    }
    else
    {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
        downloadLink.onclick = destroyClickedElement
        downloadLink.style.display = "none"
        document.body.appendChild(downloadLink)
    }

    downloadLink.click()
	notif("File was<br>exported!")
}

function generateRandomColor() { // generates a random color
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const hexColor = rgbToHex(red, green, blue)
    qs("#randomColorInput").value = hexColor
    qs("#randomColorText").textContent = `${hexColor}`
}


// stops the input from being used
document.getElementById('randomColorInput').addEventListener('click', function(event) {
    event.preventDefault()
    return false
  })

function rgbToHex(r, g, b) { // coverts rbg to hex
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function componentToHex(c) { // coverts a component to hex
    const hex = c.toString(16).toUpperCase()
    return hex.length === 1 ? '0' + hex : hex
}

// custom key combos
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '/') {
        event.preventDefault()
		qs("#btn23").click()
    }
	if (event.altKey && event.key === 'z') {
		event.preventDefault()
		const display = window.getComputedStyle(qs('.window[name="shortcuts"]')).getPropertyValue("display")
		if (display == "none") {
			qs('.window[name="shortcuts"]').style.display = "block"
		} else {
			popupBox("The key shortcuts window is already open!")
		}
    }
	if (event.altKey && event.key === "0") {
		event.preventDefault()
		const windows = document.querySelectorAll(".window")
		windows.forEach((window) => {
			window.style.display = "none"
			window.style.left = "10px"
			window.style.top = "10px"
			window.style.width = "300px"
			window.style.height = "250px"
		})
		notif("All windows are <br> now reset")
	}
	if (event.ctrlKey && event.key === "q") {
		event.preventDefault()
		const code = prompt("Enter a JavaScript statement")
		eval(code)
	}
	if (event.ctrlKey && event.key === '.') {
		event.preventDefault()
		const display = window.getComputedStyle(qs('.window[name="empty"]')).getPropertyValue("display")
		if (display == "none") {
			qs('.window[name="empty"]').style.display = "block"
		} else {
			popupBox("The basic empty window is already open!")
		}
    }
});

const WindowAPI = {
	instance: qs(".window[name=empty]"),
	setcaption: function(param) {
		qs(".titlebar > .title", this.instance).textContent = param
	},
	clear: function() {
		qs(".content", this.instance).innerHTML = ""
	},
	addraw: function(param) {
		qs(".content", this.instance).innerHTML += escapeHtml(param) + "<br>"
	},
	inject: function(param) {
		qs(".content", this.instance).innerHTML += param
	}
}

qs("#btn23").onclick = () => {
	const display = window.getComputedStyle(qs('.window[name="notepad"]')).getPropertyValue("display")
	if (display == "none") {
		qs('.window[name="notepad"]').style.display = "block"
	} else {
		popupBox("The notepad window is already open!")
	}
}

document.querySelector("#btn22").onclick = function() { // notifies the user after a certin amount of time
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            var msg = prompt("What is the message for your notification?")
            var time = prompt("When would you like to be notified, in seconds?")
            time = Number(time)
            setTimeout(()=>{
                var notification = new Notification("REMINDER", {
                  body: msg,
                  icon: "assets/favicon.ico"
                })
                notification.onclick = function() {
                    this.close()
                }
            },time * 1000)
        }
    })
}

var count = 0
// counter buttons and functions
qs("#btn43").onclick = function() {
    count++
    qs("#countnumber").innerHTML = count
}
qs("#btn44").onclick = function() {
    count = 0
    qs("#countnumber").innerHTML = count
}
qs("#btn45").onclick = function() {
    count--
    qs("#countnumber").innerHTML = count
}

document.querySelector("#btn35").onclick = function() { // speaks editor contents //
    var noteVal = document.querySelector("#note").value
    var utterance = new SpeechSynthesisUtterance(noteVal)
    speechSynthesis.speak(utterance)
	notif("Speaking text<br>editor contents!")
}

document.getElementById("btn27").onclick = function() { // reset online time counter //
    if (confirm("reset online time? [reload required]")) {
        clearInterval(interval)
        localStorage.setItem("app.stored.runtime",1)
        location.reload()
    }
}
var filecount = 0
function listfiles () { // list files below text editor //
    var j = 0
    var files = ""
    var count = 0
    filecount = 0
    while (localStorage.length > j) {
        if (localStorage.key(j).substring(0,13) === "app.textfile.") {
            count++
            filecount++
            var filename = localStorage.key(j).substring(13)
            files = files + "#"+ count + " - " + filename + "   <button class='openbtn' title='copies the file name of the selected file to the clipboard. useful for saving, loading, and deleting files quickly.' onclick='copyTextToClipboard(`" + filename + "`)'>copy</button> <br>"
        }
        j++
    }
    qs("#filelist").innerHTML = files
    if (qs("#filelist").innerHTML == "") {
        qs("#filelist").innerHTML = "(empty)"
    }
}

document.getElementById("btn21").onclick = function() { // reload app //
    location.reload()
}



document.getElementById("btn19").onclick = function() { // open in fullscreen //
    const mainElement = document.querySelector('main')

    if (confirm("You are about to enter fullscreen mode. Certin features will not work as intended while in fullscreen mode. Would you like to continue?")) {
        if (mainElement) {
            if (mainElement.requestFullscreen) {
                mainElement.requestFullscreen()
            } else if (mainElement.mozRequestFullScreen) { /* Firefox */
                mainElement.mozRequestFullScreen()
            } else if (mainElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                mainElement.webkitRequestFullscreen()
            } else if (mainElement.msRequestFullscreen) { /* IE/Edge */
                mainElement.msRequestFullscreen()
            }
        }
    } else {
        notif("Fullscreen mode<br>was cancled!")
    }
}

var clicks = 0 || Number(localStorage.getItem("app.stored.clicks"))

qs("#btn50").onclick = function() {
    clicks += 1
    localStorage.setItem("app.stored.clicks", clicks)
}

qs("#btn37").onclick = function() {
    notif("Click Count:<br>" + clicks)
}

document.getElementById("btn15").onclick = function() { // search modal //
    document.querySelector("#gsearch").showModal()
}

function notif(msg) {
    if (!(qs("#notif").classList.contains("slide"))) {
        qs("#notif").innerHTML = msg
        qs("#notif").classList.add("slide")
        notifActive = true
        qs("#notif").addEventListener('animationend', () => {
			qs("#notif").classList.remove("slide")
		}, { once: true });
    }
}

document.querySelector("#gsearch-button").onclick = function() { // search with google
    document.querySelector("#gsearch").close()
    var search = document.querySelector("#gsearch-input").value
    if (search != "") {
        open("https://www.google.com/search?q=" + search)
    }
}

document.getElementById("scratchproj-button").onclick = function() {  // oads a scrach project by id //
    var appid = parseInt(qs("#scratchproj-input").value,10)
    document.getElementById("iframe").src = "https://turbowarp.org/" + appid + "/embed"
    document.querySelector("#scratchproj").close()
}

document.getElementById("btn14").onclick = function() {  // opens the loader modal
    document.querySelector("#scratchproj").showModal()
}

qs("#btn42").onclick = function() {
    qs("#iframe").src = "https://turbowarp.org/105500895/embed"
}

document.getElementById("btn11").onclick = function() {  // change the box //
    var boxcolor = prompt("New Box Color")
    var width = prompt("New Width")
    var height = prompt("New Height")
    var borderpx = prompt("New Border Width")
    var borderhex = prompt("New Border Color")
    var textcolor = prompt("New Text Color")
    var fontsize = prompt("New Font Size")
    var text = prompt("New Box Text")
    var box = document.getElementById("box")
    box.style.background = boxcolor
    box.style.border = borderpx + "px" + " solid " + borderhex
    box.style.width = width + "px"
    box.style.height = height + "px"
    var textinbox = document.getElementById("boxtext")
    textinbox.innerText = text
    textinbox.style.color = textcolor
    textinbox.style.fontSize = fontsize + "px"
}

document.getElementById("btn8").onclick = function() { // draw rectangle to canvas //
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d")
    var color = prompt("Color")
    var pos1 = prompt("X")
    var pos2 = prompt("Y")
    var pos3 = prompt("Width")
    var pos4 = prompt("Height")
    pos4 = Number(pos4) / 2
    pos2 = Number(pos2) / 2
    ctx.fillStyle = color
    ctx.fillRect(pos1, pos2, pos3, pos4)
}

document.getElementById("btn9").onclick = function() { // clear canvas //
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1000000000, 1000000000)
}

qs("#btn46").onclick = function() {
    importNotes()
}

document.getElementById("btn7").onclick = function() { // generates random number from 0 - 999 //
    var num = Math.floor(Math.random() * 1000)
    popupBox("Random Number:" + num)
}

document.getElementById("btn4").onclick = function() { 
    popupBox(document.querySelector("#popupBox").value)
}

qs("#btn3").onclick = () => {
	qs("main").classList.toggle('dim');
}

async function importNotes() { // imports text into text editor from a local file //
  try {
    const [fileHandle] = await window.showOpenFilePicker()
    const file = await fileHandle.getFile()
    const fileContent = await file.text()
    qs("#note").value = fileContent
	notif("File was<br>imported!")
  } catch (error) {}
}

document.getElementById("btn16").onclick = function() { // clear the text editor//
    document.getElementById("note").value = ""
	notif("Text Editor<br>was cleared!")
}

document.getElementById("btn17").onclick = function() { // deleting files //
    var file = prompt("Enter Filename (without .txt)")
    if (file) {
        if(localStorage.getItem("app.textfile." + file)) {
            localStorage.removeItem("app.textfile." + file)
			notif("File was<br>deleted!")
        } else {
            notif("File was<br>not found!")
        }
    }
}

qs("#btn36").onclick = function() {
    fetch("https://api.github.com/repos/DressedAlarm184/DressedAlarm184/issues")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const newWindow = open("", "Website Issues", "width=600,height=350");
            if (newWindow) {
				newWindow.document.write('<a href="javascript:window.close()">Close Window</a>')
				newWindow.document.write("<br>")
				newWindow.document.write(`<a href="javascript:open('https://github.com/DressedAlarm184/DressedAlarm184/issues/new/choose')">Submit New Issue</a>`)
                newWindow.document.write("<hr>")
				data.forEach(function(issue, index) {
                    const sanitizedBody = escapeHtml(issue.body);
                    newWindow.document.write(`${issue.title} (#${issue.number})<br>`);
                    newWindow.document.write(`${sanitizedBody.replace(/\n/g, "<br>")}`);
                    if (index != data.length - 1) {
						newWindow.document.write(`<hr>`);
					}
                });
                newWindow.document.title = "Website Issues";
            } else {
                throw new Error('Failed to open new window');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}


qs("#btn54").onclick = function() { // renaming files // 
	var oldFilename = prompt("Enter the current name of the file (without .txt)")
	if (oldFilename) {
        if (localStorage.getItem("app.textfile." + oldFilename)) {
            var newFilename = prompt("Enter the new name for the file (without .txt)")
            if (isValidFilename(newFilename)) {
                localStorage.setItem("app.textfile." + newFilename, localStorage.getItem("app.textfile." + oldFilename))
                localStorage.removeItem("app.textfile." + oldFilename)
				notif("File was<br>renamed!")
            } else {
                popupBox("Your filename may only contain lowercase letters and the underscore!")
            }
        } else {
            notif("File was<br>not found.")
        }
	}
}

function isValidFilename(str) { // checks for a valid filename based on a regex
    var regex = /^[a-z_]+$/
    return regex.test(str)
}

function download() { // save files //
    if (!qs("#note").value == "")
        if (filecount < 8) {
            var filename = prompt("Enter Filename (without .txt)")
            if (filename) {
				if (isValidFilename(filename)) {
					notif("File was<br>saved!")
					localStorage.setItem("app.textfile." + filename, document.getElementById("note").value)
				} else {
					popupBox("Your filename may only contain lowercase letters and the underscore!")
				}
            }
        } else {
            popupBox("You can only have a max of eight text documents!")
        }
    else {
        popupBox("You can't save an empty file!")
    }
}


document.getElementById("btn18").onclick = function() { // load file into texteditor//
    openFile(prompt("Enter Filename (without .txt)"))
}

function openFile(filename) { // function to opens a file from localStorage
    var file = filename
    if (file) {
        if(localStorage.getItem("app.textfile." + file)) {
            document.getElementById("note").value = localStorage.getItem("app.textfile." + file)
			notif("File was<br>opened!")
		} else {
            notif("File was<br>not found!")
        }
    }
}

var pos = document.getElementById("location") // location //
 // location // getting the user's location
function getLocation() {
    pos.innerHTML = "Finding your location..."
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        pos.innerHTML = "Geolocation is not supported by this browser."
    }
}

function showPosition(position) { // show position //
    pos.innerHTML = "Your current location is: <br> Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude
}

function qs(elem,parent = document) { // custom querySelector function
    return parent.querySelector(elem)
}


// COMMAND GENERATORS

var give_itemid = document.getElementById("give_itemid")
var give_count = document.getElementById("give_count")
var give_dv = document.getElementById("give_dv")
var give_customname = document.getElementById("give_customname")
var give_output = document.getElementById("give_output")

var summon_entity = document.getElementById("summon_entity")
var summon_pos = document.getElementById("summon_pos")
var summon_customname = document.getElementById("summon_customname")
var summon_output = document.getElementById("summon_output")
var summon_ai = document.getElementById("summon_ai")

function give_generate() {
	give_output.innerText = `/give @p ${give_itemid.options[give_itemid.selectedIndex].value} ${give_count.value} ${give_dv.value} `
	if (give_customname.value == "") {
	} else {
		give_output.innerText = give_output.innerText + ` {display:{Name:"${give_customname.value}"}}`
	}
}

function summon_generate() {
	summon_output.innerText = `/summon ${summon_entity.options[summon_entity.selectedIndex].value} ${summon_pos.value}`
	if (summon_customname.value != "" && !summon_ai.checked) {
		summon_output.innerText = summon_output.innerText + ` {CustomName:"${summon_customname.value}"}`
	}

	if (summon_customname.value != "" && summon_ai.checked) {
		summon_output.innerText = summon_output.innerText + ` {CustomName:"${summon_customname.value}",NoAI:1b}`
	}

	if (summon_customname.value == "" && summon_ai.checked) {
		summon_output.innerText = summon_output.innerText + ` {NoAI:1b}`
	}
}

var textareas = document.querySelectorAll("textarea") // tab key in textareas
textareas.forEach(function (textarea) {
  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault()
      var cursorPos = textarea.selectionStart
      var textBeforeCursor = textarea.value.substring(0, cursorPos)
      var textAfterCursor = textarea.value.substring(cursorPos)
      textarea.value = textBeforeCursor + "\t" + textAfterCursor
      textarea.selectionStart = textarea.selectionEnd = cursorPos + 1
    }
  })
})

// terminal code
const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');
let commandHistory = [];
let historyIndex = -1;

terminal.addEventListener('click', function() {
	commandInput.focus();
});

commandInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		const command = commandInput.value.trim();
		if (command !== "") {
			commandHistory.push(command);
			historyIndex = commandHistory.length;
			displayOutput(command, true);
			executeCommand(command);
			commandInput.value = '';
		}
	} else if (event.key === 'ArrowUp') {
		if (historyIndex > 0) {
			historyIndex--;
			commandInput.value = commandHistory[historyIndex];
		}
		event.preventDefault();
	} else if (event.key === 'ArrowDown') {
		if (historyIndex < commandHistory.length - 1) {
			historyIndex++;
			commandInput.value = commandHistory[historyIndex];
		} else if (historyIndex === commandHistory.length - 1) {
			historyIndex++;
			commandInput.value = '';
		}
		event.preventDefault();
	}
});

commandInput.addEventListener('keydown', function(event) {
	if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
	  event.preventDefault();
	}
	if (event.ctrlKey && (event.key === 'c' || event.key === 'v' || event.key === 'a')) {
	  event.preventDefault();
	}
  });

function saveTerminalData() {
	localStorage.setItem("app.cmd.alias",JSON.stringify(CommandAliases))
	localStorage.setItem("app.cmd.filesys",JSON.stringify(TerminalFiles))
}

let CommandAliases = JSON.parse(localStorage.getItem("app.cmd.alias")) || {};
let TerminalFiles = JSON.parse(localStorage.getItem("app.cmd.filesys")) || {};
let lastRead = "undefined"
let lastSelect = undefined;
let lastMath = "undefined"
let lastOpen = "undefined"
setInterval(saveTerminalData,5000) // terminal data is saved before unload (window.onbeforeunload) somewhere else in the javascript file but interval is here as an 'autosave'
async function executeCommand(commandLine) {
	const parts = commandLine.trim().split(' ');
	const command = parts.shift();
	const raw = parts.join(' ');
	const args = raw
	.replace(/\$READ/g, lastRead)
	.replace(/\$RANDOM/g, Math.random())
	.replace(/\$TIME/g, Math.floor(new Date().getTime() / 1000))
	.replace(/\$DATE/g, new Date().toISOString())
	.replace(/\$FILE/g, lastOpen)
	.replace(/\$RESULT/g, lastMath)
	try {
		switch (command) {
			case 'help':
				if (args == "") {
					displayOutput('Available Commands: help, clear, echo, date, math, cat, open, eval, time, random, alert, script, read, vars, get, reload, window, select, def, list, exec, ls, edit, view, rm, del, notif');
				} else {
					displayOutput(args + ": " + {
						"clear": "Clears the terminal screen.",
						"echo": "Displays a message on the terminal",
						"date": "Displays the current date and time",
						"math": "Performs a mathematical calculation",
						"cat": "Displays the contents of a file",
						"open": "Opens a provided website in a new tab",
						"eval": "Evaluates a JavaScript expression.",
						"time": "Displays the current Unix timestamp",
						"random": "Generates a random number between 0 and 1",
						"alert": "Displays an alert with a provided message",
						"script": "Allows execution of multiple commands from a script",
						"read": "Prompts the user for input and stores it in $READ",
						"help": "Lists commands and their functions",
						"vars": "Displays available variables",
						"get": "Retreives the last entered user input from 'read'",
						"reload": "Reloads the application",
						"window": "Creates a new window with provided text",
						"select": "Selects something for later use in commands",
						"def": "define a custom alias selected with 'select'",
						"list": "lists all available aliases",
						"exec": "executes the command in the provided alias",
						"ls": "lists all available files",
						"view": "Gets the contents of a file",
						"edit": "Edits a file or creates a new one",
						"rm": "delete the specified file",
						"del": "deletes the provided alias",
						"notif": "displays a new notifcation using the provided text"
					}[args])}
				break;
			case 'clear':
				clearTerminal();
				break;
			case 'echo':
				if (args != "") {
					displayOutput(args);
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break;
			case 'date':
				executeCommand("echo $DATE")
				break;
			case 'math':
				if (args != "") {
					if (isValidMathEquation(args)) {
						const result = eval(args)
						displayOutput(result);
						lastMath = result
					} else {
						displayOutput("That is not a valid math expression", false, true);
					}
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break;
			case 'cat':
				lastOpen = TerminalFiles[args]
				executeCommand("echo " + lastOpen)
				break
			case 'open':
				if (args != "") {
					open("http://" + args);
					displayOutput("Opening the provided website...")
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break;
			case 'eval':
				if (args !== "") {
					const originalConsoleLog = console.log;
					console.log = function() {
						const argsArray = Array.from(arguments);
						const message = argsArray.join(' ');
						displayOutput(message)	
					};
					try {
						displayOutput(raw, false, false, true, true);
						const result = eval(args);
						displayOutput((result !== undefined ? result : 'undefined'), false, false, true);
					} catch (error) {
						displayOutput("Error: " + error.message, false, true);
					} finally {
						console.log = originalConsoleLog;
					}
				} else {
					displayOutput("Please provide the required argument", false, true);
				}
				break;				
			case 'time':
				executeCommand("echo $TIME")
				break
			case 'random':
				executeCommand("echo $RANDOM")
				break
			case 'alert':
				if (args != "") {
					displayOutput("Message alerted...")
					alert(args)
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break;
			case 'script':
				qs("#multicommands").showModal()
				setTimeout(()=>{qs("#multicommands-input").value = ""},10)
				break;
			case 'read':
				if (args != "") {
					lastRead = prompt(args)
					if (lastRead == "" || lastRead == null) {
						lastRead = "undefined"
					}
					displayOutput("User input saved to $READ...")
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case 'vars':
				displayOutput("Available Variables: $READ, $RANDOM, $TIME, $DATE, $FILE, $RESULT")
				break;	
			case 'get':
				executeCommand("echo $READ")
				break
			case 'reload':
				displayOutput("Reloading...")
				location.reload()
				break
			case 'window':
				if (args != "") {
					const opened = open("","","width=400,height=250")
					opened.document.body.innerHTML = `
						${escapeHtml(args).replace(/\\n/g,"<br>")}
						<br>
						<a href="javascript:window.close()">Close Window</a>
					`
					opened.document.body.style.fontSize = "20px"
					opened.document.title = "Command Prompt Window"
					displayOutput("New window created...")
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case 'select':
				if (args != "") {
					lastSelect = args
					displayOutput("Text selected for later use...")
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case 'def':
				if (args != "") {
					if (lastSelect) {
						CommandAliases[lastSelect] = raw
						displayOutput("Alias defined...")
					} else {
						displayOutput("Alias not setup for defining yet", false, true)
					}
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case 'list':
				for (var key in CommandAliases) {
					displayOutput(key + ": " + CommandAliases[key])
				}
				break
			case 'exec': 
				if (args != "") {
					executeCommand(CommandAliases[args])
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case 'ls':
				displayOutput("total " + Object.keys(TerminalFiles).length)
				for (var key in TerminalFiles) {
					displayOutput(key)
				}
				break
			case 'edit':
				if (lastSelect) {
					TerminalFiles[lastSelect] = args
					displayOutput("File content updated...")
				} else {
					displayOutput("File not selected",false,true)
				}
				break
			case 'view':
				lastOpen = TerminalFiles[args]
				displayOutput("File content saved to $FILE...")
				break
			case 'rm':
				delete TerminalFiles[args]
				displayOutput("File deleted...")
				break
			case 'del':
				delete CommandAliases[args]
				displayOutput("Alias deleted...")
				break
			case 'notif':
				if (args != "") {
					Notification.requestPermission().then(function (permission) {
						if (permission === "granted") {
							var notification = new Notification("Terminal Notification", {
								body: args,
								icon: "assets/favicon.ico"
							})
							notification.onclick = function() {
								this.close()
							}
							displayOutput("Notification created...")
						} else {
							displayOutput("Invalid permissions",false,true)
						}
					})
				} else {
					displayOutput("Please provide the required argument", false, true)
				}
				break
			case '':
				break
			default:
				displayOutput('Unknown Command', false, true);
		}
	} catch {
		displayOutput("There was an error running that command", false, true);
	}
}



{
	qs("#multicommands-button").onclick = () => {
		const textarea = document.getElementById('multicommands-input');
		const lines = textarea.value.split('\n');
		lines.forEach(line => {
			executeCommand(line.trim());
		});
		qs('#multicommands').close()
	}
}

function isValidMathEquation(str) {
	const validMathEquationRegex = /^[\d\s.+\-*/]+$/;
	return validMathEquationRegex.test(str);
}

function displayOutput(output, isCommand = false, isError = false, isCode = false, isInput = false) {
	output = String(output)
	const lines = output.split('\n');
	lines.forEach((line, index) => {
		const outputLine = document.createElement('div');
		if (isError) {
			outputLine.style.color = "#ff5555"
		}
		if (isCode && isInput) {
			const promptSpan = document.createElement('span');
			promptSpan.style.color = 'pink';
			promptSpan.textContent = '>';
			outputLine.appendChild(promptSpan);
		} else if (isCode && !isInput) {
			const promptSpan = document.createElement('span');
			promptSpan.style.color = 'pink';
			promptSpan.textContent = '<';
			outputLine.appendChild(promptSpan);
		}
		if (isCode) {
			const textNode = document.createTextNode(" " + line);
			const yellowSpan = document.createElement('span');
			yellowSpan.style.color = 'skyblue';
			yellowSpan.appendChild(textNode);
			outputLine.appendChild(yellowSpan);
		}
		if (isCommand && index === 0) {
			const promptSpan = document.createElement('span');
			promptSpan.style.color = 'lime';
			promptSpan.textContent = '$';
			outputLine.appendChild(promptSpan);

			const textNode = document.createTextNode(" " + line);
			const yellowSpan = document.createElement('span');
			yellowSpan.style.color = 'yellow';
			yellowSpan.appendChild(textNode);
			outputLine.appendChild(yellowSpan);
		} else if (!isCode) {
			const textNode = document.createTextNode(line);
			outputLine.appendChild(textNode);
		}
		
		outputDiv.appendChild(outputLine);
	});
	terminal.scrollTop = terminal.scrollHeight;
}

function clearTerminal() {
	outputDiv.innerHTML = ""
}


// code block // Custom Caret for the 'Command Prompt'
{
	const input = document.getElementById('commandInput');
    const caret = document.querySelector('.caret');

    input.addEventListener('input', function() {
      updateCaretPosition();
    });

    input.addEventListener('keydown', function() {
      setTimeout(updateCaretPosition);
    });

    function updateCaretPosition() {
      const inputRect = input.getBoundingClientRect();
      const inputStyle = window.getComputedStyle(input);
            const textWidth = getTextWidth(input.value, inputStyle.font);
      caret.style.left = textWidth + 12 + 'px';
    }

    function getTextWidth(text, font) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = font;
      const width = context.measureText(text).width;
      return width;
    }
    updateCaretPosition()
}

let windowManagerApp = null;
function newWindowManagerWindow() {
	windowManagerApp = open("","","width=475,height=350")
	let h1 = windowManagerApp.document.createElement("h1")
	let p = windowManagerApp.document.createElement("p")

	h1.textContent = qs("#windowHeading").value
	h1.style.color = "blue"
	h1.style.textAlign = "center"
	h1.style.textDecoration = "underline"
	h1.style.textDecorationColor = "red"
	h1.style.fontSize = "32px"

	p.innerHTML = escapeHtml(qs("#windowText").value).replace(/\\n/g,"<br>")
	p.style.fontSize = "24px"
	p.style.fontWeight = "bold"
	
	windowManagerApp.document.body.style.fontFamily = "monospace"
	windowManagerApp.document.body.style.background = "#FAFA66"

	windowManagerApp.document.title = qs("#windowTitle").value
	windowManagerApp.document.body.appendChild(h1)
	windowManagerApp.document.body.appendChild(p)

	windowManagerApp.onunload = () => {
		windowManagerApp = null;
	}

	if (!(qs("#windowButton").value == "")) {
		let btn = windowManagerApp.document.createElement("button")
		btn.textContent = qs("#windowButton").value
		btn.style.fontSize = "20px"
		btn.style.fontWeight = "bold"
		btn.style.background = "green"
		btn.style.color = "white"
		btn.style.border = "none"
		btn.style.paddingInline = "10px"
		btn.style.paddingBlock = "7px"
		btn.style.borderRadius = "10px"
		if (!(qs("#windowMessage").value == "")) {
			btn.onclick = function() {
				windowManagerApp.window.alert(qs("#windowMessage").value)
			}
		}
		windowManagerApp.document.body.appendChild(btn)
	}
}

window.onbeforeunload = function () {
    if (windowManagerApp) {
	    windowManagerApp.close()
    }
	saveTerminalData()
}

function saveWindowManagerSettings() {
	saveTextAsFile(returnWindowMangagerValueString(),"window-settings.txt")
}

function returnWindowMangagerValueString() {
	let result1 = `Title: ${qs("#windowTitle").value}\n`
	let result2 = `Heading: ${qs("#windowHeading").value}\n`
	let result3 = `Text: ${qs("#windowText").value}\n`
	let result4 = `Button: ${qs("#windowButton").value}\n`
	let result5 = `Message: ${qs("#windowMessage").value}`
	return result1+result2+result3+result4+result5
}

{
	const browserWindow = window
	const windows = document.querySelectorAll('.window');
	windows.forEach(window => {
		const titlebar = window.querySelector('.titlebar');
		let isDragging = false;
		let offsetX, offsetY;
		window.onmousedown = () => {
			let highestZIndex = 0;
			document.querySelectorAll("*").forEach(element => {
				const zIndex = parseInt(browserWindow.getComputedStyle(element).zIndex);
				if (zIndex > highestZIndex) {
					highestZIndex = zIndex;
				}
			});
			window.style.zIndex = highestZIndex + 1;
		}
		titlebar.addEventListener('mousedown', (event) => {
			isDragging = true;
			offsetX = event.clientX - window.getBoundingClientRect().left;
			offsetY = event.clientY - window.getBoundingClientRect().top;
		});
		document.addEventListener('mousemove', (event) => {
			if (isDragging) {
				const newX = event.clientX - offsetX;
				const newY = event.clientY - offsetY;
				window.style.left = newX + 'px';
				window.style.top = newY + 'px';
			}
		});
		document.addEventListener('mouseup', () => {
			isDragging = false;
		});
		const close = titlebar.querySelector(".close")
		close.setAttribute("title", "Close")
		close.onmousedown = function() {
			window.style.display = "none"
		}
		const resize = titlebar.querySelector(".resize")
		resize.setAttribute("title", "Resize")
		resize.onmousedown = function() {
			window.style.width = "300px"
			window.style.height = "250px"
		}
	});

}

qs("main").addEventListener('contextmenu', function(event) {
	if (!isDialogOpen()) {
		setTimeout(()=>{
			event.preventDefault()
			const mouseX = event.clientX
			const mouseY = event.clientY
			qs("#contextMenu").style.left = mouseX + 'px'
			qs("#contextMenu").style.top = mouseY + 'px'
			qs("#contextMenu").style.display = 'block'
		},1)
	}
});

document.addEventListener("contextmenu", function() {
	qs("#contextMenu").style.display = 'none';
})

document.addEventListener('click', function(event) {
	qs("#contextMenu").style.display = 'none';
})

document.querySelectorAll("#contextMenu div").forEach((element) => {
	element.addEventListener("mousedown",(event) => {
		event.preventDefault()
		const focusedElement = document.activeElement;
        const selectedText = window.getSelection().toString();
		switch (element.innerText) {
			case 'Reload App':
				location.reload()
				break
			case 'Copy Selection':
				let selectedText = window.getSelection().toString();
				navigator.clipboard.writeText(selectedText)
				break
			case 'Paste Text':
				navigator.clipboard.readText()
                    .then((text) => {
                        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                            const cursorPosition = focusedElement.selectionStart;
                            const newText =
                                focusedElement.value.substring(0, cursorPosition) +
                                text +
                                focusedElement.value.substring(cursorPosition);
                            focusedElement.value = newText;
                            focusedElement.selectionStart = cursorPosition + text.length;
                            focusedElement.selectionEnd = cursorPosition + text.length;
                            focusedElement.dispatchEvent(new Event('input'));
                        }
                    })
				break
			case 'Clicker Game':
				const opened = open("","","width=250,height=110")
				opened.document.write(`
					<button>Increment</button>
					<p>Clicks: 0</p>
					<script>
						var count = 0
						function qs(element) {
							return document.querySelector(element)
						}
						qs("button").onclick = () => {
							count++
							qs("p").textContent = "Clicks: " + count
						}
					</script>
					<style>
						* {
							font-size: 24px;
							margin: 5px;
						}
					</style>
				`)
				opened.document.title = "Clicker Game"
				break
			case 'Print Document':
				setTimeout(()=>{print()},50)
				break
			case "Java Script":
				setTimeout(() => {
					const code = prompt("Enter a JavaScript statement")
					eval(code)
				},200)
		}
		qs("#contextMenu").style.display = 'none';
	})
})

function isDialogOpen() {
    const dialogs = document.querySelectorAll('dialog');
    for (let i = 0; i < dialogs.length; i++) {
        if (dialogs[i].open) {
            return true;
        }
    }
    return false;
}
