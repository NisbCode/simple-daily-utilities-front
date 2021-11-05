/*
:::     ::: ::::::::::: :::::::: ::::::::::: ::::::::: ::::::::::: :::        ::::::::::: ::::::::::: :::   :::
:+:     :+:     :+:    :+:    :+:    :+:     :+:    :+:    :+:     :+:            :+:         :+:     :+:   :+:
+:+     +:+     +:+    +:+           +:+     +:+    +:+    +:+     +:+            +:+         +:+      +:+ +:+
+#+     +:+     +#+    +#++:++#++    +#+     +#++:++#+     +#+     +#+            +#+         +#+       +#++:
 +#+   +#+      +#+           +#+    +#+     +#+    +#+    +#+     +#+            +#+         +#+        +#+
  #+#+#+#       #+#    #+#    #+#    #+#     #+#    #+#    #+#     #+#            #+#         #+#        #+#
    ###     ########### ######## ########### ######### ########### ########## ###########     ###        ###
*/

$(document).ready(function() {
    $(".toggle-password").on("click", function(elem) {
        var toggleButton = $(elem.target);      // A ideia é que o mesmo código possa ser utilizado em qualquer parte do sistema, o target serve para saber qual botão foi clicado
        if(toggleButton.hasClass("bi-eye-slash")) toggleButton.removeClass("bi-eye-slash").addClass("bi-eye").prev("input").removeAttr("type");
        else toggleButton.removeClass("bi-eye").addClass("bi-eye-slash").prev("input").attr("type", "password");
    });
});