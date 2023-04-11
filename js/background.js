chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus({
        "id": "sampleContextMenu",
        "title": "Sample Context Menu",
        "contexts": ["selecting"]
    });
});

chrome.bookmarks.onCreated.addListener(() => {
    
});