$(document).ready(function() {
    $(".letter").hide();

    $("#submit-btn").click(function() {
        $(".back").addClass("rotate"); // Add rotate class to start animation
    });
});

function messageAnimation() {
    // Disable the button and change its color
    $("#submit-btn").prop("disabled", true);
    $("#submit-btn").css("background-color", "gray");

    // Show and animate the letter
    $(".letter").fadeIn(1000, function() {
        $(".letter").addClass("parabola");
        setTimeout(function() {
            $(".letter").fadeOut(1000, function() {
                // Show the .back element and start the rotation
                $(".back").fadeIn(300, function() {
                    setTimeout(function() {
                        $(".back").fadeOut(300, function() {
                            // Re-enable the button and reset its color
                            $("#submit-btn").prop("disabled", false);
                            $("#submit-btn").css("background-color", "#e8343e");
                        });
                    }, 1000);
                });
            });
        }, 100);
    });
};

function sendMsgApi(nickname, message) {
    let formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("message", message);

    fetch('https://edu.spartacodingclub.kr/api/monthlycoding/moonwish/', {
        method: "POST",
        body: formData
    });
}

function sendMessage() {
    const nickname = $("#nickname").val();
    const message = $("#message").val();
    console.log("nickname", nickname);
    console.log("message", message);
    nicknameCond = nickname === "" || nickname === undefined;
    messageCond = message === "" || message === undefined;
    if (nicknameCond || messageCond) {
        alert("빈 칸을 채워주세요!");
        return;
    }
    messageAnimation();
    sendMsgApi(nickname, message);
}

$(document).ready(function() {
    $("#hub-link").click(function() {
        window.open("https://edu.spartacodingclub.kr/monthlycoding/moonwish/");
    });
});
