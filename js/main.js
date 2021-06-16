// **** HTML Elements ****

const $input =              document.querySelector(".input");
const $prefix =             document.querySelector(".prefix");
const $prompt =             document.querySelector("#prompt");
const $promptRecord =       document.querySelector("#prompt-record__template").content.querySelector(".prompt-record");

// Provisional variable that represents the working directory

let workingDir = "/";

// createNewPromptRecord -> Records the previous input and its corresponding result, by cloning the content of an HTML template and updating the text content of its children.

function createNewPromptRecord() {
    const $newPromptRecord = $promptRecord.cloneNode(true);
    $newPromptRecord.querySelector(".prompt-record__input").textContent =   `${$prefix.textContent} ${$input.value}`;
    $newPromptRecord.querySelector(".prompt-record__result").textContent =  "This is some result that must be configured";
    $prompt.insertAdjacentElement("beforebegin", $newPromptRecord);
}

// clearPrompt -> Clears the <textarea class="input"> from which the user types instructions.

function clearPrompt() {
    $prefix.textContent = `${workingDir} \$`;
    $input.style["text-indent"] = ($prefix.textContent.length + 1) + 'ch';
    $input.value = null;
}

// autoSize -> Adjusts the height property of <textarea class="input"> dinamically, by assigning the vertical-scroll bar height value when is displayed.

function autoSize() {
    $input.style["height"] = $input.scrollHeight + 'px';
}


// **** Events ****

// DOMContentLoaded -> When the browser has loaded the webpage.

document.addEventListener("DOMContentLoaded", (e) => {
    clearPrompt();
});

// keydown -> When the user is pressing a key.

document.addEventListener("keydown", (e) => {
    if(e.target === $input){
        if(e.key === "Enter"){
            createNewPromptRecord();
            clearPrompt();
            e.preventDefault();
        }
        
        autoSize();
    }
});
