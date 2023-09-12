import Search from "./modules/search"
import Chat from "./modules/chat"
import RegistrationForm from "./modules/registrationForm"

if (document.getElementById("#registration-form")) {
	new RegistrationForm()
}

if (document.querySelector("#chat-wrapper")) {
	new Chat()
}
if (document.querySelector(".header-search-icon")) {
	new Search()
}
