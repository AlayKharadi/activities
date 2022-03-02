if (!navigator.cookieEnabled) {
    console.log("cookies not enabled");
} else {
    document.cookie = "Name=John Doe; expires=" + (new Date(Date.now() + 1560000).toUTCString());

    let arr = document.cookie.split(";");

    arr.forEach(value => {
        console.log(value);
    })

    let newCookie = "Name=; expires=" + (new Date(Date.now() - 2).toUTCString());
    setTimeout(() => {
        document.cookie = newCookie;
    }, 12000);
}