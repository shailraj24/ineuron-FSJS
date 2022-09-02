console.log("Hellow");

var stage = function (posetion){
    switch (posetion) {
        case "owner":
            console.log(`shailraj is owner`);
            break;
        case "partner":
            console.log(`shailraj is partner`);
            break;
        case "invester":
            console.log(`shailraj is investere`);
            break;
    
        default:
            console.log(`shailraj is visitor`);
            break;
    }

}

stage("owner")