// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264
}
function distanceTravelledInFeet(block1, block2){
    return Math.abs(block1 - block2) * 264
}
function calculatesFarePrice(block1,block2){
    let distance = distanceTravelledInFeet(block1, block2)
    distance = distance * 2;
    if(distance < 800){
        return 0;
    }
    else if(distance > 5000){
        return "cannot travel that far";
    }
    else if(distance >= 4000){
        return 25;
    }
    else{
        return (distance - 800)/ 100;
    }
}