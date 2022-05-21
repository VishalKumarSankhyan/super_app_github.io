
example_rounded_1 = document.querySelector('#example_rounded_1');

example_rounded_2 = document.querySelector('#example_rounded_2');

/*example_rounded_1.checked = true;*/


function super_app_speak(s_data){
  // new SpeechSynthesisUtterance object
  let speak = new SpeechSynthesisUtterance();
  speak.lang = 'en-US';
  speak.text = s_data;
  speak.volume = 0.8;

  // speak
  window.speechSynthesis.speak(speak);
}


super_app_info_section = document.querySelector('.super_app_info_section');

super_app_app_body = document.querySelector('.super_app_app_body')
super_app_menu_dots = document.querySelector('.super_app_menu_dots');
super_app_dot_menu_section = document.querySelector('.super_app_dot_menu_section');


super_app_menu_dots.addEventListener('click', function () {
  super_app_dot_menu_section.classList.add('open');
  document.removeEventListener('click', super_app_close_menu);
  document.addEventListener('click', super_app_close_menu);
  function super_app_close_menu(Event) {
    if (Event.target != super_app_menu_dots && Event.target != super_app_menu_dots.children[0] && Event.target != super_app_menu_dots.children[1] && Event.target != super_app_menu_dots.children[2]) {
      super_app_dot_menu_section.classList.remove('open');
    }
  }
})

function super_app_info_open_function() {
  super_app_app_body.style.overflow = 'hidden'
  super_app_info_section.style.display = 'block';
  setTimeout(function () {
    super_app_info_section.style.opacity = 1;
  }, 2)
}

function super_app_info_close_function() {
  super_app_app_body.style.overflow = ''
  super_app_info_section.style.opacity = 0;
  setTimeout(function () {
    super_app_info_section.style.display = 'none';
  }, 200)
  
}

super_app_search_mice_btn = document.querySelector('.super_app_search_mice_btn');

var super_app_mic_active= false;

super_app_search_mice_btn.addEventListener('click' , function (){
  if(super_app_mic_active == false){
    super_app_search_mice_btn.classList.add('open');
    
    /*super_app_speak("say something");*/
    
    super_app_mic_active = true;
    
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    
    recognition.onspeechend = function() {
      super_app_search_mice_btn.classList.remove('open');
      super_app_mic_active = false;
      recognition.stop();
    }
    
    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      
      if (transcript == "turn on light one"){
        example_rounded_1.checked = true;
        super_app_speak("turning on light one");
      }
      
    };
    
    recognition.start();
    
  }
  else if (super_app_mic_active == true){
    super_app_search_mice_btn.classList.remove('open');
    super_app_mic_active = false;
    
    recognition.stop();
  }
})
