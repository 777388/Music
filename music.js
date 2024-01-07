chrome.commands.onCommand.addListener((command) => {
    if(command === "Music") {
        console.log(`Command "${command}" triggered`);
        chrome.tabs.create({ url: 'https://www.youtube.com' });
        chrome.tabs.create({ url: 'https://www.ultimate-guitar.com' });
        chrome.tabs.create({ url: 'https://www.spotify.com' });
        chrome.tabs.create({ url: 'https://www.vimeo.com' });
    }
});
