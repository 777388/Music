chrome.commands.onCommand.addListener((command) => {
    if(command === "Music") {
        console.log(`Command "${command}" triggered`);
        chrome.tabs.create({ url: 'www.youtube.com' });
        chrome.tabs.create({ url: 'www.ultimate-guitar.com' });
        chrome.tabs.create({ url: 'www.spotify.com' });
        chrome.tabs.create({ url: 'www.vimeo.com' });
    }
});