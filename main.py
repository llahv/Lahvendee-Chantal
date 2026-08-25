from datetime import datetime
from pyscript import document


# ==================== TIME-BASED GREETING ====================

hour = datetime.now().hour


if hour < 6:

    message = "The Stars Are Still Asleep..."


elif hour < 12:

    message = "Good Morning, Little Comet ♡"


elif hour < 18:

    message = "Good Afternoon, Starbound Seeker ✦"


elif hour < 22:

    message = "Good Evening, Celestial Traveler ☾"


else:

    message = "The Night Sky Is Yours Tonight ⋆"


greeting = document.querySelector("#greeting")


if greeting:

    greeting.innerText = message