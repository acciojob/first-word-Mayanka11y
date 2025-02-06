function firstWord(s) {
    if (!s.trim()) {
        return '';
    }
    
    let trimmedStr = s.trim();
    let spaceIndex = trimmedStr.indexOf(' ');
    
    return spaceIndex === -1 ? trimmedStr : trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below

//const s = prompt("Enter String:");
//alert(firstWord(s));
