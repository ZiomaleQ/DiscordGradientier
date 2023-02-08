//wait for the page to load
window.addEventListener('load', () => {
  setInterval(() => {
    if (window.location.href.startsWith('https://discord.com/channels/@me/')) {
      try {      // Get the gradient colors from the user panel
        const computedStyle = getComputedStyle(document.querySelector('.userPanelOuter-xc-WYi'))

        const primaryColor = computedStyle.getPropertyValue('--profile-gradient-primary-color')
        const secondaryColor = computedStyle.getPropertyValue('--profile-gradient-secondary-color')

        // Set the background of the chat to the gradient
        document.querySelector('.chatContent-3KubbW').style.background = `-webkit-gradient(linear,left top,left bottom,from(${primaryColor}),to(${secondaryColor})`
      } catch (err) { console.log(err) }
    }
  }, 500)
})