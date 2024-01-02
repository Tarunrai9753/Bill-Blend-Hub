var currentStep = 1;
var updateProgressBar;

  function displayStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 3) {
      $(".step-" + currentStep).hide();
      $(".step-" + stepNumber).show();
      currentStep = stepNumber;
      updateProgressBar();
    }
  }

  $(document).ready(function() {
    $('#multi-step-form').find('.step').slice(1).hide();
  
    $(".next-step").click(function() {
      if (currentStep < 3) {
        $(".step-" + currentStep).addClass("animate_animated animate_fadeOutLeft");
        currentStep++;
        setTimeout(function() {
          $(".step").removeClass("animate_animated animate_fadeOutLeft").hide();
          $(".step-" + currentStep).show().addClass("animate_animated animate_fadeInRight");
          updateProgressBar();
        }, 500);
      }
    });

    $(".prev-step").click(function() {
      if (currentStep > 1) {
        $(".step-" + currentStep).addClass("animate_animated animate_fadeOutRight");
        currentStep--;
        setTimeout(function() {
          $(".step").removeClass("animate_animated animate_fadeOutRight").hide();
          $(".step-" + currentStep).show().addClass("animate_animated animate_fadeInLeft");
          updateProgressBar();
        }, 500);
      }
    });

    updateProgressBar = function() {
      var progressPercentage = ((currentStep - 1) / 2) * 100;
      $(".progress-bar").css("width", progressPercentage + "%");
}
});